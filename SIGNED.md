##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJThz2YAAoJEJgKPw0B/gTf5l4IAIpSkcci7A8mDOWOB/HoVFjb
0hTThNuGev59PwaNPem+eEbck1DqXxvfzZGDsdBUQ4ibPdOeMvqkFGdK2qpPwfjw
Qq0ciCrYkYVNPPiRXeEoo7J7b7zpgbpimHJwrxA++NESiOqAdPxEA6q9LbBfMGVS
S+D40dOVELS0jx+ED3Ri/hNHuCDME2pKoRNa4uXWECJcNy5gFjjAco2kda1VGRjj
M+cbmKQCM2JDaR0TGX9F7kP1jCP29Zt9q+zuk7Ryk/uHV7CJablQdDblTfwIdvIZ
jRgmEO6Dh4aowEmOFyFVsmHObL4i/zKdHFVrATq664ab8/TqfSOlYJcLIGO6MGU=
=11AC
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
25865            main.js     2ecc08b580314088964002e6f31eb0c6b4a6e8cd30613198e1ca4f83d1d42877
697            package.json  9b17211eec37017535573fc5b6f353b41041433de1cef8c41faac7145a70802e
               src/                                                                          
5136             main.iced   3a676bda79e5188b035b614b6fc088e38caa7380ad4f316ccb9ad2966e23ad70
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