---
date: 2026-02-24T08:02:47.826Z
categories: ["code"]
link: https://graphite.com/guides/git-cherry-pick-other-repo
---
[How to cherry-pick commits from another repository in Git](https://graphite.com/guides/git-cherry-pick-other-repo)

```
# add the other repository's commits
git remote add alfa ../bravo
git fetch alfa

# show commits from branch charlie
# (note/copy the ones you want to merge or the start and end)
git log alfa/charlie --oneline

# apply commit 789c05c
git cherry-pick 789c05c

# apply commits 789c05c to fd1b130
git cherry-pick 789c05c..fd1b130
```
