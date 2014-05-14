---
title: Eight Terminal Utilities Every OS X Command Line User Should Know
layout: post
---

The OS X Terminal opens up a world of powerful UNIX utilities and scripts. If you're migrating from Linux, you'll find many familiar commands work the way you expect. But power users often aren't aware that OS X comes with a number of its own text-based utilites not found on any other operating system. Learning about these Mac-only programs can make you more productive on the command line and help you bridge the gap between UNIX and your Mac.

<!--more-->

## 1. **open**


`open` opens files, directories and applications. Exciting, right? But it really does come in handy as a **command-line double-click.** For instance, typing:

    $ open /Applications/Safari.app/

...will launch Safari as if you had double-clicked its icon in the Finder.[^bundles]

If you point `open` at a file instead, it will try to load the file with its associated GUI application. For instance, `open screenshot.png` on an image should open the image in Preview. You can use the flag `-a` to choose the application, or `-e` to open the file in TextEdit.

Running `open` on a directory will take you straight to that directory in a Finder window. This is especially useful for bringing up the current directory by typing `open .`

Remember that the integration between Finder and Terminal goes both ways -- if you drag a file from Finder into a Terminal window, its full path gets pasted into the command line.

[^bundles]: Recall that OS X apps are not true executables, but actually special directories (bundles) with the extension *.app*. `open` is the only way to launch these programs from the command line. It can also launch  other "files" that are truly bundles, such as Pages documents. 


## 2. **pbcopy** and **pbpaste**

These two commands let you copy and paste text from the command line. Of course, you could also just use your mouse---but the real power of `pbcopy` and `pbpaste` comes from the fact that they're UNIX commands, and that means they benefit from piping, redirection, and the ability to be in scripts in conjunction with other commands. Typing:

    $ ls ~ | pbcopy

...will copy a list of files in your home directory to the OS X clipboard. You can easily capture the contents of a file:

    $ cat blogpost.txt | pbcopy

Using `pbcopy` with pipes is a great way to capture the output of a command without having to scroll up and carefully select it. This makes it easy to share diagnostic information. `pbcopy` and `pbpaste` can also be used to automate or speed up certain kinds of tasks. For instance, if you want to save email subject lines to a task list, you could copy the subjects from Mail.app and run:

    $ pbpaste >> tasklist.txt


## 3. **mdfind**

Many a Linux power user has tried to use `locate` to search for files on a Mac and then quickly discovered that it didn't work. There's always the venerable UNIX `find` command, but OS X comes with its own killer search tool: Spotlight. So why not tap into its power from the command line?

That's exactly what `mdfind` does. Anything Spotlight can find, `mdfind` can find too. That includes the ability to search inside files and metadata.

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

`launchctl` lets you interact with the OS X init script system, `launchd`. By With launch daemons and launch agents, you can control the services that start up when you boot your computer. You can even set up scripts to run periodically or at timed intervals in the background.

For example, if you'd like to have the Apache web server start automatically when you turn on your Mac, simply type:

    $ sudo launchctl load -w /System/Library/LaunchDaemons/org.apache.httpd.plist

Running `launchctl list` will show you what launch scripts that are currently running. You can use `sudo launchctl unload -w [path/to/script]` to remove scripts from your boot sequence. I like to remove the auto-update "helpers" created by Adobe apps and Microsoft Office.

Launchd scripts are stored in the folllowing locations:

    ~/Library/LaunchAgents    
    /Library/LaunchAgents          
    /Library/LaunchDaemons
    /System/Library/LaunchAgents
    /System/Library/LaunchDaemons

To see what goes into a launch agent or daemon, there's a great blog post by [Paul Annesley](http://paul.annesley.cc/2012/09/mac-os-x-launchd-is-cool/) that walks you through the file format. And if you'd like to learn how to write your own `launchd` scripts, Apple provides some helpful documentation on their [Developer site](https://developer.apple.com/library/mac/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingLaunchdJobs.html). There's also the fantastic [Lingon](http://www.peterborgapps.com/lingon/) app if you'd prefer to avoid the command line entirely.


## 6. **say**

This is a fun one: `say` converts text to speech, using the same TTS engine OS X uses for [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/). Without any options, `say` will simply speak whatever text you give it out loud.:[^mac]

    $ say "Never trust a computer you can't lift."

You can also use `say` to speak the contents of a text file with the `-f` flag, and you can store the resulting audio clip with the `-o` flag:

    $ say -f mynovel.txt -o myaudiobook.aiff

The `say` command can be useful in place of console logging or alert sounds in scripts. For instance, you can set up an Automator or [Hazel](http://www.noodlesoft.com/hazel.php) script to do batch file processing and then announce the completion with `say`.

But the most enjoyable use for `say` is rather more sinister: if you have `ssh` access to a friend or coworker's Mac, you can silently log into their machine and haunt them through the command line. Give 'em a Siri-ous surprise.

You can set the voice (and language!) used by `say` by changing the default setting in the **Dictation & Speech** panel in System Preferences.


[^mac]: https://www.youtube.com/watch?v=G0FtgZNOD44

## 7. **disktuil**

`diskutil` is a command line interface to the **Disk Utility** that comes with OS X. It can do everything its graphical cousin can, but it also has some additional capabilities---such as filling a disk with zeroes or random data. Simply type `diskutil list` to see the path names of disks and removable media attached to your machine, and then point the command at the volume you want to operate on. Be careful: `diskutil` can permanently destroy data if it's used incorrectly.

## 8. **brew**

Alright--this isn't technically a native command. But no OS X power user should be without [Homebrew](http://brew.sh). The website calls it "The missing package manager for OS X," and that couldn't be truer. If you've ever used `apt-get` in Linux, you will feel right at home in Homebrew. `brew` gives you easy access to thousands of free apps and utilities from the open source community. 

For instance, `brew install imagemagick` will set you up with [ImageMagick](http://www.imagemagick.org), a powerful utility that makes it possible to do anything from whipping up animated gifs to converting images between dozens of different types. `brew install node` will get you [NodeJS](http://nodejs.org), the hot new tool for developing and running server-side JavaScript apps on your Mac.

You can have fun with Homebrew too: `brew install archey` will get you **Archey**, a fun script for displaying your Mac's specs next to a colourful Apple logo. The selection in Homebrew is huge---and because it's so easy to create [formulas](https://github.com/Homebrew/homebrew/wiki/Formula-Cookbook), new packages are being added all the time.

<figure>
    <img src="/public/img/archey.png">
    <figcaption><span class="elegant">Archey&mdash;</span>My command line brings all the boys to the yard.</figcaption>
</figure>


But the best part about Homebrew? It keeps all its files in a single directory: `/usr/local/`. That means you can install newer versions of system software, such as `python` and `mysql`, without interfering with the built-in equivalents. If you ever want to remove Homebrew, all you have to do is delete the contents of `/usr/local/`.

For more fun with **Terminal.app**, here is an A-Z list of [all available console commands in OS X 10.9 Mavericks](http://ss64.com/osx/).
