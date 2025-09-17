---
date: 2024-02-21T14:24:24.000Z
slug: durable-data
title: durable data
summary: Data ownership baked into how the system works, no goodwill needed,
  making people feel safe as in a long-term relationship.
feature_image: test.jpg
tags:
  - technical
  - interop
  - Zero Data
---
After the experiences that prompted my [encryption rant](https://utopia.rosano.ca/encryption-rant/), I have started to notice other moments when my digital stuff seems precarious, fleeting, as if slipping out of my hands; I hope to describe this a little and then consider some solutions.

# fragile data

Encrypted messaging apps (like Signal and WhatsApp) can be [volatile](https://utopia.rosano.ca/encryption-rant/): you can easily lose access to your conversations; messages can fail to sync or deliver; your data might be secure with encryption, yet still trapped in an app.

[Beeper](https://www.beeper.com) and [Texts](https://texts.com) help bring your messaging app data in one place, but export is not yet possible, even with open-source [Element](https://element.io) and the half dozen [Matrix](https://matrix.org) clients I've tried.

Platforms (like Discord, Slack, Telegram, or Facebook) don't let you own your messages: their systems can go offline and temporarily obstruct access; one of your contacts can delete their account and disappear your correspondence; smaller ones get [acquired or shut down](https://ourincrediblejourney.tumblr.com); you can only hope to get your data out or somewhere useful; your 'permalinks' (which you didn't own or control) break (remember that [cool URLs don't change](https://www.w3.org/Provider/Style/URI)).

Microblogging platforms make it hard to own your posts: Twitter oscillates in states of chaos; Mastodon (or ActivityPub) ties them to whichever server you published from; Bluesky claims to let you move your data, but somehow it's not directly tangible.

Self-hosting gives you more control, but you still might end up losing stuff to 'export'. [Discourse](https://discourse.org) will give you SQL that has 'everything', which you need technical expertise to 'do something'; [Datasette](https://datasette.io) can be helpful to browse what you have and maybe convert to more accessible formats. [Ghost](https://ghost.org) claims creators get "access to 100% of their data", and WordPress claims you can "Own your data, all of it", but both their exports only include what _they_ consider important; to actually get 'everything', you need to have systems administrator expertise to export SQL and download your images or attachments, then more expertise once you have all that and want to 'do something'. [Consider export harmful](https://twitter.com/andy%5Fmatuschak/status/1452438176996347907) unless proven otherwise.

I've been enthusiastic about [personal data stores](https://0data.app), but can admit it doesn't feel like it's [in my hands](https://utopia.rosano.ca/interoperable-visions/#there-but-invisible).

---

Let's summarize 'fragile data' as:

* volatile access
* limited or no export
* data tied to a provider
* unusable formats (needing technical expertise)
* hard to see or manipulate data directly

# durable data

I want to stop my stuff slipping out of reach as platforms change, depending on companies to stay around and hold it for me, or losing it to 'security', 'encryption', and 'export'. I want to have all my correspondence, publishing, and data, forever, defragmented from various networks and apps. I want to search my archive. I want to avoid being tied to a risky provider or format.

So far, the options that feel durable to me are email, files, Delta Chat, and git: they all continue to work, are supported by older systems and diverse new ones, and enable interesting possibilities via interop; the closest to 'future-proof' that I'm aware of.

## email

Email will likely be around [for at least as long as it has been around](https://en.wikipedia.org/wiki/Lindy%5Feffect) and remains ubiquitous and accessible to more people than any other data storage system. You can take your messages with you, switch providers, interact with everything in a variety of apps and clients.

Too bad many associate it with 'transactional B.S. from startups', 'marketing offers', 'newsletters one can't unsubscribe to', '10,000+ unread and no way to process'. Comprehensive solutions to [information overload](https://en.wikipedia.org/wiki/Information%5Foverload) would be beyond the scope of what I'm writing (off the cuff, I can think of [technical](https://www.hey.com), [philosophical](https://calmtech.com), [social](https://en.wikipedia.org/wiki/Email%5Fbankruptcy), and [political](https://en.wikipedia.org/wiki/Right%5Fto%5Fdisconnect) ones), but even if your main account isn't usable, it's easy and basically free to create a quiet new one to play with possibilities.

Email is a nice way to store data associated with a specific moment in time without considering how to structure files or tag items. Sometimes when I research an answer that I likely won't need anymore, I send myself an email instead of putting it in my notes. I would love to have a rich summary of activity on various platforms periodically archived there to maintain my history. Gmail used to harmonize chats and email by archiving and automatically grouping messages by conversation.

Email means copies. Using platforms with their own messaging system relies on the site to be online and hold your messages, while it's also possible for them to go offline (temporarily or permanently), erase data of someone who deletes their account, and sell or get acquired (sending your data who knows where). I used to delete emails with 'messages' sent on these platforms, but now I keep them as I don't trust the platform to do it for me.

Email is the original 'all your stuff in one place that you control', and as long it's designed to protect and respect your attention, it can serve an important function in supporting more durable data.

## files

I don't like managing files and consider them a holdover from an older time, preferring interoperable apps (ideally as [pluralistic lenses on data](https://utopia.rosano.ca/interoperable-visions/#flexibility-through-pluralism)), yet they remain a useful [response to ephemeral software](https://stephango.com/file-over-app). Files let you [choose how to use them](https://www.geoffreylitt.com/2021/03/05/bring-your-own-client.html), and can be moved between different devices or storage providers.

I don't like hand-editing CSV, reading JSON or XML or HTML, but I'll be able to 'do something' with them probably forever. Plaintext is the way to my heart, and also one of the most interoperable types out there.

There are so many common formats and it's not easy to get an ecosystem to agree on which ones to use. Despite their limitations, having the data stored this way liberates it from any app. Your data could be available in these formats through export or integrations, but ultimately the app developer chooses whether to make that available; some solutions could be to ask people nicely, pressure companies publicly, or [take it ourselves](https://beepb00p.xyz/myinfra.html).

## Delta Chat

(Disclosure: I've done paid work in the past to help with this project. I write my own opinions here to describe how it relates to durable data.)

[Delta Chat](https://delta.chat) uses your existing email account as a messaging app, and lets you do many things you'd want to do with apps like Signal and WhatsApp.

Unlike other messaging apps: you can move your messages between providers as easily as email; if the app goes away or stops working, you'll still have access to your messages (even if encrypted); it can help defragment your social graph across various platforms; it supports [webxdc](https://webxdc.org) as an emerging way to do 'app things', including collaboration; it requires no permission, no company, and "no coins" to participate.

As documented in [encryption rant](https://utopia.rosano.ca/encryption-rant/), it's easy to transfer devices and never leaves me with the feeling that my messages will disappear. And because the data is stored in my email account, it's not dependent on any app, including Delta Chat itself.

It's basically as durable as email, with extra features and benefits: one approach to 'email without crap'.

## git and GitHub

GitHub still leans technical but is becoming increasingly accessible.

It turns git into version control you can see and lets you edit directly on the site without installing apps.

There are virtually infinite integrations and automations available.

Backup, replication, and copies are built into the underlying technology.

Git enables [credible exit](https://subconscious.substack.com/p/credible-exit) from GitHub so you can take your files with you.

It's also collaborative and doesn't rely on a specific app's format of version control.

Connecting [GitHub as the storage backend](https://utopia.rosano.ca/github-as-storage/) for apps would be a powerful way to enable backup and sync to multiple devices.

# building for ownership

There's a reason why [Zero Data](https://0data.app) defines data ownership specifically to mean 'having access without export or permission'. In the sea of shiny features advertised by apps, startups, and projects, it can be confusing to understand whether you actually have or own your stuff in the end.

'Encryption' helps avoid unauthorized access, but [your data could easily disappear](https://utopia.rosano.ca/encryption-rant/).

Many efforts that use the '[local-first](https://www.inkandswitch.com/local-first/)' label focus on 'working offline', 'sync', and 'collaboration via CRDTs' without consideration for the seventh ideal of data ownership (perhaps leaving some company holding the data); in this way, plenty of Apple software could be misunderstood as 'local-first' while locking data into their ecosystem; [DXOS](https://dxos.org) is the closest I've seen to doing local-first right.

Ideally, data ownership is not a coincidental byproduct of someone's goodwill, but rather baked into how the system works. It should go beyond a technical concept to make people feel safe and able to trust the space as they might in a long-term relationship.
