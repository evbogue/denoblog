import { blog } from './blog.js'

blog({
  title: "Ev's Blog",
  avatar: '../ev.jpg',
  author: 'Everett Bogue',
  description: "Restarting my blogging career one commit at a time",
  background: "#f5f5f5",
  links: [
    { title: 'ev@evbogue.com', url: 'mailto:ev@evbogue.com'},
    { title: 'Bogbook 💻', url: 'https://denobook.com/#ELwPcMFe0kRF9luXO7qDSKXsiCOuQR27JT23L3gz3AE='}, 
    { title: 'Bogbook📱', url: 'https://denobook.com/#exBPL9n3OYcwjz0jH7xArUn5jiOfsa3hLUKF1ucgZok='} 
  ]
})
