---
layout: default
title: Blog
---
{% for post in site.blogposts %}
- {{ post.date | date_to_string }}: [{{ post.title }}]({{ post.url }}) by {{ post.author }}
{% endfor %}
