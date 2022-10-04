---
title: A simple guide to manipulating the browser DOM with hscrpt
publish_date: 2022-10-04
---

Most of what is going on in the programming world today is discussions about which frontend framework to use to build your website or web app. There is a dizzying array of new frontend frameworks to choose from and each of them has a slick website trying to convert you into a true believer of their method of manipulating the DOM. Some of these frameworks are fullstack frameworks too, so you can move your data between the server and the browser and not have to worry about much at all except all of that sunk time that you spent unlearning the last framework and learning a new framework.

Now I sometimes contemplate learning a new fullstack or frontend framework, but after much contemplating I just end up doing what I've been doing for years which is just using [hscrpt](https://github.com/dominictarr/hscrpt/).

And here is the code for hscrpt (which I slightly updated so that I can use in es6 projects):

```
export function h (tag, attrs, content) {
  if(Array.isArray(attrs)) content = attrs, attrs = {}
  var el = document.createElement(tag)
  for(var k in attrs) el[k] = attrs[k]
  if(content) content.forEach(function (e) {
    if(e) el.appendChild('string' == typeof e ? document.createTextNode(e) : e)
  })
  return el
}
```

And as you can see from the code, this not-frontend framework is very simple.

To quote the hscrpt readme:

> frameworks come and go. but the DOM doesn't change, because that would break all the frameworks. - Dominic Tarr

But how does it work?

Well you build DOM elements directly, and then you can append them to the DOM using the browser's own DOM API. Everything that you see on a screen of a web browser is a DOM element, and hscrpt just helps us build our own DOM elements without as much code as usual. 

Many people complain that kids these days do not know there is the DOM because they have spent three years learning React, so give me a second to explain that first.

Let's say you create a browser JavaScript and we'll call it `app.js`

and then we'll import that browser JavaScript into the browser by creating a file called `index.html`

Here is a terse and not complete `index.html`:

```
<script src="app.js" type='module'></script>

```

and then we will write our `app.js`

and we manipulate the dom directly:

```
// create the dom element
const hello = document.createElement('p')

// give it some content
hello.textContent = 'Hello World!'

// give it some style
hello.style = 'font-weight: bold;'

document.body.appendChild(hello)

```

and then this development environment requires a webserver so launch it with a file server, here is [Deno's file server](https://deno.land/manual@v1.26.0/examples/file_server) example: 

```
deno install --allow-net --allow-read https://deno.land/std@0.158.0/http/file_server.ts
# Downloading https://deno.land/std@0.158.0/http/file_server.ts...
file_server .
# HTTP server listening on http://0.0.0.0:4507/
```

And then you should see "Hello World!" in bold in your browser.

Ok the above was probably a lot if you've never developed a website below, but it is less than spending a couple of years of your life deciding which new frontend framework to use and by the time those years of your life have passed there will be a new generation of frontend frameworks you will need to deliberate upon before you choose one.

But how do we use hscrpt in this workflow? 

Well, the app becomes dramatically simpler:

First save hscrpt as a `hscrpt.js`

```
export function h (tag, attrs, content) {
  if(Array.isArray(attrs)) content = attrs, attrs = {}
  var el = document.createElement(tag)
  for(var k in attrs) el[k] = attrs[k]
  if(content) content.forEach(function (e) {
    if(e) el.appendChild('string' == typeof e ? document.createTextNode(e) : e)
  })
  return el
}
```

and then in your app.js import hscrpt and create a DOM element with hscrpt:

```
import { h } from './hscrpt.js'

const hello = h('p', {style: 'font-weight: bold'}, ['Hello World!'])

document.body.appendChild(hello)
```

And then you should see __Hello World!__ in your browser.

How does that work? `h` accepts three or two arguments. If the first is the type of html element that is being created, the second is an object of attributes that are applied to the DOM element that is being created, and the third is either a TextNode or more DOM elements. If there is third argument then we assume there are no attributes and try to parse the second as the third argument which is either a textNode or more DOM elements).

So just appending __Hello World!__ to the DOM is cool, but why not do something that reacts to user input? We'll grab the example from the hscrpt readme, update it to the modern era, and you'll see what I am talking about.

```
import { h } from './hscrpt'

let name

document.body.appendChild(h('div', [
  h('h1', [ 'Hello, ', name = h('span', 'World') ]),
  h('input', {oninput: function (ev) {
    name.textContent = ev.target.value
  }})
]))
```

Try it out, and you'll see why it is cool. The input field dynamically updates the h1 DOM element as you create and/or delete text content from the input field. Your element now has the capablity of reacting to user input without a huge frontend framework that you have to learn in order to do the same thing.

Now that isn't much to learn to get a big boost in productivity when you are building your web applications! But the downside is that you will be unable to participate in the endless web development community conversation about which frontend framework to rewrite your app in this week/month/year/decade and will just be shamed for pointing out that the DOM isn't all that hard to update if you understand how to update it.
