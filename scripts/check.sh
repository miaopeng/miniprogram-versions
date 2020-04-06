if [ -z "$(git status --porcelain)" ]; then 
  # Working directory clean
  echo 'clean'
else 
  # Uncommitted changes
  echo 'Uncommitted changes'
fi
