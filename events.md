---
layout: page
title: Events
subtitle: Gatherings, talks, and quiet conversations
permalink: /events/
---

We meet in person in Columbus, with occasional online sessions for
folks farther afield. Most gatherings are small, low-pressure, and
discussion-based. If a particular event has a different format
&mdash; a talk, a book club, a film viewing &mdash; the listing will say so.

{% if site.google_calendar_id and site.google_calendar_id != "" %}
<div class="gcal-embed">
  <iframe
    src="https://calendar.google.com/calendar/embed?src={{ site.google_calendar_id | url_encode }}&ctz=America%2FNew_York&mode=AGENDA&showPrint=0&showCalendars=0&showTabs=0&showNav=1&showTz=0"
    title="Disclosure Community calendar"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
{% endif %}

## Upcoming

{% assign upcoming = site.events | where_exp: "e", "e.date >= site.time" | sort: "date" %}
{% if upcoming.size > 0 %}
<ul class="entry-list">
  {% for event in upcoming %}
    <li>
      <p class="entry-meta">
        <time datetime="{{ event.date | date_to_xmlschema }}">{{ event.date | date: "%A, %B %-d, %Y" }}</time>
        {% if event.time %} &middot; {{ event.time }}{% endif %}
        {% if event.location %} &middot; {{ event.location }}{% endif %}
      </p>
      <h2 class="entry-title"><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h2>
      {% if event.excerpt %}<p class="entry-excerpt">{{ event.excerpt | strip_html | truncate: 240 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="empty-state">No gatherings on the calendar at the moment.
Check back soon &mdash; or <a href="{{ '/contact/' | relative_url }}">let us know</a>
you&rsquo;d like a heads up when the next one is set.</p>
{% endif %}

## Past

{% assign past = site.events | where_exp: "e", "e.date < site.time" | sort: "date" | reverse %}
{% if past.size > 0 %}
<ul class="entry-list">
  {% for event in past %}
    <li>
      <p class="entry-meta">
        <time datetime="{{ event.date | date_to_xmlschema }}">{{ event.date | date: "%B %-d, %Y" }}</time>
        {% if event.location %} &middot; {{ event.location }}{% endif %}
      </p>
      <h2 class="entry-title"><a href="{{ event.url | relative_url }}">{{ event.title }}</a></h2>
    </li>
  {% endfor %}
</ul>
{% else %}
<p class="empty-state" style="margin-top:0.5rem;">&mdash;</p>
{% endif %}
