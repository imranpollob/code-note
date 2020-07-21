---
title: Add a new remote beside origin
tags:
  - git
---

Say, we want to push something to staging site. In that case, we can that add a new remote.

```bash
git remote add staging https://github.com/user/repo.git
```

Check remotes

```bash
git remote -v
```

Push to the new remote

```bash
git push staging dev-branch
```