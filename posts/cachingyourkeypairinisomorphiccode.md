---
title: How to cache your ed25519 keypair using isomorphic code in Deno and the Browser
publish_date: 2022-10-01
---

For a long time I've wanted Bogbook to use the same code in the browser and on the server, and with the latest version of Deno I think this will become more possible because [Deno 1.26 now supports the Cache API](https://deno.com/blog/v1.26#cache-web-api) [Deno.com]


Take this example, which works in the browser and using Deno 1.26:

```
import nacl from './nacl-fast-es.js'
import { encode } from './base64.js'

const url = 'http://localhost:4507/'

if ('caches' in window) {
  caches.open('v1').then(cache => {
    cache.match(url + 'key')
      .then(response => {
        if (response) {
          return response.json()
        } else {
          const genkey = nacl.sign.keyPair()
          const keygen = encode(genkey.publicKey) + encode(genkey.secretKey)
          const keyobj = {keypair: keygen}
          cache.put(url + 'key', new Response(JSON.stringify(keyobj)))
          return keyobj
        }
      })
      .then(keys => {
        console.log(keys)
        //{keypair: "Hd7qpM8L7e+sZF9Bb+hHIWHAl9ogM2d00FnR4WIWv94=CocPnaCiOoQ9QxE1gdk5Mqm4WkETtU6UT+UDS1A8Tyod3uqkzwvt76xk..."}
      })
  })
}
```

In the past I wasn't able to figure out how to store this keypair using the exactly the same API in the browser and on the server.

My idea for a future distributed social network is to then reach out over the network looking for a 44 character hash of a pubkey or a post and then cache the response once we have it so we do not have to reach over the network again to discover posts.

Once Deno Deploy supports the Cache API then we'd be able to have persistant storage at the relay level, which would make posts a lot more available. 

