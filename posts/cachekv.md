---
title: Introducing... cachekv (the Cache API key/value store)
publish_date: 2022-10-06
---

Ok, so I got a lot of recommendations from all of you about what to write today, but since I didn't write anything yesterday I wanted to be very super productive today so I wrote a tiny Deno/Browser module that does two things well.

Introducing...

```
const url = 'http://localhost:8000/'
const db = 'v1'

export const cachekv = {}

cachekv.get = async function (key) {
  if ('caches' in window) {
    const cache = await caches.open(db)
    const file = await cache.match(url + key)
    const string = await file.text()
    return string
  } else {
    console.log('No Cache API available')
  }
}

cachekv.put = async function (key, string) {
  if ('caches' in window) {
    const cache = await caches.open(db)
    cache.put(url + key, new Response(string))
  } else {
    console.log('No Cache API available')
  }
}
```

And...

How do you use it? 

```
import { cachekv } from './cachekv.js'

cachekv.put('hello', 'world')
cachekv.get('hello').then(string => {
  console.log(string)
})
```

And you can try it at Deno Deploy! https://cachekv-ssfe8z0ff900.deno.dev/ (in the browser, because the cache db doesn't work on the server yet, but it will!)

Why would I make a module that does this? Because I want a simple key/value store that will work in the browser and on Deno that will store Bogbook posts across sessions. 

What does this module do? Really it just creates a new Response object and then strips the Response object to return a string, so you don't have to deal with the Response object when you are coding.

I know, I know, all of you readers out there are wondering why I didn't write about the topics that _you_ were interested in such as "how to make a comeback as a blogger when you are fat and live in the midwest" or "why are your eyes so pretty" or "how to tell the difference between junk and stuff?" or the other submissions that I did not receive yet. I promise I will write about those topics very soon, please stay tuned for the next blog entry and your post suggestions will be answered in time.





