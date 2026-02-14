---
date: 2026-02-13T09:03:12.633Z
categories: ["code"]
---
exploring how my [cheap ULID](https://rosano.ca/log/01htmzbbzaz44w89zj6vzaetkn/)'s date portion changes by shifting the:

```javascript
const date36 = e => new Date(e).valueOf().toString(36);

// year
[
	date36('2026-01-01'), // mjuohs00
	date36('2027-01-01'), // myc87pc0
];

// month
[
	date36('2026-01-01'), // mjuohs00
	date36('2026-02-01'), // ml2z56o0
];

// day
[
	date36('2026-01-01'), // mjuohs00
	date36('2026-01-02'), // mjw3xmo0
];

// hour
[
	date36('2026-01-01 12:00'), // mjvc2jk0
	date36('2026-01-01 13:00'), // mjve7pc0
];

// minute
[
	date36('2026-01-01 12:00'), // mjvc2jk0
	date36('2026-01-01 12:01'), // mjvc3tuo
];

// second
[
	date36('2026-01-01 12:00:00'), // mjvc2jk0
	date36('2026-01-01 12:00:01'), // mjvc2kbs
];

// microsecond
[
	date36('2026-01-01 12:00:00.000'), // mjvc2jk0
	date36('2026-01-01 12:00:00.001'), // mjvc2jk1
];
```
