---
title: Rewriting Bogbook using Isomorphic APIs in the browser and in Deno
publish_date: 2022-11-05
---

Sorry I didn't update my blog yesterday, I was busy coding!

As many of you know, for the past little while I've been working on a new version of Bogbook that uses the same APIs in Deno and in the Browser. 

I haven't pushed to master yet, because I am the only person working on it and I want it to be perfect before you try it. I know people get tired of being frustrated when they try distributed social networks and they are not quite working and then I am at work for two weeks straight and I don't have time to fix the bug and everyone is just frustrated with how bad Bogbook works.

The last time I rewrote Bogbook I decided to finally ditch append-only logs. Those of you who have followed since I was a core contributor on secure-scuttlebutt have of course experienced a lot of append-only logs. The longer they get, the longer they take to sync!

So in Bogbook v3 I broke compatibility with the previous Bogbooks and now I use a protocol that unpacks into what I believe is a merkle tree structure. At the very least it hashlinks backwards until you reach the original post.

When you post to Bogbook now you will find that your raw posts look this way once they are compiled into JSON:

```
{
  timestamp: <timestamp>,
  author: <ed25519 Public Key>,
  previous: <sha256 hash from previous post>,
  data: <sha256 hash of post data>,
  hash: <sha256 hash of post (ts, author, data)>,
  raw: <timestamp><ed25519 Public Key><Previous Post Hash><Data Hash><Post Hash>
}
```

And if it is your first post then the previous hash is the same as the post hash, and we call that a "root" post.

This merkle hash-linking structure allows us to fork our feeds and then recover them at a later time simply by linking to any posts we may have lost when switching between devices and maybe not syncing all of our posts. There is no longer a risk of a hard fork where two append-only logs have the same sequence order but different content -- a big problem with the boggier previous version of Bogbook and other distributed social networks that are built upon append-only logs.

And we can sync backwards from the latest post, so we don't need the entire chain to get started.

But this post isn't so much about the differences between Bogbook v2 and v3, it is more about how I have been rewriting bogbook's codebase to use isomorphic JavaScript.

For the longest time I've wanted to use the same code in the browser as I use on the server, and this is finally possible now that Deno has implemented the Cache API. 

In most of the previous version of Bogbook we used idbkvstore in the browser to store posts, and the filesystem API on the server to store posts. But in this refactor to 3.1 I've ripped out idbkvstore and the filesystem API to depend 100% on the Cache API.

So when we want to get our keypair, we can use the same API in both the browser and on the server:

```
import nacl from './lib/nacl-fast-es.js'
import { decode, encode } from './lib/base64.js'
import { cachekv } from './cachekv.js'

export let keys

cachekv.get('keypair').then(keypair => {
  if (!keypair) {
    let keygen = '@/'
    while (keygen.includes('/')) {
      const genkey = nacl.sign.keyPair()
      keygen = encode(genkey.publicKey) + encode(genkey.secretKey)
      cachekv.put('keypair', keygen)
    }
  }
  if (keypair) {
    keys = {
      keypair: function () {
        return keypair
      },
      pubkey: function () {
        return keypair.substring(0, 44)
      },
      privkey: function () {
        return keypair.substring(44, keys.length)
      },
      deletekey: function () {
        cachekv.rm('keypair')
      }
    }
  }
})
```

Boring! But I used to have to write one of these scripts in idbkvstore and another one of these scripts in the Deno.fs API. Ditto for the logstore and the blobstore. A _lot_ of redundant code is going away, and I hope you'll find it easier to read the codebase yourself and possibly make your own distributed social networks using the Bogbook message format.

Now all of this has been done for awhile, but what I was working on yesterday was a new onboarding flow.

When you join Bogbook it is now going to ask you to pick a name.

Then it will bruteforce a keypair with the first letter of your name.

Then it will ask you if you like that keypair, if you do not you can keep bruteforcing keypairs until you find one that suits your fancy.

When you find one it will show you a preview of how your messages will look with your name and public key rendered into a visual buffer, and then ask you to upload a profile photo as a blob.

Cool?! Yes, and simple. To get started with Bogbook all you need is a name, and then you can start posting. You do not have to sync ten gigabytes of append-only logs! 

The future is simple _and_ written in isomorphic JavaScript.

Now something I realized about switching from append-only logs to using a hash-linking structure is that you do not get people's names and profile images if they posted them as their first post. So in v3.1 of Bogbook we will no longer post names and profile images as message objects. 

Instead these things will be relayed to peers upon your connection. Everyone stores everyone else's profile photo and name as an object signed by the creator, and then if they are available they can relay them around to other peers who are looking for names and profile photos.

This last part I haven't quite finished yet, but I hope to finish it today.

Questions? ev@evbogue.com SUBSCRIBE? ev@evbogue.com for a personalized handwritten email every time I post a post 
