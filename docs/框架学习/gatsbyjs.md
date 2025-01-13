# gatsby learning note

## Start

[Creating a Source Plugin  了解Schema、Data Layer](https://www.gatsbyjs.com/docs/tutorial/creating-a-source-plugin/)

## Inspiration

## trouble shoot

- 在gatsby monorepo中如果使用了多个styled-components实例，会导致在构建后引入的其他模块（如common的layout）样式并不是静态的，而是在浏览器动态加载的，会导致页面闪烁。
