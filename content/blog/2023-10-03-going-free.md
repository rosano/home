---
date: 2023-10-03T13:57:15.000Z
slug: going-free
title: Going free
summary: Removing limits from my apps, cancelling their active subscription
  payments, and transitioning to free and open access.
tags:
  - Apps
wiki_id: 01hbtx89ezpp9krq137v41494r
---
In August 2023, I decided to remove all limits from my apps, cancel their active subscription payments, and transition to free and open access. This documents my thought process, why I think the previous model feels misaligned, and what could take its place.

---

Since 2019, I have been experimenting with a [fund button](https://rosano.ca/fund-button) integrated into my apps to create direct link between the app experience and people who want to support the project financially. The design seemed logical to me after seeing many lovingly crafted open-source projects poorly funded through other means. Building this custom payment system and various integrations was a technical achievement for me as someone who didn't consider themselves a 'real programmer', but I quickly regretted bringing that level of complexity into my life and cautioned against it whenever asked. Over these years, I was nonetheless happy to have some quite passionate and supportive people work through my maze of a system to send me their money and try something new. Ultimately, the various shortcomings of my own design made it limited, obscure, brittle, and relied on [personal data stores](https://0data.app) that I imagine should be commonplace but aren't yet in the hands of most people. A better solution for me would be more simple and flexible, less transactional.

I was going to replace it with a [Ghost](https://ghost.org) membership system, as I'm familiar with it from other projects and have observed less technically inclined people navigate it with no issues, but halfway through creating the experience, I felt the pain of creating custom integrations once again and also the potential burden of having to maintain unofficial code bolted onto another active open-source project. I still amaze myself considering how I can just build this stuff given what I consider a limited background; too bad my snazzy passwordless, one-click login system may never see the light of day…

# Trying free

I must have been so excited to present my fund button to the world, building into my first published web app, that I didn't think once about offering apps for 'free'; something was already settled in my thinking that perhaps it wouldn't work or would somehow overwhelm me. Seems worthwhile to at least try, I suppose? I '[owe so much to free](https://xangelo.ca/posts/free%5Fsoftware%5Fmtx/)' and easily accessible things on the Internet and would feel good contributing back to that pool. Free is also a chance to provide value in the ['give, give, give, then ask'](https://twitter.com/dvassallo/status/1216976156466958337) framework I'm experimenting with. 

From a maintenance perspective, many things become easier: by just giving it all away, I can remove complexity concerning my payment system to simplify code, interfaces, and my life; feels great to rip out old, unused stuff and chuck it. Maybe I still need to think about business models, but I can forget about access codes, logins, or infrastructure for now.

Socially speaking, I've always had an issue with dividing people into those who pay and those who don't—more on that in a bit—so it's nice to avoid this as well. As long as I'm able to keep myself afloat somehow, it would be great to popularize this approach, remove barriers, optimize projects for sharing and spreading ideas more broadly. Useful that the kind of 'static web apps' I make can basically exist online forever for free (which technologies can you say this for?)—sustainability in this case has less to do with any distribution or publishing cost and more to do with development, maintenance, and my own well-being.

# Erroneous assumptions

The biggest learning I've had while thinking about this is becoming aware of patterns that I've been copying (from myself and others) that seem misaligned with how I'd like to do things.

## Not business

For about a decade, I was paying my bills via [my live music listings project and iPhone apps](https://utopia.rosano.ca/ive-never-worked-in-a-company), which made me comfortable with the language of business, products, sales, and marketing. Until recently, I was thinking "I did those as businesses, hence this should be the same." Business got me to the point I'm at now, enabled me to live a life I enjoy, and can be a way to organize ideas, but doesn't need to be how I approach everything. Just because it carried me in the past doesn't mean it's the right mechanism to express my future visions. I would love to be in a world of abundance where people have what they need, and I may be in enough of a privileged position to present something that reflects this.

I'm starting to think of my projects more like Wikipedia, which is not a business, does not seek to 'choose a niche' or 'deliver value to the customer'—it might even be odd to 'expect' anything of the project. Those who like it make the most out of it; some people contribute content and help steward its collective spaces; some people donate money (hopefully enough to cover costs); there is no 'exclusive content' for those who pay; and [free-riding is the point](https://www.niemanlab.org/2019/01/unlocking-the-commons/). It's definitely not a transactional space—a large diversity of people can engage with it because not everyone needs to pay, and any contributions take a variety of forms. Perhaps this could be a closer-aligned model for my own projects?

## Not creator

It was tempting for me to connect the app world with that of subscriptions and memberships, thinking that 'indie creators selling exclusive content' is mainstream now, therefore I can also simply use that model. But I think I was too fixated on the technical mechanisms behind content-gating, without considering how to foster some kind of community around what I'm building; I learn repeatedly that technology doesn't magically produce social outcomes. 

In my process to try this system, I had made a long list of creators I considered 'successful', which meant they were making an amount of money that reflected some kind of momentum around their platform: perhaps receiving $300 or $3000 per month, but not $30\. Most of them tended to have some kind of large online following beforehand or were really focused in the scope of their activities. Although neither of those attributes might reflect me at the moment, I thought I could give this a try, at the same time clouding this approach with the idea of 'passive income in my sleep' without too many expectations (more common with people selling products online); this is a recipe for confusion, but dreaming about how everything would work out calmed my scarcity mindset. I realize now that this doesn't make sense for me either.

From a purely financial standpoint, I became convinced that subscriptions don't last forever, based on my own experience and solidified after listening to [Lifetime pricing is underrated](https://hackersincorporated.com/episodes/lifetime-pricing-is-underrated): there is no infinitely recurring source of income; effort is always required to find new revenue; and subscriptions are scary for a lot of people.

From a parasocial standpoint, I'm not sure if I 'play the part' of being active on social media to cultivate community or doing my thing in response to what other people have expressed. The dynamic of money in an indie creator model feels somewhat awkward to me. I'm lucky to have received money, but it feels like I'm not sure what to do with it. I sense some internal conflict around 'working more' for people who give me smaller amounts versus those who give me larger amounts without expecting anything. Funny that asking or even paying me wouldn't guarantee that I do something anyway, as I tend to make choices based on what my current situation and needs dictate, which someone once described to me as the approach of an artist showing zero consideration for any market or what other people think: "f\*\*\* you, here's my music." I'm happy to connect with people in a way that isn't proportionate to their financial contribution, but perhaps that's not 'business'. Also, I never figured out why people gave me money in the first place, or why they stopped. All that to say: I feel weird about how money goes through my projects this way and would prefer to be more intentional about how that happens, so that it feels better for myself and anyone who chooses to support me.

## Not exactly

The tricky part of being exposed to so many patterns is understanding that although what I do might appear to conform to certain archetypes (indie hacker, developer, entrepreneur, etc…), it doesn't mean that I _am_ one of those things or that the strategies employed in those contexts make sense here. My approach needs more reflection and calibration to find a model that aligns well.

# My big realization about small money

For years, I've expressed my desire to support myself with '1000 people paying me $10 a year', because it seemed to me like a low-stress contribution for many, hopefully inclusive of people for whom the currency doesn't work in their favour, while adding up to a sum that makes a significant impact in my life. I've changed my mind. I learned that these 'small amounts' are simultaneously the wrong signal for people who would be willing to contribute higher amounts, yet _still_ expensive for many people in non-Western countries. So it's better for people who have more to give more, which perhaps means I need to change my approach and messaging with money: to get clarity on what I can offer and what financial contributors receive by supporting me; I haven't figured this part out yet and would welcome any suggestions. I also no longer feel good receiving money if someone has to worry about how to make it work: if someone has to figure out whether they can afford to give me a small yearly amount, then I would prefer that they simply enjoy what I create, and if they want to help me, then they can share my projects with a friend or contribute in non-monetary ways—paying doesn't need to be the only way to feel like a participant in what I do. 

# Future approaches

So what will my path be in the future? I'm not sure yet specifically. My preference would be simple systems, likely supported by larger amounts of money from fewer people, and manifesting the spirit of the Internet by being open, free, and accessible.

Not charging directly tends to come with concerns like "will my data be sold?", "will it become overrun with ads?", and "will it stick around?". Well, for those specific concerns, I thankfully have [zero data to sell](https://0data.app), don't like ads, and work on things that can live online for a long time. For the others, I'll have to cross that bridge when I get there.

Thanks to everyone who has supported me thus far. I'll probably find a way to keep doing what I do, but if you'd like to make it easier by supporting me financially, be welcome to do so via a [Strolling membership](https://strolling.rosano.ca/#/portal/signup) or a public contribution to [my Open Collective](https://rosano.ca/fund).

---

I've also written about my experiments in [Platform puzzle pieces for sustainable community](https://utopia.rosano.ca/platform-puzzle-pieces-for-sustainable-community) and about my iOS apps experience in [Going fully web](https://utopia.rosano.ca/going-fully-web).
