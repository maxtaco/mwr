##### Signed by https://keybase.io/max
```
-----BEGIN PGP SIGNATURE-----
Version: GnuPG/MacGPG2 v2.0.22 (Darwin)
Comment: GPGTools - https://gpgtools.org

iQEcBAABCgAGBQJTjdt2AAoJEJgKPw0B/gTf2TAIAIl8IK8Mx3cROU3xZSRVcY98
1cjXRcwyJ40soRoJEJIRTil+2WQpdBPxEVNNzooOyMidA0Obtsvx41mSs4DornGE
vS5OH/YQIqQH/YDoXVws4SBQ7e4aZD6KiVPTEvtZ8N2jWVif75pUHxwPKEykQzQF
shdlYeOv9FSQ35y4SLDF2WxHFqW54EmXdgwUyFyzB0/UOypJetYXVVVFs/AhLtv1
JcvD4ifE95e9ANkFVhEMnkZ3Ezp1I773xYXoGHtfb6MB7S/7qeMHobHD9WJCITyJ
iaFZXQShieRKxXrBSQn9AwlubttlZgLz1TEfXqo8qC/BpoA9rByqFxzJidVI3Do=
=7F/c
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
28330            main.js     3c7f8fb829844b4cf813179e1beda9116a8e961f8a283a7059d67c2dfc3388b2
697            package.json  e3a16c5da4094230f20f6e55a157e4371de20a65f0bae69eb2adf1ffee7d6d52
               src/                                                                          
5517             main.iced   25d5d7b9b4110eb12e391841c685eed01c4467d2d10006b288a68edefada5f1d
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