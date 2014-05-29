##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJThzx5AAoJEJgKPw0B/gTfMmcH/i+gSdcSqqx852fLgwk8nobV
WKgHEK8NH461RpaCTNFYP4ECdulESB6bSIEcmQT0RbUQIbdKd07vHnaqUuF33HMF
M77U7CMpOi9gfqEy9sdeYptmTgrVvezhE+OEBnYnhYfDAQbooTdkSyYKwTNq2jie
kLBado9pYkoqKckOaTPYTUBCcERcXfHJthotHOGxiCB80NJf9OeVXxctuOk83G+u
v9v/660OaJosPEVyAQ+dr9yrKeb/11pVETghW3B6dyhDKiAbp6yaZhDuTR44dwL7
Q9iOzFqPHbUtR1qxU6smhX7IJWw+woYdlRSUeJM/fce851XxQrIAxgjP9dhsHP0=
=K6EH
-----END PGP SIGNATURE-----

```

<!-- END SIGNATURES -->

### Begin signed statement 

#### Expect

```
size   exec  file            contents                                                        
             ./                                                                              
109            .gitignore    ec278daeb8f83cac2579d262b92ee6d7d872c4d1544e881ba515d8bcc05361ab
1489           LICENSE       1e933ceb3f4a00ae33672d4e344f9ff26e92bc8f34bc0c7a52fd0ef257607858
360            Makefile      b3c182aea1e7e763332c9e1ef1a9c85ccc33eeb8f02ea970a6d5eabd9e25c280
75             README.md     c98be23ab9070a8dafc3fff42a86ad381a57350cbace601047930e3f725375be
               bin/                                                                          
50     x         main.js     b92ba43717a50e1a658f9fa7dda06a94bfad1b0108fa9e03439dfb1235516c55
               lib/                                                                          
25451            main.js     62a4b6cb83b359ab2ab428c985830934267d9eae8fc3378ef69c77ab51227222
697            package.json  a6e1f3e4d5aeec872a183f29fce85602ebf33ff7611654c8ef85c6390d8563df
               src/                                                                          
5008             main.iced   76dc2bca4d8b14d4e431259868fec15a1b20e84401737a8a09903c7aa7ce005d
```

#### Ignore

```
/SIGNED.md
```

#### Presets

```
git      # ignore .git and anything as described by .gitignore files
dropbox  # ignore .dropbox-cache and other Dropbox-related files    
kb       # ignore anything as described by .kbignore files          
```

<!-- summarize version = 0.0.8 -->

### End signed statement

<hr>

#### Notes

With keybase you can sign any directory's contents, whether it's a git repo,
source code distribution, or a personal documents folder. It aims to replace the drudgery of:

  1. comparing a zipped file to a detached statement
  2. downloading a public key
  3. confirming it is in fact the author's by reviewing public statements they've made, using it

All in one simple command:

```bash
keybase dir verify
```

There are lots of options, including assertions for automating your checks.

For more info, check out https://keybase.io/docs/command_line/code_signing