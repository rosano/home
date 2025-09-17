---
date: 2021-06-10T13:59:48.000Z
slug: testing-logic-and-interfaces
title: Testing logic and interfaces
summary: Automatically check that things are working as intended.
tags:
  - process
wiki_id: 01f7v3hk3txz5d0v9ms467x8bz
---

{{< rc-youtube cbTpX1Z1C-E >}}

# Tutorial

| time  | section                                                         | notes                                                                                       |
| ----- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 00:00 | [Intro](https://youtu.be/cbTpX1Z1C-E?start=00m00s)              |                                                                                             |
| 00:39 | [Design](https://youtu.be/cbTpX1Z1C-E?start=00m39s)             | Rich Hickey's [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) talk |
| 02:15 | [Part 1: logic](https://youtu.be/cbTpX1Z1C-E?start=02m15s)      |                                                                                             |
| 02:39 | [Add a function](https://youtu.be/cbTpX1Z1C-E?start=02m39s)     |                                                                                             |
| 09:12 | [Simple library](https://youtu.be/cbTpX1Z1C-E?start=09m12s)     | [OLSKHash](https://github.com/olsk/OLSKHash)                                                |
| 10:50 | [Complex library](https://youtu.be/cbTpX1Z1C-E?start=10m50s)    | [Zero Data Wrap](https://github.com/0dataapp/0datawrap)                                     |
| 14:41 | [Part 2: interface](https://youtu.be/cbTpX1Z1C-E?start=14m41s)  |                                                                                             |
| 15:58 | [Add a link](https://youtu.be/cbTpX1Z1C-E?start=15m58s)         | [OLSKGazette](https://github.com/olsk/OLSKGazette)                                          |
| 21:00 | [Access](https://youtu.be/cbTpX1Z1C-E?start=21m00s)             |                                                                                             |
| 21:42 | [Localize](https://youtu.be/cbTpX1Z1C-E?start=21m42s)           |                                                                                             |
| 22:39 | [Misc](https://youtu.be/cbTpX1Z1C-E?start=22m39s)               |                                                                                             |
| 23:48 | [Simple component](https://youtu.be/cbTpX1Z1C-E?start=23m48s)   | [OLSKPlaceholder](https://github.com/olsk/OLSKPlaceholder)                                  |
| 25:27 | [URLs for each test](https://youtu.be/cbTpX1Z1C-E?start=25m27s) |                                                                                             |
| 27:14 | [Complex component](https://youtu.be/cbTpX1Z1C-E?start=27m14s)  | [OLSKAppToolbar](https://github.com/olsk/OLSKAppToolbar)                                    |
| 33:07 | [Messages](https://youtu.be/cbTpX1Z1C-E?start=33m07s)           |                                                                                             |
| 37:33 | [Concerns via files](https://youtu.be/cbTpX1Z1C-E?start=37m33s) |                                                                                             |
| 38:36 | [General tips](https://youtu.be/cbTpX1Z1C-E?start=38m36s)       | ['tests are your eyes'](https://merveilles.town/@grafofilia/102641808237464089)             |
| 42:27 | [Conclusion](https://youtu.be/cbTpX1Z1C-E?start=42m27s)         |                                                                                             |

# Part 1: logic tests (AKA unit tests)

Requires no build system and ideally runs unlimited tests in about one second. See [Modular object structure](https://rosano.hmm.garden/01f7bg7reapxeggv0cp3etxgsa) for syntax.

# Part 2: interface tests (AKA UI/integration tests)

Requires a server for \[\[System A\]\] and also building process for \[\[System B\]\]. See [Build and run my apps on your machine](https://rosano.hmm.garden/01f62t5yseb053m024v1mczbzy) for setup. Takes more time than logic tests and gets longer with more tests: optimizations welcome. Look for localizing in another video \[\[localizing (tba)\]\].

Technical note: runs [Zombie](https://github.com/assaf/zombie) headless, no concept of CSS or box model, just HTML and JavaScript.

## Access

* is it on screen or not?
* decouple visibility from other concerns

## Localize

* put the maximum on screen
* run suite for each supported language
* will fail or make noise about missing translations
* decouple language from other concerns

## Misc

* can be for checking attributes, binding, sending messages, anything
* decouple configuration/behaviour from other concerns

# General tips

1. Test as much as you can. If something is not testable because of the testing environment, write the test that should pass and then skip it. I avoid changing anything before writing tests.
2. 'Tests are your eyes' (via [Zura](https://merveilles.town/@grafofilia/102641808237464089)) – they are imperfect and should be distrusted at some level, but ignoring them entirely is like 'playing jenga with blackboxes'. Let the machine work for you.
3. Design for change. Assume that you have missed something and will need to adjust later. How easily can it be changed?

---

Part of [Project workflow](https://rosano.hmm.garden/01f62sb0g9d19tt9d73fvj0n7r).

---

[Reply with a comment.](https://cafe.rosano.ca/t/90)
