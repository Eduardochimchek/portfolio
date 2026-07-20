#!/usr/bin/env bash
set -euo pipefail

npm run build

mkdir -p publish
cp index.html robots.txt sitemap.xml publish/
cp -r assets publish/
cp README.md publish/

echo "Arquivos prontos em ./publish"
