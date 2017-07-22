# 尝试使用TypeScript写node程序

## 准备

先安装nodejs与vscode  

```powershell
npm install -g typescript ts-node
```
> typescript 是用来转ts的，ts-node是用来直接执行ts代码的

## 项目构建
使用npm init在指定的目录中建好项目的目录。

在这里我建立了一个自己的项目目录结构:

```tree
testTS
|---data                  //爬到的文件目录
|---src                   //ts文件目录
|---package.json
|---tsconfig.json
```