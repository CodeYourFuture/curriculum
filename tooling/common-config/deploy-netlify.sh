#!/bin/bash

set -euo pipefail

npm install --legacy-peer-deps

URL_TO_USE="${URL}"
if [[ "${PULL_REQUEST}" == "true" ]]; then
  URL_TO_USE="${DEPLOY_PRIME_URL}"
fi

# We set --baseURL on netlify so that any references to .Permalink end up pointing at deploy preview pages, rather than being hard-coded to point at the production URLs.
hugo --minify --environment production --baseURL "${URL_TO_USE}" && npx pagefind --site "public"
