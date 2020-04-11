if [ -z "$(git status --porcelain)" ]; then 
  # Working directory clean
  echo 'clean'
else 
  # Uncommitted changes
  echo 'New Update!'
  git config --local user.email "mios426@gmail.com"
  git config --local user.name "miaopeng"
  npm run readme
  git add .
  git commit -m 'auto update'
  npm version patch
  git push origin master --follow-tags
  git checkout release
  git merge master
  git push origin release
fi
