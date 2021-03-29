(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{67:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return s})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(8),c=(n(0),n(96)),o={id:"info",title:"katan server info"},i={unversionedId:"apps/backend/cli-reference/server/info",id:"apps/backend/cli-reference/server/info",isDocsHomePage:!1,title:"katan server info",description:"Description",source:"@site/docs/apps/backend/cli-reference/server/info.md",slug:"/apps/backend/cli-reference/server/info",permalink:"/katan-website/docs/apps/backend/cli-reference/server/info",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/apps/backend/cli-reference/server/info.md",version:"current",sidebar:"docs",previous:{title:"katan server create",permalink:"/katan-website/docs/apps/backend/cli-reference/server/create"},next:{title:"katan server ls",permalink:"/katan-website/docs/apps/backend/cli-reference/server/list"}},s=[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]}],p={toc:s};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Displays information about a server."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-console"},"katan server info [OPTIONS] SERVER NAME [COMMAND] [ARG...]\n")))}l.isMDXComponent=!0},96:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=t,b=u["".concat(o,".").concat(d)]||u[d]||f[d]||c;return n?a.a.createElement(b,i(i({ref:r},p),{},{components:n})):a.a.createElement(b,i({ref:r},p))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);