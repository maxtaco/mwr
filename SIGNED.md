##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJThz2nAAoJEJgKPw0B/gTfCA4H/0h1wEkUgKpJ0fs2B3pscH1R
XOZ8PgF1c+iFFI1AuIJ3tXn6tEV5/uRNK3BZnohZAUT3FRPUbpgCIiTescucjDQA
CzZv7QqlX4ZY5eXLi6Im/QFlCe8NzEPjmE8JfJEOCwyGkJOJOzMpYos3zfAQaBys
KUkFDRPVbhTWoECirU1/jq9f03siLGXVe27ZHwqUYDOFjQo0yxWA0Csl2aGoIbYn
NXwAdiaLfYLxKsBrHSpRhUM4r5EfXvlspNWyHSKiVfVLCzdBRCPEEKA0YPevUgI4
8o3L24ZMPUrorjlVTsZh/0FSKdzxRYFIuU3rB9lrOaVbOOn0gW91zQxfv4QJiBE=
=hODN
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
25866            main.js     cbe95e7ccefdebb68dc68fd607f86430be8d3b708ba4efbb7ff632259f888ad0
697            package.json  88c071d6e1a68f6cd30b55423852f6aba1d896790cc21f576244d3c65227b985
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