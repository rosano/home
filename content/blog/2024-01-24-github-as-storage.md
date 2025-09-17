---
date: 2024-01-24T14:51:04.000Z
slug: github-as-storage
title: GitHub as storage
summary: Could it be one of the most interoperable formats out there?
tags:
  - idea
  - Zero Data
  - technical
  - Easy Indie App
---
Writing [interoperable visions](https://rosano.ca/interoperable-visions) got me thinking about how cool it would be to use a GitHub repository as the storage for [Zero Data](https://0data.app) or [local-first](https://www.inkandswitch.com/local-first) apps as many people have an account there, even some less technical people. Using their [repository contents API](https://docs.github.com/en/rest/repos/contents) it should be possible to connect it as a backend for web apps and store the data in a repository. Has this been done already?

GitHub has useful affordances for browsing files, understanding directory structure, editing text, collaborating, version control, and a whole wack of integrations hooking into every corner of the internet. A repo can be synced to your local device where you can also do all the things your device can, then push it back to the cloud.

Might be interesting to think of it like a Dropbox shared folder, but globally public and editable, or another way to get [Datomic](https://docs.datomic.com/pro/time/filters.html#history)'s "version control for your database".

Of course, you may not want the data created by your app to be public, so you might use a private repository instead of a public one. Choosing a public repository where it doesn't breach privacy could be a new way to encourage 'open data', as one can literally see, fork, and hack all of it with no extra steps, 

The many affordances accessible point-and-click via GitHub's web interface ensures there are at least two apps that can edit the same data, which is great for interop, but factoring all the ways to edit GitHub repos via integrations and on your local device, it becomes closer to infinite: could it be one of the most interoperable formats out there? What would it say about sovereignty if similar flexibility via an API was replicated by [Codeberg](https://codeberg.org), or [self-hostable options](https://easyindie.app) like [GitLab](https://gitlab.com), [Gitea](https://gitea.io), or [Gogs](https://gogs.io)?

The [remoteStorage.js library](https://github.com/remotestorage/remotestorage.js) already supports [Dropbox and Google Drive](https://remotestoragejs.readthedocs.io/en/latest/getting-started/dropbox-and-google-drive.html) as an optional storage backend, with [Solid](https://community.remotestorage.io/t/adding-solid-as-a-backend/828) on the way. Why not add GitHub? A polyglot library with five low-friction storage options would give developers more potential for their apps, and the people using them more ways into owning their data.
