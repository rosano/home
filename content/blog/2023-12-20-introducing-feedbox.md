---
date: 2023-12-20T12:29:56.000Z
slug: introducing-feedbox
title: introducing feedbox
summary: Embed an RSS feed on any website with a few lines of code.
tags:
  - process
  - debut
  - technical
---
[feedbox](https://github.com/rosano/feedbox) is an embed for previewing RSS feeds. Here's what it looks like:

![](2023.12.20-08h56.jpg)

Here it's configured to fetch the one from this blog, but you can use any RSS feed and drop in on your website with a few lines of code. I've added it to all my project home pages, including [Zero Data App](https://0data.app) and [my homepage](https://rosano.ca).

It uses an instance of [cors-anywhere](https://github.com/Rob--W/cors-anywhere) to get around CORS complaints; I hope someday it will be simpler to just `fetch` the raw contents of a page.

Unlike most of my programming projects, I tried to write code that feels more 'messy' to me (simple human names instead of XYZVerboseNames, which is generally hell for other people). I also actually wrote a [README](https://github.com/rosano/feedbox/blob/master/README.md) (uncommon for most of the over 100 [OldSkool](https://github.com/olsk) modules) to describe the setup and possible options; hope to maintain this as a baseline for future modules.

Was kind of fun to let go, and not test everything, although I still wrote some tests…

As a more general complement, I [automatically added link\[rel="alternate\]](https://github.com/olsk/OLSKExpress/commit/4eabc72df40cb0c822c27ba86ac45300e48a13c7#) to sites that don't have one by setting an environment variable.

The sensation of stuff updating everywhere, even on static pages, without anybody doing anything, is kind of electric to me: isn't that what computers are for? _bleep bloop_!
