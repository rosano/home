---
date: 2021-07-29T12:39:21.000Z
slug: zero-data-swap-1-schemas-interoperability-and-cambria-july-28-2021
title: "Zero Data Swap #1: Schemas, interoperability, and Cambria"
summary: Schemas and the challenges of defining and standardizing them.
tags:
  - Zero Data
  - event
chat_id: "12"
---
Thanks to everyone who attended and made this such a great conversation.

Rosano took more extensive notes but unfortunately lost the data (!), and would encourage participants to summarize their thoughts in the comments.

---

# Participants

* [Alexander Cobleigh](https://cblgh.org) works on [cabal](https://cabal.chat) peer-to-peer chat (like Slack but no account and no server).
* [Geoffrey Litt](https://www.geoffreylitt.com) works on [Wildcard](https://www.geoffreylitt.com/wildcard) for customizing apps without programming, using an excel-like interface; and with [Ink & Switch](https://www.inkandswitch.com) on [Cambria](https://www.inkandswitch.com/cambria.html) for distributed schema evolution.
* [Michiel de Jong](https://michielbdejong.com) has worked on protocols like [Solid](https://solidproject.org), and [remoteStorage](http://remotestorage.io), as well as the closely related [Unhosted](https://unhosted.org) movement. He could be the grandfather of Zero Data, but to feel less old he points to Tim Berners-Lee who wrote a prior post on separating data from apps in 2009.
* [Rosano](https://rosano.ca) works on various Zero Data apps like [Hyperdraft](https://hyperdraft.rosano.ca) and [Launchlet](https://launchlet.dev).
* [Sebastian Kippe](https://sebastian.kip.pe) works with [5apps](https://5apps.com), which provides static hosting and remoteStorage accounts; and [Kosmos](https://kosmos.org), which develops decentralized collaboration patterns and software.

---

# Discussion

> Naming is important because it enables ideas to be meme-able.

We talked throughout about schemas and the challenges of defining and standardizing them. TLDR: start using Cambria.

How can we increase adoption? What is the selling point for developers? How much easier is it to build apps? Can I use a library to enable my app to become the next Figma for X? What’s the selling point for people using apps? What features does it enable? Rosano points to [doorless apps](https://github.com/0dataapp/small-web-app-ring) that can be used with less friction, without creating accounts; collaborative features like being able to share access and collaborate in real time; using an email address as the storage identifier so that people can use pathways to enter a new world.

In the Solid world, [Noel de Martin](https://noeldemartin.com), [Vincent Tunru](https://vincenttunru.com), and [Jackson Morgan](https://twitter.com/otherJackson) are making some of the more popular apps, such as [Media Kraken](https://noeldemartin.github.io/media-kraken) for tracking movies, [Notepod](https://notepod.vincenttunru.com) for taking notes, [Poddit](https://vincenttunru.gitlab.io/poddit) for bookmarking, and [Liqid Chat](https://liqid.chat) for discussion stored on pods. Some challenges include (“many people with opposing views trying to change the world together”) and (“linked data not being easily interoperable in practice”)—see Michiel’s comment below for more details.

Alexander asks about remoteStorage…

* How different is the [remotestorage.js](https://github.com/remotestorage/remotestorage.js) API from `localStorage`? More or less the same (“get”, “set”, “delete”), even though it uses IndexedDB. You can use it to add sync to browser-based and offline-capable apps and tools. (Zero Data can even be thought of as a way to separate data from localStorage apps so that people can see their data).
* Can you self-host the data? The more modern servers in [Rust](https://github.com/untitaker/mysteryshack) and [Node.js](https://github.com/remotestorage/armadietto) might not be production-ready. [php-remote-storage](https://github.com/fkooman/php-remote-storage) has more testing, production-use, and is easier to get started—although it is an older implementation, the spec hasn’t changed drastically.

Geoffrey might have access to research funding for people working on these kinds of issues.

---

Michiel emailed his thoughts on linked data to the group and asked to share it here:

### The promise of linked data in the context of personal data

> So the promise of linked data breaks down for public data when we use different URIs for the same concepts.  
>  
> You asked how that relates to personal data, well,  
>  
> The promise of linked data there would be that if one app stores a todo-list item on your personal data store, then that data would be both self-describing and machine-readable, and the leap of thought that semantic web enthusiasts are sometimes guilty of is to imply that this data would then also be machine-interpretable.  
>  
> That would work if app todo-list apps use for instance the <https://schema.org/ScheduleAction> class to store todo-list items. But in practice, Solid-based todo-list apps all use their own predicates, from their own ontologies, to denote facts about the world, and the fact that it's serialized as RDF where all identifiers are URIs does not make it more interoperable than if you would only used URI identifiers for the data format, and then just use "normal JSON" for the rest of the data format.  
>  
> A way in which this confusion is sometimes added to, is by using generative UIs that get generated on-the-fly based on the data at hand. If you "view" a piece of data, it renders in a certain way based on a semantic style sheet, and even action buttons appear based on the content of the data you're "viewing".  
>  
> This goes as far as when you view the data of a chat conversation on Solid OS, it renders a fully functional chat app inside a div, with that data loaded in. This is nice, but this "data browser" approach is not enough to build actual software. Which is why everybody who looks at Solid for the first time, immediately notices how hard-to-use Solid OS is. It's a very nice conceptual approach to software development, but it's not a silver bullet.  
>  
> And even for Solid chat, there are now not one but already 3 or 4 incompatible schemas! :(  
>  
> I even used different schemas in different apps myself. So even for compatibility between apps of the same author, we need Cambria. :)  
>  
> And self-describing data (in the sense of adding a file format version indicator inside the data) is important, but it doesn't magically make zero data apps interoperable. :)
