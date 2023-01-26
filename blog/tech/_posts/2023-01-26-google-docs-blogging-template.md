---
layout: post
author: tinoSwe
title: A Google Docs template for blogging
date: 2023-01-26 18:47
tags: ["Google Docs", “Google Scripts”, “Markdown”, “GitHub”]
category: tech
excerpt_separator : <!--more-->
---


 How to use Google Docs for blogging with Jekyll on GitHub Pages? Not straightforward but cool and doable using workflows and automation. Let’s start from a Google Docs template. 
<!--more-->

My goal is to be able to post here at any time with any device. My mobile is therefore my reference device, as it’s always where I am. As a lover of almost all Google products I heavily use Google Drive in my life. So.. why not using Google Docs for blogging? It would produce a nice side-effect by default, namely a backup of all my posts in the cloud. 

Google Drive and GitHub
=======================

The goal here is to automate a workflow that goes from writing a post with Google Docs to push a Jekyll-compatible markdown file to my blog main repository on GitHub. I say "automate" cause I want my Google Doc article published automatically, without doing anything manual task like: 

1. Exporting the doc to an appropriate markdown file

2. Download the markdown file to my pc

3. Open the blog repo with VS Code 

4. Copy the .md file in the right folder

5. Push the file remotely on GitHub 

This would take too much time if I had to do it for every single post. 

Where to start?
===============

After the exploration of a bunch of automation solutions (GitHub actions, Zapier and surrogates) I ended up looking into Google Scripts (I told you I love Google products, right?). I was able to create my own custom markdown exporter and have the functionality available in any Google Doc with a few lines of JavaScript code.There’s a lot of extremely useful material out there and I should give credit to the right people at some point. The starting point of all this is going to be a template to write my posts. 

Why a Google Doc template?
--------------------------

I need a template because the article has to be converted into a Jekyll compatible markdown. Which has a header and some fields that I need to populate in order for Jekyll to process and render the post properly on the webpage.

Having a template allows me to implement my own markdown converter. As simple as that.

What I have now
===============

I can write simple posts like this one and I can convert them to markdown from the native Google Docs menu. Google Scripts is very powerful and I am just exploring Google APIs for the moment. The rest of the work is still manual but all steps are defined.

Automation workflows are worth my time.

