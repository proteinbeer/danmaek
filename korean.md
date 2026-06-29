---
layout: default
title: 한국어
permalink: /korean/
---
<h1>🇰🇷 한국어 글</h1>
{% assign korean_posts = site.categories.korean %}
{% for post in korean_posts %}
<div class="post">
  <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
  <p class="meta">{{ post.date | date: "%Y-%m-%d" }}</p>
  <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
</div>
{% endfor %}
