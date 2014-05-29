##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJThz1yAAoJEJgKPw0B/gTflS8H+wbFojNunSqRFlnII+lOg91y
MWoBfR6MMZHFU5pJWM7iEZ5DqWnKUrsJ3Yl9z4ucDnlsUfyKVa+i7xCGN+sHw5SE
OsRNrETXqTwIuh3Ll3IYR/8nXGiQOEOmsET1uQEUQ3piYWRhlQCKP+aGDL/9K1WE
oeuLi26mfAqhqfvim6sOJkAvNO39pYMFWDseSFtMrkjI6tcY+gvuIAOykXXp4Hzz
p/83n1lTpIXZCA9jqfzyXSUnulOoQJDenCghJ5sv/WyKoWbwPzWUxeHKcvh0rceS
aU7oiZj0n3gofeosCLtxUQXWut3yFkn3FaOInrNOngAsak4CtcfQBJ0y0KycLgk=
=jbt9
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
697            package.json  ed2d72fd62a4a86d1cf002ab4238c75cbbaadd01230bd775eeabb08a31f86424
               src/                                                                          
5135             main.iced   8ab61ccce93996f0b0d7575dbccc10de0819d5aad6a18a799578f01a09ca7235
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