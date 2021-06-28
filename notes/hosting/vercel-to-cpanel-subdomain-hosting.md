---
title: Vercel to cpanel subdomain hosting
emoji: 😃
tags:
  - markdown
  - cheatsheet
link: https://www.markdownguide.org/cheat-sheet/
---

# Reason to do so
Say, I have imranpollob.com hosted on my server. I want to create a subdomain code.imranpollob.com that I want to host in Vercel. To acheive this goal follow the steps mentioned below.

1. Create a subdomain from cpanel. Create a subdomain `code.imranpollob.com`
2. Go to Zone Editor click manage
3. Find out `code.imranpollob.com` and `www.code.imranpollob.com`, edit A record to 76.76.21.21