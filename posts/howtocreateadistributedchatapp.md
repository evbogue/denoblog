---
title: How to create a distributed chat app in a couple lines of Deno Deploy
publish_date: 2022-11-03
---

Deno Deploy has a pretty cool feature that I don't think a lot of people are using yet. I use it in Bogbook, which is hosted on Deno Deploy. But I think the most famous example is: [mini-ws-chat](https://dash.deno.com/playground/mini-ws-chat) 

This sends a chat message to all of the subscribed clients on all of the servers at The Edge of the Deno Deploy cluster. 

Bogbook uses this feature as a message relay, so when someone posts a post or requests a post it is relayed around to all of the connected peers all over the globe to see if anyone has it.

```
import { listenAndServe } from "https://deno.land/std/http/server.ts"
import { serveDir } from "https://deno.land/std@0.144.0/http/file_server.ts"
import { addSocket, rmSocket, gossipMsg } from './gossip.js'

const channel = new BroadcastChannel("")

channel.onmessage = e => {
  (e.target != channel) && channel.postMessage(e.data)
  gossipMsg(e.data)
}

await listenAndServe(":8080", (r) => {
  try {
    const { socket, response } = Deno.upgradeWebSocket(r)
    addSocket(socket)
    socket.onmessage = channel.onmessage
    socket.onclose = _ => rmSocket(socket)
    return response
  } catch {
    return serveDir(r, {fsRoot: '', showDirListing: true, quiet: true})
  }
})
```

And you'll also notice it also serves the static html parts of the program.

Let's see if we can program the same thing as `mini-ws-chat` but use the new Deno.serve() command because it is faster than Bun, eh?

First we'll write a Deno server.

```
Deno.serve((req) => {
  console.log(req)
})
```

And then we want to serve a simple website that has a text box we can type into, similar to the `mini-ws-chat` app but in JS because I still haven't figured out why people use TypeScript.

```
const headers = {"Content-type": "text/html"}
const html = `
  <script>
    let ws = new WebSocket('wss://' + location.host)
    ws.onmessage = e => pre.textContent + = e.data + '\\n'
  </script>
  <input placeholder='Type something' onkeyup="event.key=='Enter'&&ws.send(this.value)"><pre id=pre>`

Deno.serve((req) => {
  return new Response(html, {headers})
})
```

This will serve a little website that has a text box that you can type things into and hit Enter.

Next we want to plug that into Deno Deploy's BroadcastChannel API

```
import { listenAndServe } from "https://deno.land/std@0.144.0/http/server.ts"

const sockets = new Set()

const channel = new BroadcastChannel("")

const headers = {"Content-type": "text/html"}

const html = `
  <script>
    let ws = new WebSocket("wss://" + location.host)
    ws.onmessage = e => pre.textContent += e.data + "\\n"</script>
    <input onkeyup="event.key=='Enter'&&ws.send(this.value)"><pre id=pre>
`

channel.onmessage = e => {
  (e.target != channel) && channel.postMessage(e.data)
  sockets.forEach(s => s.send(e.data))
}

await listenAndServe(":8080", (r) => {
  try {
    const { socket, response } = Deno.upgradeWebSocket(r)
    sockets.add(socket)
    socket.onmessage = channel.onmessage
    socket.onclose = _ => sockets.delete(socket)
    return response
  } catch { 
    return new Response(html, {headers}) 
  }
})

```

And in the midst of that I realized that Deno's new serve() API doesn't work on Deno Deploy and BroadcastChannel does not work without Deno Deploy so I had to rewrite a little bit of the code.

So anyway, that is how you use Deno Deploy's BroadcastChannel API to create a tiny chat server that will send messages to peers at all of their edge servers deployments. And yes it is pretty much just a fork of that `mini-ws-server` linked above. When the new server API is available on Deno Deploy I'll revisit this example and try to make it as terse as I was trying to in when I began writing this article.
