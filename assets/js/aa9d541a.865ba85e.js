(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(8),a=(n(0),n(89)),c={id:"docker-compose",title:"Using Docker Compose",sidebar_position:3},i={unversionedId:"installation/docker-compose",id:"installation/docker-compose",isDocsHomePage:!1,title:"Using Docker Compose",description:"Docker Compose is one of the possible forms of installations using Docker.",source:"@site/docs/installation/docker-compose.md",sourceDirName:"installation",slug:"/installation/docker-compose",permalink:"/katan-website/docs/installation/docker-compose",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/installation/docker-compose.md",version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1619144845,formattedLastUpdatedAt:"4/23/2021",sidebarPosition:3,frontMatter:{id:"docker-compose",title:"Using Docker Compose",sidebar_position:3},sidebar:"docs",previous:{title:"Using Docker",permalink:"/katan-website/docs/installation/docker"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation steps",id:"installation-steps",children:[{value:"Step 1: Compose File",id:"step-1-compose-file",children:[]},{value:"Step 2: Build",id:"step-2-build",children:[]},{value:"Step 3: Health check",id:"step-3-health-check",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," is one of the possible forms of installations using Docker."),Object(a.b)("p",null,"Compose is a tool for defining and running multi-container Docker applications and can be used\nto install Katan."),Object(a.b)("h2",{id:"requirements"},"Requirements"),Object(a.b)("p",null,"Docker Compose relies on Docker Engine for any meaningful work, so make sure you\nhave Docker Engine installed either locally or remote, depending on your setup, so you'll need\nto have installed:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"))),Object(a.b)("p",null,"See ",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"https://docs.docker.com/compose/install/")," for\nmore details."),Object(a.b)("h2",{id:"installation-steps"},"Installation steps"),Object(a.b)("p",null,"To install using Docker Compose, we need a file with the definition of its services.\nIf you don't know what the compose file is, see its\n",Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/compose-file/"},"reference"),"."),Object(a.b)("h3",{id:"step-1-compose-file"},"Step 1: Compose File"),Object(a.b)("p",null,"Wherever you want, create a compose file."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:"reference",reference:!0},"https://github.com/KatanPanel/Katan/blob/dev/docker-compose.yml\n")),Object(a.b)("h3",{id:"step-2-build"},"Step 2: Build"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/up/"},"docker-compose up")," is a Docker Compose command that we need to use to build what was declared in our compose file, the Katan server."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"--detach")," flag makes the server start in the background."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --detach\n")),Object(a.b)("h3",{id:"step-3-health-check"},"Step 3: Health check"),Object(a.b)("p",null,"After performing the second step, wait a few seconds and visit your machine's\naddress and Katan's port to see if it is running."),Object(a.b)("p",null,"Example, you are running locally:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"http://localhost:8080\n")),Object(a.b)("p",null,"If the installation was successful, you will see a:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"Hello from Katan!\n")))}p.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.a.createElement(b,i(i({ref:t},l),{},{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);