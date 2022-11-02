---
title: How to SHA-256 hash like a pro
publish_date: 2022-11-02
---

I am working on a new version of Bogbook, v3.1.0. It is not released yet, but when it is released you will discover that it uses a lot of the same APIs in your Web Browser and on the server since the team at Deno are trying to expose the same APIs on the server as in the browser to undo all of Node.js's bad karma.

Today I invested a little of my time in ripping out a third-party sha256 hashing module that I had been using in Bogbook to replace it with the SubtleCrypto API. This was a little bit of a challenge because the documentation was lacking, or at least when I searched the Internet it wasn't immediately clear how to do this, so today I will teach you how so that you don't have to spend as much time learning as I did.

Deno and modern web browsers expose an API called Subtle Crypto in the window object, and this only works on https connections for unclear reasons. I've given up fighting about https since Deno is provisioning my certs for me, so I won't argue about that today. On localhost Subtle Crypto works too, so if you are designing a local-first app it doesn't matter anyway.

You can access the hashing part of this API by passing two parameters to `crypto.subtle.digest(<HASHINGALGO>, <UInt8Array>)`

But before we try that allow me to explain _why_ you want to create a hash of some data.

Distributed social networks are all of the rage these days, because it is 2022 and we are moving beyond the "lords & peasants" systems that defined the last twenty years of Web 2.0. 

Over the past couple of days I explained that SSI and DIDs are really just public keys rebranded to not scare the shit out of VCs (lords) and can be used by average users (peasants) to be equal members of digital society because they can sign their data so we can confirm anywhere that it came from them.

Hashes are a compliment to signed data, as they allow us to verify that data is intact. If you can generate a pubkey and then sign some data, then Jack Dorsey can probably chuck a few million dollars in your direction and Tweet that you will be releasing the next best greatest Web5 application. 

And bonus, you will be worth more than an NFT because as Moxie Marlinspike is famous for pointing out, an NFT can't even tell if you are randomly returning a poop emoji.

Anyway, here is how to create a SHA-256 hash using Deno and the web browser. Open your web browser terminal and you can just paste this and you will no longer be a peasant.

```
const string = 'Hello World'

const hash = Array.from(
  new Uint8Array(
    await crypto.subtle.digest("SHA-256", new TextEncoder().encode(string))
  )
)
  
console.log(hash)
```

and this will print a familiar UInt8 Array

```
[
  165, 145, 166, 212,  11, 244,  32,  64,
   74,   1,  23,  51, 207, 183, 177, 144,
  214,  44, 101, 191,  11, 205, 163,  43,
   87, 178, 119, 217, 173, 159,  20, 110
]
```

Bogbook these days is a protocol of signed hashes, and then we request data based on the hash that we open from the signature. This means we can both verify that the data is correct _and_ we can know that it came from the author with cryptographic certainty.

How does it feel to not be a peasant anymore?

Did you learn anything from this story? SUBSCRIBE by sending an email to ev@evbogue.com. 
