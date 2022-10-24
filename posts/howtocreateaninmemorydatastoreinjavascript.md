---
title: How to create an in-memory datastore in JavaScript
publish_date: 2022-10-24
---

All week I've been wondering how I can come up with a narrative arc of posts that I can iterate over for a couple of days, so I'm not constantly trying to think of what to write about. 

And since tech and programming is the topic that I get the most complaints about from my 100 to 1000 readers (most of whom are probably bots) I decided to write about data structures!

So today, we're going to talk about creating a very simple datastore in JavaScript.

Programmers everywhere do not want you to learn this kind of thing, because once you know how to get something out of a database, store it in memory, and then render it somehow then you are in the 1% of programmers in the world. It took me a long time to figure out that almost no one explains this stuff, and then one day I realized why: job security. Now, with CovID+++ no one has job security anymore so you should learn this so you can occupy all of those empty offices in downtown San Francisco with your butt once tech companies start hiring again.

So let's start with how to create an array.

```
const array = []
```

Simple enough right?

Ok, we can argue a little about how to do this. Like maybe we are old skool and we want to use `var` instead of `const` I mean why not. Or we can use `let`. Why not. If it works, then use it.

```
var array = []
```

This creates us an empty array.

And now we want to put something in the array.

```
array.push('Hello')
```

And then console.log the array 

```
console.log(array)
//[ "Hello" ]
```

Congrats, you have pushed something to the array.

Now let's push something else

```
array.push(' world!')
console.log(array)
// ['Hello', ['World!']]
```

How do you run this stuff? In the browser, in Deno, in Bun, in Node. It all works the same regardless of the runtime.

Tomorrow we'll talk more about this concept and how to expand upon it to build your own applications in the future that possibly change the world.
