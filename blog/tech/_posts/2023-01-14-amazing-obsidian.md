---
layout: post
author: tinoSwe
title: Amazing Obsidian
date: 2023-01-14 17:37
tags: Obsidian
categories: tech
excerpt: "Some insights on Obsidian: an open source cross platform markdown editor."
---
# What is Obsidian?

Obsidian is an amazing open source lightweight cross platform markdown editor. It's an evolved note taking app that can do many things. In my case I use it to quickly write posts directly in Markdown.

# Push the post to GitHub and you're done

Once the post is ready I just push it to the GitHub repo and Jekyll processes it automatically.

# A small issue

I noticed that there is a small issue when pushing to GitHub from Obsidian text written from my Android mobile. No problem from Obsidian on Desktop, though. The issue has to do with the post header that for some reason is not recognized as valid by GitHub Jekyll. I couldn't spot any issue using diff on GitHub. So... I should debug this a bit more probably.
