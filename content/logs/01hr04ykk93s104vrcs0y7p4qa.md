---
date: 2024-03-02T12:56:21.225-05:00
year: 2024
month: 2024-03
day: 2024-03-02
place: Toronto
country: Canada
categories: ["code"]
tags: ["notes"]
---
macOS Time Machine exclusions can be managed via the terminal, as documented in [Exclude folders by regex (?) from time machine backup](https://superuser.com/questions/1161038/exclude-folders-by-regex-from-time-machine-backup), [Control Time Machine from the command line](https://www.macworld.com/article/220774/control-time-machine-from-the-command-line.html), and [Scripting Timemachine exclusion lists](https://apple.stackexchange.com/questions/122504/scripting-timemachine-exclusion-lists):

```
find `pwd` -maxdepth 3 -type d -name 'node_modules' | xargs -n 1 tmutil addexclusion
```

But this doesn't make it show up in the System Preferences GUI. Writing to `defaults` seems to do that:

```
sudo defaults write /Library/Preferences/com.apple.TimeMachine.plist SkipPaths -array-add "~/.cache"
```

but I'm too paranoid about doing it wrong to see what happens.

[Asimov](https://github.com/stevegrunwell/asimov) is another option (installed via homebrew) to "Automatically exclude development dependencies from Apple Time Machine backups".
