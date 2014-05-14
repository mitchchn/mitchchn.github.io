---
title: 8 Terminal Utilities Every OS X User Should Know
layout: post
---

## 1. **open**


`open` opens files, directories and applications. Exciting, right? But it really does come in handy as a **command-line double-click.** For instance, typing:

    $ open /Applications/Safari.app/

...will launch Safari as if you had double-clicked its icon in the Finder.

If you point `open` at a file instead, it will try to load the file with its associated GUI application. For instance, `open screenshot.png` on an image should open the image in Preview. You can use the flag `-a` to choose the application, or `-e` to open the file in TextEdit.

Running `open` on a directory will take you straight to that directory in a Finder window. This is especially useful for bringing up the current directory, by typing `open .`.

Remember that the integration between Finder and Terminal goes both ways -- if you drag a file from Finder into a Terminal window, its full path gets pasted into the command line.


[^bundles]: Recall that OS X apps are not true executables, but actually special folders (bundles) with the extension *.app*. Using `open` you can also launch  other "files" that are truly bundles, such as Pages documents. 


## 2. **pbcopy** and **pbpaste**

These two commands let you copy and paste text from the command line. Of course, you could also just use your mouse — but the real power of `pbcopy` and `pbbpaste`comes from the fact that they're UNIX commands, and that means they benefit from piping, redirection, and the ability to be in scripts in conjunction with other commands. Typing:

    $ ls ~ | pbcopy

...will copy a list of files in your home directory to the OS X clipboard. You can easily capture the contents of a file:

    $ cat blogpost.txt | pbcopy

Using `pbcopy` with pipes is a great way to capture the output of a command without having to scroll up and carefully select it. This makes it easy to share diagnostic information. `pbcopy` and `pbpaste` can also be used to automate or speed up certain kinds of tasks. For instance, if you want to save email subject lines to a task list, you could copy the subjects from Mail.app and run:

`$ pbpaste >> tasklist.txt`


## 3. **mdfind**

Many a Linux power user has tried to use `locate` to search for files on a Mac and then quickly discovered that it didn't work. There's always the venerable UNIX `find` command, but OS X comes with its own killer search tool: Spotlight. So why not tap into its power from the command line?

That's exactly what `mdfind` does. Anything Spotlight can find, `mdfind` can find too. That includes the ability searching inside files and metadata.

`mdfind` comes with a few conveniences that make it stand out from big blue brother. For instance, the `-onlyin` flag can restrict the search to a single directory:

    $ mdfind -onlyin ~/Documents essay

The `mdfind` database should stay up to date in the background, but you can also troubleshoot it (as well as Spotlight) using `mdutil`. If Spotlight isn't working the way it should, `mdutil -E` will erase the index and rebuild it from scratch. You can also turn off indexing entirely with `mdutil -i off`.

## 4. **screencapture**

'screencapture' lets you take many different kinds of screenshots. It's similar to **Grab.app** and the keyboard shortcuts <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>3</kbd> and <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>4</kbd>, except it's far more flexible. Here are just a few different ways you can use `screencapture`:

Capture the contents of the screen, including the cursor, and attach the image (named 'image.png' to a new Mail message:

    $ screencapture -C -M image.png

Select a window using your mouse, then capture its contents without the drop shadow and copy the image to the clipboard:

    $ screencapture -c W

Capture the screen after a delay of 10 seconds and then open the new image in Preview:
    
    $ screencapture -T 10 -P image.png

Select a portion of the screen with your mouse, capture its contents, and save the image as a pdf:

    $ screencapture -s -t pdf image.pdf

To see more options, type `screencapture --help` 


## 5. **launchctl**

`launchctl` lets you interact with the OS X init script system, `launchd`. Using launch agents and launch daemons, you can control the services that start up when you turn on your computer. You can even set up scripts to run periodically in the background.

For example, if you'd like to have the Apache web server start up when you boot your Mac, simply type:

    $ sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist

Running `launchctl list` will show you what launch scripts are currently running. You can use `sudo launchctl unload -w [path/to/script]` to remove scripts from your boot sequence.

Launch agents and dademons are stored in the folllowing locations:

    ~/Library/LaunchAgents         Per-user agents provided by the user.
    /Library/LaunchAgents          Per-user agents provided by the administrator.
    /Library/LaunchDaemons         System-wide daemons provided by the administrator.
    /System/Library/LaunchAgents   Per-user agents provided by OS X.
    /System/Library/LaunchDaemons  System-wide daemons provided by OS X.

(This information is from Paul Annesley's [blog post](http://paul.annesley.cc/2012/09/mac-os-x-launchd-is-cool/), which also provides a great walkthrough of the contents of a launchd script.)

If you'd like to learn how to write your own launch scripts, Apple provides some useful documentation on their [Developer site](https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html). You can also use the [Lingon](http://www.peterborgapps.com/lingon/) app if you'd prefer to avoid the command line entirely.


## 6. **say**

This is a fun one: `say` converts text to speech, using the same TTS engine OS X uses for [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/). Without any options, `say` will simply speak whatever text you give it out loud:

    $ say "Never trust a computer you can't lift."[^mac]


You can change the default voice (and language!) from the **Dictation & Speech** panel in System Preferences.


[^mac]: https://www.youtube.com/watch?v=G0FtgZNOD44

## 7. **brew**

OK--this isn't technically a native command. But no OS X power user should be without [Homebrew](http://brew.sh). The website calls it "The missing package manager for OS X," and that couldn't be truer. If you've ever used `apt-get` in Linux, you will feel right at home in Homebrew. `brew` gives you easy access to thousands of free apps and utilities from the open source community. 

For instance, `brew install imagemagick` will set you up with [ImageMagick](http://www.imagemagick.org), a powerful utility that makes it possible to do anything from whipping up animated gifs to converting images between dozens of different types. `brew install node` will get you [NodeJS](http://nodejs.org), the hot new tool for developing and running server-side JavaScript apps on your Mac.

You can have fun with Homebrew too: `brew install archey` gives you **Archey**, a fun script for displaying your Mac's specs next to a colourful Apple logo. The selection in Homebrew is huge---and because it's so easy to create [formulas](https://github.com/Homebrew/homebrew/wiki/Formula-Cookbook), new packages are being added all the time.

But the best part about Homebrew? It keeps all its files i a single directory: `/usr/local/`. That means you can install newer versions of system software, such as `python` and `mysql`, without interfering with the built-in equivalents. If you ever want to remove Homebrew, all you have to do is delete the contents of `/usr/local/`.
