---
layout: default
title: Home
---

<section class="hero container">
  <img class="hero-image"
       src="{{ '/assets/images/disclosure-community-logo.jpeg' | relative_url }}"
       alt="Disclosure Community Columbus, Ohio logo.">

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

<section class="gathering-notice container" aria-labelledby="regular-gathering-title">
  <p class="gathering-notice-label">Regular gathering</p>
  <h2 id="regular-gathering-title">Second Monday of every month</h2>
  <p class="gathering-notice-details">
    <strong>6:30&ndash;8:30 PM</strong><br>
    Jacob&rsquo;s Porch<br>
    45 E. 13th Ave., Columbus, Ohio 43201
  </p>
  <p class="gathering-notice-parking">Free parking is available.</p>
  <p class="gathering-notice-contact">
    For more information, email
    <a href="mailto:{{ site.admin_email }}">{{ site.admin_email }}</a>.
  </p>
</section>

<section class="home-sections container">

  <div class="home-card">
    <p class="home-card-meta">Next gathering</p>
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
