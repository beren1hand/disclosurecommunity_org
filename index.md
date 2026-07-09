---
layout: default
title: Home
---

<section class="hero container">
  <img class="hero-image"
       src="{{ '/assets/images/shell-alpert-1952.png' | relative_url }}"
       alt="A photograph taken by U.S. Coast Guard photographer Shell R. Alpert on 16 July 1952, showing four bright objects in V formation over the Salem, Massachusetts Air Station.">
  <p class="hero-image-caption">Salem, Massachusetts &middot; 16 July 1952</p>

  <p class="hero-lede">
    <span class="hero-emoji" aria-hidden="true">👽</span>
    An emerging community in Columbus, Ohio,
    caring for each other as the disclosure moment unfolds.
  </p>
</section>

<section class="container" style="text-align:center; max-width: 38rem; margin-bottom: 3rem;">
  <p>
    These are strange times, and we suspect they are going to keep getting
    stranger. We meet to think out loud together, listen well, and make
    sure nobody has to sit with this alone. You are welcome here whether
    you have followed UAP news for decades or only stumbled onto it last
    week.
  </p>
  <p>
    <a href="{{ '/about/' | relative_url }}">What we&rsquo;re up to &rarr;</a>
  </p>
</section>

<section class="home-sections container">

  <div class="home-card">
    <p class="home-card-meta">Next gathering</p>
    <div id="home-next">
    {% assign upcoming = site.events | where_exp: "e", "e.date >= site.time" | sort: "date" %}
    {% if upcoming.size > 0 %}
      {% assign next = upcoming.first %}
      <h2><a href="{{ next.url | relative_url }}">{{ next.title }}</a></h2>
      <p class="home-card-meta">
        {{ next.date | date: "%A, %B %-d" }}{% if next.time %} &middot; {{ next.time }}{% endif %}
        {% if next.location %}<br>{{ next.location }}{% endif %}
      </p>
      {% if next.excerpt %}<p>{{ next.excerpt | strip_html | truncate: 200 }}</p>{% endif %}
      <a class="home-card-more" href="{{ next.url | relative_url }}">Details &rarr;</a>
    {% else %}
      <p>No gatherings on the calendar just yet. Check back soon, or
      <a href="{{ '/contact/' | relative_url }}">drop us a note</a> and we&rsquo;ll
      let you know when the next one is set.</p>
    {% endif %}
    </div>
  </div>

  <div class="home-card">
    <p class="home-card-meta">From the blog</p>
    {% if site.posts.size > 0 %}
      {% assign latest = site.posts.first %}
      <h2><a href="{{ latest.url | relative_url }}">{{ latest.title }}</a></h2>
      <p class="home-card-meta">{{ latest.date | date: "%B %-d, %Y" }}</p>
      <p>{{ latest.excerpt | strip_html | truncate: 220 }}</p>
      <a class="home-card-more" href="{{ latest.url | relative_url }}">Keep reading &rarr;</a>
    {% else %}
      <p>Posts are on their way. In the meantime, you can read the
      <a href="{{ '/assets/open-letter.pdf' | relative_url }}">Visible College open letter</a>
      that informs how we approach this conversation.</p>
    {% endif %}
  </div>

</section>
