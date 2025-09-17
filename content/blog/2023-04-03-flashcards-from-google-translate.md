---
date: 2023-04-03T10:39:27.000Z
slug: flashcards-from-google-translate
title: Flashcards from Google Translate
tags:
  - Launchlet
  - Kommit
  - technical
wiki_id: 01gx3b6jfc9w49m62mz0t96g28
---
{{< rc-youtube ytY842W9o3s >}}

| time  | section                                                            |
| ----- | ------------------------------------------------------------------ |
| 00:00 | [Introduction](https://youtu.be/ytY842W9o3s?start=00m00s)          |
| 01:26 | [Starting from scratch](https://youtu.be/ytY842W9o3s?start=01m26s) |
| 03:33 | [Trying it out](https://youtu.be/ytY842W9o3s?start=03m33s)         |
| 04:08 | [Conclusion](https://youtu.be/ytY842W9o3s?start=04m08s)            |

# Recipe

<dl class="OLSKDecorGlossary">
<dt>Name</dt><dd>Flashcards from translations</dd>
<dt>Callback</dt>
<dd><code>const source = document.querySelector('textarea[aria-label="Source text"]').value.split('\n');

const pronounce = source.map(e =&gt; '');

if (document.querySelector('div[data-location="2"] div')) {
  document.querySelector('div[data-location="2"] div').textContent.split('\n').forEach((e, i) =&gt; pronounce[i] = e);
}

const translations = Array.from(document.querySelectorAll('div[aria-live="polite"] &gt; div &gt; div &gt; span &gt; span:nth-child(2n + 1) &gt; span')).map(e =&gt; e.textContent);

const cardsText = translations.map((e, i) =&gt; [e, source[i], pronounce[i]].map(e =&gt; e.trim().replace(/^- ?/g, '')).join(';')).join('  ');

return this.api.LCHCopyToClipboard(cardsText);
</code></dd>
<dt>URL Filter</dt><dd>https://translate.google.com</dd>
</dl>

---

Part of [Cooking with Launchlet](https://rosano.hmm.garden/01f1ghgrgxq5adk0sdck3csghh).
