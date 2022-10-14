---
title: How to write a simple router in Bun.sh
publish_date: 2022-10-14
---

Ok so [yesterday we learned](./howtobuildasimplerouterindeno) how to create a web app with a router in [Deno](https://deno.land/) which is a newish JavaScript runtime for building web apps. However, we would not be inclusive of all of the JavaScript runtimes if we did not also teach you how to write this same application using the newest and latest and possibly coolest? JavaScript runtime which is of course [bun.sh](https://bun.sh) which has a bun-shaped mascot instead of Ryan Dahl's finger shaped to look like the loch ness monster.

So go get yourself a bun and come back here and then I'll discuss how to write the same application that we wrote yesterday using bun instead of Deno.

All installed? Ok, let's go. 

This is my first time trying Bun so let's see if I can figure it out.

```
export default {
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
}
```

Bun's serve is a little bit more verbose. You have to include a default object for bun to run.

And to get that going we use the command `bun run serve.js` navigate to http://localhost:3000/ and it says "Welcome to Bun!". Noice. The bun is running.

It turns out that we can write a slightly less verbose server by omitting the port command, and it will still run at localhost:3000 by default.

```
export default {
  fetch(request) {
    return new Response("Welcome to Bun!")
  }
}
```

And just like yesterday we want to get the url of the route, so let's see if new URL works.

```
export default {
  fetch(request) {
    const url = new URL(request.url)
    console.log(url)
    return new Response("Welcome to Bun!")
  }
}
```

Yup, that works, so we can return the URL of the route that we are on.

```
export default {
  fetch(request) {
    const url = new URL(request.url)
    console.log(url)
    return new Response("Welcome to Bun! You are at the " + url.pathname + " route.")
  }
}
```

And then if you navigate to http://localhost:3000/ev you will see "Welcome to Bun! You are at the /ev route." in the browser.

And then it isn't a stretch to throw a conditional in here so that Bun can use different responses to different routes.

```
export default {
  fetch(request) {
    const url = new URL(request.url)
    if (url.pathname === '/ev') {
      return new Response ("Oh hey Ev. You're on Bun.")
    } else {
      return new Response("Welcome to Bun! You are at the " + url.pathname + " route.")
    }
  }
}
```

And if you navigate to http://localhost:3000/ev then you will see "Oh hey Ev. You're on Bun." in the browser.

So now you can write the same app in both Deno on Bun! You just have change a few things between the two runtimes, meaning that the same app won't work in both runtimes without changes.

What will you build next? 

And of course stay tuned for tomorrow, when I will teach you how to write the same exact app in Node.js -- the original and slightly slower programmable web server.
