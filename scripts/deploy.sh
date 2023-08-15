#!/usr/bin/env bash

echo "for change network plz edit defaultNetwork in hardhat.config.js"
echo "deploy contract "

hardhat run ./scripts/deploy.js
