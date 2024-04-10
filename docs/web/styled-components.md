- 主题
想要获得theme类型提示的话，需要重新声明
```ts

interface CustomTheme {
  primary-color: string
}

declare module 'styled-components' {
  interface DefaultTheme extends CustomTheme {}
}
```