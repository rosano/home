---
date: 2021-05-19T17:18:41.000Z
slug: build-and-run-my-apps-on-your-machine
title: Build and run my apps on your machine
tags:
  - process
wiki_id: 01f62t5yseb053m024v1mczbzy
---
# Tutorial

{{< rc-youtube BDZ1wggKBDs >}}

| time  | section                                                                                       |
| ----- | --------------------------------------------------------------------------------------------- |
| 00:00 | [Heads up](https://youtu.be/BDZ1wggKBDs?start=00m00s)                                         |
| 00:14 | [Intro](https://youtu.be/BDZ1wggKBDs?start=00m14s)                                            |
| 01:55 | [The 4 steps](https://youtu.be/BDZ1wggKBDs?start=01m55s)                                      |
| 02:11 | [Step 0: Install node.js](https://youtu.be/BDZ1wggKBDs?start=02m11s)                          |
| 03:37 | [Step 1: Open the project folder in your terminal](https://youtu.be/BDZ1wggKBDs?start=03m37s) |
| 05:29 | [Step 2: Install dependencies](https://youtu.be/BDZ1wggKBDs?start=05m29s)                     |
| 07:35 | [Running the project](https://youtu.be/BDZ1wggKBDs?start=07m35s)                              |
| 08:17 | [Step 3: Run system B](https://youtu.be/BDZ1wggKBDs?start=08m17s)                             |
| 09:34 | [Step 4: Run system A](https://youtu.be/BDZ1wggKBDs?start=09m34s)                             |
| 11:04 | [Making changes](https://youtu.be/BDZ1wggKBDs?start=11m04s)                                   |
| 11:46 | [System A changes](https://youtu.be/BDZ1wggKBDs?start=11m46s)                                 |
| 13:31 | [System B changes](https://youtu.be/BDZ1wggKBDs?start=13m31s)                                 |
| 15:36 | [Localization files](https://youtu.be/BDZ1wggKBDs?start=15m36s)                               |
| 16:26 | [Localize system A](https://youtu.be/BDZ1wggKBDs?start=16m26s)                                |
| 17:19 | [Localize system B](https://youtu.be/BDZ1wggKBDs?start=17m19s)                                |
| 17:58 | [Help fix this](https://youtu.be/BDZ1wggKBDs?start=17m58s)                                    |
| 18:43 | [Conclusion](https://youtu.be/BDZ1wggKBDs?start=18m43s)                                       |

# The 4 steps

## Step 0: Install [Node.js + NPM](https://nodejs.org/en/download/) if it's not already on your machine

Confirm by executing `node -v` in your terminal. I currently have v14\. Earlier versions should work but you might run into problems, the closer the versions are the better…

## Step 1: Open the project folder in in your terminal

From the [repository page](https://github.com/wikiavec/hyperdraft), click 'Download ZIP' under 'Code'.

Alternatively, run `git clone https://github.com/wikiavec/hyperdraft`.

## Step 2: Install dependencies

Execute `npm run setup`. This will:

* run `npm install` without modifying the `package.json` file
* clear any `package-lock.json` file
* copy the `.env-sample` to `.env`

## Step 3: Start system B

Execute `npm run watch`. This will:

* build the final JavaScript from Svelte files
* watch for changes to re-build automatically

## Step 4: Start system A

Execute `npm start`. This will:

* start a node.js server
* allow the site to be accessible at <http://localhost:3000>
* watch for changes to reload when certain files are changed

# Other notes

Avoid making changes before writing tests. See [Testing logic and interfaces](https://rosano.hmm.garden/01f7v3hk3txz5d0v9ms467x8bz).

See [Universal project folder structure](https://rosano.hmm.garden/01f71kp52knc5nnv08qr9kzj3m).

Localization files (`i18n.xx.yml`) will not trigger any updates or be visible on reload. For system A: kill the process in your terminal with `Ctrl+c` and execute `npm start` again; if you would like to improve this, make a pull request to [OLSKExpress](https://github.com/olsk/OLSKExpress). For system B: make a change to any `.svelte` file.

---

Part of [Project workflow](https://rosano.hmm.garden/01f62sb0g9d19tt9d73fvj0n7r).

---

[Reply with a comment.](https://cafe.rosano.ca/t/77)
