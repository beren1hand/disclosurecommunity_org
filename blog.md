---
layout: page
title: Blog
subtitle: Notes, reflections, and occasional dispatches
permalink: /blog/
---

A slow-moving notebook from the three of us, and friends who feel like
writing something down. Mostly: small thoughts about what we&rsquo;re
reading, what we&rsquo;re hearing at gatherings, and what the unfolding
disclosure moment seems to be asking of us.

{% if site.posts.size > 0 %}
<ul class="entry-list">
  {% for post in site.posts %}
    <li>
      <p class="entry-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
        {% if post.author %} &middot; {{ post.author }}{% endif %}
      </p>
      <h2 class="entry-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="entry-excerpt">{{ post.excerpt | strip_html | truncate: 260 }}</p>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="empty-state">No posts yet. They are coming.</p>
{% endif %}
