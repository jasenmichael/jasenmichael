# jasenmichael.com

## my personal website - built with Vue.js and Nuxt.js ❤️

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

- [ ] crete page schemas
- [ ] crete siteData schema
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

- cloudinary
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
