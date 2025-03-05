---
date: 2024-04-04T12:33:54.665-04:00
year: 2024
month: 2024-04
day: 2024-04-04
place: Toronto
country: Canada
categories: ["code"]
---
Cheap non-ugly [ULID](https://github.com/ulid/javascript) combining time and a random number using radix 36.

```javascript
Date.now().toString(36) + Math.random().toString(36).replace('0.', '') // something like lulgjvgkc5mk5sbmfaf
```
