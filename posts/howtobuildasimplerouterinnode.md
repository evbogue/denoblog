---
title: How to write a simple router in Node.js
publish_date: 2022-10-15
---

And here is how you do the same thing that we did in [Deno](./howtobuildasimplerouterindeno) and [Bun](./howtobuildasimplerouterinbun) written for Node.js.

```
const http = require('http')

http.createServer(function (req, res) {
  if (req.url == '/ev') {
    res.end('Oh hey Ev!')
  } else {
    res.end('Hello from Node!')
  }
}).listen(3000)
```

Can you tell me a little more about why this example is different?
