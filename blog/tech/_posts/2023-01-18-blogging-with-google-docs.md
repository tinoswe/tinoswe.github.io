---
layout: post
title: Why Google Docs is optimal for blogging
author: tinoSwe
date: 2023-01-18 18:04
tags: ["Google Docs"]
---

Using Google Docs is a nice alternative to Obsidian for making markdown posts but it requires some extra work.

## What I want to do

Ideally I would like to be able to post from anywhere, mobile included. Who doesn't want that after all? 
As a big lover of Google tools my mind quickly turned to Google Docs for achieving this.

## From Google Doc to markdown

Jekyll automatically processes markdown posts in GitHub. So... I need to convert a Google Doc to markdown first and push it to GitHub afterwards. It turns out that Google Apps Scripts allow me to implement my own conversion.

## Exploring Google Apps Scripts
I am now into exploring the Google Apps Scripts infrastrucutre to customize and extend Google Docs menus with my own markdown converter. A GitHub action will then allow me to automatically push the markdown 

