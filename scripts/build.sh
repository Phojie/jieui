#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

export NODE_OPTIONS=--max_old_space_size=16384

# dont deploy if the branch starts with renovate/
if [[ "$VERCEL_GIT_COMMIT_REF" == renovate/* ]]; then
 
  
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
fi
