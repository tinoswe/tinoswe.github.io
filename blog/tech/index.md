---
layout: default
title: tech
---
<div class="ms-2 me-2">

    <div class="d-flex flex-row mb-2">
        <img src="{{ site.baseurl }}/assets/icons/bookmark.svg">
        <div class="ms-1">
            <small>category: {{ page.title }}</small>
        </div>
    </div>

    <ul>
        {% for post in site.posts %}
            {% if post.category == page.title %}
                <li><a href="{{ base_url }}{{ post.url }}">{{ post.title }}</a></li>
            {% endif %}
        {% endfor %}
    </ul>


</div>