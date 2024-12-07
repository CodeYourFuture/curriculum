#!/bin/bash

set -euo pipefail

npm install --legacy-peer-deps

# We set --baseURL on netlify so that any references to .Permalink end up pointing at deploy preview pages, rather than being hard-coded to point at the production URLs.
hugo --minify --environment production --baseURL $DEPLOY_PRIME_URL && npx pagefind --site "public"
