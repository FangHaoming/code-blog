# MSW 的 Service Worker 原理

MSW（Mock Service Worker）是一个基于 Service Worker 技术的 HTTP 请求拦截工具，用于模拟后端 API 响应。

---

## 1. Service Worker 的基本概念

- **Service Worker** 是运行在浏览器后台的脚本，独立于网页主线程。
- 它能够拦截和处理网络请求，是 Progressive Web Apps (PWA) 的关键技术之一。
- 通过 **Fetch API**，Service Worker 可以捕获所有向服务器发出的 HTTP 请求并决定如何处理它们。

---

## 2. MSW 的核心原理

MSW 利用 Service Worker 的请求拦截功能，在开发环境中实现 API 的模拟。

### 工作流程

1. **Service Worker 注册**

- MSW 会在应用初始化时注册一个自定义的 Service Worker 文件。
- 这个文件由 MSW 预先生成，并包含用于拦截和处理 HTTP 请求的逻辑。

  ```javascript
  import { setupWorker } from 'msw';
  import { handlers } from './handlers';
  
  const worker = setupWorker(...handlers);
  worker.start();
  ```

2. **拦截网络请求**

- Service Worker 拦截应用发出的 HTTP 请求（包括 fetch 和 XHR 请求）。
- 它会检查这些请求是否匹配预定义的“请求处理器”（handlers）。

3. **匹配请求处理器**

- 请求处理器是开发者定义的规则，用于描述需要拦截的请求及其响应逻辑。
- MSW 会依次检查所有处理器，找到匹配的处理器并返回模拟的响应。

  ```js
  import { rest } from 'msw';

  export const handlers = [
    rest.get('/api/user', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ username: 'John Doe', age: 30 })
      );
    }),
  ];
  ```

4. **返回模拟响应**

- 如果请求匹配某个处理器，MSW 会返回一个虚拟响应。
- 如果没有匹配的处理器，Service Worker 会将请求转发给实际的服务器。

5. **在前端接收响应**

- 前端代码无法察觉请求是否被拦截，因为 MSW 模拟的响应与真实的服务器响应完全一致。

```js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    new Response(JSON.stringify({ message: 'Mock response' }), {
      headers: { 'Content-Type': 'application/json' },
    })
  );
});
```
