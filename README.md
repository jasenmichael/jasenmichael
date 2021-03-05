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
- site cross posting?
  - jm - personal, tech, non-profit, building
  - rb - building
  - t512 - tech
- move admin.html to .vue

---

page schemas:

blog

- title
- description
- author
- cover
- content
- category - tech, non-profit, bulding, personal
- subCategories
  - tech
    - seo
    - web development
    - app development
    - linux
    - open source
    - nuxt
    - vue
    - netlify
    - tailwind
- tags

projects

- title
- description
- author
- url
- codeUrl
- tags
- technologies

photos

- photo
- author
- caption

---

social media posts scheduler

needs a posts record or past posts

runs at scheduled times - peak and late
also runs when a new post is made
there are 2 types of posts(for now) links(blog) and images(gallery)
all links are pages on the site
all images are also on the site in a gallery(category) - nerd - build - photos - art

---

when a post(or multiple posts) is made, or a scheduled post -> it triggers a build

preBuild.js does =>

- run add social_posts, adds to top of queue
  - loads social_posts.json
  - gets all content posts if (queued && post_to_social && !published)) && not already in social_posts
  - add to queue
  - change file json - queued, post_to_social, published)
- run queue

---

generate post_to_social.json
--- get all content photos with -
--- read social.json, add tiems not already in file

post -- runs prebuild post script
---- gets all posts
---- make post
---- scheduler
--- get posts only (queued && post_to_social && !published), sort by created
--- change queued && post_to_social && published

     zapier runs trigger if posts_to_social data changed
