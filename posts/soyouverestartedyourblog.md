---
title: So you've restarted your blog. Now what?
publish_date: 2022-09-23
---

It is a cold Friday in September and Autumn is beginning to be clearly here. The leaves haven't quite fallen off the trees yet, but the iced coffee has been traded in for hot coffee which is much easier to prepare than icing hot coffee by the way. Yes, I know you can coldbrew iced coffee, but try to get me to look ahead into tomorrow and see how much that works these days.

After five days of writing your blog is restarted. Now what? On Monday you have to show up and keep your blog going again.

There are many theories for how to keep your blog going that have proliferated across the Internet over the eras. You can just keep writing things into it and hope that it keeps going. You can hire someone to keep writing into it for you, and then sent them stern emails when they write boring blog content. You can get a group of friends together and start a group blog where everyone writes once per week. You can start a software project and then use new releases as an excuse to update your blog for the software project. You can start blogging about whatever is in the news today (probably CovID these days) and you can just offer some partisan political commentary on whatever politicians said this week.

Whatever the strategy, it will really help if you show up to your blog on Monday and start blogging again. 

But there is so much more to blogging, of course. There is the endless controversy about whether to offer blog comments or not. A blog without comments is a blog without comments. But once you offer a commenting system then you give a forum to your admirers, haters, and trolls. Often these are all the same people. And don't forget spammers. Spammers love a good commenting system.

So as much as blogging platforms have been redesigned over the years, in turn has commenting systems changed. Back in the day you just let people type into a text box and hit submit, but then that didn't work so well anymore so everyone switched to a Startup to keep their comments for them and embed the Startup on their blog. But then the startup started locking people out and/or showing advertisements on your blog! Because every Startup eventually sells out and becomes a spammer and the more embeds the spammer has to spam the more spam they will be tempted to generate. 

And then social media came along, and we all know how that went.

Someone had the idea of making bogbook into an embeddable commenting system. Such as 

```
<div id='bogbook'> 
<script src='bogbook.js'>
import { bogbook } from './bogbook.js'

const container = document.getElementById('bogbook')

const path = document.location.href

const bogbook = new Bogbook(path)

container.appendChild(bogbook)

</script>
```

Or something like that. It'd require a little bit of a refactor to work outside of an iframe.

And then just let people comment on Bogbook inside of your blog. I think that can work. Would you use it?

Regardless, the blog won't keep going if I don't keep going with it. And if you don't read it, then there will be no one to read the blog.

Once a blog is started a person inevitably has to think about keeping his blog readers happy, and increasing the number of blog readers until there is a sustainable readership. It'll be interesting to see if a person can create a sustainable blog readership in this current media and tech environment. Often times I'll be told that people only want to watch five second video clips these days, but I'm sure they said the same thing about my generation only having the attention span to write 140 character posts. I imagine everyone is so bored right now that reading a lot of words isn't such a huge hassle. And as much as they continue to say that the world population all died out in 2020, whenever I am out as much as a ghost town America's major cities appear to be these days there are still some people out there and all of them seem to have the technology in their pocket to read a blog. 

But getting people to read your blog is of course the challenge of blogging. For as many blogs as have been created, probably 99% of those blogs never got a single reader. And 99.9%% of those blogs never restarted after a weekend of rest and relaxation otherwise known as working and working and working.

-

So what do you think? Drop me an email at [ev@evbogue.com](mailto:ev@evbogue.com) and if you want to subscribe then send your email with the all caps subject line 'SUBSCRIBE' and you will be forwarded to the space in front of my eyes and I will add you to a file where I keep a list of all of the email addresses and whenever I post a new post I will right now write you a hand written note asking your to please come read my new piece.
