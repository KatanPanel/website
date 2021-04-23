(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(89)),i=n.p+"assets/images/maestro-terminology-60795d8807730b227c2676300aba4921.png",s={id:"ecosystem",title:"Ecosystem",sidebar_position:2},c={unversionedId:"about/ecosystem",id:"about/ecosystem",isDocsHomePage:!1,title:"Ecosystem",description:"Before starting to use the Katan we need to understand how it is built.",source:"@site/docs/about/ecosystem.mdx",sourceDirName:"about",slug:"/about/ecosystem",permalink:"/katan-website/br/docs/about/ecosystem",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/about/ecosystem.mdx",version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1619144845,formattedLastUpdatedAt:"4/23/2021",sidebarPosition:2,frontMatter:{id:"ecosystem",title:"Ecosystem",sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/katan-website/br/docs/"},next:{title:"Integrated games support",permalink:"/katan-website/br/docs/about/supported-games"}},b=[{value:"Backend",id:"backend",children:[]},{value:"CLI",id:"cli",children:[]},{value:"Web-server",id:"web-server",children:[]},{value:"User Interface (UI)",id:"ui",children:[]},{value:"Orchestrator",id:"orchestrator",children:[]}],l={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before starting to use the Katan we need to understand how it is built."),Object(o.b)("p",null,"Katan has several different applications containing modules that have synergy with each other.\nThe main application is ",Object(o.b)("em",{parentName:"p"},"Backend"),", everyone else needs it to perform their proper functions."),Object(o.b)("p",null,"The other applications like UI are just ",Object(o.b)("strong",{parentName:"p"},"add-ons"),"."),Object(o.b)("h3",{id:"backend"},"Backend"),Object(o.b)("p",null,"This is our server, this is where all the information is available, the ",Object(o.b)("em",{parentName:"p"},"core"),".\nWe can call it ",Object(o.b)("em",{parentName:"p"},"Backend"),", it is responsible for handling\nof containers, accounts, positions and other things like plug-ins."),Object(o.b)("p",null,"It is the meeting point for all other applications."),Object(o.b)("h3",{id:"cli"},"CLI"),Object(o.b)("p",null,"The CLI is an active ",Object(o.b)("em",{parentName:"p"},"Backend")," module that makes it possible to interact with the ",Object(o.b)("em",{parentName:"p"},"Backend")," through\nfrom a command line interface, typing ",Object(o.b)("inlineCode",{parentName:"p"},"katan"),"."),Object(o.b)("p",null,"You can create servers, view statistics, create accounts and do many other things.\nIf you are used to CLI you can use it so you don't need to install the ",Object(o.b)("em",{parentName:"p"},"UI"),"."),Object(o.b)("h3",{id:"web-server"},"Web-server"),Object(o.b)("p",null,"While the ",Object(o.b)("em",{parentName:"p"},"Backend")," takes care of everything, the ",Object(o.b)("em",{parentName:"p"},"web-server")," takes this information and distributes\nit to whoever asks for it, is an HTTP and WebSocket server that transmits data from the\n",Object(o.b)("em",{parentName:"p"},"Backend")," to other applications."),Object(o.b)("p",null,"You can choose not to link it with the ",Object(o.b)("em",{parentName:"p"},"Backend")," to save resources."),Object(o.b)("h3",{id:"ui"},"User Interface (UI)"),Object(o.b)("p",null,"It's that site you saw on the Home Page, the client, where everything is beautiful and everything\nworks with the push of a button. It integrates directly with ",Object(o.b)("em",{parentName:"p"},"Backend")," and ",Object(o.b)("em",{parentName:"p"},"Web-server"),", we need\nboth for the ",Object(o.b)("em",{parentName:"p"},"UI")," to get information."),Object(o.b)("h3",{id:"orchestrator"},"Orchestrator"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Maestro")," for the most intimate, is the orchestrator of the Katan, with which he will be able\nto ",Object(o.b)("strong",{parentName:"p"},"scale")," his servers, distribute them in different locations, but still keep them in sync."),Object(o.b)("center",null,Object(o.b)("img",{src:i,style:{textAlign:"center"},alt:"Maestro Terminology",title:"Maestro Terminology"})),Object(o.b)("br",null),Object(o.b)("p",null,"It is thanks to him that you will not connect 100 servers on the same machine, ",Object(o.b)("del",{parentName:"p"},"at least i hope\nnot"),".\nIf you are looking for ",Object(o.b)("strong",{parentName:"p"},"business-grade/hosting solutions"),", this is the project you should keep an\neye on."))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(m,s(s({ref:t},b),{},{components:n})):a.a.createElement(m,s({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);