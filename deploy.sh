set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/Jacobsmi/ToDoApp_Dist.git
git push -f origin master

cd -