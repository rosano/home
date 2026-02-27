---
date: 2026-02-24T11:31:25.695Z
categories: ["code"]
link: https://stackoverflow.com/questions/677436/how-do-i-get-the-git-commit-count#4061706
---
[How do I count all commits in a git repository?](https://stackoverflow.com/questions/677436/how-do-i-get-the-git-commit-count#4061706)

```
# count for in branch alfa
git rev-list --count alfa

# count across all branches
git rev-list --count --all
```
