if [ -z "$(git status --porcelain)" ]; then 
  # Working directory clean
  echo 'clean'
else 
  # Uncommitted changes
  echo 'New Update!'
  yarn readme
  git config --local user.email "mios426@gmail.com"
  git config --local user.name "miaopeng"
  git add .
  git commit -m 'auto update'
  git push
fi
