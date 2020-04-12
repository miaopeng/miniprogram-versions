if [ -z "$(git status --porcelain)" ]; then 
  # Working directory clean
  echo "::set-output name=result::clean"

else 
  # Uncommitted changes
  echo "::set-output name=result::new_update"
  git config --local user.email "mios426@gmail.com"
  git config --local user.name "miaopeng"
  npm run readme
  git add .
  git commit -m 'auto update'
  npm version patch
  git push origin master --follow-tags
  git branch -a
  git checkout release
  git merge master
  git push origin release
  echo "::set-output name=result::update_success"
fi
