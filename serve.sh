#!/bin/bash
# Serve the site locally at http://127.0.0.1:4000
# Uses bundler when the github-pages gems are installed (macOS dev),
# otherwise falls back to system Jekyll (e.g. sandboxed Linux).
if bundle check >/dev/null 2>&1; then
  bundle exec jekyll serve --livereload "$@"
else
  echo "(bundler gems unavailable — using system jekyll $(jekyll -v 2>/dev/null || echo 'MISSING: apt install jekyll'))"
  JEKYLL_NO_BUNDLER_REQUIRE=true jekyll serve --disable-disk-cache "$@"
fi
