---
title: Redirect to non www and https via htaccess
tags: 
  - miscellaneous
emoji: 🧤
---

Google and may be other search engines consider `www.example.com` and `example.com` as seperate domains. As a result we need to stick with a single version. Note that, there is no seo related advantages to select one or another.

We may also want to redirect users from `http` to `https` because of security measures.

## Sticking with non www version

You don't want `www` infront of domain name and serve via `https`. Let's do it by editing `.htaccess` file.

```txt
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,NE,R=301]
```

## Sticking with www version

May be you like to add `www` and serve via `https`. Here's the script

```txt
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTP_HOST} ^(?:www\.)?(.+)$ [NC]
RewriteRule ^ https://www.%1%{REQUEST_URI} [L,NE,R=301]
```