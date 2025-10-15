---
instagram_id: DP1Cr8DiOz1
facebook_id: "10235527001189718"
threads_id: DP1CtJNjbTo
twitter_id: "1978425037158858772"
mastodon_id: "115377987689303280"
bluesky_id: 3m3a5vsi6n22b
nostr_id: note1cyjk0f6y2ffs4l68z3a095mcfracn53r23zhtkfxw4sgxw3ppkqqkdalyk
submittedAt: 2025-10-15T11:50:29.385Z
slug: introducing-memo
title: introducing memo
summary: a notepad you can't edit
tags:
  - debut
  - zero data
  - interop
date: 2025-10-15T11:01:56.336Z
---
I made a small web app called [memo](https://memo.rosano.ca) to quickly jot down points, framing it as "a notepad you can't edit".

Similar to a piece of paper, you just note things down without editing or 'managing' much.

There are no buttons for each item: you can only add new things, and then copy or delete everything.

The interface supports routines I describe in [work, then don't](https://rosano.ca/blog/work-then-dont/): capture points to deal with them later without distracting from whatever's happening at the moment.

Coming from other note taking apps like [Simplenote](https://simplenote.com), Apple Notes, or even [Hyperdraft](https://hyperdraft.rosano.ca), it's nice to not manage conflict: "did I edit that already on another device?", "I synced but the changes aren't here yet", "I'd rather not think about that, let me make a new one and then copy/paste between later". Here, there's no need to trust in special sync — "just add and it will come together".

I find that 'not editing' also means 'not judging', thus allowing things to flow out as easily as possible—it can easily be cleaned up later; this is useful in brainstorming, writing long-form, and other modes.

So it's a little box to type in that's always ready when opening the app, and it syncronizes points to other devices, and none of the data is held hostage by me because you can bring your own storage. Great, but that's it?

Well, it's a 'real' app that I use everyday, but I think it's also a useful example of interoperability with other tools.

If you want to edit or delete individual items, you can connect the same data to this simple [list app](https://listable.5apps.com); the changes will sync back to memo.

If you like checking things off as 'done', use this [todo app](https://todomvc.0data.app); they will show up completed ~~(crossed out)~~ in memo.

Some people want to keep everything forever, like a physical journal. Maybe someone could make another app that presents a nice 'archive'.

This is very primitive but it feels cool that separate apps work together pretty seamlessly. It's all possible because: 1) they each let you bring your own storage, and 2) they all share a similar format.

<figure>

![](output.gif)

<figcaption>three little web apps, sharing a filesystem</figcaption>
</figure>

<style>
figure {
  display: flex;
  flex-direction: column;
  margin: 0;
  width: unset;
}
</style>

I think it would be nice if this was normal with apps and technology. The web is full of people making fun little tools but they're not connected to data in other places; I tend to imagine that by simply tweaking them to read and write data this way, we get some very cool new possibilities, and even give older projects new potential without much change.

Having different tools to deal with the same data is useful as an 'app user', but I love it as an 'app developer' because interop simplifies my life: I don't need to build *all* the features in my app — other apps can fill the gap, and together, we share one growing base of people who mix them in their workflows.

Try it out below and let me know what comes to mind.

<style>
iframe {
	display: block;
  width: 900px !important;
  height: 500px;
  
  position: absolute;
  margin: 100px;
  margin-left: -250px;
}
</style>

<iframe src="https://todos-interop.0data.app" frameborder="0"></frame>

