---
title: How to live your self-soverign digital life as if Web 5 is a thingy thing
publish_date: 2022-10-31
---

Ok, so yesterday I wrote about how to sign a document using CRYPTOGRAPHY. I wrote it in all caps because it is a word that scares the shit out of most people.

Today, we will unpack that document. When you sign a document using CRYPTOGRAPHY in the real world we use the word "open", because you are verifying the signature and opening the document to reveal the true nature of what is being said. 

And yesterday we had this program:

```
import nacl from 'https://denobook.com/lib/nacl-fast-es.js'
import { encode, decode } from 'https://denobook.com/lib/base64.js'

async function generate () {
  const genkey = nacl.sign.keyPair()
  return encode(genkey.publicKey) + encode(genkey.secretKey)
}

async function sign (data, key) {
  const sign = encode(nacl.sign(new TextEncoder().encode(data), decode(key.substring(44))))
  return key.substring(0, 44) + sign
}

generate().then(key => {
  sign('Hello World', key).then(msg => {
    console.log(msg)
  })
})
```

And now we want to open what we just signed so we will need a new function

```
async function open (data) {
  const pubkey = decode(data.substring(0, 44))
  const msg = decode(data.substring(44))

  const opened = nacl.sign.open(msg, pubkey)
  console.log(opened)
}
```

And if we try to squeeze a signed message through the parameter we will find that it prints out another familiar UInt8Array that says:

```
Uint8Array(45) [
   89, 111, 117,  32, 102, 105, 103, 117, 114,
  101, 100,  32, 105, 116,  32, 111, 117, 116,
   33,  32,  78, 111, 119,  32, 121, 111, 117,
   32, 103, 101, 116,  32,  97,  32, 102, 114,
  101, 101,  32, 100, 111, 110, 117, 116,  46
]
```

And if you convert that to a UTF-8 string you will discover what the secret message was that I sent you yesterday. 

But all of this is of course part of a larger idealogical battle being waged in computing. Should a social media company own your data? Or should you hang onto your private key and sign your own data? Most people can't even remember their passwords, how can we expect them to hold onto their private keys?

But most people do want a free donut, so if you can figure out how to convert that UInt8 array into a UTF-8 string before tomorrow I will promise to buy you a donut the next time we meet in person.*

*CovID+++ restrictions withstanding. Offer not redeemable in cash. It's just a donut people, don't get too excited.

And yes I am very disappointed in you all that no one has won the donut yet. It's just a function people, you can pass some data to it.
