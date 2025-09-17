---
date: 2021-11-14T05:26:11.000Z
slug: going-fully-web
title: Going fully web
summary: Why I stopped making iOS apps after twelve years.
tags:
  - Apps
  - process
  - meta
wiki_id: 01fmeehzvr3n9q0rkrnf7y2d5c
---
I have been working on iOS apps since 2009; I started with a collaboration with [Wil](https://twitter.com/tom%5Ffrog) on [AudioScrub](https://rosano.ca/audioscrub) (née iLift), and eventually [went solo](https://utopia.rosano.ca/sixth-times-a-charm) in 2014\. After twelve years on the App Store, I've decided it's time to **go all-in on the web** and would like to share what that means and outline the tradeoffs involved.

The spur for this change occurred years ago after the launch of my seventh app [sonogrid](https://rosano.ca/sonogrid). Although the project had iterations over several years, it mostly came together in the summer of 2018: I overworked myself for months, with incessant attention to detail, and was eager to present this to people I would meet during my upcoming trip to Colombia (they _really_ love music there, and this app was for music lovers).

The app launched to a good reception online within various iOS music app communities, but to my dismay, most of the Colombians I met in person were not able to access it because Apple devices are prohibitively expensive there. I would offer to demo the app on my phone and let the other person play with it after: repeatedly, they would enjoy the interface and become immersed in a fun creative process, only to become disappointed on learning that it's not on Android. It was hard to resolve the contradiction between producing something I was super proud to share—a kind of magnificent zenith in my iOS trajectory—and realizing that only half the world can use it.

This was a bit deflating, and I wasn't motivated to do double the work just because of platform duopolies. Added to this was the more subtle but long-standing aversion to the 'review process' that native apps go through before appearing on the App Store: I was hesitant to invest further in an environment with little control and leverage over my own future, with a constant fear of 'reviewer rejection' and [the rug slipping out from under me at any time](https://marco.org/2009/06/13/trust-hostility-and-the-human-side-of-apple). So I took a step back and haven't updated many of my iOS apps since then.

In place, I worked on [various web components](https://github.com/orgs/olsk/repositories) and put them together to create [about a dozen web-based projects](https://github.com/rosano#open-source-projects). Contrasting the experience between the web and native (i.e. iOS) worlds, I feel more enthusiastic about how the web is evolving. It can still be 'limited' in comparison to native apps, but that gap is gradually closing and most of my ideas already fit within what's currently possible.

## Why you should choose Web over Native

Just to review, in case it's not obvious, there are some more commonly understood reasons for choosing the web over native:

* Basically, all current and future devices (mobile, tablet, desktop) and operating systems (iOS, Android, macOS, Windows, Linux) are supported.
* Projects are simpler and more cost-effective to build and deploy, with tools and skills that are easier to acquire.
* A thriving universe with bazillions of communities spanning the entire Internet provides lots of answers to questions, and most knowledge is based on open standards and therefore highly transferable.
* Backward compatibility is a priority, which means your project is likely to continue working despite technology evolving over time.
* You can make changes whenever you like and have them online within seconds or minutes, as opposed to requiring third-party approval for everything, which could take days or weeks.
* The environment makes it more and more empowering for single-person or small team operations to produce things, without requiring the resources of a large company.

The challenges of the web for developers like myself is to help people 'cross the chasm' that exists due to a lack of common patterns for interacting with apps:

* There is **no obvious 'App Store'**, so people are left to search the wider web (amongst articles, videos, cat pictures, and everything else), but maybe there could be [one that celebrates the 'instant' nature of this platform](https://appindex.app/), or a subscription bundle like [SetApp](https://talk.fission.codes/t/setapp-curated-apps-bundle-subscription/2260) to help with discovery.
* There is **no universal 'buy' button**—every project does this their own way, but the [Ghost Portal](https://ghost.org/help/setting-up-portal/) is becoming more and more common, and I'm trying something similar with my [Fund Button](https://cafe.rosano.ca/t/69).
* The idea of an 'install' button isn't ubiquitous, and **some web apps may not be mobile-friendly** or [local-first](https://www.inkandswitch.com/local-first), but for the rest there are libraries like [a2hs.js](https://github.com/koddr/a2hs.js) that help guide people to make accessing web apps a more familiar experience: simply click on an app icon to launch.
* The **lack of an integrated payment system** means that every project needs to re-build trust and help others be comfortable enough in the environment to support them financially, but [Stripe Checkout](https://stripe.com/payments/checkout), [PayPal Checkout](https://www.paypal.com/merchantapps/appcenter/acceptpayments/checkout), and [Web Monetization](https://webmonetization.org/) are contributing various solutions that reduce friction from this process. (I would also love to see [fiscal hosting](https://opencollective.com/fiscal-hosting) become more prevalent so that having a legal entity is not necessary to receive money.)
* Performance has often **held back the types of applications that can be built** on the web platform, but [WebAssembly](https://webassembly.org/roadmap) will eliminate this issue for a whole class of ideas.

There are plenty of people working to create open solutions to these 'missing features'; it seems like a solvable problem with time.

## What it’s like making Native Apps

(Feel free to skip this section if you'd rather not hear me complain about Apple.) I'm sharing some negative aspects of my experience making native apps with hesitation, not to be a downer but because there might be people that aren't really familiar with the developer side:

* **The paternal review process can be soul-crushing at times**: reviewers don't enforce rules consistently; bad app(le)s get approved and grift people out of money or personal information; it's an anxiety-ridden process that can feel unpredictable. You may have a good impression of Apple if you've bought their products: calling them for support usually means speaking to a friendly person who takes responsibility for your issue and tries to resolve it. App Review on the other hand might as well be an outsourced company, incredibly bureaucratic, and often feels like talking to a rock; any sensuality around the Apple brand quickly vanishes under these bright white office lights as you find yourself filling out TPS reports in the developer cubicle all of a sudden.
* **Large companies dominate the App Store listings and generally get better treatment**. The lucky independent developers are ones who have the ear of someone who works at Apple to support them if there's a dispute and either push their app through App Review or get it featured.
* **It's quite a task for an individual or small team to produce an app**, create screenshots and videos, localize everything in multiple languages, respond to reviews, and keep on top of technology that changes every year. The prototypical success looks more like a large organization than two guys in a garage.
* It feels like **feeding into a device ecosystem of planned obsolescence and overconsumption**, where developers and consumers need to keep upgrading—an insatiable appetite for more.
* The certificates and signing from the build process is **complex** and can bring development to a halt if you don't have the right combination of XCode and macOS (hint: keep buying new Macs).
* The expanding variety of screen sizes forces you to **learn responsiveness primitives which are platform-specific** and create a complex array of image and video assets at different sizes for distribution.
* The **constantly changing environment** _will_ break your app and force you to either hurry and accommodate the changes or receive messages from customers asking why it doesn't work anymore.
* You can't simply share your app with a friend or even _install it on your own device_ without **paying rent or getting permission through App Review**.

There are obviously lots of positives to native platforms as well, but these kinds of things weigh down smaller operations like mine, favouring large companies with resources and time to deal with this ever-growing complexity.

## Developing for Web

Despite the web's challenges, there's much that excites me about its future and some of these characteristics are intrinsic to the platform:

* The concept of [instant games](https://www.fortressofdoors.com/the-future-of-games-is-an-instant-flash-to-the-past/) promotes highly shareable apps via a simple link that requires no install process: show up and start.
* Having multiple payment providers, potentially with the addition of cryptocurrencies means if you wanted to also just invent your own value system, maybe some kind of post-money coupon thing, it's possible to integrate with existing systems…
* User-controlled personal data stores are [already being used](https://0data.app/) on the web and will eventually make their way to native apps.
* Edge apps that work completely in the browser are easy to mirror or fork, and virtually free to distribute: imagine having your site/app available everywhere via [IPFS](https://ipfs.io/)
* The culture of perpetual improvement, with less focus on versioning, is normal: people do not need to 'install updates' for each app they use on every change.
* It's just more fun and with a lower barrier to entry, which results in more diverse and dynamic communities who form part of a larger public commons: more sparks, more life, more weird.

[My iOS apps](https://apps.apple.com/us/developer/rcreativ/id356609408) have been quietly free for a while. By mid February 2022, they will disappear _forever_; I'm not completely sure how this works—I understand you can continue to use them, perhaps even re-download them, but only if you already have it. I would like to eventually re-make them for the web (be welcome to [join me](https://github.com/rosano) or [keep me alive](https://rosano.ca/back)). In the meantime, enjoy these apps while they last. I'm jumping headfirst into a world bubbling with new possibilities and excited to develop for the largest open pool of people on the planet.
