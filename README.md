# Deno Blog

A simple dynamic Deno blog generated with just two lines of boilerplate and a config object!


Write an `index.js` file

```
import { blog } from './blog.js'

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

and start it with `deno run --allow-all index.js`


---
MIT
