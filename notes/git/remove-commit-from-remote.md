---
title: Remove commit from remote
tags:
  - git
---

## How do I revert a previous commit?

We can revert (means delete the bad commits) to the previous working commit.
You can do this by the following two commands:

```bash
git reset --hard [previous working Commit SHA id here]
git push origin [branch Name] -f
```

It will remove your previous Git commits.

## Revert while keeping changes.
If you want to keep your changes, you can also use:

```bash
git reset --soft [previous Commit SHA id here]
```

Then it will save your changes.