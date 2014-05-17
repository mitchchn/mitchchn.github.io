---
layout: post
title: "(And eight hundred more)"
---


On Wednesday night I went to bed pretty pleased with myself. My article abut the [OS X command line](/2014/os-x-terminal) had found some traction on reddit, pulling in a few hundred visitors over the course of an evening. Not bad for a week-old personal blog, eh?

I was in for one hell of a surprise. When I woke up on Thursday morning---my 25th birthday---the number of pageviews had reached 30,000. By Friday evening, just over 100,000 people had seen my article. And it feels like a good tenth of them have responded in some way: comments, compliments, and criticism. Gratitude. Typo corrections. Sage advice. Birthday wishes.

To someone entirely unused to online notoriety, it feels as though a very geeky flash mob materialized in my apartment one evening, stayed for dinner, then went home and reviewed my cooking on Yelp. I am a little dazed.

<!--more-->

With any luck, at least a few of those visitors will invite themselves back. The Terminal post was meant for a more technical audience than my main series, [Coding for Journalists](/2014/coding-for-journalists-p0). But it won't be the last of its kind. And one of my goals for this place is to explore some of the more basic topics in hackerdom in a way that's compelling for people of different backgrounds and skill levels. I hope I'm succeeding.[^html]

[^html]: Besides: \*you\* don't need to learn basic web development---but surely you have an intelligent, non-hacker friend who does. Or maybe you'd just like to scrutinize my code, recommendations, and writing style for mistakes. Both types are welcome here.

## "You forgot X!"

Of course, there are far more than just eight utilities every Terminal user should know.

In the past couple days, dozens of people have shared with me their own favourite Terminal one-liners and scripts. I've learned new tricks about the tools I covered in my article, and discovered others I'd rarely or never touched. In fact, the best thing about the reaction to my article wasn't the feedback directed at the post, my blog, or myself; it was the discussion that spawned all around the Mac-o-sphere about the command line and how to make the most of it.

I'm going to highlight a few of the more interesting utilities I missed in this post. It's also worth taking a look at the comment section on [Hacker News](https://news.ycombinator.com/item?id=7747982). There are troves of good information out there from people much more knowledgeable than I will ever be.

And now, in no particular order, the shortlist:

### open ###

I covered `open` previously, but it deserves an encore for a feature several people brought to my attention. Typing `open -a Safari` will launch Safari---no matter where Safari is located on the system. The same shortcut works for any Mac application. There's no need to have the full path.

This black magic is made possible thanks to [Launch Services](https://developer.apple.com/library/mac/documentation/Carbon/reference/LaunchServicesReference/Reference/reference.html), the same system that associates filetypes with their applications in Finder. Thank you to all the users on reddit and Twitter who introduced me to this trick.

### textutil ###

`textutil` uses Cocoa's text engine to manipulate documents and convert them between various formats, including **.doc**, **.txt**, **.html** and **.rtf**. For example, here's how to make an HTML file out of a simple Word document:[^cleaner]

    $ textutil -convert html article.doc

Another interesting feature of `textuil` is its ability to concatenate (join together) multiple files into one long document. This command will join three Word documents together into one .rtf:

    $ textutil -cat rtf article1.doc article2.doc article3.doc

Thanks to **cstross** from Hacker News for teaching me about `textutil`.

[^cleaner]: A user on HackerNews suggested that the HTML output of `textutil` is cleaner than what you'd get frm TextEdit and MS Word. That's good to know if true. As I've written before, it's always better to write HTML by hand.

### sips ###

`sips` is an image processing tool and a native alternative to ImageMagick. Because it's built on top of Apple's [Core Image](http://en.wikipedia.org/wiki/Core_Image), the capabilities of `sips` go quite deep into areas such as colour profiles. But it's also a nice tool for quick image manipulations, like converting, resizing, cropping, and rotating.

This script will convert a folder filled with jpegs to pngs:

    $ for file in *.jpeg; do sips -s format png $file --out $file.png

Dr. Drang has a great [writeup of his sips](http://www.leancrew.com/all-this/2014/05/a-little-sips/) and how he uses it in workflows for his clients.

### ssh-add ###

If you frequently use `ssh` to access a secure server, such as Amazon's EC2, you should know about `ssh-add`. This command lets you save your private key file to the OS X [Keychain](http://en.wikipedia.org/wiki/Keychain_\(Apple\)). Set it up once, and you can use the bare `ssh` command without manually including the private key file or messing around with the contents of `~/.ssh/`

*Before:*

    $ ssh -i keyfile.pem [server]

*After:*

    $ ssh-add -k keyfile.pem

    $ ssh [server]

Thanks to a Hacker News user, **pling**, for remnding me about this one.

### man ###

The `man` command to bring up help manuals isn't exclusive to OS X, nor is there much that's new to say about it. But Twitter user [@peternlewis](http://twitter.com/peternlewis) reminded me of a **Terminal.app** feature that is worth repeating. If you begin typing the name of a command into the **Help** menu, Terminal will automatically bring up the relevant `man` pages.

<img src="/public/img/man.png">

There are still more utilities I haven't had a chance to cover in these two posts---and that's not including the dozens of essential UNIX commands that are beyond the scope of a Mac-only list. But I hope that you've found at least some of these choices helpful for your own workflow. If you have your own favourites that you'd like to share, give me a shout on [Twitter](http://mitchchn.me/)
