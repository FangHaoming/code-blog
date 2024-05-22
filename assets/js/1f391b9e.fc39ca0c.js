"use strict";(self.webpackChunkcode_blog=self.webpackChunkcode_blog||[]).push([[204],{6728:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(1504);var i=t(5456),l=t(5756),r=t(5864),a=t(9012),s=t(2824),c=t(5124),o=t(1528);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(7624);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:f,unlisted:h},assets:v}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,j=v.image??f.image;return(0,u.jsx)(l.cr,{className:(0,i.c)(x??r.W.wrapper.mdxPages,r.W.page.mdxPage),children:(0,u.jsxs)(a.c,{children:[(0,u.jsx)(l.U7,{title:t,description:m,keywords:g,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.c)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.c)("col",!p&&"col--8"),children:[h&&(0,u.jsx)(o.c,{}),(0,u.jsx)("article",{children:(0,u.jsx)(s.c,{children:(0,u.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.c,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},5124:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var i=t(5456),l=t(3088);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=t(7624);const s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,i.c)(r.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(l.c,{...t,linkClassName:s,linkActiveClassName:c})})}},3088:(e,n,t)=>{t.d(n,{c:()=>v});var i=t(1504),l=t(1824);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):i.push(l)})),i}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>s(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.y)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:a}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let l=n;l<=t;l+=1)i.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),o=c(s,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var u=t(6016),m=t(7624);function f(e){let{toc:n,className:t,linkClassName:i,isChild:l}=e;return n.length?(0,m.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:u,...f}=e;const v=(0,l.y)(),g=o??v.tableOfContents.minHeadingLevel,x=u??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,i.useMemo)((()=>a({toc:r(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[s,c,g,x])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:s,...f})}},1528:(e,n,t)=>{t.d(n,{c:()=>f});t(1504);var i=t(5456),l=t(4357),r=t(6952),a=t(7624);function s(){return(0,a.jsx)(l.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,a.jsx)(l.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(r.c,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5864),u=t(304);function m(e){let{className:n}=e;return(0,a.jsx)(u.c,{type:"caution",title:(0,a.jsx)(s,{}),className:(0,i.c)(n,d.W.common.unlistedBanner),children:(0,a.jsx)(c,{})})}function f(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsx)(m,{...e})]})}},4216:(e,n,t)=>{t.d(n,{c:()=>u});var i={};t.r(i),t.d(i,{Col:()=>c,Cols:()=>o,Highlight:()=>s,Text:()=>d});var l=t(8648),r=t(304),a=(t(1504),t(7624));function s(e){let{children:n,color:t}=e;return(0,a.jsx)("span",{style:{backgroundColor:t??"var(--ifm-navbar-search-input-background-color)",borderRadius:"2px",padding:"0.2rem"},children:n})}const c=e=>{let{children:n}=e;return(0,a.jsx)("div",{style:{minWidth:1,padding:10,display:"block",lineHeight:1.72,outline:"none",flex:1,border:"1px solid #E7E9E8",borderRadius:6},children:n})},o=e=>{let{children:n}=e;return(0,a.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",lineHeight:"inherit",outline:"none",gap:10,margin:"20px auto"},children:n})},d=e=>{let{children:n,color:t}=e;return(0,a.jsx)("span",{style:{color:t??"var(--ifm-color-primary)"},children:n})},u={Admonition:r.c,...l.c,...i}}}]);