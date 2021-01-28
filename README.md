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

---

sites:
jasenmichael

- header
-

- https://jobs.dorfjungs.com/

tech512

- header
- about
- our services
- contact
- our work
- footer
- https://www.templatemonsterpreview.com/demo/71322.html?_gl=1*1hqwatl*_ga*MTA1MjA3NjYyMi4xNjExNzU4OTgy*_ga_FTPYEGT5LY*MTYxMTc1ODk4Mi4xLjEuMTYxMTc2MTU4OS4zNg..&_ga=2.122076936.2032882820.1611758983-1052076622.1611758982

ready-builder

- header
- about
- our services
- contact
- our work
- footer
- https://www.templatemonsterpreview.com/demo/67292.html?_gl=1*1gdd6ro*_ga*MTA1MjA3NjYyMi4xNjExNzU4OTgy*_ga_FTPYEGT5LY*MTYxMTc1ODk4Mi4xLjEuMTYxMTc2MDUzNy41MQ..&_ga=2.160283326.2032882820.1611758983-1052076622.1611758982
