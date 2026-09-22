#!/bin/bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "$0")" && pwd)"
preview_bundler="$project_dir/vendor/local-gems/gems/bundler-2.4.22/exe/bundle"
preview_gemfile="$project_dir/.bundle/Gemfile.preview"

if [[ -f "$preview_bundler" && -f "$preview_gemfile" ]]; then
  exec env \
    BUNDLE_GEMFILE="$preview_gemfile" \
    GEM_HOME="$project_dir/vendor/local-gems" \
    GEM_PATH="$project_dir/vendor/local-gems:/Library/Ruby/Gems/2.6.0" \
    /usr/bin/ruby "$preview_bundler" exec jekyll serve "$@"
fi

exec bundle exec jekyll serve --livereload "$@"
