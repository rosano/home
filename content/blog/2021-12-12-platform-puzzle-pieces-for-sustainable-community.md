---
date: 2021-12-12T01:07:59.000Z
slug: platform-puzzle-pieces-for-sustainable-community
title: Platform puzzle pieces for sustainable community
tags:
  - reflection
  - community
wiki_id: 01fpp2xb6fe3xbpswvfc4pxbmq
---
Thinking about how to integrate multiple systems while building community and sustainable income.

---

This year, I started to prioritize community building, which led to the creation of the [Ephemerata](https://rosano.hmm.garden/01f58x4bdpm6530ba58wxjm30w) newsletter and [The Café](https://rosano.hmm.garden/01f5gs4k2k4ps9eq1ns3gv9fkq) forum (see [My mother's gift](https://utopia.rosano.ca/my-mothers-gift) for some origins). Seeking a hub to house everything and make it accessible with one account, I was determined to make it work with forum software and published the newsletter there as a way to have 'something' happening; it's been nice to see people sign up and share comments without me inviting anyone, but it could be more active, and I should invest there once I feel comfortable doing less in [other communities](https://ephemerata.rosano.ca/01fh30m6w0njmbbt4jayzyr2yq). Seeking also to explore patronage or voluntary contributions as a way to fund what I do, I was determined to use a homegrown payment system or [an Open Collective profile](https://rosano.ca/fund), but neither are well integrated with community space or the unlocking of 'perks'. Since beginning these experiments, I have become more aware of other platforms and am trying to reconcile the benefits of each one with the properties I would like to have in my toolkit. It's possible for me to 'build my own system' but that would take time from doing what it's designed to support, especially as a single-person operation; this might be a case where it's better to use existing parts and close gaps by creating plugins or automating with tools like [Zapier](https://zapier.com) or [n8n](https://n8n.io). Let's review the existing systems…

# Community (Talking together)

[Discourse](https://www.discourse.org) is modern forum software that onboards people to participate, encourages reading, and nudges the right things. It's an exciting set of tools and primitives on an open-source foundation—an increasingly common extensible language—and even can be accessed with a native app to see notifications from all servers in one place. It's good for asynchronous communication, giving people badges, and a comments layer for content written elsewhere. As much as I hoped to do everything here and leverage its various affordances for community, it demands more effort (or friction) for people to post, and it's not so elegant as a 'home' for long-form writing (see [Evolution one](https://ephemerata.rosano.ca/01fp3ke8f9z7adc6gbe1pdyyse)).

I have despised [Discord](https://discord.com) for its chaotic arcade-like approach to communication, but after learning of a unified notifications pane which doesn't require me to click and bounce around dozens of channels to keep up, it's more manageable for me. The main advantage is that it's low-friction, either when signing up (as one account is shared across multiple communities) or when posting ('easily posting quick things' is not just for 'less dedicated people' but also makes it simpler for your tribe to participate); people can sign up and move from passive to more active at their own pace. It's better for synchronous communication—which I generally avoid as it can be anxiety-inducing—giving people a sense of 'together, now'. It's not good if you avoid proprietary systems (the only closed-source project on this page), vendor lock-in and its network effects, information overload from over-notification noise, or chronologically-emphasized systems which are inherently [Designed to disappear](https://rosano.hmm.garden/01etag49zpy2jz472n6zyba998). I would be open to using this if the messages delete automatically after a certain period, thus making it easier to change platforms later.

These posts talk more about the tradeoffs of both and how to integrate them better:

* [Discord and Discourse - Better Together](https://blog.discourse.org/2021/05/discord-and-discourse-better-together/)
* [Effectively using Discourse together with group chat](https://blog.discourse.org/2018/04/effectively-using-discourse-together-with-group-chat/)
* [You should use forums rather than Slack/Discord to support developer community](https://www.mooreds.com/wordpress/archives/3451)

As an honourable mention, I like the ideas in [Luma](https://lu.ma): events require email addresses to attend, thus providing a sense of how many people are interested, while also building a mailing list and offering a discussion space for people to connect in between. You can also accept donations or charge money for things, which relates to the next section. Too proprietary for me, but I think it's well-made and can help you to grow faster.

# Funding (Sustainable income)

Thinking about the best long-term solution for funding my work, I started at the outset by building my own payments system and integrating it into my apps (see [the fund button](https://cafe.rosano.ca/t/the-fund-button/69)): this enables [direct integration](https://youtu.be/40xTXq0Zdv8?start=18m25s) with my apps (unlocking of features), while supporting [both Paypal and Stripe](https://youtu.be/40xTXq0Zdv8?start=05m42s). The novel idea behind this is that there is no data stored by me (everything is embedded in the transaction, which is stored by the payment processor) and people can use 'their own accounts' (but the [0data](https://0data.app) concept is so early that most people don't have one yet). It lacks a more elegant 'manage your subscription' mechanism, which means that although it's possible to modify and cancel at any time, it might feel cryptic. Another major flaw is the design decision to not collect contact information of the subscriber: anonymity has its merits, but I think if people pay me subscription money, I would prefer to have a communications channel in both directions in case anything goes wrong. In short: my system is functional, but might be a fail.

[Open Collective](https://opencollective.com) is a new way to crowdfund on a recurring basis. Unlike more popular patronage platforms, it promotes [transparency](https://docs.opencollective.com/help/collectives/budget) and implements [fiscal hosting](https://opencollective.com/fiscal-hosting) so that one doesn't need a legal entity to receive payments. The visual design lacks warmth (figures-oriented, as if for accountants) and only makes it faintly visible when it's possible to 'give more than the minimum' (non-techies might miss this option entirely)–I believe both of these things decrease the income potential. I was avoiding it for those reasons, but after trying it out, I think the ideals make sense, and so far it's more 'financially successful' than my other avenues even though contributors aren't getting something material in return (yet).

[Ghost](https://ghost.org) has made me turn my head several times in the last few months: own your newsletter and your subscriber payment data; patron-only content; passwordless signup via email and magic links; nice external and internal design; [integration](https://ghost.org/integrations) with automation systems; easy to host it yourself… Their 'Portal' (a slicker alternative to my own fund button) is super compelling: seamlessly handles free and paid memberships (but no PayPal), offers an elegant 'manage your subscription' interface, and (perhaps not so well-known) [you can embed it on other sites](https://forum.ghost.org/t/is-there-an-embeddable-signup-form/26428/4). I wish it were less 'broadcast and business'-oriented, but I think you don't have to use it that way—might be better to combine it with other platforms. There are some great interface patterns that could become a common language across the web, and active development is supported by a [sustainably-funded team](https://twitter.com/Ghost/status/1456365440503009286).

# The ideal solution

Seeing as none of these individual projects span both community and payments, my imagined ideal system would have these properties:

* own your community data; badges; asynchronous conversation; extensible (like Discourse)
* own your subscriber data and payment relationship; patron-only content; nice interfaces everywhere (like Ghost)
* bring your own account (like my fund button, 0data, or [Delta Chat](https://twitter.com/rosano/status/1452981844903931915))
* transparency and fiscal hosts (like Open Collective)
* passive signup and synchronous conversation (like Discord), but ephemeral messages

To work towards this, I think I will try a mix of all these tools, but I'm inclined to put Ghost closer to the center. Despite working on my fund button for about half a year, I might switch to the Ghost 'Portal' as it is a pattern language people understand, has a more robust account system that's passwordless, and can be embedded on any site–it should also simplify the programming integration while giving a better experience for people using my apps. Stay tuned over the course of next year to see how all this evolves.

---

Thanks to [Boris](https://bmannconsulting.com) for the prompt to write about this.
