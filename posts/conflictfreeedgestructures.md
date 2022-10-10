---
title: If you want edge computing you have to think about conflict-free data structures
publish_date: 2022-10-10
---

Ok, so Edge Computing is very cool and the next new thing right now. The trouble is that everyone is complaining that their centralized SQL database is not so optimized for The Edge.

And yes, it's true, if your program software deploys REALLY FAST IN JAPAN but your database is in Virginia then you have to wait for the database queries to load and that kind of makes the whole concept of Edge Computing into a CDN for your JavaScripts if you do not know what you are doing. 

However, I think there is another way to look at it that makes things much more useful to everyone. 

First of all, calling it Edge Computing is kind of trendy but inaccurate. Clouds are in the sky, and do not contain computers, and there is an edge on my dull knife and I need to sharpen it but putting a program that starts VERY FAST IN BERLIN! and directs JavaScripts to the pocket of a person's phone in Mitte is not really an edge. And a JavaScript isolate is not really a CDN, it is a browser tab that is being launcher closer to Berlin than my browser tab is being launched. 

And maybe we do not have the best wording for this type of software yet. p2p is kind of tired and old and smells of GNUtella. IPFS is boggier than bog book, and will not reach Mars anytime soon. 

So I do not know what to call the browser engine that launches closer to your browser tab, but I do know that what we need to be thinking about with this kind of software is conflict-free data structures. Because if you have browser tabs all of the world, loading browser engines all over the world, then we need to think less about a centralized sense of state and more about a distributed world.
