---
title: The shape of social networks
publish_date: 2022-11-04
---

And of course Twitter is the news today. What else can I say about Twitter?

I think eventually we will run out of things to say about Twitter.

It's an app with a bird. It's an office on Market Street that I never saw anyone go in or out of. You post 140 char (or maybe it is longer now) Twits and they may or may not be seen by others. It's microblogging, and as everyone keeps saying it is just like ActivityPub/Mastadon but people can't read your Twits on Mastadon.

A lot of what I've read about Twitter has surprised me in that most people who are writing about it are writing as if they felt empowered to express their political views on Twitter and now are afraid they will be cracked down upon because they think their political views and Elon's political views are somehow in conflict. 

I can't find much to disagree with Elon about, so I guess I would do well to join Twitter! But I also think that the future of social networking is not going to be Twitter and that we should keep building a future of social networking instead of spending all of our time reading WSJ stories about how Elon is reshaping Twitter to be what he wants it to be. 

What am I saying? 

Social networks need to be better at handling political disagreements of various sizes. Mastadon's are great, until you disagree with the person who runs the Mastadon instance, and then you are going to be banned, lose all of your friend connections, and you have to start over from scratch. And all of the far left Mastadons block all of the far right Mastadons, so if your instance drifts too far to the left or the right then you can expect your posts to stop showing up in the other direction.

Disagreements can be more than just political, as a programmer I can tell you that I've had disagreements about the implementations of things and that can bend a social network out of shape too.

The first thing we should think about these days when engineering a social networking platform is how can we allow people to continue using the platform even when disagrements are happening.

I've come to the conclusion that we need to start with a portable messaging format first, and then begin building around that messaging format. 

Twitter started this way with the 140 character message, and then they let everyone have access to it, and then they decided to regulate that access until you had to go to Twitter to get at the message. So if you read something in the WSJ about what Elon Tweeted, chances are they will screencap the Tweet just in case it goes away.

So how do we build a portable messaging format that allows us to authenticate who wrote the message, and also verify the contents of the message is valid?
