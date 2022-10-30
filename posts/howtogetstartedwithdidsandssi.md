---
title: How to get started with distributed identifiers and self-sovereign identity
publish_date: 2022-10-29
---

Sorry I didn't update my blog yesterday! I didn't have the time as I was doing other things.

So yesterday what I wanted to write about was how to get started with distributed identifiers and self-soverign identity, because Elon has bought a dead bird and the real pheonix is Web 5 which will someday take flight and burn the blue skies until everyone switches from Web 2.0 to "Web 5" or whatever you want to call it.

Most developers who have used Git or run a Virtual Private Server over the past dacade are very familiar with DIDs and SSI already, because developers use SSH (Secure Shell) to push Git commits up to Git repo hosts and most smart people who use SSH use a keypair with it so they are not mucking around with passwords.

If your computer has a terminal, which I imagine that it does even if you cannot find it, you can generate a DID using your terminal simply by typing `ssh-keygen -t ed25519` and it will print an ed25519 keypair to your `.ssh` folder. Then you can use this keypair to establish connections to remote servers. 

This is nothing new, nothing mind-blowing, and people do not refer to it as self-soverign identity unless they are drinking too much far west coast cool aid. I imagine that DIDs and SSI are terms that are really just being used because venture capitalists stuck with Web 2.0 for ten years longer than they should have and now they want to pretend that they aren't just copying the existing work of the people who have been building distributed systems for the last ten years so they invented some new words to refer to old things. Regardless none of these Web 5 companies have working products anyway, so expect them all to take another ten years to learn from the mistakes of the last ten!

What I am saying is to understand the current era of Silicon Valley psychobabble you just have to replace the word DIDs with Pubkey and SSI is the result of using your Pubkey to sign messages that are distributed between peers. Cryptography can also be used to encrypt messages, but that is beyond the scope of this article. 

Now you may know that I am the lead, founding, and only developer on Bogbook which has been using DIDs and self-soverign identity for many years now and I can teach how you to develop a DIDs so you that you can have SSI using Bogbook right now with just a few lines of code.

First we will start by writing a module that will load a cryptography library and generate us a key. I will use [Deno](https://deno.land/) for this example, because it can do imports from URLs. 

```
import nacl from 'https://denobook.com/lib/nacl-fast-es.js'

async function generate () {
  const genkey = nacl.sign.keyPair()
  console.log(genkey)
}

generate()
```

And this will print the output

```
{
  publicKey: Uint8Array(32) [
    225, 222, 151,  79,  42, 159,  97, 33,
     92, 253, 160, 187, 101, 224, 250, 87,
    182,  57,  81,  33,   4, 211,  48, 37,
    222, 128,  68,  54, 131, 206, 101, 21
  ],
  secretKey: Uint8Array(64) [
    244, 229,  71, 57,   3, 158,  47, 141,  52, 189, 237,
     77, 236, 127, 35,  57, 155, 120,  95, 107, 178,  44,
     31, 169, 153, 70,  93,  80, 115, 241,  50, 143, 225,
    222, 151,  79, 42, 159,  97,  33,  92, 253, 160, 187,
    101, 224, 250, 87, 182,  57,  81,  33,   4, 211,  48,
     37, 222, 128, 68,  54, 131, 206, 101,  21
  ]
}
```

These are two Uint8 arrays, which is the way that NaCl generates ed25519 signing keys. Next we want to convert this into a format that is more familiar to Bogbookers, which is Base64. To do this we have some clever encode/decode functions that will help us easily convert between the two formats.

```
import nacl from 'https://denobook.com/lib/nacl-fast-es.js'
import { encode, decode } from 'https://denobook.com/lib/base64.js'

async function generate () {
  const genkey = nacl.sign.keyPair()
  console.log(encode(genkey.publicKey) + encode(genkey.secretKey))
}

generate()
```

And this will output a unique keypair in a more familiar base64 format:

```
rNU5nJppj3Hnc/FYATNg1+xhxRIwTsXFCd+bkzatZKU=VtK2xdmGrG2k1wmm+CtGLv0d2PMhtjOv+ZZaWkbpzy2s1TmcmmmPcedz8VgBM2DX7GHFEjBOxcUJ35uTNq1kpQ==
```

Which you can import into Bogbook and get to bogging! 

And next I realized in the above example that I was not returning the key to the function that asked for the key, so let's do that so we could possibly write a program that does more things than just console.log a keypair.

```
import nacl from 'https://denobook.com/lib/nacl-fast-es.js'
import { encode, decode } from 'https://denobook.com/lib/base64.js'

async function generate () {
  const genkey = nacl.sign.keyPair()
  return encode(genkey.publicKey) + encode(genkey.secretKey)
}

generate().then(key => {
  console.log(key)
})
```

Congrats you now have a distributed self-soverign identifer and in the future we will use it to sign your own posts.

Don't miss out, SUBSCRIBE to my blog by sending an email to ev@evbogue.com and I will send you the next post in which I think we may write ourselves a bogbook post from scratch.
