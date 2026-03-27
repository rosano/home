---
date: 2023-10-11T15:09:08.000Z
categories: ["code"]
link: https://askubuntu.com/questions/5980/how-do-i-free-up-disk-space/6002#6002
---
[How do I free up disk space?](https://askubuntu.com/questions/5980/how-do-i-free-up-disk-space/6002#6002)

```
# remove downloaded packages
sudo apt-get clean

# clear package caches that can't be downloaded
sudo apt-get autoclean

# remove unused packages
sudo apt-get autoremove
```
