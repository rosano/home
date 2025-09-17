---
date: 2021-10-13T20:21:26.000Z
slug: zero-data-swap-3-maker-meet-october-27-2021
title: "Zero Data Swap #3: Maker Meet"
summary: Experiments, works-in-progress & under construction, mundane or extraordinary.
tags:
  - Zero Data
  - event
chat_id: "44"
---
[Rosano](https://rosano.ca) and [cblgh](https://cblgh.org) and invite you to a show-and-tell. Come and share what projects you’re working on: experiments, works-in-progress & under construction, mundane or extraordinary—anything goes, as long as it’s yours\~

See also the [previous swap](https://chat.0data.app/t/zero-data-swap-2-files-portability-september-29-2021/37).

---

# Summary

Over a dozen people attended or presented a wide range of software and hardware projects. We took collaborative notes with [HackMD](https://hackmd.io), tracked seven-minute timers with [DuckDuckGo](https://duckduckgo.com/?q=timer%207%20min), and determined the order of presentations via Python's [Random.shuffle()](https://www.w3schools.com/python/ref%5Frandom%5Fshuffle.asp).

## hoody: 'moderator'

Running collaborative tools on low-power devices, indestructible distributed 4chan dark-net market place, quick to disappear, using tech from [Aljoscha Meyer](https://github.com/AljoschaMeyer/bamboo).

## cinnamon: [Earthstar](https://github.com/earthstar-project/earthstar)

* inspired by trying to fix scuttlebut ui/ux issues that run deep  
   * device-oriented over people-oriented, can't use same identity on different devices  
   * processing the entire backlog is network/storage/cpu intense, slow  
   * immutability is not good for a social network. what's safe to say today might not be safe tomorrow, need to be able to delete stuff  
   * need to be able to download a subset of data related to stuff you care about
* earthstar fixes all of the above  
   * people-oriented identity, can log in from multiple devices  
   * can download a subset of data as needed  
   * everything is mutable and can be deleted by author  
   * also can have mutable docs that anyone can edit  
   * designed for small groups, \~100 people, separated into "workspaces". not a big single global network.  
   * trying to use simple boring technology as much as possible  
   * very detailed specification: <https://earthstar-docs.netlify.app/docs/reference/earthstar-specification>
* simple CRDT last writer wins merge strategy. Better CRDTs exist but are complicated, we decided to use the simplest one
* every peer has a copy of the data they care about. pubs exist to get around firewalls; they are just peers in the cloud.
* goal: pubs are easy to run by community members, keep governance as local as possible, avoid moderations external to local community
* pubs are easy to run, push buttons on glitch, no need to use a command line, pub owner has no power, can only turn it off, can have multiple pubs run by different people for redundancy
* zero data event with rosano at some later point?
* cinnamon stepping down for health reasons, looking for contributors

## mix: [ssb-crut](https://gitlab.com/ahau/lib/ssb-crut)

[Pre-recorded presentation](https://www.youtube.com/watch?v=URIUbupxxU4).

## juha

Wants to track carbon via Zero Data apps and integrate with [Home Assistant](https://www.home-assistant.io).

## mauve: [hypergodot](https://github.com/RangerMauve/hypergodot)

P2P for [godot game engine](https://godotengine.org).

* avoid managing server-stuff for games by using hypercore <https://hypercore-protocol.org>
* works like bittorrent: downloads your platform binary, gateway gets spawned, game sends http requests to gateway for doing p2p; user just plays game, dev just imports node to scene graph
* <https://github.com/RangerMauve/hyper-gateway>
* <https://github.com/RangerMauve/hypercore-fetch>
* <https://github.com/hyperswarm/hyperswarm>

## rosano: [automated testing via github actions](https://github.com/wikiavec/hyperdraft/actions)

## gwil: [letterbox](https://earthstar-letterbox.netlify.app)

* runs anywhere javascript runs (browser, node, deno)
* would be great to have libraries in other languages, shouldn't be hard to port to another language  
   * refer to the detailed spec: <https://earthstar-docs.netlify.app/docs/reference/earthstar-specification/>
* and join our discord: <https://discord.gg/RGsvu9a9>

## cblgh: [lieu](https://lieu.cblgh.org)

a community search engine

* code: <https://github.com/cblgh/lieu>
* thread of recent feature update: <https://twitter.com/cblgh/status/1455197377065799689>

## nanomonkey: recipe manager

UI works with both keyboard and mouse

* frontend <https://github.com/nanomonkey/scratch>
* backend <https://github.com/nanomonkey/ssb%5Fclj%5Frepl>

# Chat

> _13:36_ cblgh says: order \['hoody', 'juha', 'mauve', 'fellow jitsi', 'cinn', 'mix', 'rosano', 'cblgh', 'gwil'\]  
> _13:39_ Mauve says: <https://agregore.mauve.moe/>  
> _13:40_ cblgh says: <https://merveilles.town/web/accounts/57295> <-- amatecha  
> _13:42_ cinnamon says: <https://github.com/earthstar-project/earthstar>  
> _13:42_ cinnamon says: p.s. I use they/them pronouns  
> _13:44_ cblgh says: (updated order: \['hoody', 'juha', 'mauve', 'fellow jitsi', 'cinn', 'mix', 'rosano', 'cblgh', 'gwil', 'geoffrey', 'interfect'\])  
> _13:44_ cblgh says: o ya he/him/they i guess 😃  
> _13:44_ rosano says: he/they  
> _13:46_ Juha Autero says: he/they also  
> _13:48_ rosano says: <https://duckduckgo.com/?q=timer+7+min&ia=answer>  
> _13:49_ cblgh says: <https://github.com/AljoschaMeyer/bamboo>  
> _13:49_ cblgh says: <https://collapseos.org/>  
> _13:55_ cblgh says: o/ nanomonkey 😃  
> _13:56_ gwil says: fully sick  
> _14:07_ cblgh says: <https://github.com/AljoschaMeyer>  
> _14:07_ cblgh says: <https://github.com/fraction/oasis>  
> _14:07_ cblgh says: <https://github.com/earthstar-project/earthstar>  
> _14:09_ nanomonkey says: So, I built the first two boards for the disaster radio project. I have some experience with building Lora antannas in Kicad if you need any help.  
> _14:10_ interfect says: Thanks!  
> _14:12_ cblgh says: <https://cblgh.org/trustnet/>  
> _14:12_ cblgh says: (pardon the orange halloween theme x)  
> _14:16_ hoody says: earthstar is dope  
> _14:17_ cblgh says: <https://buntimer-earthstar.netlify.com>  
> _14:21_ cinnamon says: <https://earthstar-demo-pub-v6-a.glitch.me/>  
> _14:21_ cinnamon says: <https://github.com/earthstar-project/earthstar-pub>  
> _14:21_ cblgh says: <https://gitlab.com/ahau/lib/ssb-crut>  
> _14:21_ cblgh says: <https://ahau.io/>  
> _14:22_ nanomonkey says: Any suggestions on how to get mics working? I've tried all the options available through jitsi that I can find.  
> _14:23_ cblgh says: hm not sure 😕 replug it probably, or try chrome and see if that does it?  
> _14:23_ gwil says: which browser are you on? safari always gives me trouble  
> _14:23_ rosano says: @nanomonkey i think you probably did it right, maybe try a different browser?  
> _14:23_ nanomonkey says: firefox  
> _14:23_ rosano says: yea safari doesn't work for me  
> _14:23_ nanomonkey says: on llnux  
> _14:24_ Mauve says: I'm on Firefox on Linux and I think my mic works FWIW.  
> _14:24_ Mauve says: I'm guessing your mic gain is up and your system is seeing stuff when you try to test it outside the browser?  
> _14:25_ cblgh says: once i had to click on the lil tab above the mic and pic another microphone, cause it was picking up a different one  
> _14:25_ cblgh says: (guess you already tried that tho!)  
> _14:25_ cblgh says: hey cryptix 😃  
> _14:25_ cblgh says: we're streaming mix (not sure if you can see it)  
> _14:26_ cryptix says: hey ya'll!  
> _14:26_ cryptix says: yea i can. sorry for being late.. i somehow messed up writing down the wrong time  
> _14:26_ cblgh says: nw 😃  
> _14:26_ rosano says: timezones are complicated… but thanks for being here, be welcome 😃  
> _14:27_ Juha Autero says: nanomankey: Does addressbar show that you have granted extra permissions on website?  
> _14:27_ cblgh says: boost ON  
> _14:27_ amatecha says: oh wow I figured out how to set name and use chat. woot  
> _14:28_ cblgh says: (mix gave me permission to 1.25x it once it got close to the 7 min work fwiw 😃  
> _14:28_ rosano says: dj alex  
> _14:31_ cblgh says: 💿😎  
> _14:31_ cblgh says: <https://github.com/mixmix/ssb-crut-demo>  
> _14:31_ cblgh says: if anyone wants to rewatch it it's here: <https://www.youtube.com/watch?v=URIUbupxxU4>  
> _14:31_ cblgh says: \['hoody', 'juha', 'mauve', 'fellow jitsi', 'cinn', 'mix', 'rosano', 'cblgh', 'gwil', 'geoffrey', 'interfect', 'nanomonkey', 'cryptix'\]  
> _14:35_ hoody says: getting super flaky net here at y homeboys house  
> _14:35_ hoody says: heading back to home and trying again  
> _14:36_ Mauve says: lol, I can't share screen from Agregore yet since I haven't implemented the UI for it. 😂  
> _14:36_ rosano says: #browsergoals  
> _14:41_ cblgh says: i guess this  
> _14:41_ <https://www.home-assistant.io/> :^)  
> _14:41_ rosano says: <https://www.home-assistant.io>  
> _14:42_ Mauve says: Just confirming with the person I'm meeting though  
> _14:44_ cblgh says: <https://godotengine.org/>  
> _14:44_ cblgh says: <https://github.com/RangerMauve/hypergodot>  
> _14:45_ nanomonkey says: Juha, there is a couple of libraries in Python for opening and writing to excel files. This might help you out.  
> _14:45_ nanomonkey says: Pandas can do it directly and has lots of support.  
> _14:46_ cblgh says: (also known as dat previously : )  
> _14:46_ cblgh says: <https://hypercore-protocol.org/>  
> _14:46_ amatecha says: oohhh (didn’t know dat was “rebranded”!)  
> _14:47_ Juha Autero says: I'm experienced Python programmer. What I'm trying to learn is javascript frameworks.  
> _14:47_ rosano says: "as little as possible to make stuff just work" all the things  
> _14:50_ cblgh says: big brain energy  
> _14:51_ Mauve says: <https://github.com/RangerMauve/hyper-gateway>  
> _14:51_ Mauve says: <https://github.com/RangerMauve/hypercore-fetch>  
> _15:00_ cblgh says: <https://github.com/hyperswarm/hyperswarm>  
> _15:00_ cblgh says: <https://hyperdraft.rosano.ca>  
> _15:00_ cblgh says: <https://github.com/sveltejs/svelte>  
> _15:02_ cblgh says: <https://www.cypress.io/>  
> _15:04_ Mauve says: K, gotta go. TY folks!  
> _15:06_ cblgh says: gwil u can go ahead of me if you want 😃  
> _15:06_ gwil says: I'll take you up on that  
> _15:09_ gwil says: <https://earthstar-letterbox.netlify.app/join/earthstar:///?workspace=+plaza.prm27p8eg65c&pub=https://earthstar-demo-pub-6b.fly.dev&pub=https://earthstar-demo-pub-v6-a.glitch.me&v=1>  
> _15:13_ cblgh says: (i love the pocket terminology that gwil is putting into action here)  
> _15:13_ cblgh says: if u remember (from cinn): to participate u gotta make an identity, and then you click on "join plaza" or whatever at the bottom!  
> _15:14_ rosano says: local-first!  
> _15:16_ cblgh says: 👏👏👏  
> _15:16_ rosano says: ❤️  
> _15:18_ hoody says: back on track. hallo cryptix  
> _15:19_ cblgh says: wb!  
> _15:20_ gwil says: <https://discord.gg/RGsvu9a9> <-- earthstar discord  
> _15:20_ cblgh says: remaining potential presentations \[ 'cblgh', 'nanomonkey', 'cryptix'\]  
> _15:20_ gwil says: cinnamon's docS are NUTS  
> _15:22_ rosano says: <https://lieu.cblgh.org>  
> _15:23_ Juha Autero says: Accidentally closed tab.  
> _15:26_ rosano says: ooooh lala  
> _15:26_ hoody says: any preferred thing to do to make your site lieu friendly?  
> _15:27_ gwil says: yeah, is there a way for it to handle browser-rendered apps / pipe data in?  
> _15:28_ cblgh says: p:first-of-type  
> _15:28_ gwil says: A whole new industry of dark web SEO  
> _15:29_ hoody says: heh heh  
> _15:29_ hoody says: how about a button you could display  
> _15:29_ hoody says: oldskool, part of webring / use lieu here  
> _15:30_ cblgh says: oh ya, like ready made?  
> _15:32_ hoody says: yup, to help people find this thing  
> _15:32_ hoody says: neocities friendly stuff, simple  
> _15:32_ hoody says: <https://vmx.cx/cgi-bin/blog/index.cgi/category/Noise>  
> _15:32_ hoody says: might be handy soehow  
> _15:32_ hoody says: somehow  
> _15:32_ gwil says: thanks everyone, I've got to run!  
> _15:33_ hoody says: cheers gwil  
> _15:33_ cblgh says: am i the only one that can't see it?  
> _15:33_ cryptix says: nope  
> _15:33_ amatecha says: i see nothing lol  
> _15:33_ Juha Autero says: me neither  
> _15:34_ cblgh says: now we're good  
> _15:34_ Juha Autero says: now i can see  
> _15:45_ cblgh says: varasanos og  
> _15:45_ cblgh says: <https://www.varasanos.com/PizzaRecipe.htm>  
> _15:45_ cblgh says: this guy is so serious, check out his site to learn everything about making pizza  
> _15:45_ cblgh says: related: just found out about this markup language for recipes today <https://cooklang.org/>  
> _15:45_ cblgh says: high yield recipe  
> _15:45_ cblgh says: <https://clojurescript.org/>  
> _15:45_ cblgh says: <https://valueflo.ws/>  
> _15:45_ cblgh says: <https://bob.mikorizal.org/users/bhaugen>  
> _15:45_ cblgh says: (bob's fedi)  
> _15:45_ cblgh says: <https://github.com/ssb-ngi-pointer/ssb-db2>  
> _15:47_ hoody says: it's snowing here, got some cocoa and cryptix explaining stuff on the headphones, this is cool  
> _15:49_ cblgh says: ohh wow  
> _15:49_ cblgh says: just arctic circle things  
> _15:49_ cblgh says: <https://github.com/nanomonkey/scratch>  
> _15:49_ cblgh says: <https://github.com/nanomonkey/ssb%5Fclj%5Frepl>  
> _15:52_ hoody says: ssbCRUD  
> _15:52_ hoody says: i think many people are interested in running ssb as distributed key-val store  
> _15:52_ cryptix says: +1  
> _15:54_ nanomonkey says: What ssb client are folks using these days?  
> _15:54_ cblgh says: still patchwork x)  
> _15:54_ hoody says: is there a zero data manifesto somewhere?  
> _15:54_ hoody says: patchwork  
> _15:55_ rosano says: @hoody some principles at <https://0data.app>  
> _15:55_ hoody says: cheers rosano  
> _15:57_ amatecha says: \\o/  
> _15:59_ cryptix says: also nano, feel free to mention me with these questions  
> _15:59_ nanomonkey says: will do  
> _15:59_ cryptix says: also sure cel would be down to answer - also req criquets: like gwil said, somethomes these threads just vanish  
> _15:59_ rosano says: <https://chat.rosano.ca/t/zero-data-swap-3-maker-meet-october-27-2021/44>  
> _15:59_ rosano says: <https://0data.app>  
> _16:00_ hoody says: super cool, thanks for doing this  
> _16:00_ hoody says: cu!
