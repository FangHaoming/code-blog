"use strict";(self.webpackChunkcode_blog=self.webpackChunkcode_blog||[]).push([[7784],{2874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=t(4848),s=t(8453);const r={},c=void 0,l={permalink:"/code-blog/blog/\u8bb0\u4e00\u6b21nginx\u8f6c\u53d1\u4ee3\u7406https\u62a5502",editUrl:"https://github.com/FangHaoming/code-blog/tree/master/blog/\u8bb0\u4e00\u6b21nginx\u8f6c\u53d1\u4ee3\u7406https\u62a5502.md",source:"@site/blog/\u8bb0\u4e00\u6b21nginx\u8f6c\u53d1\u4ee3\u7406https\u62a5502.md",title:"\u8bb0\u4e00\u6b21nginx\u8f6c\u53d1\u4ee3\u7406https\u62a5502",description:"web \u670d\u52a1\u5668\u53ef\u4ee5\u627f\u8f7d\u591a\u4e2a\u57df\u540d\u3002\u8fd9\u88ab\u79f0\u4e3a\u865a\u62df\u4e3b\u673a\uff08Virtual Host\uff09\u3002\u901a\u8fc7\u914d\u7f6e\u4e0d\u540c\u7684\u865a\u62df\u4e3b\u673a\uff0c\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u53ef\u4ee5\u4e3a\u591a\u4e2a\u57df\u540d\u63d0\u4f9b\u670d\u52a1\u3002\u6bcf\u4e2a\u865a\u62df\u4e3b\u673a\u90fd\u4f7f\u7528\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u57df\u540d\u3001\u76ee\u5f55\u7ed3\u6784\u3001\u8bbf\u95ee\u6743\u9650\u7b49\u3002\u5f53\u7528\u6237\u8bbf\u95ee\u67d0\u4e2a\u57df\u540d\u65f6\uff0cweb \u670d\u52a1\u5668\u4f1a\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u7684\u8bbe\u7f6e\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u5bf9\u5e94\u7684\u865a\u62df\u4e3b\u673a\u4e0a\u3002\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u901a\u8fc7\u4e00\u4e2a\u670d\u52a1\u5668\u4e3a\u591a\u4e2a\u57df\u540d\u63d0\u4f9b\u670d\u52a1\u7684\u529f\u80fd\u3002",date:"2024-08-19T07:28:27.000Z",formattedDate:"2024\u5e748\u670819\u65e5",tags:[],readingTime:2.11,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"\u79c1\u6709\u5316\u90e8\u7f72CMS+\u670d\u52a1\u7aef\u6e32\u67d3\u5b9e\u8df5",permalink:"/code-blog/blog/\u79c1\u6709\u5316\u90e8\u7f72CMS+\u670d\u52a1\u7aef\u6e32\u67d3\u5b9e\u8df5"}},a={authorsImageUrls:[]},i=[];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"web \u670d\u52a1\u5668\u53ef\u4ee5\u627f\u8f7d\u591a\u4e2a\u57df\u540d\u3002\u8fd9\u88ab\u79f0\u4e3a\u865a\u62df\u4e3b\u673a\uff08Virtual Host\uff09\u3002\u901a\u8fc7\u914d\u7f6e\u4e0d\u540c\u7684\u865a\u62df\u4e3b\u673a\uff0c\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u53ef\u4ee5\u4e3a\u591a\u4e2a\u57df\u540d\u63d0\u4f9b\u670d\u52a1\u3002\u6bcf\u4e2a\u865a\u62df\u4e3b\u673a\u90fd\u4f7f\u7528\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e0d\u540c\u7684\u57df\u540d\u3001\u76ee\u5f55\u7ed3\u6784\u3001\u8bbf\u95ee\u6743\u9650\u7b49\u3002\u5f53\u7528\u6237\u8bbf\u95ee\u67d0\u4e2a\u57df\u540d\u65f6\uff0cweb \u670d\u52a1\u5668\u4f1a\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u7684\u8bbe\u7f6e\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u5bf9\u5e94\u7684\u865a\u62df\u4e3b\u673a\u4e0a\u3002\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u901a\u8fc7\u4e00\u4e2a\u670d\u52a1\u5668\u4e3a\u591a\u4e2a\u57df\u540d\u63d0\u4f9b\u670d\u52a1\u7684\u529f\u80fd\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u591a\u4e2a\u7f51\u7ad9\u6258\u7ba1\u5728\u4e00\u53f0\u670d\u52a1\u5668\u4e0a\u5e76\u5171\u4eab\u4e00\u4e2aIP\u5730\u5740\uff0c\u5e76\u4e14\u6bcf\u4e2a\u7f51\u7ad9\u90fd\u6709\u81ea\u5df1\u7684SSL\u8bc1\u4e66\uff0c\u5728\u5ba2\u6237\u7aef\u8bbe\u5907\u5c1d\u8bd5\u5b89\u5168\u5730\u8fde\u63a5\u5230\u5176\u4e2d\u4e00\u4e2a\u7f51\u7ad9\u65f6\uff0c\u670d\u52a1\u5668\u53ef\u80fd\u4e0d\u77e5\u9053\u663e\u793a\u54ea\u4e2aSSL\u8bc1\u4e66\u3002\u8fd9\u662f\u56e0\u4e3aSSL/TLS\u63e1\u624b\u53d1\u751f\u5728\u5ba2\u6237\u7aef\u8bbe\u5907\u901a\u8fc7HTTP\u6307\u793a\u8fde\u63a5\u5230\u67d0\u4e2a\u7f51\u7ad9\u4e4b\u524d\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u670d\u52a1\u5668\u540d\u79f0\u6307\u793a (SNI) \u65e8\u5728\u89e3\u51b3\u6b64\u95ee\u9898\u3002SNI \u662f TLS \u534f\u8bae\uff08\u4ee5\u524d\u79f0\u4e3a SSL \u534f\u8bae\uff09\u7684\u6269\u5c55\uff0c\u8be5\u534f\u8bae\u5728 HTTPS \u4e2d\u4f7f\u7528\u3002\u5b83\u5305\u542b\u5728 TLS/SSL \u63e1\u624b\u6d41\u7a0b\u4e2d\uff0c\u4ee5\u786e\u4fdd\u5ba2\u6237\u7aef\u8bbe\u5907\u80fd\u591f\u770b\u5230\u4ed6\u4eec\u5c1d\u8bd5\u8bbf\u95ee\u7684\u7f51\u7ad9\u7684\u6b63\u786e SSL \u8bc1\u4e66\u3002\u8be5\u6269\u5c55\u4f7f\u5f97\u53ef\u4ee5\u5728 TLS \u63e1\u624b\u671f\u95f4\u6307\u5b9a\u7f51\u7ad9\u7684\u4e3b\u673a\u540d\u6216\u57df\u540d \uff0c\u800c\u4e0d\u662f\u5728\u63e1\u624b\u4e4b\u540e\u6253\u5f00 HTTP \u8fde\u63a5\u65f6\u6307\u5b9a\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"location  /api {\n    proxy_ssl_server_name on; #\u5c06\u6e90\u57df\u540d\u6307\u5b9a\u4e3a example.com\n    proxy_pass https://example.com;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u53c2\u8003"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://kebingzao.com/2022/08/16/nginx-502/",children:"\u8bb0\u4e00\u6b21 nginx \u8f6c\u53d1\u4ee3\u7406 https \u51fa\u73b0 502 \u7684\u60c5\u51b5"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_ssl_server_name",children:"proxy_ssl_server_name"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.cloudflare.com/zh-cn/learning/ssl/what-is-sni/",children:"\u4ec0\u4e48\u662fSNI\uff1fTLS\u670d\u52a1\u5668\u540d\u79f0\u6307\u793a\u5982\u4f55\u5de5\u4f5c"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var o=t(6540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);