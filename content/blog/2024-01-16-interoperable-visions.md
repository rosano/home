---
date: 2024-01-16T14:40:26.000Z
slug: interoperable-visions
title: interoperable visions
summary: Every interoperable app becomes a super-app.
tags:
  - Zero Data
  - technical
---
<small>👋 Heads up: if you're looking for the shorter, less technical version, read [pointing at the wrong thing](https://utopia.rosano.ca/pointing-at-the-wrong-thing/).</small>

* * *

I have been using my own [Zero Data](https://0data.app) apps (storing all data on spaces you own) since 2018, starting with [Hyperdraft](https://hyperdraft.rosano.ca) for taking notes and gradually developing five more to optimize other meaningful workflows. It was enough back then to know that every iota of my data from these apps, including documents, configurations, and preferences, was in a place I control—a 'personal data store' (PDS).

It's been great, perhaps life-changing, and still continues to be a vital part of how I organize myself and my projects: my important stuff is with me at all times and eventually gets synced to all my devices; these web apps happen to be [local-first](https://www.inkandswitch.com/local-first) and work fine without internet access; I've spent no time on spam, or proving to a machine that I'm human via captchas; and somehow I was even able to collaborate with other people on flashcards despite it not really being baked into my development frameworks—all without any felt presence of a large tech company deciding whether I can or not.

# there, but invisible

One of the principles I listed on the Zero Data page is "do what you want with your data at any time", and I've been reflecting on some limitations of the current reality: it's technically true that I'm able to 'do what I want with it any time', but what _can_ I actually do with this?

Most of my data in a PDS is stored in a format for machines ('[JSON objects](https://simple.wikipedia.org/wiki/JSON)'), which I generally don't wrangle with my own hands—perhaps nobody should (to avoid throwing a computer into crisis by missing a comma). Sometimes I write code to maneuver this format into something meaningful, mostly for one-off situations that don't repeat and wouldn't be resolvable with any graphical interfaces ('[GUI](https://simple.wikipedia.org/wiki/Graphical%5Fuser%5Finterfaces%5Fand%5Fconsoles)' software) that I'm aware of; I would prefer to avoid coding and can imagine it's not an option for most people (who still might not have the programming knowledge or mindset). More often, I use self-hosted [n8n automations](https://n8n.io) as a way to bridge different flows while using this data; it can be overall fantastic, yet still cumbersome and not quite low-code enough to include non-tech people. In the process, I learned about and self-hosted the no-code database [Directus](https://www.directus.io), which, although well-designed in many ways, feels quite heavy-handed and unfortunately not local-first. There are apps like [Inspektor](https://inspektor.5apps.com) with useful affordances to edit key-value pairs as if they were 'fields', but it's not practical to do this regularly.

This data is somehow 100% mine, but as if I can't touch it or do much without technical expertise, as if I don't really have it even though it's right there; this is in some way strangely similar to having it stuck in one of those silos that I meant to avoid in the first place. The nicest way would be to simply use a variety of apps that can (inter-)operate on the same data without breaking each other. Observing [how some of these Zero Data apps store the data](https://pdsinterop.org/conventions/bookmark/#webmarks) (mine included), it seems there's a long way to go. Interoperability (interop) would make this better.

---

# pure not practical

Related to silos, I've also been reflecting on how Zero Data shouldn't always mean asking people to leave the tools they know, or starting a new ecosystem from scratch. I've probably been as guilty of this as anyone else who claims to care about more ethical technology, and believed for a while in blank slates, but now I assume that things are and perhaps should be _messy_, because that's how it works in real life, with humans and their complex logistical or emotional entanglements. Only in the tech sphere would it be popular to 'start from scratch', with pristine self-declared confines unaffected by legacy; there's enough money and free time there to prop it up until there isn't, but for the rest of the world, subsidizing success isn't always sustainable: politically speaking, people generally gain leverage by forming imperfect coalitions rather than by staying 'pure' to any ideals or working exclusively with those who pledge the same; these pluralistic (messy) conditions for collaboration are exactly what an approach to apps and their data could exemplify.

In practice, that could mean:

* embracing popular formats, even if created by the devil
* not waiting for neat standards, instead letting systems grow from [simple seeds](https://subconscious.substack.com/p/simple-seeds)
* not pushing people to a single blessed representation, instead perhaps supporting a dynamic vocabulary with something like [Cambria](https://www.inkandswitch.com/cambria)
* having diverse options for import and export, then proliferating them through packages
* minimizing the 'destructive' tradeoffs of any decision.

Perhaps instead of forcing a choice to be made, there's potential to encourage a 'both and' mentality: alternative technology and the frameworks built in that world have an opportunity to become sort of 'data liberators' that help people avoid feeling stuck: personal data stores and apps built for them could, rather than feeling like silos, be considered bridges between or out of them by enabling [credible exit](https://subconscious.substack.com/p/credible-exit) where there is none. Interop would make this better.

---

# function over formats

One way to restate and combine the above two perspectives is that the feeling of 'having your data in your hands' or '[handedness](https://youtu.be/McKXW-bP2HQ?t=1833)' (credit to [Boris](https://bmann.ca) for the term)—being able to mold and maneuver it as you wish—comes not from a consecrated format but rather from access to diverse lenses, views, or 'applications' for the same data: maximizing what a human can do while minimizing the knowledge or skill required. I would say it's the variety in those possibilities that make the data tangible in this way, not the format itself, even though the format 'enables' it. Of course, interop would make this better.

---

# apps as dumb, interoperable views

Various people (such as [Ruben Verborgh](https://ruben.verborgh.org/blog/2017/12/20/paradigm-shifts-for-the-decentralized-web/#apps-become-views) and [Geoffrey Litt](https://www.geoffreylitt.com/2021/03/05/bring-your-own-client.html)) have articulated visions of apps almost like functions where your data goes in and a visual representation or interface comes out. I hope that by sketching out some more details around interop, something new can become discernible.

I've been thinking about this for my note-taking app and will use it as the main example, but there's probably lots that can be applied to other kinds of apps. As an aside, stealing these concepts for your project would not only be appreciated, but perhaps a way to 'do your part' if you're an interoperable app developer.

## decouple type and location, enable pointing

Text editors are commonly used to 'edit text documents', often 'plain text' and sometimes 'rich text' with formatting. Unlike native apps where you can simply 'drag and drop' or 'share' files and the app will try to 'open' them, apps built for 'personal data stores' (Zero Data apps) [currently link](https://pdsinterop.org/conventions/notepad/#litewrite) the format or 'type' to a specific location or 'path': for example, reading or writing note-like things in `/notes` versus `/documents` versus `/$APP_NAME`, which makes it hard to anticipate where your notes will be and breaks interop. There's also a tension here between 'app folder' versus 'type folder' (which I call 'chaos folder'), or ['document box' versus 'data graph'](https://michielbdejong.com/blog/29.html). One can debate whether there's such a thing as 'the correct' place, but let's assume it doesn't matter: if a Zero Data app wants to access a specific kind of data, ultimately it needs to be built 'knowing' about that relationship between location and type. Solid 'solves' this with [type indexes](https://solid.github.io/type-indexes/), remoteStorage with [data modules](https://remotestoragejs.readthedocs.io/en/latest/data-modules.html), but neither are guaranteed to be used when reading or writing data. Until there's a magical solution to that complex social problem of getting people (in this case, app developers) on the same page, it would be more flexible to perhaps have a default or preferred location but more importantly, like native apps, an option to 'point' the app at some data, whether local files, on cloud storage, or in PDS 'JSON objects'.

## pointing at the 'wrong' thing

Would it make sense to point a notes app at your bookmarks? Or a maps app at your contact list? Or a flashcards app at your music collection? Some domains are more complementary than others, but regardless, the potential combinatorial possibilities of being open and flexible in this way are immense and would enable people to play with and combine data in interesting ways.

By pointing your notepad at a bookmarks app, for example, you might use fancier text-editing capabilities, rather than those of a simple text field, to add notes to saved links, perhaps more comfortably draft a personal message or blog post about that link, _and_ have it automatically associated correctly with the corresponding document from a different app. Pointing at other things (like contacts, recipes, correspondence, etc.) might mean dealing with a 'plain editable text' representation of those 'items' or 'objects', and at the very least being able to read and search them. Consider also pointing a maps app at your contacts (maybe to see where your friends are?), or recipes (maybe to see where foods or ingredients come from or can be found?), or photos (maybe to see where you've made some memories?).

These are some of the possibilities when there's flexibility in the storage location and format; this sort of exists already with native apps and individual files, but pointing at 'collections of objects' in the way previously described often requires specific integrations (as [Find my](https://www.apple.com/icloud/find-my) shows your friends or [Photos](https://apps.apple.com/us/app/photos/id1584215428) presents places from geotagged images).

Again, I'd leave it to someone smarter than I to discover the best interface solution here: my imagination is currently limited to something like a 'file picker' without the burden of a deeply nested file system, where even on a mobile device you can say 'open this from there' with just a few taps; maybe the picker itself needs to be aware of various formats and how to convert random stuff into vocabularies that it knows the receiving app will understand—like the [iOS Share sheet](https://developer.apple.com/design/human-interface-guidelines/activity-views) shows "what you can do with the shared content", but in reverse, to show "what content you can use with the current app"; anyone familiar with [Quicksilver](https://qsapp.com) or [Launchlet](https://launchlet.dev)'s 'pipe mode' might hear echos of 'subject' and 'action' ('with X, do Y').

## two-way sync

Going a step further, let's imagine seeing contacts in this note-taking app (represented as plain editable text); modifying a name, address, or text blurb; and having the changes translate back from text into the original format (perhaps vCard). A bidirectional transformer or translator could be written once (perhaps even by one person), and any note-taking app could use that to flexibly view and edit all kinds of things. The closest usable solution I've seen for JSON objects (although not yet in common use) is [remoteStorage data modules](https://remotestoragejs.readthedocs.io/en/latest/data-modules/defining-data-types.html), encapsulating schema and logic together in a package that can enable any app to 'handle' specific data; [similar efforts for Solid](https://github.com/solid-contrib/data-modules) are currently in development. Lots of people use text editors (plain or rich) and would have an option to move data around fluidly while still benefiting from apps that use structured data under the hood. For a distant but novel approach, see how the [Potluck research prototype](https://www.inkandswitch.com/potluck) cuts out the middleman and simply uses text in a notepad as the home for all kinds of data.

## dynamic schemas from the start

It might take a lot of work to write and maintain many data converters, and although still useful under those circumstances, what if it could be easier or partially automated through a cheap pseudo-intelligent function? Perhaps a library could be preloaded with vocabularies from [Schema.org](https://schema.org) or [ShapeRepo](https://shaperepo.com) and utilities that attempt a simple best guess when an input 'fits' a known structure? This could help with the issue of 'stale apps' (that either haven't been updated in a long time or may never be updated again) by enabling them to handle data dynamically from the start (as opposed to perpetually speaking only one fixed format), perhaps without requiring updates to learn about new schemas, and thus helping more of them remain compatible, interoperable, and useful without developer effort.

## flexibility through pluralism

In addition to processing various forms of local data, I can imagine it being useful to have specific integrations with external services, transform their representations into one or multiple common data vocabularies, and package that integration to simplify inclusion in other apps. Imagine a text editor that can deal with input spanning the gamut of:

* `.txt` files in a personal data store, whether stored in `/notes`, `/documents`, or `/$APP_NAME`
* JSON text documents, whether stored as [Schema.org/TextDigitalDocument](https://schema.org/TextDigitalDocument) or even [Hyperdraft's occult format](https://pdsinterop.org/conventions/notepad/#hyperdraft)
* either of the above, whether stored on remoteStorage, Fission, Solid, Dropbox, Google Drive, iCloud, nextCloud, locally via the [File System Access API](https://developer.chrome.com/docs/capabilities/web-apis/file-system-access), in a Git or GitHub repository, etc…
* documents from Apple Notes or Simplenote
* documents from Google Docs or Microsoft Word, editable as plain text, Markdown, or rich text
* blog posts from [Ghost](https://ghost.org) or [Wordpress](https://wordpress.org)
* contacts, calendars, or correspondence as text by 'pointing at the wrong thing'
* perhaps not limited to one of the above sources or collections at a time, simultaneously handling multiple clouds or storage providers, multiple sources, or multiple formats

To more technical people, this might sound merely like 'integrating with 3rd party systems'. I would suggest that if those are the meaningful representations to someone using this kind of app, then it's what makes the data feel tangible and 'in the hands', clear that they actually have it without needing to trust any specific app, developer, or protocol.

What's the value of one app supporting a mix of these? Two apps? A whole ecosystem of apps? Not only reading but writing back via two-way sync? In the way we 'edit stuff as text' here, regardless of original format, what other affordances can be made for apps to 'edit stuff as X'? and how can it be enabled permisionlessly? This feels like an ideal for many protocol designers: a dynamic ecosystem where people are building and using software in unpredictable permutations, where progress happens faster than the speed of plugins, or perhaps even without codifying specific possibilities in advance. It's important to restate that these pluralistic potentials shouldn't be exclusive to Hyperdraft, as any note-taking app might benefit from at least some of this; ideally, it would be packaged in a way that minimizes complexity for the app developer while maximizing potential interop.

# text editor as super-app

With all these concepts in mind, let's paint a picture of how software could be more interoperable.

Point your app at various formats and locations, and it will show you meaningful representations; where possible, it provides natural ways to shape those representations, transparently translating and syncing back if necessary. Use specialized features, shortcuts, and interfaces for text editing wherever some modifiable text is exposed: instead of 'editing text documents', simply 'edit text' wherever you see it. Try the same with non-text. [Apps become smaller](https://youtu.be/UNKgD8OzjCk?t=57m11s).

Connect multiple sources simultaneously, no need to have it all in one storage. Assume a messy ecosystem and embrace plurality. If the data's preferred transport is not available to web apps, make it available via something like [sockethub](https://github.com/sockethub/sockethub). Bridges, converters, or dynamic vocabularies are written once and abundantly available—handy for whoever made them, but more likely for many other people; app developers can benefit without releasing new updates. At minimum, there are multiple useful options for import and export. Data is already everywhere, make use of it; rather than government surveillance and large tech companies monopolizing our data to cross-reference between multiple systems and silos, we own our data and the potentials that result.

It's a lot of work to consider, implement, and maintain storage, identity, CRDTs, encryption, and replication—on top of UX and the actual app: put it in the foundation, reduce pain for the interoperable app developer, minimize friction of having to choose—let them simply read and write data.

Every interoperable app becomes a super-app.

# my future

I'm currently most excited to imagine: writing notes in Hyperdraft and 'seeing it' in [Logseq](https://logseq.com); writing a Zero Data web app that syncs with my phone's contact list; a liberator app where you can read from (and maybe write to) your favourite centralized platforms; journaling 'daily notes' in [Emoji Log](https://emojilog.rosano.ca) and publishing as a digital garden via something like [Quartz](https://quartz.jzhao.xyz); a [tool to edit arbitrary JSON objects](https://merveilles.town/@rosano/106071811392168445); and my own apps supporting multiple clouds or sources simultaneously. It feels great to have space to progress on some of these ideas again: if you want to hear when I have this working in some way, sign up for the Zero Data mailing list here or follow me anywhere.

---

### acknowledgements

Thanks (in reverse alphabetical order) to Sebastian Kippe, Michiel de Jong, Jess Martin, Heddi Ried, Gordon Brander, Elisa Guimarães, and Boris Mann for reading a draft of this and sharing feedback 🙏🏽.

---

<small>P.S. Gordon shared some interesting notes which I'll quote here (with permission):</small>

<details>
<summary>notes from Gordon</summary>
<blockquote>

my own notes as I grapple with these same challenges:

* [Credible exit](https://subconscious.substack.com/p/credible-exit). For exit to be credible, the data must be gettable, but also useful. What useful means depends upon the usecase/goal. So credible exit is a soft condition, or a gradient.
* Hostile interoperability. Historically, interoperability has often emerged through competition. Microsoft Word or Photoshop implement a proprietary format. The app becomes popular. It spawns competitors, and also adjacent apps. These apps implement all or a subset of the proprietary format. Finally, that format becomes a de facto standard, and sometimes an actual standard. \[See [Files allow interoperability to emerge retroactively](https://subconscious.substack.com/i/40537200/files-make-interoperability-the-default)\].

Something I realized while writing these: Interoperability is not a feature. Interoperability is an ecological condition. It's what happens when different players with different incentives evolve networks of exchange. That means we can't force it to come about. We can only terraform the conditions where it might grow.

The desktop had the file system, a permissionless shared substrate belonging to the user. Apps could read each other's files and implement each other's file formats (each app effectively acts as a Cambria lens). These conditions were extremely conducive to the emergence of hostile interop.

This is what lead me personally toward building Noosphere protocol… it's essentially a very simple networked file system, supporting user ownership, multiplayer, and ability to permissionlessly plug multiple apps on top. There may be other paths to this outcome as well. In conversations with PVH he's mentioned that his motivation for investing in CRDT research is that if you have a file that knows how to sync itself, you don't have to care about the protocol.

</blockquote>
</details>

---

<small>P.P.S. I was thinking about this post before Jesse got me 'interop-pilled', but [our conversation](https://utopia.rosano.ca/interoperable-collaborative-apps-with-jess-martin/) certainly helped add fuel to the fire:</small>

<iframe width="300" height="250" src="https://www.youtube-nocookie.com/embed/UNKgD8OzjCk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
