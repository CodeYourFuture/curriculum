#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}" && cd .. && pwd)"

for dir in $(find "${REPO_ROOT}" -type d -maxdepth 1 -not -name .git -not -name tooling); do
  if [[ ! -e "${dir}/package.json" ]]; then
    continue
  fi
  cd "${dir}"
  echo >&2 "Trying to build in ${dir}"
  npm install
  npm run build:dev || { echo >&2 "Failed to build in ${dir}"; exit 1; }
done
