# Vibe Coding 流程

- 设计

使用 [pencil.dev](https://www.pencil.dev/)，让 AI 帮你生成设计稿。可以在Cursor里装个Pencil插件

- 开发

使用[规范驱动开发 skill](https://github.com/FangHaoming/agent-skills/tree/main/coding/sdd)，也就是 SDD（Specification-Driven Development）。

先和 AI 确认要实现的功能，再让 AI 根据需求完成代码。  
例如，可以直接在对话框中输入  

`/sdd-riper-one 帮我做一个任务管理工具`

- 部署

可以参考 [Vercel Skills 文档](https://vercel.com/docs/agent-resources/skills?utm_source=chatgpt.com) 将项目部署到 Vercel。

例如，可以直接在对话框中输入：

`/deploy-to-vercel 把当前项目部署到 vercel`