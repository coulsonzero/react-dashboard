# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd build

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
# echo 'dashboard.coulsonzero.cn' > CNAME
echo 'dashboard.coulsonzero.top' > CNAME

git init
git add -A
git commit -m 'deploy react-dashboard'

# 如果发布到https://<USERNAME>.github.io
# git push -f git@github.com:coulsonzero/react-dashboard.git
# 如果发布到https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:coulsonzero/react-dashboard.git master:gh-pages

cd -

rm -rf build



