
semver = require 'semver'
iutils = require 'iced-utils'
{Child,spawn} = iutils.spawn
{a_json_parse} = iutils.util
parse_args = require 'minimist'
read = require 'read'
{make_esc} = require 'iced-error'
fs = require 'fs'
path = require 'path'

#==================================================================

class Runner

  constructor : () ->
    @_key = null
    @_old_version = null
    @_new_version = null
    @_name = null
    @_filename = "./package.json"
    @_dir_sign_file = "./SIGNED.md"
    @_config = null

  #-------

  check_clean : (cb) ->
    args = [
      "status"
      "--porcelain"
    ]
    buf = []
    err = null
    child = new Child args, { quiet : true, interp : 'git' }
    child.filter (f) -> buf.push f
    await child.run().wait defer rc
    if rc isnt 0
      err = new Error "git status failed with error #{rc}"
    else
      b = Buffer.concat(buf).toString('utf8')
      if b.match /\S/
        err = new Error "refusing to push; directory is unclean"
        console.log b
    cb err

  #-------

  parse_args : (cb) ->
    @argv = parse_args process.argv[2...], {
      alias : 
        k : [ "key" ]
        f : [ "force" ]
        i : [ "inc" ]
        S : [ "no-dir-sign" ]
        I : [ "no-increment" ]
      boolean : [ "f", "S", "I" ]
      string : [ "i" ]
    }
    cb null

  #-------

  read_pkg : (cb) ->
    esc = make_esc cb, "Runner::read_pkg"
    await fs.readFile @_filename, esc defer raw
    await a_json_parse raw, esc defer @_pkg
    @_name = @_pkg.name
    @_old_version = semver.parse @_pkg.version
    cb null

  #-------

  inc_version : (cb) ->
    if @argv.I
      @_new_version = @_pkg.version
    else
      @_new_version = semver.parse(@_pkg.version).inc(@argv.inc or "patch")
    @_new_version_s = @_new_version.toString()
    @_new_version_vs = "v" + @_new_version_s
    cb null

  #-------

  write_new_pkg : (cb) ->
    esc = make_esc cb, "write_new_pkg"
    unless @argv.I
      @_pkg.version = @_new_version_s
      json = JSON.stringify @_pkg, null, "  "
      await fs.writeFile @_filename, json, esc defer()
      await @git_stage @_filename, esc defer()
    cb null

  #-------

  select_key : (cb) ->
    err = null
    if not @argv.key or @argv.key.length is 0 then # noop
    else if not @_config?.keys?
      err = new Error "can't use the -k flag without a config file"
    else if not (@_key = @_config?.keys?[@argv.key])?
      err = new Error "don't recognize this key: #{@argv.key}"
    cb err

  #-------

  git_stage : (fn, cb) ->
    args = [ "add", fn ]
    await @_git args, defer err
    cb err

  #-------

  commit : (cb) ->
    args = [ 
      "commit"
      "-m"
      @_new_version_vs
    ]
    await @_git args, defer err
    cb err

  #-------

  tag : (cb) ->
    args = [
      "tag"
      "-a"
      "-m"
      @_new_version_vs
    ]
    if @_key then args.push("-u", @_key)
    args.push @_new_version_vs
    await @_git args, defer err
    cb err

  #-------

  verify : (cb) ->
    console.log """
About to publish:
  * #{@_name}
  * Old version: #{@_old_version.toString()}
  * New version: #{@_new_version.toString()}
  * Signing key: #{@_key}
"""
    args = 
      prompt : "Are you sure? [Y/n] "
    await read args, defer err, res
    err = if err? then err
    else if res.toLowerCase() in [ "y", "yes" ] then null
    else new Error "operation canceled!"
    cb err

  #-------

  publish : (cb) -> 
    args = [ "publish" ]
    await @_npm args, defer err
    cb err

  #-------

  _cmd : (name, args, cb) ->
    opts = { interp : name }
    s = args.join(" ")
    await spawn args, defer(rc), opts
    err = if rc isnt 0 then new Error "#{name} #{s}: bad exit: #{rc}" else null
    cb err

  #-------

  _git : (args, cb) -> @_cmd "git", args, cb
  _keybase : (args, cb) -> @_cmd "keybase", args, cb

  #-------

  _npm : (args, cb) ->
    opts = { interp : "npm" }
    s = args.join(" ")
    await spawn args, defer(rc), opts
    err = if rc isnt 0 then new Error "npm #{s}: bad exit: #{rc}" else null
    cb err

  #-------

  dir_sign : (cb) ->
    esc = make_esc cb, "dir_sign"
    await @_keybase [ "dir", "sign"], esc defer()
    await @git_stage @_dir_sign_file, esc defer()
    cb null

  #-------

  push : (cb) ->
    args = [
      "push"
      "--tags"
      "origin"
      "master"
    ]
    await @_git args, defer err
    cb err

  #-------

  read_config : (cb) ->
    home = process.env.HOME or process.env.HOMEPATH or process.env.USERPROFILE
    fn = path.join home, ".mwr.json"
    await fs.readFile fn, defer err, raw
    if not err?
      await a_json_parse raw, defer err, @_config
    else if err.code is 'ENOENT'
      err = null
    cb err

  #-------

  main : (cb) ->
    esc = make_esc cb, "Runner::main"
    await @read_config esc defer()
    await @parse_args esc defer()
    await @read_pkg esc defer()
    await @inc_version esc defer()
    await @select_key esc defer()
    await @check_clean esc defer()
    await @verify esc defer() unless @argv.f
    await @write_new_pkg esc defer()
    await @dir_sign esc defer() unless @argv.S
    await @commit esc defer()
    await @tag esc defer()
    await @push esc defer()
    await @publish esc defer()
    cb null

#==================================================================

exports.run = () ->
  r = new Runner()
  await r.main defer err
  if err?
    console.log "Error: #{err.message}"
    rc = -2
  else
    rc = 0
  process.exit rc

#==================================================================

