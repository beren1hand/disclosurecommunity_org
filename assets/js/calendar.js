/* ------------------------------------------------------------------
 * Google Calendar → native event cards
 * Reads window.GCAL = { id, key } (set in head.html from _config.yml).
 * Progressive enhancement: if anything fails, the file-based event
 * lists remain untouched.
 * ------------------------------------------------------------------ */
(function () {
  "use strict";

  if (!window.GCAL || !window.GCAL.id || !window.GCAL.key) return;

  var TZ = "America/New_York";
  var MAX_EVENTS = 10;

  var endpoint =
    "https://www.googleapis.com/calendar/v3/calendars/" +
    encodeURIComponent(window.GCAL.id) +
    "/events?key=" + encodeURIComponent(window.GCAL.key) +
    "&singleEvents=true&orderBy=startTime" +
    "&maxResults=" + MAX_EVENTS +
    "&timeMin=" + encodeURIComponent(new Date().toISOString()) +
    "&fields=items(id,summary,description,location,htmlLink,start,end)";

  /* ---------- formatting helpers ---------- */

  function fmt(date, opts) {
    opts.timeZone = TZ;
    return new Intl.DateTimeFormat("en-US", opts).format(date);
  }

  function parseStart(ev) {
    // Timed events have start.dateTime; all-day events have start.date.
    return ev.start.dateTime
      ? new Date(ev.start.dateTime)
      : new Date(ev.start.date + "T12:00:00"); // noon avoids TZ date-shift
  }

  function whenText(ev) {
    var start = parseStart(ev);
    var line = fmt(start, { weekday: "long", month: "long", day: "numeric" });
    if (ev.start.dateTime) {
      line += " \u00b7 " + fmt(start, { hour: "numeric", minute: "2-digit" });
      if (ev.end && ev.end.dateTime) {
        var end = new Date(ev.end.dateTime);
        line += "\u2013" + fmt(end, { hour: "numeric", minute: "2-digit" });
      }
    }
    return line;
  }

  function plainText(html) {
    // Event descriptions may contain HTML; render as text only.
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || "";
    return text.replace(/\s+/g, " ").trim();
  }

  function truncate(s, n) {
    if (s.length <= n) return s;
    return s.slice(0, n).replace(/\s+\S*$/, "") + "\u2026";
  }

  /* ---------- card builder (DOM API only — no injected HTML) ---------- */

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildCard(ev) {
    var start = parseStart(ev);

    var card = el("li", "gcal-card");

    var date = el("div", "gcal-date");
    date.setAttribute("aria-hidden", "true");
    date.appendChild(el("span", "gcal-month", fmt(start, { month: "short" })));
    date.appendChild(el("span", "gcal-day", fmt(start, { day: "numeric" })));
    card.appendChild(date);

    var body = el("div", "gcal-body");
    body.appendChild(el("p", "gcal-when", whenText(ev)));
    body.appendChild(el("h3", "gcal-title", ev.summary || "Gathering"));
    if (ev.location) body.appendChild(el("p", "gcal-where", ev.location));
    if (ev.description) {
      var desc = plainText(ev.description);
      if (desc) body.appendChild(el("p", "gcal-desc", truncate(desc, 240)));
    }
    if (ev.htmlLink) {
      var add = el("a", "gcal-add", "Add to my calendar \u2192");
      add.href = ev.htmlLink;
      add.target = "_blank";
      add.rel = "noopener";
      body.appendChild(add);
    }
    card.appendChild(body);
    return card;
  }

  /* ---------- page hooks ---------- */

  function hydrateEventsPage(events) {
    var live = document.getElementById("gcal-upcoming");
    if (!live) return;
    var list = el("ul", "gcal-cards");
    events.forEach(function (ev) { list.appendChild(buildCard(ev)); });
    live.appendChild(list);
    live.hidden = false;
    var fileList = document.getElementById("file-upcoming");
    if (fileList) fileList.hidden = true;
  }

  function hydrateHomeCard(events) {
    var slot = document.getElementById("home-next");
    if (!slot || events.length === 0) return;
    var ev = events[0];
    var start = parseStart(ev);

    slot.textContent = "";
    var h2 = el("h2", null, ev.summary || "Gathering");
    slot.appendChild(h2);
    var meta = el("p", "home-card-meta", whenText(ev));
    slot.appendChild(meta);
    if (ev.location) slot.appendChild(el("p", "home-card-meta", ev.location));
    if (ev.description) {
      var desc = plainText(ev.description);
      if (desc) slot.appendChild(el("p", null, truncate(desc, 200)));
    }
    var more = el("a", "home-card-more", "All events \u2192");
    more.href = (window.SITE_BASEURL || "") + "/events/";
    slot.appendChild(more);
  }

  /* ---------- fetch ---------- */

  fetch(endpoint)
    .then(function (r) {
      if (!r.ok) throw new Error("Calendar HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      var events = (data.items || []).filter(function (ev) {
        return ev.start; // defensive
      });
      if (events.length === 0) return;
      hydrateEventsPage(events);
      hydrateHomeCard(events);
    })
    .catch(function () {
      /* Fail silently — file-based lists remain as fallback. */
    });
})();
