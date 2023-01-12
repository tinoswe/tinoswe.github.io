---
layout: default
title: Home
---
{{ site.description }}

### Latest posts

{% for post in site.posts limit:2 %}
  <li>{{ post.date | date: "%Y-%m-%d %H:%M" }}: <a href="{{ base_url }}{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
