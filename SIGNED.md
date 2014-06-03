##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTjdq6AAoJEJgKPw0B/gTfzI4H/j8goJEe/txpqsO4oH6Xfidd
Gi1XOsklftFJgswma/BRF6/IMP6metdD+p1AIVeC60CnKXEhTegk9QiI++ibwKup
v/doQfP5dETITHdbQEh6bdgDRU8/qOEXBUA4TArON96vnige7gXEQBqOb7QSP17Z
Zvyk4AQKUuUoHEj6AtIYXCNouTFc1oMSdNMk6KnI9eRPhmeyJLcuSfUNIK6Aa0P9
PPbmbe4MzjuRABhmmLMIPPyHIJH6nMZOwUAA3xFLaG6OZaggBZIc9WXf0lDtEtO8
7T5g1nCE+Nu6l/rIy8ar4WxS5g4ICGHot4/pQsI9YvNb1GihH4EEvziMntGyhvM=
=dX6E
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
28352            main.js     2e397821b91d025bd2c515da0b26966c9b2d61c322151600204fdbfa0ce309a0
697            package.json  6b9f015d327f13f0a29105a687109610070821e0b2767d5c6f9d0229eae8c07e
               src/                                                                          
5539             main.iced   204062949373539d194e509877527556b8c103f93c0f41f139cd15a89b9e1452
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