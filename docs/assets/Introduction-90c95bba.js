import{r as x,M as g}from"./index-d35cf7db.js";import{u as m}from"./index-7d606a44.js";import"./iframe-540f3d94.js";import"../sb-preview/runtime.js";import"./index-33740e76.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=x,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,b=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function c(t,r,a){var n,i={},o=null,l=null;a!==void 0&&(o=""+a),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)j.call(r,n)&&!k.hasOwnProperty(n)&&(i[n]=r[n]);if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return{$$typeof:f,type:t,key:o,ref:l,props:i,_owner:b.current}}s.Fragment=u;s.jsx=c;s.jsxs=c;d.exports=s;var e=d.exports;const y=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,w=""+new URL("comments-f15a6837.svg",import.meta.url).href,_=""+new URL("direction-94a9917f.svg",import.meta.url).href,v=""+new URL("repo-fb4ece47.svg",import.meta.url).href;function p(t){const r=Object.assign({h1:"h1",p:"p",strong:"strong"},m(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"QLD Design system/Introduction"}),`
`,e.jsx("style",{children:`
    body {
      font-family: "Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important;
    }
    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,e.jsx(r.h1,{id:"qld-design-system",children:"QLD Design system"}),`
`,e.jsxs(r.p,{children:["This ",e.jsx(r.strong,{children:"could"})," be a extended repository as it is component focused (intended to be forked/and inherit upstream changes to configuration)."]}),`
`,e.jsx("br",{}),`
`,e.jsxs("div",{className:"link-list",children:[e.jsxs("a",{className:"link-item",href:"#",children:[e.jsx("img",{src:v,alt:"repo"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Introduction"}),`
How does it work`]})})]}),e.jsxs("a",{className:"link-item",href:"#",children:[e.jsx("img",{src:_,alt:"direction"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"In-depth guides"}),`
CMS and web applications (React, Angular, Vue)`]})})]}),e.jsxs("a",{className:"link-item",href:"#",children:[e.jsx("img",{src:y,alt:"code"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),e.jsxs("a",{className:"link-item",href:"#",children:[e.jsx("img",{src:w,alt:"comments"}),e.jsx("span",{children:e.jsxs(r.p,{children:[e.jsx("strong",{children:"Getting help"}),`
Chat with maintainers and the community`]})})]})]})]})}function U(t={}){const{wrapper:r}=Object.assign({},m(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(p,t)})):p(t)}export{U as default};
//# sourceMappingURL=Introduction-90c95bba.js.map
