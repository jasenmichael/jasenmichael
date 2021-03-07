# jasenmichael.com

## my personal website - built with Vue.js and Nuxt.js ❤️

[![Netlify Status](https://api.netlify.com/api/v1/badges/31e20aa5-ce4b-4564-86c9-edbe6617256e/deploy-status)](https://app.netlify.com/sites/jasenmichael/deploys)

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

todo:
technologies:
html5 and semantic html, css flexbox grid animations transitions responsive design. node and javascript es6, rest apis, graphql.

- [ ] complete about
- [ ] complete blog
- [ ] implement auth
- [ ] implement cms
- [x] create sitemap
- [ ] connect sitemap to zapier

- [ ] create page schemas
- [ ] create siteData schema
  - [ ] profile
  - [ ] title
  - [ ] description
  - [ ] links
    - [ ] label
    - [ ] url
    - [ ] handle
    - [ ] icon
- [ ] create pages and slug pages
  - [ ] blog
  - [ ] images
  - [ ] projects
- [ ] create page/slug script
- [ ] implement contact form
- [ ] implement netlify cms
  - [ ] add admin.html
  - [ ] add scopes to config
  - [ ] add cmsProxy script for dev
  - [ ] dns stuff for domain

to add features:

- [ ] cloudinary
  - origin only
- move admin.html to .vue

---

social media posts scheduler

needs a posts record or past posts

runs at scheduled times - peak and late
also runs when a new post is made
there are 2 types of posts(for now) links(blog) and images(gallery)
all links are pages on the site
all images are also on the site in a gallery(category) - nerd - build - photos - art

---

when a post(or multiple posts) is made, or a scheduled post -> it triggers a build and runs preBuild.js

preBuild.js does =>

- run add social-[posts], adds to top of queue
  - loads social-[posts].json
  - gets all content posts if (queued && postToSocial && published)) && not already in queue (social-[posts].json)
  - add to queue (social-[posts].json)
  - change content file (json/md) - (!queued, !post_to_social, published)
  - does nothing to queue if no new social-posts
- run queue

---

zapier scheduler runs build at times

- this will add items to queue
  zapier posts to social media if social\_[posts].json has new items
