---
date: 2024-01-23T11:44:28.000Z
slug: launch-apps-from-the-ios-lock-screen
title: launch apps from the iOS lock screen
summary: open stuff on iOS without apps, notifications, or distractions 🎯
tags:
  - workflow
feature_image: IMG_7165-copy.jpeg
---
I capture notes frequently and prefer to avoid looking at apps, notifications, or any distractions along the way: here's the shortest path to typing into some kind of note-taking app.

It's possible to [customize the lock screen](https://support.apple.com/en-ca/guide/iphone/iph4d0e6c351/ios) as of iOS 16, and we can use this to launch an app directly from there.

First create a script in [Scriptable](https://scriptable.app) (for some reason this is not yet possible with Apple Shortcuts)—here's an example to open Shazam:

```javascript
let widget = new ListWidget()

let icon = widget.addImage((SFSymbol.named('wand.and.stars').image))
icon.tintColor = Color.white()
  
Script.setWidget(widget)
Script.complete()

Safari.open('shazam://')

```

<figure>

[Scriptable file to open Shazam](https://static.rosano.ca/home/blog/2024-01-23-launch-apps-from-the-ios-lock-screen/Shazam.scriptable)

<figcaption>Save this in the iCloud Drive Scriptable folder, or open it with Scriptable on your iOS device.</figcaption>
</figure>

Replace `shazam://` with the 'URL scheme' for your app, for example: Apple Notes is `mobilenotes://`, Voice Memos is `voicememos://`, and Twitter is `twitter://`. There are lists at [github.com/bhagyas](https://github.com/bhagyas/app-urls), [github.com/FifiTheBulldog](https://github.com/FifiTheBulldog/ios-settings-urls), [techregister.co.uk](https://www.techregister.co.uk/always-updated-list-of-ios-app-url-scheme-names-paths-for-shortcuts-ios-iphone-gadget-hacks/), [medium.com/@contact.jmeyers](https://medium.com/@contact.jmeyers/complete-list-of-ios-url-schemes-for-apple-settings-always-updated-20871139d72f), and [davidblue.wtf](https://davidblue.wtf/urlschemes/). You can probably guess what it is for your app or [search](https://duckduckgo.com/?hps=1&q=YOUR%5FAPP%5FNAME+url+scheme) for `YOUR_APP_NAME url scheme`.

You can also replace `wand.and.stars` with any icon from Apple's [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) icon set built into iOS: [hotpot.ai](https://hotpot.ai/free-icons) has an online list where you can tap the 'SF Symbols' button and click on an icon to copy it's code.

Once that's done:

1. open the Settings app and select Wallpaper (iOS users can click this shortcut);
2. tap `Customize` on your lock screen, then `Add widget`, then `Scriptable`, then tap the smaller or larger format,
3. once you the new widget appears, tap `Select Script`, change 'When Interacting' from `Open App` to `Run Script`, and change 'Script' from `Choose` to your the one you created earlier,
4. finally, tap the close button on all the boxes (probably about 2–3 of them), then tap `Done` to save everything.

<gallery class="duets">![](IMG_7165.jpeg) ![](IMG_7166.jpeg)</gallery>

There are quite a few other possibilities in all that but this will be enough to open stuff from the lock screen without having to look at anything in your phone. Unfortunately not yet possible with web apps added to the home screen (see [Link Capturing](https://firt.dev/notes/pwa-ios/)).

This might pair well with disabling notifications via the 'Do Not Disturb' Focus.

---

If you use [Simplenote](https://simplenote.com) like me, you can also open a specific note by getting the full URL:

1. create a new note;
2. type a bracket `[` and then the first few letters of another note;
3. select from the autocomplete list and tap it to insert note link.

For example, if it shows `[alfa bravo charlie](simplenote://note/7df07707b0744184b68224983c1b8c79)`, then the full URL is `simplenote://note/7df07707b0744184b68224983c1b8c79` and you can substitute `shazam://` for that in the original script to open a specific note.
