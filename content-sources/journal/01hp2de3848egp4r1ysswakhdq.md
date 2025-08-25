---
date: 2024-02-07T18:31:42.596Z
categories: ["code"]
link: https://stackoverflow.com/questions/43197105/how-do-you-jump-to-the-first-commit-in-git
---
[How do you jump to the first commit in git?](https://stackoverflow.com/questions/43197105/how-do-you-jump-to-the-first-commit-in-git)

```
git checkout `git rev-list --max-parents=0 HEAD | tail -n 1`
```
