---
title: How to save Twitter (and the rest of the (con)fediverse)
publish_date: 2022-10-27
---

There is a lot of talk about saving Twitter these days, and much of it is warrented. If the only people who get any attention are people with radical far right views and/or radical far left views and everyone in the middle get blocked or deplatformed, then how is that a place that anyone feels safe to speak?

These are not new questions, and I have not new answers, because I have been thinking about these questions since I got the boot off Google+ for talking about an open source technology that everyone knows about now.

Soooooo, what can be done about Twitter or social media in general?

I think we need to transition to an open protocol, and there are a lot of people designing these things right now, but many of them don't work very well, so we need more people to design them. Eventually we will find one that works really well, and then everyone can log out of Web 2.0 forever and never look back.

Now, one thing that most people aren't thinking about is data portability. Data portability isn't about API endpoints in a centralized server. In my view data portability is about designing a message format that is portable. Your message should be able to exist everywhere, and everyone should be able to confirm that it came from you.

We need to get beyond the current state of, what I call, the confediverse, where the admins of instances such as Mastadon and Twitter and some other places can just delete someone's account and they are suddenly without any of these messages, their followers, and their "private" chats.

Then there is the issue of all of these "federated" instances trying to control messages at the borders. This is why I find myself refering to the current state of things as the confediverse, because often times you have no guarantees that if you post a message on one platform that it will show up on another platform. For example, Twitter blocks everyone except Twitter. Facebook blocks everyone but Facebook. Mastadon calls itself Federated, but if an instance begins to get known for having some sort of bias then the whole instance becomes blocked instead of just a couple of users.

I think we are smart enough as individuals to know when someone is saying stupid shit, but right now these social media companies are media and publishing companies. To escape from the media world you need a portable message format that makes it possible to view the message anywhere using any program. This way an embed of a post is actually the post, and not a link to a specific web application that is showing you the post.

Bogbook does this by focusing on the message protocol instead of the API endpoints. 

From the [README](https://git.sr.ht/~ev/bogbookv3) [git.sr.ht]


Messages are sent around using this protocol format:

```
<ed25519 Public Key><Signature>
```

which opens to a string that contains

```
<timestamp><ed25519 Public Key><Previous Post Hash><Data Hash><Post Hash>
```

And from that we create a message object:

```
{
  timestamp: <timestamp>,
  author: <ed25519 Public Key>,
  previous: <sha256 hash from previous post>,
  data: <sha256 hash of post data>,
  hash: <sha256 hash of post (ts, author, data)>,
  raw: <timestamp><ed25519 Public Key><Previous Post Hash><Data Hash><Post Hash>
}
```

This means if you have this message saved on your computer, and you have the software to open it up, then you can view the message.

But what do we lose here by focusing on this? The ability to track people as their messages reach their audience. Does the audience want to give up tracking? Yes of course they do. But do the people with all of the wealth and the power? Nope. They want to ride social media until no one posts anymore and they have to turn the lights out because everyone has sold their shares and the money has gone somewhere else.

