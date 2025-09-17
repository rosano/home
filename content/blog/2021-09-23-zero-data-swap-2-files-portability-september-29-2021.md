---
date: 2021-09-23T13:04:08.000Z
slug: zero-data-swap-2-files-portability-september-29-2021
title: "Zero Data Swap #2: Files / Portability"
summary: What makes files composable and extensible? How to supportive them on
  mobile? What changes when using Zero Data protocols?
tags:
  - Zero Data
  - event
chat_id: "37"
---
* [Gordon Brander](https://gordonbrander.com) works on [a tool for imagination](https://subconscious.substack.com/about), and recently wrote about [composability with other tools](https://subconscious.substack.com/p/composability-with-other-tools).
* [Rosano](https://rosano.ca) works on various Zero Data apps like [Hyperdraft](https://hyperdraft.rosano.ca) and [Launchlet](https://launchlet.dev).

# Reading Inspiration

[Composability with other tools](https://subconscious.substack.com/p/composability-with-other-tools):

> With one-off API integrations, every app must be connected with every other app in both directions. The number of integrations required for interoperability is equal to the maximal number of edges in a directed graph, or n \* (n-1). Adding one more app, for a total of 6, means going from 20 to 30 integrations. 10 apps is 90 integrations! \[…\] Imagine any of these apps needs to change its API. Now every single other app in the network needs to change its integration code. Everyone in the network has to coordinate, because everyone in the network has to implement everything.

> The protocol acts as a hub in the network, cutting the number of connections necessary for full interoperability from n \* (n - 1), to just n. The number of integrations scales 1:1 with the number of apps. \[…\] none of these apps have to know anything about each other. All they need to know is the protocol. This makes the set of possible workflows between apps an open set. \[…\] Files make interoperability the default \[…\] Files allow interoperability to emerge retroactively. New apps can come along and implement the file formats of other popular apps, uplifting their file format into a de facto protocol. This has happened many times, from .doc, to .rtf, to .psd. Competing products are able to get off the ground by interoperating with incumbents. New workflows can be created permissionlessly.

> Protocols produce creative combinatorial explosions \[…\] When you have a universal API for composition each additional tool increases the number of possible workflow combinations by n \* (n - 1). \[…\] That’s our directional graph equation again, but this time the network effect is on our side. The more tools, the more possibilities. \[…\] If a tool supports composition with other tools, it supports open-ended evolution. At that point, all of the other ways in which it might be terrible become incidental, because an evolutionary system will always be more expressive than one that isn’t. Nothing else can widen the potential of creative tools as rapidly as composability with other tools. It's not even close.

[The future needs files – Scott Jenson](https://jenson.org/files):

> The power of files comes from them being powerful nouns. They are temporary holding blocks that are used as a form of exchange between applications. A range of apps can edit a single file in a single location. On mobile, the primary way to really use files is to “Share” between apps. This demotes files from a powerful abstract noun into a lackluster narrow verb. \[…\] For example, I can import a text file into the Notes app but it’s really nothing more than a glorified copy/paste, not an editing of an object in place. This makes a cloud storage service like DropBox nearly useless as I’m not editing “the thing” but a copy of the thing. I need to save it back out to Dropbox if I want anyone else to see my changes. That’s vastly underutilizing the power of the abstraction that comes from files.

> This isn’t some feeble political statement to liberate my data from a company. I want files to liberate my data from my own apps and create an ML explosion of activity! Files are at some level a hack, I get that, there are limits but they are an extremely useful and flexible hack. Like the QWERTY keyboard, they are “good enough” for most tasks. Files encapsulate a ‘chunk’ of your work and allow that chunk to be seen, moved, acted on, and accessed by multiple people and more importantly external 3rd party processes.

[LN 002: Universal data portability](https://alexanderobenauer.com/labnotes/002):

> What if you could move data items, with views provided by their hosting applications, around system and application views? What if we could bring together a series of things that all relate, even if they are of different types, and are from different apps or windows? What if you could browse your things in one fluid interface, without regard for their differing data types?

> When you pull an item into some other place, it is still rendered by its hosting application. Hosting applications provide the view components for rendering data items in different situations or sizes. It can be thought of much like a widget in today’s operating systems: the system defines what the data item is and what size it should take up, then it relies on the data item’s hosting application to provide the view component that renders it.

See also the [previous swap](https://chat.0data.app/t/zero-data-swap-1-schemas-interoperability-and-cambria-july-28-2021/12).

---

# Summary

We discussed what makes files composable and extensible, how to be supportive of files in ecosystems where they aren't present (such as mobile), what changes when using files via Zero Data protocols, and more. Participants included [Alexander Cobleigh](https://cblgh.org), [Boris Mann](https://bmannconsulting.com), [Doug Reeder](https://github.com/DougReeder), [Gordon Brander](https://gordonbrander.com), [Jess Martin](https://jessmart.in), [Noel De Martin](https://noeldemartin.com), [Rosano](https://rosano.ca).

# Recording

The half the video failed to record, and rendering for the remainder was glitchy, so this is essentially an audio podcast.

<iframe title="vimeo-player" src="https://player.vimeo.com/video/767543315?h=56d73c4369" width="300" height="200" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowfullscreen></iframe>

| time  | section                                                                                                       |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| 00:00 | [Intro](https://vimeo.com/767543315#t=00m00s)                                                                 |
| 01:31 | [Aggregators dominate the web](https://vimeo.com/767543315#t=01m31s)                                          |
| 03:08 | [Aggregators are incentivised to keep systems closed](https://vimeo.com/767543315#t=03m08s)                   |
| 05:13 | [Every app eventually implements email and Clubhouse](https://vimeo.com/767543315#t=05m13s)                   |
| 06:19 | [Files and app security](https://vimeo.com/767543315#t=06m19s)                                                |
| 07:58 | [Files as a lego dot of computing](https://vimeo.com/767543315#t=07m58s)                                      |
| 10:39 | [Files give data an object metaphor](https://vimeo.com/767543315#t=10m39s)                                    |
| 12:22 | [Disadvantages of files on the network](https://vimeo.com/767543315#t=12m22s)                                 |
| 13:44 | [LAMP stack is too hard](https://vimeo.com/767543315#t=13m44s)                                                |
| 15:05 | [Civilization-scale infrastructure for persisting information](https://vimeo.com/767543315#t=15m05s)          |
| 16:10 | [Nouns, verbs, and files](https://vimeo.com/767543315#t=16m10s)                                               |
| 18:08 | [Files enable interoperability to emerge](https://vimeo.com/767543315#t=18m08s)                               |
| 22:20 | [Build tools around workflows](https://vimeo.com/767543315#t=22m20s)                                          |
| 25:03 | [Customizing apps without programming](https://vimeo.com/767543315#t=25m03s)                                  |
| 26:52 | [Authentication raises the barrier to entry for interoperability](https://vimeo.com/767543315#t=26m52s)       |
| 28:41 | [Helping people understand where data lives](https://vimeo.com/767543315#t=28m41s)                            |
| 30:21 | [Authorization dialogues are complex](https://vimeo.com/767543315#t=30m21s)                                   |
| 32:19 | [Comparing Personal Data Store with Wallet](https://vimeo.com/767543315#t=32m19s)                             |
| 34:03 | [Comparing access via apps and search ](https://vimeo.com/767543315#t=34m03s)                                 |
| 37:51 | [Why does stuff need to exist only in one place?](https://vimeo.com/767543315#t=37m51s)                       |
| 40:58 | [Teaching people drag-and-drop with Tiddlywiki](https://vimeo.com/767543315#t=40m58s)                         |
| 43:06 | [Complexity of network connections with scale](https://vimeo.com/767543315#t=43m06s)                          |
| 43:46 | [File formats are like network hubs](https://vimeo.com/767543315#t=43m46s)                                    |
| 45:40 | [Drag-and-drop is a versatile endpoint](https://vimeo.com/767543315#t=45m40s)                                 |
| 47:00 | [Helping people understand technical metaphors](https://vimeo.com/767543315#t=47m00s)                         |
| 48:39 | [Patterns from web3 wallets](https://vimeo.com/767543315#t=48m39s)                                            |
| 50:07 | [QR codes for transferring data](https://vimeo.com/767543315#t=50m07s)                                        |
| 51:21 | [Collaboration via Croquet and QR codes](https://vimeo.com/767543315#t=51m21s)                                |
| 53:26 | [Global and unique and memorable](https://vimeo.com/767543315#t=53m26s)                                       |
| 56:11 | [Trust by device proximity](https://vimeo.com/767543315#t=56m11s)                                             |
| 57:30 | [Keeping parity with features popularized by Apple](https://vimeo.com/767543315#t=57m30s)                     |
| 61:19 | [Interoperability by producing narrow output and accepting broad input](https://vimeo.com/767543315#t=61m19s) |
| 65:29 | [Onboarding issues](https://vimeo.com/767543315#t=65m29s)                                                     |
| 67:19 | [QR codes enabling multiplayer](https://vimeo.com/767543315#t=67m19s)                                         |

# Chat

The first half of the chat was lost due to a call drop. These times reflect a start time of 16:00.

> _16:48_ cblgh says: ( haha oh dang, sorry for dropping out x) )  
> _16:48_ Noel says: ( I think everyone did )  
> _16:49_ Rosano says: ( if anyone has the old chat can they save it? )  
> _16:49_ cblgh says: ( "tiddlers" thoooooo )  
> _16:49_ Jess says: ( we all lost it 😦((( )  
> _16:50_ Gordon says: nooooooo  
> _16:50_ Gordon says: TiddlyWiki is so compelling  
> _16:50_ Gordon says: ( <https://subconscious.substack.com/p/composability-with-other-tools>)  
> _16:53_ Jess says: it's the cause of Brooks Law  
> _16:53_ Jess says: as well  
> _16:53_ Jess says: [https://en.wikipedia.org/wiki/Brooks's\_law](https://en.wikipedia.org/wiki/Brooks%27s%5Flaw)  
> _16:53_ Jess says: "Communication overhead increases as the number of people increases. Due to combinatorial explosion, the number of different communication channels increases rapidly with the number of people.\[3\] Everyone working on the same task needs to keep in sync, so as more people are added they spend more time trying to find out what everyone else is doing."  
> _16:53_ Jess says: we're focusing on the workflow! 😛  
> _16:53_ Jess says: the UX  
> _16:53_ Jess says: the action  
> _16:53_ Jess says: sets up an expectation that it will work  
> _16:53_ Jess says: atJSON  
> _16:53_ Jess says: ( 😛 )  
> _16:54_ Gordon says: ( can y'all share a link to this? )  
> _16:54_ cblgh says: <https://developer.mozilla.org/en-US/docs/Web/API/HTML%5FDrag%5Fand%5FDrop%5FAPI>  
> _16:54_ Boris says: <https://twitter.com/bmann/status/1443246811607560193?s=20>  
> _16:55_ Gordon says: ( love it )  
> _16:56_ Boris says: And then the actual reference docs for TW [https://tiddlywiki.com/dev/#TiddlyWiki Drag and Drop Interoperability](https://tiddlywiki.com/dev/#TiddlyWiki%20Drag%20and%20Drop%20Interoperability)  
> _16:56_ Boris says: OK, it's already a bag of JSON. Title and Text and arbitrary custom fields var titleString = "This is the string that appears when the block is dragged to a text input"; var tiddlerData = \[{title: "Tiddler One", text: "This is one of the payload tiddlers"}, {title: "Tiddler Two", text: "This is another of the payload tiddlers", "custom-field": "A custom field value"}\];  
> _16:58_ cblgh says: it's interesting to think about the "education of users" from the perspective of storytelling; do you do the exposition thing and dump it all on people in the beginning ("hello, welcome!" screen), or do your characters (whatever that is in an app? a feature? its affordances?) pull people in gradually to the understanding  
> _16:58_ cblgh says: ( lol cmd-w is lethal in notetaking apps in browsers (it doesn't delete the last word!!) )  
> _16:58_ Jess says: ooooooooohhh I like this direction  
> _16:58_ Jess says: ( we're working heavily with QR codes at Croquet )  
> _16:58_ Gordon says: ( 100 )  
> _16:59_ Jess says: and to think of their phone as a container!  
> _16:59_ Jess says: or my phone as the key...  
> _16:59_ Jess says: ( or something )  
> _16:59_ Gordon says: ( yes! )  
> _16:59_ Jess says: ( the metaphor )  
> _16:59_ Rosano says: ( @cblgh i avoid the hello welcome but fail to do onboarding… something fundamental to think about, i like the story metaphor )  
> _16:59_ Gordon says: ( It makes intuitive sense. Phones are very personal. )  
> _17:01_ Jess says: 2FA  
> _17:01_ Jess says: in general  
> _17:01_ Jess says: ( magic links, so true )  
> _17:01_ Noel says: ( We were talking about gen Z before, I think a lot of them don't even use email, they just have social logins (like login with Facebook) )  
> _17:01_ Doug says: This particular hardware didn't catch on, but this video shows where we'd like to be: <https://www.youtube.com/watch?v=2oLfKqpUJT4>  
> _17:02_ Jess says: <http://www.aaronsw.com/weblog/squarezooko>  
> _17:02_ cblgh says: great article on squaring zooko's triangle for a particular set of use cases  
> <https://www.inkandswitch.com/backchannel/>  
> _17:02_ Boris says: doesn't square it at all  
> _17:02_ Boris says: it uses pet names  
> _17:02_ Boris says: ( not globally unique )  
> _17:03_ cblgh says: ( the relationship is though )  
> _17:03_ Boris says: ( yep! )  
> _17:04_ Jess says: ( I definitely will, because I want to work on more hardware stuff once we solve this software stuff 😃 )  
> _17:04_ Boris says: ( @Rosano -- please make sure to copy / paste / export this chat at end of call )  
> _17:05_ Rosano says: ( @boris just copied now, hope to copy later, the first chat may be gone )  
> _17:06_ Jess says: ( amazing UX )  
> _17:07_ Rosano says: <https://youtu.be/cpNk6fkwS2I?t=15>  
> _17:07_ Rosano says: ( ethereal blue dots )  
> _17:07_ Doug says: ( That youtube video is private )  
> _17:07_ cblgh says: kinda related project i put together for sharing cabal keys across computers in physical space "whisperlinks" <https://github.com/cblgh/paperslip> "share hard-to-transmit snippets with easy-to-pronounce names using dht magic"  
> _17:08_ Boris says: ( Oh yeah, the video is private )  
> _17:09_ Gordon says: <https://en.wikipedia.org/wiki/Celestial%5FEmporium%5Fof%5FBenevolent%5FKnowledge>  
> _17:10_ cblgh says: oops gotta go, thanks for the chat everyone!  
> _17:10_ cblgh says: ( (sorry i didnt participate that much, but 23:00 here '😃 )  
> _17:10_ Rosano says: ( see ya alex! thanks for coming, good night )  
> _17:10_ Gordon says: ( thanks everyone! )  
> _17:11_ Jess says: <https://en.wikipedia.org/wiki/Robustness%5Fprinciple> "Be conservative in what you do, be liberal in what you accept from others."  
> _17:11_ Jess says: and text can be assumed to be first line...  
> _17:11_ Jess says: ( sorry, title can be assumed to be first line of text )  
> _17:12_ Gordon says: ( Files, copy/paste, drag-drop the ur-interop features )  
> _17:13_ Jess says: ( opencollective??? )  
> _17:13_ Gordon says: ( I Would Simply Have Expede Solve Sync )  
> _17:13_ Jess says: ( I'm free 😉 )  
> _17:13_ Gordon says: ( I'm game )  
> _17:14_ Boris says: ( passwordless file-less onboarding something something )  
> _17:14_ Jess says: ( "shared language of onboarding in passport-less, data-less systems" )  
> _17:14_ Gordon says: ( +1 doorless is awesome )  
> _17:15_ Jess says: ( MAYA: most advanced, yet acceptable )  
> _17:15_ Noel says: ( doorless does not contradict onboarding, you can put an onboarding in place of a blank canvas )  
> _17:15_ Jess says: oooooh the natto.dev interactive tutorial is AMAZING btw  
> _17:15_ Noel says: ( that's sort of what I did with Media Kraken )  
> _17:15_ Rosano says: ( @noel but that takes work )  
> _17:15_ Jess says: ( <https://natto.dev/tutorial/tip-calculator>)
