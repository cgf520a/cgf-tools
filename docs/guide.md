---
title: 指南
---

## 介绍

- **ProMax组件** 用于高效业务开发
- **Store** 用于简单高性能状态管理

## 安装

### ProMax组件

```bash
pnpm add @cgf-tools/pro-max-components
```

### Store

```bash
pnpm add @cgf-tools/store
```

## 问题反馈

如果在使用过程中发现任何问题、或者有改善建议，欢迎在 GitHub Issues 进行反馈：<a href="https://github.com/cgf520a/cgf-tools/issues"  target="__blank">https://github.com/cgf520a/cgf-tools/issues</a>

或加入讨论群：
<a href="https://qr.dingtalk.com/action/joingroup?code=v1,k1,/lxUgEk0/E2X2ATksb7zOmO91wWo3bL3Z7NWW193I6Q=&_dt_no_comment=1&origin=11?" target="__blank">
邀请你加入钉钉群聊@cgf-tools使用交流群，点击进入查看详情
</a>

## 贡献指南

1. fork项目：首先需要fork这个项目, 进入项目页面, 点击右上角的Fork按钮

```bash
git clone git@github.com:你的用户名/cgf-tools.git
```

2. 获取原项目代码

```bash
git remote add upstream https://github.com/cgf520a/cgf-tools.git
git pull upstream master # 获取最新代码
```

3. 创建分支

```bash
git checkout -b branch1
# 在分支上开发后，提交代码
git commit -a -m "new commit"
```

4. 合并修改

```bash
git checkout master
git pull upstream master # 拉取最新代码，多人维护时代码已变更
git checkout branch1 # 切回原分支
git rebase master # 合并master的commit，有冲突需要解决冲突
git push origin branch1 #提交代码到自己fork的项目
```

5. **Pull Request** ：提交 Pull Request 在你的 github 代码仓库页面切换到 branches 页面点击 branch1 分支后点击 New pull request 按钮, 添加相关注释后提交；

6. 代码 review 后合并。
