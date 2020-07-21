---
title: Remove a file or folder from git tracking
tags:
  - git
---

Sometimes we need to remove a file or entire folder from git tracking that is previously tracked. Thinks like log files or auto generated stuffs. 

So, irritating 🤨

Git commands to rescue.

To remove a file from tracking

```bash
git rm --cached <file-name>
```

To remove a folder from tracking

```bash
git rm -r --cached .
```

Finally `add` and `push` the changes

```bash
git add .
git commit -m "gitignore will work now"
git push
```