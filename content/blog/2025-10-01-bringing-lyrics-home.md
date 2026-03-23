---
slug: bringing-lyrics-home
title: bringing lyrics home
summary: From 'trapped in my notes' to 'public data' that anyone can use.
date: 2025-10-01T08:22:02.109Z
twitter_id: 1973314769957560762
mastodon_id: 115298132436446030
bluesky_id: 3m24p5h6m4c27
nostr_id: note13f5fvvkwuza8eecwdl82nmcrzmyf6rfy4ummkjrs27yav5n8tqvq3jljkr
instagram_id: DPQycUICO58
tiktok_id: 7556178897222552833
threads_id: DPQtyxwDdFz
---
High off the fumes from [[bringing Vibrations home]], I made a "room" for all the lyrics I've accumulated over the years from capoeira classes, deep listening albums, and learning languages, motivated because there were too many mixed into my notes and other stuff to find anything when I needed it.

<figure>

![scrolling list of personal capoeira lyrics](scrolling.gif)

<figcaption>I like making these scrolling animated GIFs</figcaption>
</figure>

<roco-divider></roco-divider>

# informal to structured, automatically

Each song lives in a *collection*, which is a [text file](https://github.com/rosano/home/blob/master/content-sources/lyrics/2021-04-caetano.md?plain=1) representing my personal tie to where it came from: maybe the year or place or group or album.

The lyrics in a collection are just separated by one `#` character, which represents a Markdown heading. New heading, new song; no need to "make one file per thing" and manage it.

```
…

quem ama mesmo prefere o ofício de amar.

# Joyce: Mistérios

você chegou feito um silêncio

…

```
<figure><figcaption>the power of one character</figcaption></figure>

With just this one semantic unit to divide the information, each song can get it's own page automatically. But I can still easily move things around if I change my mind. This fulfills my principle of "presenting things consistently regardless of how I organize the files".

Adding a *topic* to collections lets me combine collections from a certain context (such as [my Brazilian popular music](https://rosano.ca/lyrics/topic/brazil/)). As it shows recent items first, I have a list roughly in order of discovery without any 'blog post' system; time is somewhat relevant but it doesn't need to be super precise.

<roco-divider></roco-divider>

I had tried to do this with my non-chronological [garden](https://rosano.hmm.garden), but it was too much effort to manage pages and ended up crowding other stuff without being easier to find. Reverse chronological order is much more relevant here to me than other ways I've tried, as I often want to revisit newer things first; the order is a helpful reminder of where I got it from and orients me to other details I may have forgotten.

# cool benefits

About 150 individual song notes were purged from my [Simplenote](https://simplenote.com) and condensed into [21 collections](https://github.com/rosano/home/tree/master/content-sources/lyrics). I no longer need to carry them around in my notes, and they're also 'liberated' as public data that anyone can benefit from as text or through my site's web interface.

<figure>

![example of lyric notes scatterred in simplenote](simplenote.jpg)

<figcaption>no more organizing like this in my notes</figcaption>
</figure>

<roco-divider></roco-divider>

Collections are presented without pagination so I can just scroll, with sticky headings for orientation, using the browser to search when needed: this way I can easily save one page offline with the [Reading List in Safari](https://support.apple.com/en-us/108970) and have lyrics with me even without internet access.

The page for any song has links to [search the title via YouTube](https://rosano.ca/lyrics/caetano-2021/alguem-cantando/), or [translate text via DeepL](https://rosano.ca/lyrics/diab-2019/the-compassionate/), or a 'Source' link so that anyone can edit things on GitHub.

![](search-translate-source.jpg)

There are bidirectional links between [lyric](https://rosano.ca/lyrics/london-2024/lapinha) and [Vibrations](https://rosano.ca/vibrations/m3imvrwq) pages, connecting published songs from my personal history to the lyrics.

<gallery>![](bidirectional-1.jpg) ![](bidirectional-2.jpg)</gallery>

<roco-divider></roco-divider>

# other reflections

I'm generally not using my blog brain when I deal with music and don't always know very specifically what I'm looking for when it comes to songs I may want to reconnect with. It's nice to browse through what I've gathered as easily as physical albums or photo collections—an example of how technology can support more 'fuzzy' approaches.

I have another less public collection somewhere with compilations of more lyrics than I will ever use in my lifetime, but those are more like a large 'dataset' and not personally meaningful. The songs I've encountered along my way have more significance to me, and it's nice to express that through files, markdown, and some rough technical transformation.

My endeavour in writing this is not really to focus on the technology but an attempt to share why I do things a certain way, which can be applicable to other things.

[Hugo](https://gohugo.io) gives me the rush of making apps, but applied to organizing information—something that disproportionately seems to satisfy me.

I would close with a quote from [Heddi](https://heddiried.com) that describes what it's like for me to have a personal website or corner of the Internet where I can do niche things like this without some company's blessing:

> "Having a platform profile is like living in a single-room apartment, whereas having your own site is a castle with unlimited rooms."

