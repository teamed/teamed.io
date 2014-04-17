#!/bin/bash -e

SRC=$(pwd)
rm -rf _site
jekyll build

mkdir -p ~/.ssh
CLONE=$(mktemp -d -t blog-XXX)
if [ -z "${PASSWORD}" ]; then
  URL=$(git config --get remote.origin.url)
else
  URL=https://yegor256:${PASSWORD}@github.com/tpc2/teamed.io.git
fi
git clone "${URL}" "${CLONE}"
cd "${CLONE}"
git checkout gh-pages
rm -rf *
cp -R ${SRC}/_site/* .
rm README.md
rm deploy.sh

git add .
git config user.email "deploy@timed.io"
git config user.name "deploy.sh"
git commit -am "new site version deployed" --allow-empty
git push --quiet origin gh-pages

rm -rf "${CLONE}"
