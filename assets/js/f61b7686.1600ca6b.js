"use strict";(self.webpackChunkkatan_docs=self.webpackChunkkatan_docs||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8373:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n.p+"assets/images/maestro-terminology-60795d8807730b227c2676300aba4921.png",s=["components"],c={id:"ecosystem",title:"Ecosystem",sidebar_position:2},l=void 0,p={unversionedId:"getting-started/ecosystem",id:"getting-started/ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"Before starting to use the Katan we need to understand how it is built.",source:"@site/docs/getting-started/ecosystem.mdx",sourceDirName:"getting-started",slug:"/getting-started/ecosystem",permalink:"/docs/getting-started/ecosystem",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/getting-started/ecosystem.mdx",tags:[],version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1631147583,formattedLastUpdatedAt:"9/9/2021",sidebarPosition:2,frontMatter:{id:"ecosystem",title:"Ecosystem",sidebar_position:2},sidebar:"docs",previous:{title:"Using Docker Compose",permalink:"/docs/installation/docker-compose"},next:{title:"Integrated games support",permalink:"/docs/getting-started/supported-games"}},u=[{value:"Backend",id:"backend",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Web-server",id:"web-server",children:[]},{value:"User Interface (UI)",id:"ui",children:[]},{value:"Orchestrator",id:"orchestrator",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before starting to use the Katan we need to understand how it is built."),(0,o.kt)("p",null,"Katan has several different applications containing modules that have synergy with each other.\nThe main application is ",(0,o.kt)("em",{parentName:"p"},"Backend"),", everyone else needs it to perform their proper functions."),(0,o.kt)("p",null,"The other applications like UI are just ",(0,o.kt)("strong",{parentName:"p"},"add-ons"),"."),(0,o.kt)("h3",{id:"backend"},"Backend"),(0,o.kt)("p",null,"This is our server, this is where all the information is available, the ",(0,o.kt)("em",{parentName:"p"},"core"),".\nWe can call it ",(0,o.kt)("em",{parentName:"p"},"Backend"),", it is responsible for handling\nof containers, accounts, positions and other things like plug-ins."),(0,o.kt)("p",null,"It is the meeting point for all other applications."),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("p",null,"The CLI is an active ",(0,o.kt)("em",{parentName:"p"},"Backend")," module that makes it possible to interact with the ",(0,o.kt)("em",{parentName:"p"},"Backend")," through\nfrom a command line interface, typing ",(0,o.kt)("inlineCode",{parentName:"p"},"katan"),"."),(0,o.kt)("p",null,"You can create servers, view statistics, create accounts and do many other things.\nIf you are used to CLI you can use it so you don't need to install the ",(0,o.kt)("em",{parentName:"p"},"UI"),"."),(0,o.kt)("h3",{id:"web-server"},"Web-server"),(0,o.kt)("p",null,"While the ",(0,o.kt)("em",{parentName:"p"},"Backend")," takes care of everything, the ",(0,o.kt)("em",{parentName:"p"},"web-server")," takes this information and distributes\nit to whoever asks for it, is an HTTP and WebSocket server that transmits data from the\n",(0,o.kt)("em",{parentName:"p"},"Backend")," to other applications."),(0,o.kt)("p",null,"You can choose not to link it with the ",(0,o.kt)("em",{parentName:"p"},"Backend")," to save resources."),(0,o.kt)("h3",{id:"ui"},"User Interface (UI)"),(0,o.kt)("p",null,"It's that site you saw on the Home Page, the client, where everything is beautiful and everything\nworks with the push of a button. It integrates directly with ",(0,o.kt)("em",{parentName:"p"},"Backend")," and ",(0,o.kt)("em",{parentName:"p"},"Web-server"),", we need\nboth for the ",(0,o.kt)("em",{parentName:"p"},"UI")," to get information."),(0,o.kt)("h3",{id:"orchestrator"},"Orchestrator"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Maestro")," for the most intimate, is the orchestrator of the Katan, with which he will be able\nto ",(0,o.kt)("strong",{parentName:"p"},"scale")," his servers, distribute them in different locations, but still keep them in sync."),(0,o.kt)("center",null,(0,o.kt)("img",{src:i,style:{textAlign:"center"},alt:"Maestro Terminology",title:"Maestro Terminology"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"It is thanks to him that you will not connect 100 servers on the same machine, ",(0,o.kt)("del",{parentName:"p"},"at least i hope\nnot"),".\nIf you are looking for ",(0,o.kt)("strong",{parentName:"p"},"business-grade/hosting solutions"),", this is the project you should keep an\neye on."))}m.isMDXComponent=!0}}]);