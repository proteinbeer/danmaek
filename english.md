---
layout: archive
title: "🇺🇸 English"
permalink: /english/
---

{% assign posts = site.categories.english %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}
