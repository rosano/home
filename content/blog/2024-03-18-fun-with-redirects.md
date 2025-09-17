---
date: 2024-03-18T12:23:11.000Z
slug: fun-with-redirects
title: fun with redirects
summary: Owning my URLs and avoiding link rot since 2012.
related: If you want to keep reading, learn about the difference between fragile data and [durable data](https://utopia.rosano.ca/durable-data/), dream some [interoperable visions](https://utopia.rosano.ca/pointing-at-the-wrong-thing/) with me, or marvel at how the person who wrote this needed [six tries to learn iPhone programming](https://utopia.rosano.ca/sixth-times-a-charm/).
tags:
  - technical
  - Zero Data
  - self-hosting
  - interop
---
> If you have a website, what are your earliest meaningful links that still work? I have almost no broken links at least since 2012 because I usually add a redirect whenever something changes.

Redirects help links in a healthy web [resolve](https://www.w3.org/Provider/Style/URI), avoid [rot](https://en.wikipedia.org/wiki/Link%5Frot), and [last a long time](https://worrydream.com/TheWebOfAlexandria), but they also increase agency by letting own your data (own your URLs).

# own your links

When I link to a platform I don't control, I try to at least use a URL that I do control. I have found this useful in recent years when switching my newsletter provider ([/list](https://rosano.ca/list)), Mastodon instance ([/mastodon](https://rosano.ca/mastodon)), or crowdfunding platform ([/fund](https://rosano.ca/fund))–I didn't have to change any links when that happened.

I'm considering even my Twitter account ([/twitter](https://rosano.ca/twitter) in case the site goes bankrupt, and GitHub repositories ([/hyperdraft-source](https://rosano.ca/hyperdraft-source)) or YouTube videos ([/strolling-0172-video](https://rosano.ca/strolling-0172-video)) in case I start self-hosting; neither has happened yet, but if it occurs, I can easily update the destination once and point it somewhere else retroactively.

# self-hosting a link manager

<figure>
	<img src="https://static.rosano.ca/home/blog/2024-03-18-fun-with-redirects/yourls.png"/>
	<figcaption>about 300 links managed with YOURLS</figcaption>
</figure>

My links tend to be readable, but I like Derek Sivers' idea of making them [short and speakable](https://sive.rs/su). I use [YOURLS](https://yourls.org) one-click self-hosted via [Cloudron](https://www.cloudron.io) to manage my redirects which makes it easy to have both short and speakable if necessary; the links technically are something like `go.rosano.ca/whatever`, but because I own the data, I can make it further accessible under my root domain, as `rosano.ca/whatever` is often shortest, simplest, and most memorable. I also do the same contraction with blog permalinks so that `utopia.rosano.ca/interoperable-visions/` can be accessed at `rosano.ca/interoperable-visions`; I stick with [Ghost](https://ghost.org)'s simple permalinks design of `/post-title-as-a-slug` and find it more readable and predictable.

# self-hosting legacy redirection

For legacy domains and permalinks, I made a simple [single-file Node.js Express app](https://github.com/rosano/redirects/blob/master/main.js) (`git push` self-hosted via [CapRover](https://caprover.com)). There are about two dozen domains pointing to the same app to handle:

1. [removing www.](https://github.com/rosano/redirects/commit/3ed596df0fb4cebe5d32c231b4aecd44de091bbd)
2. [correcting old and mispelled domains](https://github.com/rosano/redirects/commit/52bf5d6ffe8dde9faadc0d71a524d76ec70be8ee)
3. [redirecting archived projects to a single page](https://github.com/rosano/redirects/commit/fbab1be533fc64ed01c0611b630eadb89c59e2a9)
4. [masking a domain that functions as a landing page](https://github.com/rosano/redirects/commit/43eeee14874ded0c16be6e82fcfd786fad4caf22)
5. [redirecting PeerTube links to YouTube](https://github.com/rosano/redirects/commit/8a4ce8ed0c309dd4a40c57477e5df80d6fc2ba4f)
6. [redirecting gibberish slugs to friendly slugs](https://github.com/rosano/redirects/commit/41786338aee47c59e08ed6a7e03fd9a3b715c54e)
7. [redirecting to the Wayback Machine](https://github.com/rosano/redirects/commit/47a9439a5d523ea4cbbc6257e4e40e995c75dd8d) as a last resort, (but I may have done this one incorrectly, as it might cause some recursive issues).

This is hopefully a graceful degradation that takes care to guide existing links somewhere useful. It also supports HTTPS so if you write `https://[OLD_DOMAIN]` it works, which is not the case when you 'forward' URLs via registrars like [Hover](https://www.hover.com) who only support writing `http://[OLD_DOMAIN]`.

# static versus dynamic

I love the simplicity of static sites and how they're basically free to keep alive forever, but all of my redirect pipework makes me feel forever tied to dynamic systems. It's possible to redirect via [meta refresh](https://www.w3.org/TR/WCAG20-TECHS/H76.html) on a static page but I find it ugly to write and manage with HTML; I'm also not sure if all search engines understand them, although [Google claims to yet still recommends server-side redirects](https://developers.google.com/search/docs/crawling-indexing/special-tags#refresh):

> This tag, commonly called meta-refresh, sends the user to a new URL after a certain amount of time, and is sometimes used as a simple form of redirection. However, it is [not supported by all browsers and can be confusing to the user](https://www.w3.org/TR/WCAG10-HTML-TECHS/#meta-element). We recommend using a server-side [301 redirect](https://developers.google.com/search/docs/crawling-indexing/301-redirects) instead.

# conclusion

Maybe it's the librarian in me that finds it fun to have my stuff organized and moving along smoothly. I like the sense of ownership that comes with being able to direct links where I want, and the care to avoid throwing visitors into the weeds by making sure they land somewhere useful, always and forever.
