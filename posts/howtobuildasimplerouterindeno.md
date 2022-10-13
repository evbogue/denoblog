---
title: How to build a simple router using Deno's new serve() http server
publish_date: 2022-10-13
---

Deno's [new experimental http server](https://doc.deno.land/deno/unstable/~/Deno.serve) [doc.deno.land] is currently unstable but is supposed to be insanely fast. To use it you have to pass the `--unstable` flag and then you can write yourself a Deno webserver using this line:

```
Deno.serve(() => new Response("Hello, world."))
```

Yes, that is it. Deno will fire this up at PORT 9000 automatically and you can quickly serve a response. To get this working you just save your server as a file and then type `deno run --allow-net --unstable serve.js` and visit the website at http://localhost:9000/ to view the words "Hello, world." in plain text.

But how simple is it to create a router for your application? 

What is a router? Ok, so most web apps work by responding to routes in the URL bar. This is everything after the domain name. For example, you are viewing this page at https://evbogue.com/howtobuildasimplerouterindeno and to deliver the content from this post I am using a router to detect which post you are looking for and then send you the post that you are interested in.

To create a router you need to first accept the request object that is sent between the browser and the Deno server. You can do it this way:

```
Deno.serve((request) => {
  console.log(request)
  return new Response('Thank you for your request.')
})
```

This program will print the request object to your terminal and respond to the browser where you will see "Thank you for your request." in plain text.

Now this is getting at a router but it isn't a router yet.

To make a router we need to parse the URL and find the route that we are on. To begin to do that we need to parse the URL out of the request object:

```
Deno.serve((request => {
  const url = new URL(request.url)
  console.log(url.pathname)
}))
```

And what this does is print the pathname to your terminal. So if you go to http://localhost:9000/user the path `/user` will appear in your terminal. And if you go to http://localhost:9000/ev then `/ev` will appear in the terminal.

So to return a custom reponse based on the route you can do this:

```
Deno.serve((request => {
  const url = new URL(request.url)
  console.log(url.pathname)
  return new Response('You are at the ' + url.pathname + ' route.')
}))
```

And when you visit a route the response will include the route that you are at. So if you visit http://localhost:9000/user you will see "You are at the /user route." in your browser and if you go to the http://localhost:9000/ev route then you will see "You are at the /ev route." in your browser.

Now it isn't a stretch to imagine throwing a conditional in here that will render things in different ways based on the route.

```
Deno.serve((request => {
  const url = new URL(request.url)
  console.log(url.pathname)
  if (url.pathname === '/ev') {
    return new Response('Oh hey Ev!')
  } else {
    return new Response('You are at the ' + url.pathname + ' route.')
  }
}))
```

This will respond with "Oh hey Ev!" if you go to http://localhost:9000/ev


Once you know how to do this you can pretty much build a web app that has a server-side router that reacts to different routes in different ways. 

