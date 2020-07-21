---
title: Remove all branch except master
tags:
  - git
---

Sometimes we want to delete all local branches we have created earlier.
Surely we want to keep the `master` branch.

Here's the command

```bash
git branch | grep -v "master" | xargs git branch -D 
```
