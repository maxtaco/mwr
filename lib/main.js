// Generated by IcedCoffeeScript 108.0.11
(function() {
  var Child, Runner, a_json_parse, bufferify, fs, iced, iutils, make_esc, parse_args, path, read, semver, spawn, __iced_k, __iced_k_noop, _ref;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  semver = require('semver');

  iutils = require('iced-utils');

  _ref = iutils.spawn, Child = _ref.Child, spawn = _ref.spawn;

  a_json_parse = iutils.util.a_json_parse;

  parse_args = require('minimist');

  read = require('read');

  make_esc = require('iced-error').make_esc;

  fs = require('fs');

  path = require('path');

  bufferify = function(s) {
    if (typeof s === 'string') {
      return new Buffer(s, 'utf8');
    } else {
      return s;
    }
  };

  Runner = (function() {
    function Runner() {
      this._key = null;
      this._old_version = null;
      this._new_version = null;
      this._name = null;
      this._filename = "./package.json";
      this._config = null;
    }

    Runner.prototype.check_clean = function(cb) {
      var args, b, buf, child, err, rc, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["status", "--porcelain"];
      buf = [];
      err = null;
      child = new Child(args, {
        quiet: true,
        interp: 'git'
      });
      child.filter(function(f) {
        return buf.push(bufferify(f));
      });
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.check_clean"
          });
          child.run().wait(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return rc = arguments[0];
              };
            })(),
            lineno: 38
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          if (rc !== 0) {
            err = new Error("git status failed with error " + rc);
          } else {
            b = Buffer.concat(buf).toString('utf8');
            if (b.match(/\S/)) {
              err = new Error("refusing to push; directory is unclean");
              console.log(b);
            }
          }
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.parse_args = function(cb) {
      this.argv = parse_args(process.argv.slice(2), {
        alias: {
          k: ["key"],
          f: ["force"],
          i: ["inc"],
          S: ["no-dir-sign"],
          I: ["no-increment"],
          o: ["otp"]
        },
        boolean: ["f", "S", "I"],
        string: ["i", "o"]
      });
      return cb(null);
    };

    Runner.prototype.read_pkg = function(cb) {
      var esc, raw, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "Runner::read_pkg");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.read_pkg"
          });
          fs.readFile(_this._filename, esc(__iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return raw = arguments[0];
              };
            })(),
            lineno: 68
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/mwr/src/main.iced",
              funcname: "Runner.read_pkg"
            });
            a_json_parse(raw, esc(__iced_deferrals.defer({
              assign_fn: (function(__slot_1) {
                return function() {
                  return __slot_1._pkg = arguments[0];
                };
              })(_this),
              lineno: 69
            })));
            __iced_deferrals._fulfill();
          })(function() {
            _this._name = _this._pkg.name;
            _this._old_version = semver.parse(_this._pkg.version);
            return cb(null);
          });
        };
      })(this));
    };

    Runner.prototype.inc_version = function(cb) {
      if (this.argv.I) {
        this._new_version = this._pkg.version;
      } else {
        this._new_version = semver.parse(this._pkg.version).inc(this.argv.inc || "patch");
      }
      this._new_version_s = this._new_version.toString();
      this._new_version_vs = "v" + this._new_version_s;
      return cb(null);
    };

    Runner.prototype.write_new_pkg = function(cb) {
      var esc, json, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "write_new_pkg");
      (function(_this) {
        return (function(__iced_k) {
          if (!_this.argv.I) {
            _this._pkg.version = _this._new_version_s;
            json = JSON.stringify(_this._pkg, null, "  ");
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/mwr/src/main.iced",
                funcname: "Runner.write_new_pkg"
              });
              fs.writeFile(_this._filename, json, esc(__iced_deferrals.defer({
                lineno: 92
              })));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/mwr/src/main.iced",
                  funcname: "Runner.write_new_pkg"
                });
                _this.git_stage(_this._filename, esc(__iced_deferrals.defer({
                  lineno: 93
                })));
                __iced_deferrals._fulfill();
              })(__iced_k);
            });
          } else {
            return __iced_k();
          }
        });
      })(this)((function(_this) {
        return function() {
          return cb(null);
        };
      })(this));
    };

    Runner.prototype.select_key = function(cb) {
      var err, _ref1, _ref2, _ref3;
      err = null;
      if (!this.argv.key || this.argv.key.length === 0) {

      } else if (((_ref1 = this._config) != null ? _ref1.keys : void 0) == null) {
        err = new Error("can't use the -k flag without a config file");
      } else if ((this._key = (_ref2 = this._config) != null ? (_ref3 = _ref2.keys) != null ? _ref3[this.argv.key] : void 0 : void 0) == null) {
        err = new Error("don't recognize this key: " + this.argv.key);
      }
      return cb(err);
    };

    Runner.prototype.git_stage = function(fn, cb) {
      var args, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["add", fn];
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.git_stage"
          });
          _this._git(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 111
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.commit = function(cb) {
      var args, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["commit", "-m", this._new_version_vs];
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.commit"
          });
          _this._git(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 122
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.tag = function(cb) {
      var args, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["tag", "-a", "-m", this._new_version_vs];
      if (this._key) {
        args.push("-u", this._key);
      }
      args.push(this._new_version_vs);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.tag"
          });
          _this._git(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 136
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.verify = function(cb) {
      var args, err, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      console.log("About to publish:\n  * " + this._name + "\n  * Old version: " + (this._old_version.toString()) + "\n  * New version: " + (this._new_version.toString()) + "\n  * Signing key: " + this._key);
      args = {
        prompt: "Are you sure? [y/N] "
      };
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.verify"
          });
          read(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return res = arguments[1];
              };
            })(),
            lineno: 151
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          var _ref1;
          err = err != null ? err : (_ref1 = res.toLowerCase()) === "y" || _ref1 === "yes" ? null : new Error("operation canceled!");
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.publish = function(cb) {
      var args, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["publish"];
      if (this.argv.o != null) {
        args.push("--otp", this.argv.o);
      }
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.publish"
          });
          _this._npm(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 162
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    Runner.prototype._cmd = function(name, args, cb) {
      var err, opts, rc, s, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      opts = {
        interp: name
      };
      s = args.join(" ");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner._cmd"
          });
          spawn(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return rc = arguments[0];
              };
            })(),
            lineno: 170
          }), opts);
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          err = rc !== 0 ? new Error("" + name + " " + s + ": bad exit: " + rc) : null;
          return cb(err);
        };
      })(this));
    };

    Runner.prototype._git = function(args, cb) {
      return this._cmd("git", args, cb);
    };

    Runner.prototype._keybase = function(args, cb) {
      return this._cmd("keybase", args, cb);
    };

    Runner.prototype._npm = function(args, cb) {
      var err, opts, rc, s, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      opts = {
        interp: "npm"
      };
      s = args.join(" ");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner._npm"
          });
          spawn(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return rc = arguments[0];
              };
            })(),
            lineno: 184
          }), opts);
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          err = rc !== 0 ? new Error("npm " + s + ": bad exit: " + rc) : null;
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.push = function(cb) {
      var args, err, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      args = ["push", "--tags", "origin", "master"];
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.push"
          });
          _this._git(args, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                return err = arguments[0];
              };
            })(),
            lineno: 197
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          return cb(err);
        };
      })(this));
    };

    Runner.prototype.read_config = function(cb) {
      var err, fn, home, raw, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
      fn = path.join(home, ".mwr.json");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.read_config"
          });
          fs.readFile(fn, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return raw = arguments[1];
              };
            })(),
            lineno: 205
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            if (typeof err === "undefined" || err === null) {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/mwr/src/main.iced",
                  funcname: "Runner.read_config"
                });
                a_json_parse(raw, __iced_deferrals.defer({
                  assign_fn: (function(__slot_1) {
                    return function() {
                      err = arguments[0];
                      return __slot_1._config = arguments[1];
                    };
                  })(_this),
                  lineno: 207
                }));
                __iced_deferrals._fulfill();
              })(__iced_k);
            } else {
              return __iced_k(err.code === 'ENOENT' ? err = null : void 0);
            }
          })(function() {
            return cb(err);
          });
        };
      })(this));
    };

    Runner.prototype.main = function(cb) {
      var esc, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      esc = make_esc(cb, "Runner::main");
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/Users/max/src/keybase/mwr/src/main.iced",
            funcname: "Runner.main"
          });
          _this.read_config(esc(__iced_deferrals.defer({
            lineno: 216
          })));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          (function(__iced_k) {
            __iced_deferrals = new iced.Deferrals(__iced_k, {
              parent: ___iced_passed_deferral,
              filename: "/Users/max/src/keybase/mwr/src/main.iced",
              funcname: "Runner.main"
            });
            _this.parse_args(esc(__iced_deferrals.defer({
              lineno: 217
            })));
            __iced_deferrals._fulfill();
          })(function() {
            (function(__iced_k) {
              __iced_deferrals = new iced.Deferrals(__iced_k, {
                parent: ___iced_passed_deferral,
                filename: "/Users/max/src/keybase/mwr/src/main.iced",
                funcname: "Runner.main"
              });
              _this.read_pkg(esc(__iced_deferrals.defer({
                lineno: 218
              })));
              __iced_deferrals._fulfill();
            })(function() {
              (function(__iced_k) {
                __iced_deferrals = new iced.Deferrals(__iced_k, {
                  parent: ___iced_passed_deferral,
                  filename: "/Users/max/src/keybase/mwr/src/main.iced",
                  funcname: "Runner.main"
                });
                _this.inc_version(esc(__iced_deferrals.defer({
                  lineno: 219
                })));
                __iced_deferrals._fulfill();
              })(function() {
                (function(__iced_k) {
                  __iced_deferrals = new iced.Deferrals(__iced_k, {
                    parent: ___iced_passed_deferral,
                    filename: "/Users/max/src/keybase/mwr/src/main.iced",
                    funcname: "Runner.main"
                  });
                  _this.select_key(esc(__iced_deferrals.defer({
                    lineno: 220
                  })));
                  __iced_deferrals._fulfill();
                })(function() {
                  (function(__iced_k) {
                    __iced_deferrals = new iced.Deferrals(__iced_k, {
                      parent: ___iced_passed_deferral,
                      filename: "/Users/max/src/keybase/mwr/src/main.iced",
                      funcname: "Runner.main"
                    });
                    _this.check_clean(esc(__iced_deferrals.defer({
                      lineno: 221
                    })));
                    __iced_deferrals._fulfill();
                  })(function() {
                    (function(__iced_k) {
                      if (!_this.argv.f) {
                        (function(__iced_k) {
                          __iced_deferrals = new iced.Deferrals(__iced_k, {
                            parent: ___iced_passed_deferral,
                            filename: "/Users/max/src/keybase/mwr/src/main.iced",
                            funcname: "Runner.main"
                          });
                          _this.verify(esc(__iced_deferrals.defer({
                            lineno: 222
                          })));
                          __iced_deferrals._fulfill();
                        })(__iced_k);
                      } else {
                        return __iced_k();
                      }
                    })(function() {
                      (function(__iced_k) {
                        __iced_deferrals = new iced.Deferrals(__iced_k, {
                          parent: ___iced_passed_deferral,
                          filename: "/Users/max/src/keybase/mwr/src/main.iced",
                          funcname: "Runner.main"
                        });
                        _this.write_new_pkg(esc(__iced_deferrals.defer({
                          lineno: 223
                        })));
                        __iced_deferrals._fulfill();
                      })(function() {
                        (function(__iced_k) {
                          if (!_this.argv.I) {
                            (function(__iced_k) {
                              __iced_deferrals = new iced.Deferrals(__iced_k, {
                                parent: ___iced_passed_deferral,
                                filename: "/Users/max/src/keybase/mwr/src/main.iced",
                                funcname: "Runner.main"
                              });
                              _this.commit(esc(__iced_deferrals.defer({
                                lineno: 224
                              })));
                              __iced_deferrals._fulfill();
                            })(__iced_k);
                          } else {
                            return __iced_k();
                          }
                        })(function() {
                          (function(__iced_k) {
                            __iced_deferrals = new iced.Deferrals(__iced_k, {
                              parent: ___iced_passed_deferral,
                              filename: "/Users/max/src/keybase/mwr/src/main.iced",
                              funcname: "Runner.main"
                            });
                            _this.tag(esc(__iced_deferrals.defer({
                              lineno: 225
                            })));
                            __iced_deferrals._fulfill();
                          })(function() {
                            (function(__iced_k) {
                              __iced_deferrals = new iced.Deferrals(__iced_k, {
                                parent: ___iced_passed_deferral,
                                filename: "/Users/max/src/keybase/mwr/src/main.iced",
                                funcname: "Runner.main"
                              });
                              _this.push(esc(__iced_deferrals.defer({
                                lineno: 226
                              })));
                              __iced_deferrals._fulfill();
                            })(function() {
                              (function(__iced_k) {
                                __iced_deferrals = new iced.Deferrals(__iced_k, {
                                  parent: ___iced_passed_deferral,
                                  filename: "/Users/max/src/keybase/mwr/src/main.iced",
                                  funcname: "Runner.main"
                                });
                                _this.publish(esc(__iced_deferrals.defer({
                                  lineno: 227
                                })));
                                __iced_deferrals._fulfill();
                              })(function() {
                                return cb(null);
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        };
      })(this));
    };

    return Runner;

  })();

  exports.run = function() {
    var err, r, rc, ___iced_passed_deferral, __iced_deferrals, __iced_k;
    __iced_k = __iced_k_noop;
    ___iced_passed_deferral = iced.findDeferral(arguments);
    r = new Runner();
    (function(_this) {
      return (function(__iced_k) {
        __iced_deferrals = new iced.Deferrals(__iced_k, {
          parent: ___iced_passed_deferral,
          filename: "/Users/max/src/keybase/mwr/src/main.iced",
          funcname: "run"
        });
        r.main(__iced_deferrals.defer({
          assign_fn: (function() {
            return function() {
              return err = arguments[0];
            };
          })(),
          lineno: 234
        }));
        __iced_deferrals._fulfill();
      });
    })(this)((function(_this) {
      return function() {
        if (typeof err !== "undefined" && err !== null) {
          console.log("Error: " + err.message);
          rc = -2;
        } else {
          rc = 0;
        }
        return process.exit(rc);
      };
    })(this));
  };

}).call(this);
