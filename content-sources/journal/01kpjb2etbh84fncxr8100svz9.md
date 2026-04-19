---
date: 2026-04-19T07:42:51.723Z
categories: ["code"]
link: https://stackoverflow.com/questions/73485958/how-to-correct-git-reporting-detected-dubious-ownership-in-repository-withou
---
[How to correct `git` reporting `detected dubious ownership in repository`](https://stackoverflow.com/questions/73485958/how-to-correct-git-reporting-detected-dubious-ownership-in-repository-withou)

```bash
git -c safe.directory=* <your sub-command here>
```
