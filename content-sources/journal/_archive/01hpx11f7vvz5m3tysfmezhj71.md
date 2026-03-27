---
date: 2024-02-18T02:34:35.643Z
categories: ["code"]
tags: ["notes","contribute","inclusive"]
---
[YunoHost](https://yunohost.org) has an 'Edit' button on their homepage which lets you directly modify the content and send them a 'patch'.

I wasn't able to submit my change because of a 'File not found' error, but still find it fascinating to not require people to use GitHub or Git in order to contribute.

The logic is in the seemingly random '[gertrude](https://github.com/YunoHost/gertrude/blob/master/frontend/static/_js/app.js)' repository (which has not much of a README or description for what it is, and it looks like the 'patch' is just the full HTML page content; perhaps someone can manually integrate it later. They claim to require email verification to catch spam before actually sending the change.

If it was possible to put a `mailto` on the internet without spam, it could remove friction from this kind of collaboration and create steps for people to do larger things.
