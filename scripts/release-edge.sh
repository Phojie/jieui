#!/bin/bash

set -xe

# Restore all git changes
git restore -s@ -SW  -- packages

# Bump versions to edge
pnpm jiti ./scripts/bump-edge

echo "Bumping versions to edge"

# Update token
if [[ ! -z ${NODE_AUTH_TOKEN} ]] ; then
  echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" >> ~/.npmrc
  echo "registry=https://registry.npmjs.org/" >> ~/.npmrc
  echo "always-auth=true" >> ~/.npmrc
  npm whoami
fi

# List package directories and store them in an array
package_dirs=()
for p in packages/* ; do
  package_dirs+=("$p")
done

# Release packages in reverse order
for ((i=${#package_dirs[@]}-1; i>=0; i--)) ; do
  p="${package_dirs[i]}"
  pushd "$p"
  echo "Publishing $p"
  cp ../../LICENSE .
  cp ../../README.md .
  pnpm publish --access public --no-git-checks
  popd
done
