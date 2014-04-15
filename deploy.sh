#!/bin/bash -e

if [ "${PASSWORD}" -eq "" ]; then
    echo "PASSWORD environment variable is not specified"
    exit -1
fi

SRC=$(pwd)
rm -rf _site
jekyll build

CLONE=$(mktemp -d -t blog-XXX)
git clone https://yegor256:${PASSWORD}@github.com/tpc2/teamed.io.git ${CLONE}
cd ${CLONE}
git checkout gh-pages
rm -rf *
cp -R ${SRC}/_site/* .
rm README.md
rm deploy.sh

git add .
git config --global user.email "deploy@timed.io"
git config --global user.name "deploy.sh"
git commit -am "new site version"
git push origin gh-pages

rm -rf ${CLONE}
