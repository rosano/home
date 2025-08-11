---
date: 2024-03-06T17:50:00.000Z
categories: ["code"]
tags: ["notes"]
---
Whisper or 'Whisper-Faster' can run as a standalone terminal program on macOS 10.14 with [whisper-standalone-win](https://github.com/Purfview/whisper-standalone-win) by simply downloading the binary from 'releases' and running a single command from the resulting folder:

```
./whisper-faster "~/alfa/bravo.mp3" --pp --model base.en --language=en --output_format all --output_dir .
```

This will fetch the model if there isn't a local copy, and transcribe into about half a dozen formats, including plaintext, JSON, and subtitle files.

The [openai/whisper](https://github.com/openai/whisper) documentation says:

> The .en models for English-only applications tend to perform better, especially for the tiny.en and base.en models. We observed that the difference becomes less significant for the small.en and medium.en models.

To run it without printing text into the console, use `-pp` or [send to NUL](https://github.com/Purfview/whisper-standalone-win/discussions/210#discussioncomment-8709934)
