---
title: How to roll your own self-sovereign social network
publish_date: 2022-10-30
---

Ok so earlier today I wrote the post for yesterday about how to [get started with DIDs and SSI](./howtogetstartedwithdidsandssi) and I promised that I'd write another post about how to sign your own posts.

I was trying to directly import Bogbook's publishing functions but they depend on the log and the keys modules which seems to me as if that is more than it needs to depend on, but I'll have to invest some time in refactoring those apis to work without them. So instead of directly using those modules we will instead roll our own self-sovereign social network!

If you recall yesterday's post that I wrote today, you will see that I generated a key.

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

So that makes us a keypair. It doesn't store it, and it doesn't read it. Every time we post right now we will have a new keypair. In the future we will want to save that keypair somewhere.

Ok now let's write a new function in which we will sign a post. 

First I'll write a new function

```
async function sign () {

}
```

And then we want to give it two parameters

```

async function sign (data, key) {
  console.log(data)
  console.log(key)
}
```

And next we will add that function to our program and pass it the data that it is looking for:


```
import nacl from 'https://denobook.com/lib/nacl-fast-es.js'
import { encode, decode } from 'https://denobook.com/lib/base64.js'

async function generate () {
  const genkey = nacl.sign.keyPair()
  return encode(genkey.publicKey) + encode(genkey.secretKey)
}

async function sign (data, key) {
  console.log(data)
  console.log(key)
}

generate().then(key => {
  sign('Hello World', key)
})
```

This will just print the two parameters, so now we need to actually sign the data.

```
async function sign (data, key) {
  const sign = nacl.sign(new TextEncoder().encode(data), decode(key.substring(44)))
  console.log(sign)
}
```

And this will print us another one of those UInt8 Arrays that we are so familiar with:

```
Uint8Array(75) [
  223, 135,  52,  75,  45, 232, 174,  41, 227, 141, 122, 170,
   24, 253,  91, 222, 241, 180, 218,  40,  92,  80,  12, 176,
  169, 154,  49, 159, 157, 246, 161, 163,   5,  15, 123, 113,
   40, 246, 182, 135, 163, 171, 113, 155, 137,  29, 220, 219,
    5, 134, 205, 248,  44,  82,  92,  70,  12,   9, 220,   8,
  219, 120, 190,  10,  72, 101, 108, 108, 111,  32,  87, 111,
  114, 108, 100
]
```

Next we want to store this in a pseudo-bogbooky format so we will encode the signed data in base64 and concat the pubkey on the front of it so we know who it came from.


That full program could be written this way:


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

And that would print to the console:

```
rfZPoSaSLlKq3QvSSY1z02DbGi9toj2W3C3tKw4aXUU=xt8nCeIEQ8pfJ+u5xjAxC7x2iRgZdtHBXLXU1i7hOUzi2G+LpewMPQwjAODj4nY2sRa+PHdY+Br2YYPry/rICkhlbGxvIFdvcmxk
```

Congrats you are on your way to developing a cool "Web 5" distributed self-soverign system that you can use to cryptographically prove that you are the author of your posts! And if "Web 5" is the future then you are now swimming in it.

+ 

Do your homework. How do you open this signed data? I'll leave a new message below which contains a secret message (it's signed, so not really a secret -- anyone can open this with the right function): 

```
GDUOhC11gEUS6EJN/ulmLj1qMlcbRL1e99Sn56HNng0=119ihO6cHT4//AxD7PjADgWB5I1wAKm7fwm+0p3ZPoXdq1JvAZZG+ubh/ueLWbWBw5iHSR2g4+N0RfxN7JJjD1lvdSBmaWd1cmVkIGl0IG91dCEgTm93IHlvdSBnZXQgYSBmcmVlIGRvbnV0Lg==
```

I will buy the first person to figure out how to open the signed data a donut someday in the future if you can figure out how to do it before I write the article tomorrow.

Don't miss out, SUBSCRIBE to my blog. Email ev@evbogue.com with the word SUBSCRIBE in all caps and you will get updates from me via email every time I post. 
