---
title: How to make a new website using Deno's Fresh
publish_date: 2022-10-21
---

Since I was a small child, I always wanted island-based hydration in my website. Back in the 90s when DHTML was a thing, all I wanted to do was push a little bit of code from the server to the browser and then have it rendered in only part of the screen.

Well, actually I didn't really want island-based hydration when I was a kid because I'd never heard of that. But that is what Fresh does, and I am an elderly developer now, so I thought I'd try it and see if it works.

So I went to the fresh website... https://fresh.deno.dev/

and since I already have the latest version of Deno, I was able to 

```
deno run -A -r https://fresh.deno.dev my-project
cd my-project
deno task start
```

The terminal asked me some weird questions like Do I want Tailwind CSS? (Not really, but I'll try it) And do I use VSCode? (Nope, Vim. Is there another text editor?)

And now I am running a Fresh app at http://localhost:8000/ Wow! It works.

I decided to poke around in the project file and found some boilerplate. There are folders called `routes` `components` and `islands` and upon opening and shutting those folders and files I discovered that Fresh is pretty opinionated out of the box. 

There is some Preact, some Tailwind, and then there is a counter that ticks up and down within "an island". 

The app reloads every single time I open a file in Vim and shut a file in Vim, because Vim creates a `.filename` file to save file changes before you actually save them just in case your computer powers off and you were in the middle of something. So that is how I discovered that Fresh has a builtin hotloader, which will save everyone a lot of `ctrl-c`ing and `deno task run`ing of their app. 

I guess the islands thing is kind of cool, but I'm a little unclear about how it works if I were to want to implement it myself. 

I guess I can ship a DOM element rerender into the frontend from the server? I'm trying to think about why I'd want to do that, and nothing is coming to mind. Maybe I just don't get the usecase yet.

Well anyway, if you want to make a new Fresh website, you now know how to do it too.
