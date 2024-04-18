#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider
npm run clean
npm run build

rm -rf ./docs/
cp -r ./public/ ./docs/
