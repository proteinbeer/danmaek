---
layout: default
title: English
permalink: /english/
---
<h1>🇺🇸 English Posts</h1>
{% assign english_posts = site.categories.english %}
{% for post in english_posts %}
<div class="post">
  <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
  <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
  <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
</div>
{% endfor %}
