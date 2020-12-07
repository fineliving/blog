#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
# echo 'b.xugaoyi.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:coalyer/blog.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://${GITHUB_TOKEN}@github.com/coalyer/blog.git
  git config --global user.name "coalyer"
  git config --global user.email "liyang_qifengle@126.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:lynnjinjie/lynnjinjie.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages


# # deploy to coding
# # echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:coalyer/blog/blog.git
else
  codingUrl=https://access_token:8d335b4610a42f886349f5e268218eb2e3924380@e.coding.net/coalyer/blog/blog.git
fi
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
