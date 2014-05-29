##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJThz4UAAoJEJgKPw0B/gTfABsIAKsL+gVz/rOHGeAUvsyoNZPp
qecdrutRGu5ksD+74DU4P7a6jL0SM7tIP3I6wgE1C5EPBihUVZi/JNVM3tNUje4v
KzPlDkhyfusie16kzfAt2t2klHubcqHWdfkKACxAABFORWkd46P1hKvrsBdyLanq
HbofUOfq27HYkGqvNr/SlCBoIXBf5pKjZYgsRunwQH1jifCjXYdluY/JOroWEBZM
s/pOesQH5uBoXMB8QWS04q3YHAsUf8d7fReL4OpEIgW+oMdB6iVaQhToUKSDk9K7
GEqYNgIn8ADoX8b/L2lWKX9bdNrhSSAm15DeFQoNFBJLZNvTgNDhqcIMRuzPjp8=
=D45D
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
27142            main.js     7f0035a8ce3807ff74d98471a434ecd119c056c478796f68780cb023c11d8071
697            package.json  c67c3a31259a0cb7e5302e40865beda6b577f3ab9c32a542ad9d6ef485a31da4
               src/                                                                          
5296             main.iced   f91c9b427456679c9800b5f77f843651a9edc1b78aa78021dade9c674fb87de7
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