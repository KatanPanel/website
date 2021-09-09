"use strict";(self.webpackChunkkatan_docs=self.webpackChunkkatan_docs||[]).push([[434],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"docker",title:"Using Docker",sidebar_position:2},l=void 0,c={unversionedId:"installation/docker",id:"installation/docker",isDocsHomePage:!1,title:"Using Docker",description:"The recommended way to install Katan is using",source:"@site/docs/installation/docker.md",sourceDirName:"installation",slug:"/installation/docker",permalink:"/br/docs/installation/docker",editUrl:"https://github.com/KatanPanel/katan-website/edit/main/docs/installation/docker.md",tags:[],version:"current",lastUpdatedBy:"Natan Vieira",lastUpdatedAt:1619144845,formattedLastUpdatedAt:"23/04/2021",sidebarPosition:2,frontMatter:{id:"docker",title:"Using Docker",sidebar_position:2},sidebar:"docs",previous:{title:"Vis\xe3o Geral",permalink:"/br/docs/"},next:{title:"Using Docker Compose",permalink:"/br/docs/installation/docker-compose"}},p=[{value:"Installation steps",id:"installation-steps",children:[]},{value:"Post-installation",id:"post-installation",children:[{value:"Configure Docker to start on boot",id:"configure-docker-to-start-on-boot",children:[]},{value:"Swap capabilities",id:"swap-capabilities",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The recommended way to install Katan is using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),"."),(0,r.kt)("p",null,"First, you need to have Docker installed on your machine and a system capable of running Docker\ncontainers.\nPlease follow Docker\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"installation\ninstructions"),"."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure your Docker version is ",(0,r.kt)("strong",{parentName:"p"},"v1.40 or higher"),", which is the minimum version supported by\nKatan."))),(0,r.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"post-installation"},"Post-installation"),(0,r.kt)("h3",{id:"configure-docker-to-start-on-boot"},"Configure Docker to start on boot"),(0,r.kt)("p",null,"Linux distributions like RHEL, CentOS, Fedora, Debian, Ubuntu 16.04 and higher use ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," to\nmanage which services start when the system boots."),(0,r.kt)("p",null,"To automatically start Docker and Containerd on boots, use the commands below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable docker\nsystemctl enable containerd\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"On Debian and Ubuntu, the Docker service is configured to start on boot by default."))),(0,r.kt)("h3",{id:"swap-capabilities"},"Swap capabilities"),(0,r.kt)("p",null,"Katan provides ways to control how much memory, or CPU a server can use.\nMany of these features require your kernel to support Linux capabilities."),(0,r.kt)("p",null,"To check for support, you can use the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/info/"},(0,r.kt)("inlineCode",{parentName:"a"},"docker info"))," command.  If a\ncapability is disabled in your kernel, you may see a warning at the end of the output like the\nfollowing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WARNING: No swap limit support\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"WARNING: Your kernel does not support swap limit capabilities\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This warning does not occur on RPM-based systems, which enable these capabilities by default."))),(0,r.kt)("p",null,"You can enable these capabilities on Ubuntu or Debian by following these instructions:"),(0,r.kt)("h4",{id:"step-1-log-in-as-sudo"},"Step 1: Log in as sudo"),(0,r.kt)("p",null,"Log into the Ubuntu or Debian host as a user with sudo privileges."),(0,r.kt)("h4",{id:"step-2-edit-grub"},"Step 2: Edit GRUB"),(0,r.kt)("p",null,"Add or edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"GRUB_CMDLINE_LINUX")," line in the grub file to add the following two key-value\npairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:'title="/etc/default/grub"',title:'"/etc/default/grub"'},'GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"\n')),(0,r.kt)("h4",{id:"step-3-update-grub"},"Step 3: Update GRUB"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo update-grub\n")),(0,r.kt)("p",null,"The changes take effect when the system is rebooted."))}u.isMDXComponent=!0}}]);