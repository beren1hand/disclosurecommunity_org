# disclosurecommunity.org

A small, lightweight Jekyll site for the Disclosure Community in
Columbus, Ohio. Deployed via GitHub Pages.

## Local development

On the configured project machine, start the preview with:

```bash
./serve.sh --host 127.0.0.1 --port 4000
```

Then open `http://127.0.0.1:4000/`. The server rebuilds after content and
style changes; refresh the browser to see them. Restart the server after
editing `_config.yml`.

On a new machine, install Ruby 3.x and Bundler first, then run
`bundle install`. The same `serve.sh` command will use the standard bundle.

## Routine editing workflow

1. Start the local preview with `./serve.sh --host 127.0.0.1 --port 4000`.
2. Edit the relevant Markdown, configuration, template, or stylesheet file.
3. Review the result locally on desktop and mobile.
4. Check the Git diff and run a Jekyll build.
5. Commit the intended files and push `main` to `origin` when the changes are
   ready to publish. GitHub Pages deploys the push automatically.

## Adding a blog post

Create a file under `_posts/` named `YYYY-MM-DD-slug.md` with this
front matter:

```markdown
---
title: "A short, evocative title"
author: "Your Name"
date: 2026-06-12
excerpt: "One or two sentences. This is what shows on /blog and on the home page."
---

Post body in Markdown. The first paragraph is also used as an
excerpt if `excerpt:` is omitted.
```

## Adding an event

Copy `_events/EXAMPLE-first-gathering.md` to a new file in `_events/`,
e.g. `_events/2026-06-15-introductions.md`. Edit the front matter and
body, then remove (or set to `true`) the `published:` field so it
shows on the site.

Front matter fields:

- `title:` event title
- `date:` `YYYY-MM-DD` (required — used for sort and upcoming/past split)
- `time:` free-form, e.g. `"7:00 PM"`
- `location:` venue / address
- `excerpt:` one-sentence summary for the events page and home card

## Editing pages

The top-level pages live as Markdown files in the repo root:
`index.md`, `about.md`, `leadership.md`, `events.md`, `blog.md`,
`contact.md`. Edit Markdown directly.

Site-wide identity (title, tagline, email, navigation) lives in
`_config.yml`.

## Google Calendar embed

The events page is wired to optionally embed a public Google Calendar.
Once one exists, paste its public ID into `_config.yml` under
`google_calendar_id:` and the agenda view will appear above the
file-based event list.

## Deployment

Pushes to `main` are built and deployed automatically by GitHub Pages.
The `CNAME` file points the build at `disclosurecommunity.org`. If
you're not using a custom domain, delete `CNAME` and set
`url:`/`baseurl:` in `_config.yml` accordingly.

## Layout overview

```
_config.yml             site identity, navigation, plugins
_layouts/               page/post/event/default templates
_includes/              head, header, footer
assets/css/main.scss    all styles (night-sky theme)
assets/images/          favicon, homepage logo, and historical photos
_posts/                 blog posts
_events/                event collection
*.md                    top-level pages
```
