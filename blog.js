import { serve } from 'https://deno.land/std@0.137.0/http/server.ts'
import { serveDir } from "https://deno.land/std@0.144.0/http/file_server.ts"
import { listenAndServe } from "https://deno.land/std/http/server.ts"

const routes = ['']

const headers = {headers : {"content-type": "text/html; charset=utf-8"}}

let linklist = ''

function genlinks (links) {
  if (links.length) { 
    links.forEach(link => {
      linklist = linklist + '<li><a href="' + link.url + '">' + link.title + '</a></li>'
    })
  }
}

function handle (config, url) {
 
  const head = `
    <html>
      <head>
        <title>${config.title || 'My Deno Blog'}</title>
        <link rel='stylesheet' href='./reserva.css' type='text/css' />
      </head>
      <body style="background: ${config.background || '#fff'};">
      <div class='contain'>
  `

  const foot = `<div class="col twelve"></div></div></body></html>`

  const content = `
    <div class='col three'>
    <img class='profile' src=${config.avatar || 'https://deno-avatar.deno.dev/avatar/blog.svg'} />
    <h1>${config.title || 'My Deno Blog'}</h1>
    <h6>${config.description || 'This is my blog description.'}</h6>
    <hr />
    <ul>${linklist}</ul>
    </div>
    <div class='col eight off-one'>
      <h2>Posts</h2>
    </div>
  `
  return head + content + foot
}

export function blog (config) {
  genlinks(config.links)
  listenAndServe(':8000', (req) => {
    const url = new URL(req.url)
    if (url.pathname == '/index.html' || url.pathname == '/') {
      return new Response(handle(config, req.url), headers)
    } else {
      return serveDir(req, {fsRoot: '', showDirListing: true, quiet: true})
    }
  })
  //serve(() => new Response(handle(config), headers))
}

