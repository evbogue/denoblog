---
title: How to make my phone buzz with an encrypted message
publish_date: 2022-11-21
---

Sorry I haven't updated my blog! I know, it's been awhile.

I got an email from my domain provider and they were telling me that wiredove.net was expiring very soon. And I'm the kind of person who doesn't like to spend money on a domain name and then not do anything with it, so I had to put off the blogging and do some coding inbetween all of the working to get something launched that would make paying another year of domain name servcice worth it.

So behold, https://wiredove.net/

Yes, it isn't quite as polished as https://bogbook.com/ which you are all very familiar with.

What does Wiredove do?

It generates you a secret keypair, which is slightly different than the signing keypairs that you are used to on bogbook. And then you can post a message directed at a public key!

To do this we've partnered with https://ntfy.sh/ to provide a classy way to make your phone buzz. All you gotta do is install the ntfy app on your cellular telephone, subscribe to the wiredove channel, and you will receive all of the encrypted messages.

Next, you click on the links and https://wiredove.net/ will attempt to decrypt them. If they are not for you, the decryption will fail and you will see nothing. If they are for you, you will see a message. 

The client sends a message to you, and a message to the person who you are trying to reach. So you will also see all of the messages you are encrypting towards other pubkeys.

Anyway, the UX isn't quite worth talking about yet, but at least I've put something at https://wiredove.net/ so I can justify paying for the domain name for another year.

https://wiredove.net is hosted at https://deno.com/ but is really just a website that sends fetch requests to ntfy. In the future we will partner with Deno's BoardcastChannel API and also send messages that way so you don't have to click them if your client is running. 
