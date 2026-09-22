# Disclosure Community website

This repository is the Jekyll/GitHub Pages site for
`https://disclosurecommunity.org`. Grant Eckhart is the primary collaborator
and site maintainer.

## Working workflow

- Work directly in this repository and preserve unrelated user changes.
- Start the local preview with `./serve.sh --host 127.0.0.1 --port 4000`.
- Preview the site at `http://127.0.0.1:4000/`. Jekyll automatically rebuilds
  after ordinary content and style edits; refresh the browser to see them.
- Restart the preview after `_config.yml` changes.
- Verify meaningful visual changes in the browser at desktop and mobile widths.
- Run a Jekyll build and `git diff --check` before committing.
- Push only when Grant explicitly requests publication. The deployment branch is
  `main`, the remote is `origin`, and GitHub Pages deploys pushes to `main`.

## Site map

- Homepage: `index.md`
- Main pages: `about.md`, `leadership.md`, `events.md`, `blog.md`, `contact.md`
- Site identity, email addresses, navigation, collections: `_config.yml`
- Shared templates: `_layouts/` and `_includes/`
- Theme and responsive styling: `assets/css/main.scss`
- Images: `assets/images/`
- Blog posts: `_posts/`
- Events: `_events/`

## Current organization facts

- The regular gathering is the second Monday of every month, 6:30–8:30 PM,
  at Jacob's Porch, 45 E. 13th Ave., Columbus, Ohio 43201. Free parking is
  available.
- The public information address is `admin@disclosurecommunity.org`.
- Co-leads: Grant Eckhart, Patrick Dunn, and Steven Brown.
- Event Coordinator: Marti Houghton.
- Communications: Adam Messmer.
- Grant is pastor at Jacob's Porch, the Ecumenical Christian College Ministry
  at Ohio State, and has served as an ordained minister in the Lutheran
  tradition for over 20 years.

## Design direction

Keep the site lightweight, welcoming, open-minded, curious, humane, and
non-dogmatic. Preserve the dark night-sky palette, warm cream text, restrained
gold accents, readable typography, and responsive layout. The current homepage
logo is `assets/images/disclosure-community-logo.jpeg`; the historical Shell
Alpert photograph remains available in `assets/images/shell-alpert-1952.png`.
