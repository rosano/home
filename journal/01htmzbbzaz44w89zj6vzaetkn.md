---
date: 2024-04-04T16:33:54.665Z
categories: ["code"]
---
Cheap non-ugly [ULID](https://github.com/ulid/javascript) combining time and a random number using radix 36.

```javascript
Date.now().toString(36) + Math.random().toString(36).replace('0.', '') // something like lulgjvgkc5mk5sbmfaf
```
