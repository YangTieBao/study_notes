# git命令
1.`git init` 初始化本地仓库
2.`git add 文件名` 添加文件到缓冲区
  `git add .` 添加所有文件到缓存区（若文件修改，执行该命令，修改过的文件会重新添加到缓存区，没有修改过的文件，则不会）
3.`git status` 查看 git 此时的提交状态
4.`git commit -m '注释'` 提交到本地仓库
5.`git log` 查看提交记录
6.`git reset --hard HEAD^` 回退上一个版本（有几个尖角号，就回退几个版本）
  `git reset --hard HEAD~1` 回退上一个版本（数字是己，就回退几个版本）
7.`git reflog` 操作记录
8.`git reset --hard 6位版本号` 直接回退到该版本号的版本
9.`git remote add origin https://gitee.com/YTB2024/test01.git` 推送至git的远程仓库
10.`git push -u origin master` 若第一次推送成功，则以后推送文件直接简写成这个
  `git push origin master`
11.`git clone 远程仓库的地址` 拿到远程仓库的代码
12.`git pull origin master` 从远程仓库同步最新的代码（老的文件会被新的文件覆盖）

13.`git branch -a` 查看所有的分支
14.`git checkout -b aaa` 创建新的分支aaa
15.`git checkout aaa` 切换到aaa分支
16.`git push origin aaa` 推送aaa分支到远程仓库aaa分支
17.`git push origin master:aaa` 推送master 到远程的aaa分支
18.`git branch -d ****` 删除一个分支

19.`git config user.name` 查看本地已登录的账号
20.`git config user.email` 查看本地已登录的账号绑定的邮箱
21.`git config --global user.name "用户名"` 切换本地登录的账号
22.`git config --global user.email "邮箱"` 切换本地登录的账号绑定的邮箱

# git远程仓库
1.自己配置的远程仓库
2.公共的远程仓库，GitHub，gitee，gitlab，gitchina...(可以设置位私有或公有)