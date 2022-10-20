---
title: A brief update to Cache KV
publish_date: 2022-10-20
---

Earlier this month I made the important announcement that [Cache KV](./cachekv) is now available to use freely within your project, and so far it seems to work. 

Today I did a not-quite-released refactor of Bogbook that I am called Bogbookv3.1 that uses Cache KV in the client and on the server. 

Since this refactor tested Cache KV in new and interesting ways, I've had to make a few slight adjustments to how Cache KV works. Here is the updated code below:


```
const url = 'http://localhost:8000/'

const db = 'v1'

export const cachekv = {}

let cache

if ('caches' in window) {
  cache = await caches.open(db)

  cachekv.get = async function (key) {
    const file = await cache.match(url + key)
    try {
      const string = await file.text()
      return string
    } catch {
      return undefined
    }
  }

  cachekv.put = async function (key, string) {
    cache.put(url + key, new Response(string))
  }

  cachekv.rm = async function (key) {
    cache.delete(url + key)
  }
} else {
  console.log('No Cache API available')
}
```

That is it. I know, it's not all that exciting. What I'm excited about is that I can write Bogbook servers and clients using exactly the same modules, because before I was writing a browser module and a server module and that was a lot of duplicate work that I found annoying.

So in the next Bogbook release, when it is ready to ship into production, you can expect a lot more isomorphic JavaScript!

