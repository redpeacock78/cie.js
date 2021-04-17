#!/usr/bin/env bash

# check this version is enable to release or not
yarn run can-npm-publish
[[ "${?}" == 1 ]] && exit 255

# get current version from package.json
TAG="$(grep version <package.json | cut -d ' ' -f 4 | tr -d ',' | tr -d \")"
declare TAG
echo "Add new tag to GitHub: ${TAG}"

# Add tag to GitHub
declare API_URL="https://api.github.com/repos/${REPO}/git/refs"
curl -s \
  -X POST "${API_URL}" \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -d @- <<EOS
{
  "ref": "refs/tags/${TAG}",
  "sha": "${COMMIT}"
}
EOS
