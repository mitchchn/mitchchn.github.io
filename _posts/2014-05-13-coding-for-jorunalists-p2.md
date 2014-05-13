---
title: "Coding for Journalists, Part 2: HTML — Workflows, Nesting and Paragraphs"
layout: post
banner: "/public/img/confession3.png"
---

In [Part 1](/2014/coding-for-journalists-p1/), we set up our environment and tested it out with a little HTML code. More importantly, we built a basic **coding workflow.**

Having and practicing a good workflow is important---not just for the sake of productivity, but because every project is different. A new employer might mean having to learn a new CMS, for instance, or even a new programming language. That's why it's important not to learn specific tools, but to have simple procedures that you know well and can fall back on.

<!--more-->

Your new coding environment might not be as fancy as something like [Codeacademy](http://www.codecademy.com), but it will work anywhere, from your blog to the Huffington Post. To recap, the steps in our HTML workflow are:

1. Write your prose and code in a text editor.
2. Save the file with the extension `.html`
3. Double-click the HTML file to view it in your web browser.
4. Make changes and corrections to your code, re-save the file, and reload the page.

Now that we're comfortable with this process, it's time to learn more HTML.

## Nesting

As we saw in Part 1, HTML is a language of tags. There are a few dozen tags in [HTML5](https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5/HTML5_element_list) (down from well over a hundred in HTML4). We'll learn what many of them are for, but first let's take a look at what they all have in common.

HTML tags interact in predictable ways. One features of tags is that they can **nest**, stacking together like Russian dolls. Nested tags inherit the properties of their surrounding tags. For instance, this line of code:

    <strong><em>It was the best of times, it was the blurst of times.</em></strong>

...produces the following output:

><strong><em>It was the best of times, it was the blurst of times.</em></strong>

The `<strong>` tags encapsulate the `<em>` tags, which encapsulate the text on the inside. Both tags apply their respective formatting to their inner contents. Tag nesting does not have to be symmetrical:

    <strong>It was the best of times, <em>it was was the blurst of times.</em></strong>

><strong>It was the best of times, <em>it was was the blurst of times.</em></strong>

In this case, the `<strong>` tag applies to the entire line, but the `<em>` tag only affects the second half.

Notice that in both examples, the tags are closed in reverse order from how they were opened. This pattern is called **Last In, First Out (LIFO).** Following this practice in your own code is crucial. The innermost opening tag should *always* get the innermost closing tag. The outermost opening tag should *always* get the outermost closing tag.

This line:

    <strong><em>Please don't do this.</strong></em>

...is bad HTML. So is this:

    <em><strong>Also don't do</em> this. Please.</strong>

If you ignore my advice and type these lines of code into your text editor (try it!) they will still work as expected. HTML is designed to be resilient, and browsers are forgiving of simple mistakes.[^nesting] But why learn bad habits? Learn to nest correctly. **LIFO.**[^fifo]

### Parents, children, and siblings

Tags can be on the outside of other tags ("parents"), inside other tags ("children"), or at the same level as other tags in the tag hierarchy ("siblings"). This line of code contains parent, child and sibling tags:

    <em><strong>All TV</strong> and no beer make Homer <strong>go crazy.</strong></em>

><em><strong>All TV</strong> and no beer make Homer <strong>go crazy.</strong></em>

In this example, `<em>` is a parent tag with two children (the two `<strong>` tags). The `<strong>` tags are siblings to each other. Child tags inherit properties from parent tags, but tags don't have any affect on their siblings. Child tags can also be parents to their own child tags---passing down their own traits along with those of the original parents ("grandparents").

As you can imagine, nesting more than a few tags together can make your code  difficult to read---and almost impossible to bugfix. When your code involves multiple levels of tags, consider formatting it in **indented style.** The above code could be written out like this:

        <em>
            <strong>All TV</strong> and no beer make Homer
            <strong>go crazy.</strong>
        </em>

On each new line, hit the <kbd>tab</kbd> key to indent child tags and line up sibling tags. Your text editor will keep track of what level you're on when you press <kbd>enter</kbd>. To go "up" a level, press <kbd>backspace</kbd> at the beginning of a line. You can also select one or more lines of code and press <kbd>shift</kbd> + <kbd>tab</kbd> to unindent them by a single level. Because it's a good habit to get into, I'll be using indented style for most examples from now on.


There is no limit to how deep the tag hierarchy can go---grandchildren, great-grandchildren, etc.---or how many sibling tags can exist at a particular level. As a matter of fact, most webpages are built with long and intricate **tag trees.** But no matter how many branches the tree sprouts, the same principle applies: **child tags inherit all the properties of their parents (and grandparents, and great-grandparents.....)** For this reason, writing good HTML is as much about structuring your tags as it is about choosing them.


## Whitespace and the Paragraph Tag: `<p>`

Whitespace in HTML is insignifcant. Extra spaces, tabs and line breaks are treated by web browsers as if they weren't there at all:

    <strong>This</strong>       is
            weirdly-formatted

    and ugly<em> but
    </em>            
      technically correct
                  code.

<blockquote><strong>This</strong> is weirdly-formatted and <em>ugly</em> but technically correct code.</blockquote>

Because HTML ignores whitespace, you have the freedom to format your code however you like (such as in the indented style shown above). But this creates problems for writers who need to write in paragraphs (all of them):

    This is <strong>one</strong> paragraph.

    This is supposed to be <strong>another</strong> paragraph.
  
<blockquote>This is <strong>one</strong> paragraph. This is supposed to be <strong>another</strong> paragraph.</blockquote>

Thankfully, there's a tag for that. Using the HTML **paragraph tag** `<p>`, we can get the expected behaviour:

    <p>
        This is <strong>one</strong> paragraph.
    </p>
    
    <p>
        This is supposed to be <strong>another</strong> paragraph.
    </p>

<blockquote><p>This is <strong>one</strong> paragraph.</p><p>This is supposed to be <strong>another</strong> paragraph.</p></blockquote>

Like most tags, the `<p>` tag has an opening tag and a closing tag: `</p>` It is a good practice to wrap all your paragraphs in `<p>` tags. They will not only get the proper amount of line-spacing, but also the correct fonts, colours, and formatting that your site has set up for its body copy.[^br]

Manually inserting `<p>` tags between paragraphs is one of the most tedious parts of writing prose in HTML. For that reason, coders and writers have come up with several ways to make the task easier: 

1. **WordPress** will automatically convert blank lines into paragraph breaks. If you know your code will be going into WordPress, simply ignore the `<p>` tag and press enter twice between paragraphs. Then copy your code into the WordPress text editor and submit your post. Other CMSes may also have an option to work this way.
2. [Markdown](http://bywordapp.com/markdown/guide.html) treats blank lines as paragraph breaks, just like WordPress. Many CMSes support Markdown either natively or with plugins.
3. Use the **Find** feature in your text editor to search for line breaks and replace them with new lines. Write your article with blank lines between paragraphs, and then use the [regular expression](http://regex.bastardsbook.com) feature in your editor to replace `\n` with `</p><p>`.

<figure>
    <img src="/public/img/regexp.png">
    <figcaption><span class="elegant">Replacing paragraph breaks with tags&mdash;</span>In <strong>TextWrangler</strong>, go to <strong>Search -> Find</strong> and set up the above search. Make sure 'Grep' is checked. Hit <strong>Replace All</strong>. The only manual change you will need to make is to add a single opening <code>&lt;p&gt;</code> tag before your first paragraph.</figcaption>
</figure>

Or alternatively, just get used to writing `<p>` a whole lot. It's not so bad. <span style="font-family: 'comic sans ms'"><strong>Better than manually fixing the layout in your coworker's Word document set in Comic Sans MS.</strong></span>

In Part 3, we'll learn the dozen or so HTML tags every writer should know.

[^fifo]: The opposite, found in certain programming languages, is called FIFO: first in first out.


[^nesting]: Just as browsers will forgive out-of-order nesting, they will also try to make sense of your code if you accidentally leave out closing tags. Depending on various factors, an unclosed tag will apply to the rest of the section or the rest of the *entire page*. This is probably not what you intended to happen. So nest properly, and close your tags.

[^br]: The **line break tag** &lt;br&gt; creates one or more manual line breaks between blocks of text. Using multiple &lt;br&gt; tags is a little like hitting 'enter' a bunch of times in Word. But &lt;br&gt; does not come with any of the formatting benefits of the &lt;p&gt; tag. It can cause ugly layout inconsistencies. Use it only as a last resort.