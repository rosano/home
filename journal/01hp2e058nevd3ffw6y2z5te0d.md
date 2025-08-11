---
date: 2024-02-07T18:41:34.485Z
categories: ["code"]
link: https://stackoverflow.com/questions/3737740/is-there-a-better-way-to-run-a-command-n-times-in-bash
---
[Is there a better way to run a command N times in bash?](https://stackoverflow.com/questions/3737740/is-there-a-better-way-to-run-a-command-n-times-in-bash)

```
alfa=10
for bravo in $(seq $alfa); do
   echo "$bravo"
done
```
