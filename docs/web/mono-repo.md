### why monorepo ?
- 统一工程配置、代码风格（lint、husky等）
- 代码共享
- 


### QA
- package.json中的workspaces

  是一个包含文件路径的数组，在安装依赖的时候，会查找每一个工作区，将这些工作区的的依赖连接到项目根目录下的node_modules中


参考
> https://docs.npmjs.com/cli/v10/using-npm/workspaces
>
> [monorepo好处](https://juejin.cn/post/7215886869199896637)