import { parseAll } from "https://deno.land/std@0.149.0/encoding/yaml.ts"
import { serveDir } from "https://deno.land/std@0.149.0/http/file_server.ts"
import { serve } from "https://deno.land/std@0.149.0/http/server.ts"
import { walk, walkSync } from "https://deno.land/std@0.149.0/fs/mod.ts"
import { render } from "https://deno.land/x/gfm/mod.ts"

const routes = ['']

const headers = {headers : {"content-type": "text/html; charset=utf-8"}}

let linklist = ''

let postStore = new Map()

let posts = []

let postnames = []

let homepage = {
  title: 'Posts',
  markdown: 'List of posts goes here'
}

for await (const entry of walk('./posts/')) {
  console.log(entry.path)
  if (entry.name.endsWith('md')) {
    const post = await Deno.readTextFile(entry.path)
    const parsed = parseAll(post)
    parsed[0].content = parsed[1]
    const split = entry.name.split('.')
    parsed[0].markdown = '<p>' + parsed[0].publish_date.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + '</p>' + render(parsed[0].content)
    parsed[0].name = split[0]
    posts.push(parsed[0])
    postnames.push(parsed[0].name)
    postStore.set(parsed[0].name, parsed[0])
  }
}

let listposts = ''

for await (const post of posts) {
  listposts = listposts + '<li><a href="/' + post.name + '">' + post.title + '</a> — ' + post.publish_date.toLocaleString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) + '</li>'
}

homepage.markdown = '<ul>' + listposts + '</ul>'
postStore.set('/', homepage)

async function genlinks (links) {
  for (const link of links) {
    linklist = linklist + '<li><a href="' + link.url + '">' + link.title + '</a></li>'
  }
}

function handle (config, postname) {
  console.log(postname) 
  const post = postStore.get(postname)
  console.log(post)
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
    <a href="/"><img class='profile' src=${config.avatar || 'https://deno-avatar.deno.dev/avatar/blog.svg'} /></a>
    <h1><a href="/">${config.title || 'My Deno Blog'}</a></h1>
    <h6>${config.description || 'This is my blog description.'}</h6>
    <hr />
    <ul>${linklist || 'Links'}</ul>
    </div>
    <div class='col eight off-one'>
      <h2>${post.title || 'Posts'}</h2>
      ${post.markdown || 'Post list should go here'}
    </div>
  `
  return head + content + foot
}

export function blog (config) {
  //genposts('./posts/')
  if (config && config.links) {
    genlinks(config.links)
  }
  serve(req => {
    const url = new URL(req.url)
    const postname = url.pathname.substring(1).split('.')[0]
    if (url.pathname == '/index.html' || url.pathname == '/') {
      return new Response(handle(config, '/'), headers)
    } else if (postnames.includes(postname)) { 
      return new Response(handle(config, postname), headers)
    } else {
      return serveDir(req, {fsRoot: '', showDirListing: true, quiet: true})
    }
  }, {port: 8000})
}

