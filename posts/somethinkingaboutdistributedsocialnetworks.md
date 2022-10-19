---
title: Some thinking about distributed social networks
publish_date: 2022-10-19
---

Decentralized/Distributed/Federated social networks are all of the rage these days, but what makes them work? How can we build a better one? I've been thinking about these things for more than ten years now, and while my code might only be a little better than it used to be I do think that my thinking is somewhat valid on the subject.

Social networking applications do a very simple thing that is perhaps overrated. You log into them, and then you post some stuff, and then it shows up for your friends. In the beginning your friends would see the things and then they could reply to them, but every social networking app eventually changes that friend feed to an algorithmic feed that takes the replies from your friends and sends them to /dev/null or wherever and then replaces them with advertisements for Fox News and whatever the latest political rhetoric about CovID+++ is this week. Btw has anyone had a taste of the XBB variant yet? Or the BA.2.75.2? I wonder if the Sputnik-5 will protect against that! If not I'm sure we can cook up something here in the west that will solve whatever is plaguing you. 

We all know the story that social networking was really cool ten years ago, but now it is mostly bots trying to make centralized social networks look active, so that old people keep logging in. But how do we build a distributed social network?

Well, the biggest challenge is of course picking a protocol that we can all agree on. If we can't agree on the protocol then how can we all build apps that parse the messages?

So people develop protocols such as ActivityStreams and SSB and IPFS and they get a little traction but then people complain that IPFS is really slow for some reason and SSB serializes the JSON object before it signs it, and your Mastadon instance works very well until your maintainer turns it off because they can't pay their VPS bill anymore and then you are suddenly rebuilding your social network on another instance.

Currently there is not really a great consensus on what the best protocol for a distributed social network is going to be. I'm personally leaning in the direction cryptographically signed data, and leaning away from signing objects. This is why the Bogbook protocol is... from the README:

```
### The Protocol

Messages are sent around using this protocol format:

<ed25519 Public Key><Signature>

which opens to a string that contains

<timestamp><ed25519 Public Key><Previous Post Hash><Data Hash><Post Hash>
```

I think this is pretty easy to implement in all kinds of languages, but I've only coded it up in JavaScript because that is all that I know and/or have time to do right now. 

Now the general sense in the distributed social networking space is that signing message _has_ to be done because you have to guarantee the integrity of the message if you are going to pass it around all over the place. Otherwise people will start editing your messages to make them say different things than they did before. Because of the signed message I can have some sense of trust that my message is going to be distributed and no one is going to modify it.

Linking back the previous post gives us some sense of whether we have a complete idea of what the person posted. If a message isn't coming through and is blocked by a provider we can then reach out to other providers and try to get the message in other ways. In a network of 100 servers even if a message gets shadowbanned by 99 of them that last server might not take any action because they are more open minded or they just don't pay attention or whatever their reason. 


And then if are using signed messages then we can link to those messages via a hash of the post and that'll give us another way to look up the message.

Now it's true that decentralized social networks can work without any sort of cryptographic element in the protocol, and the Mastadon family of social networks is the current example of that working, but it means that most of the moderation/curation power is in the hands of server admins instead of users and that is a big burden for a server admin especially all of the GNU-y vegetarian folks who live on cheese sticks and scavenged acorns and berries to have to handle. Big corporations are great at maintaining big data sets because they have lunch rooms the serve vegetarian banquets at all hours of the day and night, and that is why everyone eventually migrates to big corporations because their programmers are eating fresh meat sandwiches all day and sipping on coconut juice straight out of a coconut that was just flown in from Bali that morning via a private rocketship.

Now I've seen a lot of people try to implement distributed social networks over the years, and I can tell you that you _need_ the crypto. You just cannot avoid the crypto. But that is my own opinion of course.

Ok, that's enough talk for now. I've been blogging for an entire month and I need to take a nap.

+ 

If you want to receive updates then write an email to be with the word SUBSCRIBE. My email is: [ev@evbogue.com](mailto:ev@evbogue.com)  
 
