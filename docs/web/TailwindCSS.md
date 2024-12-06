
# Tailwind.css

## Question

- 如何自定义样式

## Warning

- [子选择器的优先级大于在子元素上的原子css](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children)

- 自定义类是在使用的时候动态生成，如`font-[500]`, 如果是在渲染的时候动态去用的话会找不到对应类，如`font-[${weight}]`，对于动态类最好用style内联样式

## 用CSS常见场景

- 父元素 对 子元素 的样式控制
- 子元素 对 父元素 的样式控制（has选择器）
- 同级元素（sibling）/ 后继元素（subsequent）的样式控制
- 响应式（移动端）

  | 特性              | `sm`                                      | `max-sm`                                  |
  |-------------------|-------------------------------------------| -------------------------------------------|
  | **触发条件**      | 当屏幕宽度 **大于等于 640px** 时生效        | 当屏幕宽度 **小于或等于 640px** 时生  效     |
  | **设计理念**      | Mobile-First（移动优先）                  | Desktop-First（桌面优 先）                 |
  | **常见用法**      | 用于为更大的屏幕添加样式                  | 用于为较小的屏幕覆盖默认样  式              |
  | **优先级**        | 优先级低（默认覆盖较小屏幕）               | 优先级高（覆盖默认样 式）                   |

## 工具

- [Heroicons](https://heroicons.com/)：免费开源的图标库，完美兼容 Tailwind。
- [Headless UI](https://headlessui.com/)：无样式的可访问组件。
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file)：class自动按照tailwind排序规则排序
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)：vscode插件
