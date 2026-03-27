---
date: 2024-01-24T17:04:50.783Z
categories: ["code"]
link: https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg
---
[How to concatenate two MP4 files using FFmpeg?](https://stackoverflow.com/questions/7333232/how-to-concatenate-two-mp4-files-using-ffmpeg)

```
(echo file '/alfa/bravo.mp4' & echo file '/charlie/delta.mp4' ) > echo.txt
ffmpeg -f concat -safe 0 -i echo.txt -c copy foxtrot.mp4
```
