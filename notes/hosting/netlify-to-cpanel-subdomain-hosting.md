---
title: Netlify to cpanel subdomain hosting
emoji: 😃
tags:
  - hosting
---

# Reason to do so

Say, I have imranpollob.com hosted on my server. I want to create a subdomain code.imranpollob.com that I want to host in Netlify. To acheive this goal follow the steps mentioned below.

1. Create a subdomain from cpanel. Create a subdomain `code.imranpollob.com`
2. Go to Zone Editor click manage
3. Find out `code.imranpollob.com` and `www.code.imranpollob.com`, edit A record to `75.2.60.5`

## Manage Redirection

Most of the time we don't want to stay on the netlify provided subdomain, rather than that we want to redirect our user to our site. There are two different ways to do this. One is writing redirection rules on `netlify.toml` file another one is writing rules on `_redirects` files.

Here, we will use the `_redirects` file. For example we want to redirect the netlify subdomain: `https://polui.netlify.app/` and `www` subdomain: `https://www.ui.imranpollob.com/` to `https://ui.imranpollob.com/`. Let's do it.

First, We have to create a `_redirects` files as the published directory of the website. For `React` or `NextJS` app we can simply create the file inside `public` folder because at build time everything inside the `public` folder will be copied to published folder. Now write the redirection rules.

```
https://polui.netlify.app/* https://ui.imranpollob.com/:splat 301!
https://www.ui.imranpollob.com/* https://ui.imranpollob.com/:splat 301!
```

That's it
