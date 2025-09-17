---
date: 2021-11-14T16:46:38.000Z
slug: 021-going-fully-web-basu-emotional-vocabulary
title: "#021: going fully web • BASU • emotional vocabulary"
tags:
  - Ephemerata
cafe_id: "156"
---
Welcome to the twenty-first edition of [Ephemerata](https://rosano.ca/ephemerata), a weekly-ish digest of ideas, learnings, links, and sounds.

[![Subscribe](https://static.rosano.ca/_shared/_RCSSubscribeButton.svg)](https://rosano.ca/ephemerata)

I’m doing this to stimulate discussion around what I find interesting, and also to share things before they disappear into the void of my journal.

Thanks to [Feathers Cloud](https://feathers.cloud) for [becoming a backer](https://rosano.ca/back) this week ❤️.

---

# CONTENTS

1. Going fully web
2. Events
3. Asides
4. Music

---

# GOING FULLY WEB

_The gist:_ [_My iOS apps_](https://apps.apple.com/us/developer/rcreativ/id356609408) _are currently free and will disappear from the App Store in a few months. Read more to understand why._

---

I have been working on iOS apps since 2009, starting by a collaboration with [Wil](https://twitter.com/tom%5Ffrog) on [AudioScrub](https://rosano.ca/audioscrub) (née iLift), and eventually [going solo](https://rosano.hmm.garden/01eyk3k2fazfza5rceyvbdb8n6) in 2014\. After twelve years on the App Store, I’ve decided it’s time to go all in on the web, and would like to share what that means and outline the tradeoffs involved.

The spur for this change occurred years ago after the launch of my seventh app [sonogrid](https://rosano.ca/sonogrid). Although the project had iterations over several years, it mostly came together in the summer of 2018: I overworked myself for months, with incessant attention to detail, and was eager to present this to people I would meet during my upcoming trip to Colombia (they _really_ love music there, and this app was for music lovers). The app launched to a good reception online within various iOS music app communities, but to my dismay, most of the Colombians I met in person were not able to access it because Apple devices are prohibitively expensive there. I would offer to demo the app on my phone and let the other person play with it after: repeatedly, they would enjoy the interface and become immersed in a fun creative process, only to become disappointed on learning that it’s not on Android. It was hard to resolve the contradiction between producing something I was super proud to share—a kind of magnificent zenith in my iOS trajectory—and realizing that only half the world can use it. This was a bit deflating, and I wasn’t motivated to do double the work just because of platform duopolies. Added to this was the more subtle but long-standing aversion to the ‘review process’ that native apps go through before appearing on the App Store: I was hesitant to invest further in an environment with little control and leverage over my own future, with a constant fear of ‘reviewer rejection’ and [the rug slipping out from under me at any time](https://marco.org/2009/06/13/trust-hostility-and-the-human-side-of-apple). So I took a step back and haven’t updated many of my iOS apps since then.

In place, I worked on [various web components](https://github.com/orgs/olsk/repositories) and put them together to create [about a dozen web-based projects](https://github.com/rosano#open-source-projects). Contrasting the experience between the web and native (i.e. iOS) worlds, I feel more enthusiastic about how the web is evolving. It can still be ‘limited’ in comparison to native apps, but that gap is gradually closing and most of my ideas already fit within what’s currently possible.

Just to review, in case it’s not obvious, there are some more commonly understood reasons for choosing the web over native:

* Basically all current and future devices (mobile, tablet, desktop) and operating systems (iOS, Android, macOS, Windows, Linux) are supported.
* Projects are simpler and more cost-effective to build and deploy, with tools and skills that are easier to acquire.
* A thriving universe with bazillions of communities spanning the entire Internet provides lots of answers to questions, and most knowledge is based on open standards and therefore highly transferable.
* Backwards compatibility is a priority, which means your project is likely to continue working despite technology evolving over time.
* You can make changes whenever you like and have them online within seconds or minutes, as opposed to requiring third-party approval for everything, which could take days or weeks.
* The environment makes it more and more empowering for single-person or small team operations to produce things, without requiring the resources of a large company.

The challenges of the web for developers like myself is to help people ‘cross the chasm’ that exists due to a lack of common patterns for interacting with apps:

* There is no obvious ‘App Store’, so people are left to search the wider web (amongst articles, videos, cat pictures, and everything else), but maybe there could be [one that celebrates the ‘instant’ nature of this platform](https://appindex.app), or a subscription bundle like [SetApp](https://talk.fission.codes/t/setapp-curated-apps-bundle-subscription/2260) to help with discovery.
* There is no universal ‘buy’ button—every project does this their own way, but the [Ghost Portal](https://ghost.org/help/setting-up-portal/) is becoming more and more common, and I’m trying something similar with my [Fund Button](https://cafe.rosano.ca/t/69).
* The idea of an ‘install’ button isn’t ubiquitous, and some web apps may not be mobile-friendly or [local-first](https://www.inkandswitch.com/local-first), but for the rest there are libraries like [a2hs.js](https://github.com/koddr/a2hs.js) that help guide people to make accessing web apps a more familiar experience: simply click on an app icon to launch.
* The lack of an integrated payment system means that every project needs to re-build trust and help others be comfortable enough in the environment to support them financially, but [Stripe Checkout](https://stripe.com/payments/checkout), [PayPal Checkout](https://www.paypal.com/merchantapps/appcenter/acceptpayments/checkout), and [Web Monetization](https://webmonetization.org) are contributing various solutions that reduce friction from this process. (I would also love to see [fiscal hosting](https://opencollective.com/fiscal-hosting) become more prevalent so that having a legal entity is not necessary to receive money.)
* Performance has often held back the types of applications that can be built on the web platform, but [WebAssembly](https://webassembly.org/roadmap) will eliminate this issue for a whole class of ideas.

There are plenty of people working to create open solutions to these ‘missing features’; it seems like a solvable problem with time.

(Feel free to skip this section if you’d rather not hear me complain about Apple.) I’m sharing some negative aspects of my experience making native apps with hesitation, not to be a downer but because there might be people that aren’t really familiar with the developer side:

* The paternal review process can be soul-crushing at times: reviewers don’t enforce rules consistently; bad app(le)s get approved and grift people out of money or personal information; it’s an anxiety-ridden process that can feel unpredictable. You may have a good impression of Apple if you’ve bought their products: calling them for support usually means speaking to a friendly person who takes responsibility for your issue and tries to resolve it. App Review on the other hand might as well be an outsourced company, incredibly bureaucratic, and often feels like talking to a rock; any sensuality around the Apple brand quickly vanishes under these bright white office lights as you find yourself filling out TPS reports in the developer cubicle all of a sudden.
* Large companies dominate the App Store listings and generally get better treatment. The lucky independent developers are ones who have the ear of someone who works at Apple to support them if there’s a dispute and either push their app through App Review or get it featured.
* It’s quite a task for an individual or small team to produce an app, create screenshots and videos, localize everything in multiple languages, respond to reviews, and keep on top of technology that changes every year. The prototypical success looks more like a large organization than two guys in a garage.
* It feels like feeding into a device ecosystem of planned obsolescence and overconsumption, where developers and consumers need to keep upgrading—an insatiable appetite for more.
* The certificates and signing from the build process is complex and can bring development to a halt if you don’t have the right combination of XCode and macOS (hint: keep buying new Macs).
* The expanding variety of screen sizes forces you to learn responsiveness primitives which are platform-specific and create a complex array of image and video assets at different sizes for distribution.
* The constantly changing environment _will_ break your app and force you to either hurry and accommodate the changes or receive messages from customers asking why it doesn’t work anymore.
* You can’t simply share your app with a friend or even _install it on your own device_ without paying rent or getting permission through App Review.

There’s obviously lots of positives to native platforms as well, but these kind of things weigh down smaller operations like mine, favouring large companies with resources and time to deal with this ever-growing complexity.

Despite the web’s challenges, there’s much that excites me about its future and and some of these characteristics are intrinsic to the platform:

* The concept of [instant games](https://www.fortressofdoors.com/the-future-of-games-is-an-instant-flash-to-the-past/) promotes highly shareable apps via a simple link that require no install process: show up and start.
* Having multiple payment providers, potentially with the addition of cryptocurrencies means if you wanted to also just invent your own value system, maybe some kind of post-money coupon thing, it’s possible to integrate with existing systems…
* User-controlled personal data stores are [already being used](https://0data.app) on the web and will eventually make their way to native apps.
* Edge apps that work completely in the browser are easy to mirror or fork, and virtually free to distribute: imagine having your site/app available everywhere via [IPFS](https://ipfs.io)
* The culture of perpetual improvement, with less focus on versioning, is normal: people do not need to ‘install updates’ for each app they use on every change.
* It’s just more fun and with a lower barrier to entry, which results in more diverse and dynamic communities who form part of a larger public commons: more sparks, more life, more weird.

[My iOS apps](https://apps.apple.com/us/developer/rcreativ/id356609408) have been quietly free for a while and I’m officially announcing that now. Early next year, they will disappear _forever_; I’m not completely sure how this works—I understand you can continue to use them, perhaps even re-download them, but only if you already have it. I would like to eventually re-make them for the web (be welcome to [join me](https://github.com/rosano) or [keep me alive](https://rosano.ca/back)). In the meantime, enjoy these apps while they last. I’m jumping head first into a world bubbling with new possibilities, and excited to develop for the largest open pool of people on the planet.

---

## ❤️

Help me continue creating projects that are public, accessible for free, and open-source, consider [becoming one of my financial backers](https://rosano.ca/back).

[![Become a backer](https://static.rosano.ca/_shared/_RCSBackButton.svg)](https://rosano.ca/back)

---

# EVENTS

* November 14: Attending [A Field Guide to Internet Emotion > 3.0 Atomize, or Bit-Sized Emotions](https://interintellect.com/salon/a-field-guide-to-internet-emotion-3-0-atomize-or-bit-sized-emotions)
* November 14: Attending [Friendships, Scenes, and Growth](https://interintellect.com/salon/friendships-scenes-and-growth)
* November 24: Co-hosting [Zero Data Swap #4: Hello World](https://chat.0data.app/t/51) with [Noel De Martin](https://noeldemartin.com)
* November 28: Co-hosting [Improvisation, Spontaneity, and Oneness](https://interintellect.com/salon/improvisation-spontaneity-and-oneness) with [Vivek](https://www.youtube.com/watch?v=-a--B8UlkBQ&t=31s)
* November 30: Hosting [remoteStorage monthly hangout](https://community.remotestorage.io/t/737)

---

# ASIDES

[Try these two smart techniques to help you master your emotions](https://ideas.ted.com/try-these-two-smart-techniques-to-help-you-master-your-emotions). Relates the size of one’s emotional vocabulary to their well-being, which makes augmenting one’s capacity as simple as learning new words to name feelings or internal states. (via [Pamela Pavliscak](https://interintellect.com/salon/a-field-guide-to-internet-emotion-3-0-atomize-or-bit-sized-emotions))

---

[The Technium: Scenius, or Communal Genius](https://kk.org/thetechnium/scenius-or-comm). I love the idea that genius is not found only in contexts blessed by institutional validation, and can be occurring without someone noticing it, in ‘ordinary’ places. We can learn to recognize genius when this happens and fan the flames by cultivating and participating. If you look around, you might find it nearby.

> Mutual appreciation — Risky moves are applauded by the group, subtlety is appreciated, and friendly competition goads the shy. Scenius can be thought of as the best of peer pressure.  
> …  
> Rapid exchange of tools and techniques — As soon as something is invented, it is flaunted and then shared. Ideas flow quickly because they are flowing inside a common language and sensibility.  
> …  
> Network effects of success — When a record is broken, a hit happens, or breakthrough erupts, the success is claimed by the entire scene. This empowers the scene to further success.  
> …  
> Local tolerance for the novelties — The local “outside” does not push back too hard against the transgressions of the scene. The renegades and mavericks are protected by this buffer zone.

---

[You should use forums rather than Slack/Discord to support developer community](https://www.mooreds.com/wordpress/archives/3451). Frames the issue not only in terms of information architecture or participant usability, but how it fits into the larger Internet ecosystem, including search engines. Although the title suggests a particular course, it drives the reader to use both more thoughtfully. (via [@expede](https://discord.com/channels/478735028319158273/692101541418762281/907421828937556031))

---

[The global streaming boom is creating a severe translator shortage](https://restofworld.org/2021/lost-in-translation-the-global-streaming-boom-is-creating-a-translator-shortage). Makes visible the industry that produces different translations for streaming content. Despite the fact that machines are used to aid in the process, it ultimately relies on people. If there wasn’t enough incentive already to learn languages, maybe this provides a financial motivation.

> \[Netflix lost about half a million subscribers in the United States and Canada, but gained over a million in the Asia-Pacific region.\]

> \[Translating Korean to French through English makes as much sense as translating English to French through Korean.\]

---

# MUSIC

**All the following items can be accessed as a** [**one-click playlist via Joybox**](https://go.rosano.ca/ephemerata-021-music) **without accounts or sign up—just open and play.**

[![Playlist](https://static.rosano.ca/joybox/_JBXPlaylistButton.svg)](https://go.rosano.ca/ephemerata-021-music)

## BASU

[BASU: _BASU_ (2021)](https://basumusic.bandcamp.com/album/basu). Badass, unapologetic burst of weird energy from David Binney and Kenny Wollesen. Filled with swirly saxophone solos, glitchy effects, synth accompaniments. Constantly mixing electronic with analog, improvisation and composition. Lots of multi-layering soloing. Note the separate cover art for each track.

---

## Long

[Jacob Collier, Mathis Picard: Improvised Piano Duet At The Blue Note (2017)](https://www.youtube.com/watch?v=Qgtoib4q0k0&t=659s). So much beauty in people making music socially, just having fun, enjoying the experience together. Re-assuring to see professionals accepting rough edges, not having [professionalism as the primary objective](https://rosano.hmm.garden/01ev1pxthspxdq5e5k5m54e1sg); less thinky, more youthful and playful. [10:59](https://www.youtube.com/watch?v=Qgtoib4q0k0&t=659s) has notes of Brad Mehldau, Keith Jarrett, stride pianists, so many textures and styles referenced. [57:16](https://www.youtube.com/watch?v=Qgtoib4q0k0&t=3436s) has a surprise vocal duet of _My Romance_ a cappella with Bobby McFerrin style accompaniment. Music is a language.

---

[Groovy Kaiju: _Destroy All Monsters_ (2021)](https://www.youtube.com/playlist?list=OLAK5uy%5FnbJX6FJo%5FyFJe9K-gAUBntBtIpiIC%5FtNk). Groovy, tasteful mixing with warm upbeat vibes. Reminds me of J Dilla’s _Donuts_ with more modern music.

---

[Tom Misch: Tiny Desk Concert (2018)](https://www.youtube.com/watch?v=IUMTaAQ43lY). Uses simple, common musical forms and devices, but with tasteful harmonic surprises. Everything is rhythmic, including the singing. Body-shaking, head-banging grooves, makes you go ‘ooooh yea’. (via [Shawn](https://twitter.com/Sh%5FMcK))

---

## Short

[Yaeji: _Raingurl_](https://www.youtube.com/watch?v=%5F3T8KznhThQ) from _EP2_ (2017). Manages to use repetitive elements with cliché chord progressions without sounding tired or stale. Infectious chorus makes body move. Slight bongo/hand drums keeps it from having a ‘pure electronic’ sound. (via [Eva B](https://boutiqueevab.com))

---

[Blood and Dust: _Around Your Grave I’ll Light a Ring of Fire_](https://blood-and-dust.bandcamp.com/track/around-your-grave-ill-light-a-ring-of-fire) (2021 single). This new release very quickly enters a world of their own creation. Kind of impressed how someone like me who doesn’t listen to music with this aesthetic can thoroughly enjoy it—still not sure why. The intense and dark beat becomes into something simultaneously slow and fast. Love the crunchy noise synths throughout.

---

## (I heart music)

I always love receiving music. Send me recommendations anytime, anywhere!

---

# That’s all folks!

Feel free to reply and share any reflections you might have, or just say hello. Have a great week 🙂

.

If you enjoyed this, please consider sharing on [Twitter](https://twitter.com/intent/tweet?url=https%3A%2F%2Fcafe.rosano.ca%2Ft%2F156&text=%23Ephemerata%20021%20by%20%40rosano%3A%20going%20fully%20web%20%E2%80%A2%20BASU%20%E2%80%A2%20emotional%20vocabulary) or [WhatsApp](https://api.whatsapp.com/send?text=Ephemerata%20%23021%20by%20%40rosano%3A%20going%20fully%20web%20%E2%80%A2%20BASU%20%E2%80%A2%20emotional%20vocabulary%20https%3A%2F%2Fcafe.rosano.ca%2Ft%2F156) or Email.
