---
date: 2023-10-11T15:10:08.000Z
years: 2023
months: 2023-10
days: 2023-10-11
categories: ["code"]
---
["Platform data" and "Other" disk usage](https://forum.cloudron.io/topic/1977/platform-data-and-other-disk-usage/24)

Reclaim Docker storage:

```
docker image prune
# or
docker image prune -a

docker volume prune
```