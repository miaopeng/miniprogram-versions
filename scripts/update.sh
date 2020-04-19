echo "::warning ::Updating..."

git config --local user.email "mios426@gmail.com"
git config --local user.name "miaopeng"
npm run readme
git add .
git commit -m "auto update"

echo Bump npm version...
npm version patch

echo Push master branch...
git push origin master --follow-tags
git branch -a

echo Push release branch...
git checkout release
git merge master
git push origin release

echo The End