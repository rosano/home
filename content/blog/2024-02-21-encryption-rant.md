---
date: 2024-02-21T14:23:43.000Z
slug: encryption-rant
title: encryption rant
summary: Robustly-secured data that can surprisingly vanish at a moments notice.
feature_image: Screen-Shot-2024-02-14-at-11.30.50-copy-export.jpg
related: If you liked that, you might want to read [durable data](https://utopia.rosano.ca/durable-data/) for some solutions, or interoperable visions in [pointing at the wrong thing](https://utopia.rosano.ca/pointing-at-the-wrong-thing/), or about different [levels of agency](https://utopia.rosano.ca/levels-of-agency/).
tags:
  - technical
  - interop
  - Zero Data
---
<small>👋 Heads up: if you're more interested in solutions, read [durable data](https://utopia.rosano.ca/durable-data/).</small>

* * *

This sort of 'complain-y' post fleshes out my [encryption thread](https://mastodon.online/@rosano/110685716693430299) to highlight how data becoming inaccessible might feel to someone less tech-oriented than I am and who isn't going to document their experience; if you're a technology wrangler, read the rest of this while putting yourself in the shoes of someone whose relationship with owning data might be "new phone, please send your number".

# encrypted bricks

In the end of 2023 I experienced the co-incidental deprecation of multiple messaging apps simultaneously. [WhatsApp](https://whatsapp.com), [Signal](https://signal.org), and [Beeper](https://www.beeper.com) either suddenly stopped working or warned about 'going away soon'.

<gallery class="duets">![](2023.11.07-16.56.23.jpg) ![](2024.01.26-at-07.19.54.jpg) ![](Screen-Shot-2024-02-17-at-10.06.50.jpg) ![](2023.11.07-18.21.46.jpg) ![](Screen-Shot-2024-02-17-at-16.34.05.png)</gallery>
<figure><figcaption>removing native support for older systems</figcaption></figure>

As a technologist, I can vaguely guess it's tied to something like 'availability of better encryption primitives or standards on newer versions of the operating system', but to a non-tech person it might be strange how WhatsApp says "you can use their web version instead, without upgrading your computer, but the native version that was working yesterday 'needs to' stop working today because of 'security'".

This could nicely tie into imagined stories of planned obsolescence and 'Apple pushing people to always get new stuff' even if that might not be what's really happening here; without technical knowledge, how would you tell the difference?

Also weird how many of these run in Electron (Chrome) as web apps with some kind of server component, but they don't work in a normal web browser.

# volatile updates

It's fine that Beeper is no longer compatible with my older version of macOS, but not fine that the underlying self-update framework ([Squirrel](https://github.com/Squirrel/Squirrel.Mac/issues/275)) forces an upgrade to a version that doesn't run on my machine: when is that ever desirable?

The threat of these workflow disruptions means one needs to keep backup copies of apps or lock them from being changed to prevent unintended updates.

<figure>

![](Untitled-2-export.jpg)

<figcaption>locking Element on macOS to prevent it from incompatible upgrades</figcaption>
</figure>

locking Element on macOS to prevent it from incompatible upgrades

# moving devices

Transferring both WhatsApp and Signal messages to a new phone, there's a scary thought (and real possibility) that all my messages could suddenly disappear because of 'security'. Since the app's transfer interface doesn't assure me of the correct path, I need to find the [eight-](https://faq.whatsapp.com/209942271778103/) to [thirteen-](https://support.signal.org/hc/en-us/articles/360007059752-Backup-and-Restore-Messages)step guide via a search engine and precisely follow it in order to understand and not mess up.

WhatsApp's transfer process simply didn't appear for me, but I was able to just re-register my number on the new phone ([restored from iOS full backup](https://support.apple.com/en-us/HT204184#computer)) and unlock my data; phew, glad I didn't trust the _documented process_ and relied on luck or a third party like Apple instead.

Signal's QR-code-based local network transfer is more straight-forward, but repeatedly failed at 99%, which although probably contains all my data, will not let me manage the last inch, thus leaving me locked out. After changing Wi-Fi networks, with a crash for success, it seemed to make it over safely.

Now, even though my messages are there at the moment, there's a lingering worry that my path was not acceptable for 'security' and so it might all get randomly taken away from me some day; this comes from seeing how message history is often not available on new linked devices. It doesn't matter whether my imagined story about possibly losing data is real. Does the experience make you feel safe? Does it reassure you that you have your data? Or does it threaten that you could become signed out and lose everything 'for your own protection'?

[Delta Chat](https://delta.chat) has the simplest device transfer and even an equivalent of 'changing your number'; the messages are also encrypted, yet I never worry about losing them.

# clean by accident

If you can't afford larger storage capacity, you might find yourself managing space on your device. While cleanup up earlier in the year, I accidentally deleted Signal because my screen stalled — throw away your old, slower devices as they quickly become obsolete, right? — and my finger tapped and swiped perfectly because of muscle memory. My years of chat history were just gone. I have some messages on another linked device, but no possibility to export or transfer or merge because their desktop version is only 'linked' and not 'special', awaiting the next unfortunate accident; it sends the message that 'security' lacks agency.

# decentralized if you know how

Is the solution is an open standard like [Matrix](https://matrix.org)? It's not so easy. Their ["join" explainer](https://joinmatrix.org) is not as intuitive as other decentralized projects like [Mastodon](https://joinmastodon.org), [PeerTube](https://joinpeertube.org), or [Lemmy](https://join-lemmy.org). I don't believe a non-programmer would be able to do this without help, but assuming they sort through and understand the options of picking both a server and client, they will get stuck on errors like "Unable to decrypt message", "Verification failed", and the scary thought of losing messages if you log out.

<gallery class="duets">![](2023.11.23-at-14.31.33-1.jpg) ![](2024-02-14-at-12-12-14-1.jpg) ![](2024-02-14-at-12-12-48-1.jpg) ![](IMG_E7520-1.JPG)</gallery>
<figure><figcaption>scary messages</figcaption></figure>

<gallery class="duets">![](2024.01.03-at-10-20-25.jpg) ![](2024.01.03-at-10-20-37.jpg)</gallery>
<figure><figcaption>do these match?</figcaption></figure>

Well, it was tricky to figure out how to trigger the Matrix verification process, but I managed to revive access to my Beeper messages with [FluffyChat](https://fluffychat.im) (which really might be "The cutest messenger in the Matrix network"), and it's nice to have access to my data in a variety of web apps that will probably remain backwards compatible forever. Still, "I managed to get it working" is a hard sell for normal people.

# export impossible

I still have yet to see a built-in way to export all my messages at once with Signal, WhatsApp, or any popular Matrix client. It's possible to [get a copy of some Signal Desktop messages](https://unix.stackexchange.com/questions/505008/signal-desktop-how-to-export-messages) with tools like [sigtop](https://github.com/tbvdm/sigtop) and [sqlcipher](https://github.com/signalapp/Signal-Desktop/issues/2516#issuecomment-442797638) if you're comfortable typing into a terminal (I'm not). [iMazing](https://imazing.com) lets you export messages and attachments from WhatsApp. Not being part of official app interfaces just feels like platform capture to me: data in, but not out.

# secure, complex, fragile

Why does all this 'security' have to feel so fragile? What does it mean when 'robustly-secured data' can accidentally vanish at a moment's notice, or that I can back up my entire phone for peace of mind, except for 'secure things'? Should it be normal to expect people to simply upgrade their operating system to the latest version when it's known to likely cause a slew of random issues?

How are ordinary people supposed to feel good about this? There may be workarounds, and maybe I'm even just taking the wrong approach in everything I've documented here, but if someone like me can't figure it out, it's bad: for people outside the tech world with little time or capacity to deal with these kinds of issues, the seeming possibility of them occurring is scary and unsafe, even if not real; for software developers to treat these circumstances as mere 'policy' is not very empathetic.

It's important to give space and patience to technology under development as people make it work, but there's no feigning moral superiority in using 'alternative tech' until it includes a real foundation to stand on for people without this domain expertise. Fleeting personal data is like alternative tech's equivalent of platform enshitification and doesn't fill me with confidence to trust these systems or recommend my non-tech friends to do so.

# end rant

I hope to see more apps with comprehensive export or supporting personal data stores. And why not maximize compatibility where possible? If I can message all these platforms via Matrix bridges in a web browser, there's no reason to force an upgrade or brick my app.

Digital security should go beyond a technical concept: what if it made people feel safe, trusting the space as they might in a long-term relationship?

Are these stories of data becoming inaccessible just mine? If you have your own, be welcome to share. Maybe if the problems are documented, they're more likely to be fixed.
