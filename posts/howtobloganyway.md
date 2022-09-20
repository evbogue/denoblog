---
title: How do you blog anyway?
publish_date: 2022-09-20
---

Take a deep breath in and smell the fresh morning pour over coffee, it is time for another blog post.

I have decided that the only way that I am ever going to blog is if I make a habit of doing it every single day. Though perhaps only Monday until Friday. Because I am a busy person, and I am doing a lot, and if I do not blog every single day then I might as well not blog at all.

Isn't that your own experience? You stopped blogging once upon a time, and then you never started blogging again. Perhaps once in awhile when you feel the winter chills wafting through your still open windows and you feel the urge to run out into the fields and gather the fall harvest as if we still do that kind of thing, and then you realize that you have not blogged all that much this year or in the last year or even the year before.

Then you begin to wonder if blogging is even a thing anymore? Perhaps we have moved far beyond blogging and the only thing anyone cares about on the Internet is the 140 char messages from celebrities and politicians.

But no, blogging will not go away, it is you and I who have stopped blogging and never sat down on our writing stool to begin blogging once again. The blog will be a blog as long as you have an Internet to blog over. The only thing will change is the number of bloggers who flock to well funded centralized blogging platforms for a few years, and then flock back to their own domain names in a never ending cycle of bloging death and rebirth. The lights will never go out on the Internet, and thus blogging will live forever whether it is in a SQL database at one datacenter, or in a Git repo replicated across the Internet.

But how do you blog anyway? I've compiled a list of handy tips to get us all started again.

+ One. Choose your blogging platform. 

Ten years ago I got booted off a social media platform for writing about things that product managers in the bay area did not like to hear about, and in response I decided to learn how to code. It took me ten years! That seems like a long time, and I'm sure that my coding is still not very good, but the more I coded the more I began to realize that it is not that hard to write a blogging platform. In fact, if you want to copy mine it is open sourced and you are welcome to just clone it down and fork it, or use Deno to import my blogging platform straight from my own website!

```
import { blog } from 'https://evbogue.com/blog.js'

blog({
  title: "Ev's Blog",
  avatar: 'https://avatars.githubusercontent.com/u/2468866?v=4',
  author: 'Everett Bogue',
  description: "Restarting my blogging career one commit at a time",
  background: "#f5f5f5",
  links: [
    { title: 'ev@evbogue.com', url: 'mailto:ev@evbogue.com'},
    { title: 'Bogbook', url: 'https://denobook.com/#ELwPcMFe0kRF9luXO7qDSKXsiCOuQR27JT23L3gz3AE='}
  ]
})
```

Is really all there is to this blog.

+ Two. Sit down and write your blog post. 

Blog posts do not write themselves, and when they are writing themselves they sound like made up concatenated sentences spit out of a codebase that is designed to make you think that you are reading something meaningful. Real meaning comes from real people writing real blog posts and your blog post will only be written if you sit down to write it.

Now some people think that they should wait until they have a good idea to sit down and write, but I don't believe that is true at all. The more you write the better your ideas will become, even if that means subjecting your readership to some bad blog posts that they don't like. 

Eventually, if you write enough, you will hit on a good idea that makes people want to send your blog post to someone else.

Come to think of it, if you want to go ahead and send this blog post to someone right now. Pick the person, copy the URL or turn it into a QR code or whatever and then share it with a friend. Ask them what they think about my writing and/or my profile photo. Bonus question: do you think I am a decent coder? Because if you don't I would like to see a pull request.

+ Three. Hit publish on the post.

Your blog post will not hit the Internet if you do not hit publish on the post. Hit the publish button, or `git add file.md` or whatever it is that you do to make a new blog post go live, and then send it out into an edge deployed network or centralized blog company or your cellular telephone if you are hosting your blog on your cellular telephone. Speaking of which, that seems like a kind of novel thing to do even if it might be a little slow. 

Regardless, if you do not publish your post then no one will ever read your post. And if you only publish once last year, then every time I come to your blog I will have nothing new to read. 

+ Four. Come up with some way to interact with your readers. 

This is the hard part! These days it is so hard to figure out how to interact with people over the Internet. Do you get on IRC? Because no one seems to be on there anymore. Tweeter? Seems to be full of bots. Every programming project these days seems to have a Discord chat room full of people who are trying to get a little funding for their own pocketbooks. Do you use a commenting system? How do you prevent spam!? These are all things you can think about _after_ your publish your blog post and not before.

Perhaps you can follow me on Bogbook! That works, and I made it. Then you can post your reactions over there until I can figure out how to write embeddable bogbook.

+ Five. Choose your profile photo.

Your profile photo can be from ten years ago, but I bet you are older now than you were back then. But how often do you update your photo? Should your photo be professional, boring, or provocative? Maybe take a quick selfie, and then throw a black and white filter on it. Regardless, a photo of you lets us know that you are real. At least unless your photo is an AI-generated combination of three other people's faces, which is what a lot of Internet comments are made out of these days as far as I can tell. 

Choosing your profile photo may take some work, but that is also work you can do after you hit publish on your latest blog post.

Six. Tweak your stylesheet.

After you post, then you can tweak your stylesheet. Just don't do it too much, because if you can't keep your stylesheet simple then you might as well have no styles what so ever.

Seven. Do it all over again the next day.

See you tomorrow Internet.

-

If you enjoyed reading this post, please send me an email to [ev@evbogue.com](mailto:ev@evbogue.com) with the words "SUBSCRIBE" in the subject line. I will write you a handwritten email every time I write a post. 

Come to think of it, that may get exausting in the future. If the list gets too big I will write a program that sends you an email notifying you that there is a new blog post. But for now, I have so few subscribers that this will be an acceptable strategy. If I talk to you directly then perhaps you will talk back? I imagine you will, and then we can build some kind of distributed blogging network between our blogs.
