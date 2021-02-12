---
title: Wordpress the state of in 2021
description: Should I keep using it, should I migrate?
cover: https://source.unsplash.com/collection/1346951/1000x500?sig=6
category:
tags: []
author: jasenmichael
avatar: https://avatars.githubusercontent.com/u/30030129?s=60&v=4
published: false
---

### Q: should I keep using it, should I migrate?

### A: yes(for now) and yes

---

### Some of the know issues and reasons to consider other options, and migrating over time.

#### Plugins:

- cause less understanding of code, and cause you to become dependent on them for basic features.
- Anyone can make and sell plugins, but are not officially part of WP or made by WP, these 3rd parties charge money, often collect your users' data, and poll your db when no users are even visiting your site..

---

#### Upgrades:

- although when first learning WP with cpanel and a shared hosting plan (with something like - hostgator, godaddy, or bluehost) Upgrades are advertised as one click, but in reality, things break.

---

#### Updates:

- along with upgrades, there are periodic(like weekly) updates that fix bugs and security issues. If you just update without a staging environment you will get errors and crashes.
- The key to WP development is a development environment for testing, adding new features, and then migrating into production. If you don't update, you are now a target for those security vulnerabilities, then you must hire someone who understands the WP code base to fix it.

---

#### Security:

WP being the world's most popular CMS, it becomes the target for hackers and spammers. When new security vulnerabilities are found hackers often high-jack tables in your database(through php injections) and then use your db for their own until the site crashes, or your host notifies you of over usage. These hackers/spammers always first collect all user emails and data. This is a huge risk as many use the same password for their personal email, now the hackers have access to your users email accounts.

---

#### SEO:

WP gives only basic optimization, or you must install special plugins that cost money which will further affect the site's performance. SEO is only about performance, and the data that is available to search scrapers(not what is rendered in the browser after load), this is what must be static, and therefore public.

---

#### HTTP requests:

- Every time you navigate to a new page, all the data is fetched again, even parts that have already been loaded such as the navigation, icons, and css etc.
- Aside from these extra redundant requests, each request causes the server to repeatedly use resources to run php scripts, and then query the database... for EACH PAGE NAVIGATED TO!
- All public data should be static, and properly cached.. period.

---

### So what is the sollution?

Most Wordpress users these days are not someone who writes code(therefore not developers), they have become reliant on Wordpress plugins and cpanel, with little understanding of http requests, html, css, javascript, server side rendering, caching, databases, and deployment. Those tools (WP plugins and cpanel) are needed but abstract learning how those technologies work.

If you are attached to WP, and have many sites using it, the new and recommenced approach for WP theme developers, is to:

- **Decouple the fontend** and use the built in rest or graphql api to fetch data, while continuing to use WP CMS as a backend, but only for adding, removing, and editing content.

- The decoupled frontend will rebuild the static site when content changes, with only 2 http requests and 2 queries to the db will be made - one to post(added, removed, or edited content), and one to rebuild the static page where the content changed.

Now WP is mainly just a data store and api, like any other modern api or headless cms. The data can be extracted and migrated to another backend or multiple backends without any sql db migration. If the content changes often (like a popular blog with lots of comments, or a store where the inventory changes often) we can fetch that data on the fly (if that page has not been statically generated yet), and schedule static builds at an interval(like say 2am every night, or every 20 comments).

Modern static generating tools (like Nuxt.js and Next.js) are blazing fast as they only need to change the content in the one place.

Get familiar with modern apis(rest, graphql, etc), as all 3rd party services use the same models for their apis, it is the new industry standard, hence the reason WP has integrated, and focused their future development to primarily be an api and a headless cms.

- Another advantage to decoupling the frontend is that the end user has no idea the backend is WP. Any WP site that is not decoupled will have tons of files right in the source code that will let hackers know exactly what version of WP you are using and the plugins/versions as well, this is the doorway to get your current security vunlerabilies targeted.
- For example, say in the past we used as Eventbrite plugin for wp, this plugin just uses the Eventbrite api to fetch data, and displays on the site through a widget or something. We can just fetch the data directly from Eventbrite when an event is added removed or changed, and rebuild that page, no db needed and the 3rd party who built the Eventbrite plugin does not get any user data(or possibly any data in the WP database)
- here is another example, say we have spammers filling out out contact form, so we install a reCapcha plugin(4mb), this adds about 12 css files to be fetched before the page loads, this entirely blocks SEO, as search scrapers only read the source code before the client rendering. We can just access the Google reCapcha directly through their api(in about 6 lines of .js), and defer this code till after the page loads.
- Each and every plugin, drastically affects performance, again public data should be static.. period.
