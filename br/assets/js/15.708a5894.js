/*! For license information please see 15.708a5894.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(3),r=n(0),o=n.n(r),s=n(88),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(24).a,theme:i};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var h=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},f=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(i))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=u({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,i=[],c=[i];s>-1;){for(;(o=a[s]++)<r[s];){var l=void 0,u=t[s],d=n[s][o];if("string"==typeof d?(u=s>0?u:["plain"],l=d):(u=f(u,d.type),d.alias&&(u=f(u,d.alias)),l=d.content),"string"==typeof l){var m=l.split(h),b=m.length;i.push({types:u,content:m[0]});for(var v=1;v<b;v++)p(i),c.push(i=[]),i.push({types:u,content:m[v]})}else s++,t.push(u),n.push(l),a.push(0),r.push(l.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return p(i),c}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);var v=n(140),y=n.n(v),g={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=n(97),O=n(87),k=function(){var e=Object(O.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,n=e.theme||g,a=e.darkTheme||n;return t?a:n},E=n(90),C=n(71),x=n.n(C),w=/{([\d,-]+)}/,N=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function T(e){var t=e.children,n=e.className,i=e.metastring,l=e.title,u=Object(O.useThemeConfig)().prism,h=Object(r.useState)(!1),p=h[0],f=h[1],d=Object(r.useState)(!1),m=d[0],v=d[1];Object(r.useEffect)((function(){v(!0)}),[]);var g=Object(O.parseCodeBlockTitle)(i)||l,j=Object(r.useRef)(null),C=[],T=k(),S=Array.isArray(t)?t.join(""):t;if(i&&w.test(i)){var P=i.match(w)[1];C=y()(P).filter((function(e){return e>0}))}var _=n&&n.replace(/language-/,"");!_&&u.defaultLanguage&&(_=u.defaultLanguage);var A=S.replace(/\n$/,"");if(0===C.length&&void 0!==_){for(var I,R="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return N(["js","jsBlock"]);case"jsx":case"tsx":return N(["js","jsBlock","jsx"]);case"html":return N(["js","jsBlock","html"]);case"python":case"py":return N(["python"]);default:return N()}}(_),B=S.replace(/\n$/,"").split("\n"),D=0;D<B.length;){var M=D+1,U=B[D].match(L);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=M+",";break;case"highlight-start":I=M;break;case"highlight-end":R+=I+"-"+(M-1)+","}B.splice(D,1)}else D+=1}C=y()(R),A=B.join("\n")}var q=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(A),f(!0),setTimeout((function(){return f(!1)}),2e3)};return o.a.createElement(b,Object(a.a)({},c,{key:String(m),theme:T,code:A,language:_}),(function(e){var t,n=e.className,r=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:x.a.codeBlockContainer},g&&o.a.createElement("div",{style:r,className:x.a.codeBlockTitle},g),o.a.createElement("div",{className:Object(s.a)(x.a.codeBlockContent,_)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=g,t))},o.a.createElement("div",{className:x.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return C.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:j,type:"button","aria-label":Object(E.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(x.a.copyButton),onClick:q},p?o.a.createElement(E.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(E.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},131:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=a(n(0)),o=a(n(132)),s=a(n(114));e.exports=(s.default,e=>e.reference?r.default.createElement(o.default,Object.assign({},e)):r.default.createElement(s.default,Object.assign({},e)))},132:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseReference=void 0;const i=n(133),c=o(n(0)),l=s(n(114)),u={code:"loading...",error:null,loading:null},h={textAlign:"right",fontSize:".8em"};function p(e){const t=e.slice(e.indexOf("https"),-1),[n,a]=t.split("#"),r=globalThis||{};r.URL||(r.URL=i.URL);const[o,s,c,l,...u]=new r.URL(n).pathname.split("/").slice(1),[h,p]=a?a.split("-").map((e=>parseInt(e.slice(1),10)-1)):[0,1/0];return{url:`https://raw.githubusercontent.com/${o}/${s}/${l}/${u.join("/")}`,fromLine:h,toLine:p,title:u.join("/")}}function f(e,{type:t,value:n}){switch(t){case"reset":return u;case"loading":return{...e,loading:!0};case"loaded":return{...e,code:n,loading:!1};case"error":return{...e,error:n,loading:!1};default:return e}}t.parseReference=p,t.default=function(e){const[t,n]=c.useReducer(f,u),a=p(e.children);!1!==t.loading&&async function({url:e,fromLine:t,toLine:n},a){let r;try{r=await fetch(e)}catch(i){return a({type:"error",value:i})}if(200!==r.status)return a({type:"error",value:await r.text()});const o=(await r.text()).split("\n").slice(t,(n||t)+1),s=o.reduce(((e,t)=>{if(0===t.length)return e;const n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0);a({type:"loaded",value:o.map((e=>e.slice(s))).join("\n")})}(a,n);const r={...e,metastring:` title="${a.title}"`,children:u.code};return c.default.createElement("div",null,c.default.createElement(l.default,Object.assign({},r),t.code),c.default.createElement("div",{style:h},"See full example on ",c.default.createElement("a",{href:e.children,target:"_blank"},"GitHub")))}},133:function(e,t,n){"use strict";var a=n(134),r=n(136);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=g,t.resolve=function(e,t){return g(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?g(e,!1,!0).resolveObject(t):t},t.format=function(e){r.isString(e)&&(e=g(e));return e instanceof o?e.format():o.prototype.format.call(e)},t.Url=o;var s=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,c=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(l),h=["%","/","?",";","#"].concat(u),p=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,d=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,m={javascript:!0,"javascript:":!0},b={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=n(137);function g(e,t,n){if(e&&r.isObject(e)&&e instanceof o)return e;var a=new o;return a.parse(e,t,n),a}o.prototype.parse=function(e,t,n){if(!r.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var o=e.indexOf("?"),i=-1!==o&&o<e.indexOf("#")?"?":"#",l=e.split(i);l[0]=l[0].replace(/\\/g,"/");var g=e=l.join(i);if(g=g.trim(),!n&&1===e.split("#").length){var j=c.exec(g);if(j)return this.path=g,this.href=g,this.pathname=j[1],j[2]?(this.search=j[2],this.query=t?y.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var O=s.exec(g);if(O){var k=(O=O[0]).toLowerCase();this.protocol=k,g=g.substr(O.length)}if(n||O||g.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===g.substr(0,2);!E||O&&b[O]||(g=g.substr(2),this.slashes=!0)}if(!b[O]&&(E||O&&!v[O])){for(var C,x,w=-1,N=0;N<p.length;N++){-1!==(T=g.indexOf(p[N]))&&(-1===w||T<w)&&(w=T)}-1!==(x=-1===w?g.lastIndexOf("@"):g.lastIndexOf("@",w))&&(C=g.slice(0,x),g=g.slice(x+1),this.auth=decodeURIComponent(C)),w=-1;for(N=0;N<h.length;N++){var T;-1!==(T=g.indexOf(h[N]))&&(-1===w||T<w)&&(w=T)}-1===w&&(w=g.length),this.host=g.slice(0,w),g=g.slice(w),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var P=this.hostname.split(/\./),_=(N=0,P.length);N<_;N++){var A=P[N];if(A&&!A.match(f)){for(var I="",R=0,L=A.length;R<L;R++)A.charCodeAt(R)>127?I+="x":I+=A[R];if(!I.match(f)){var B=P.slice(0,N),D=P.slice(N+1),M=A.match(d);M&&(B.push(M[1]),D.unshift(M[2])),D.length&&(g="/"+D.join(".")+g),this.hostname=B.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=a.toASCII(this.hostname));var U=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+U,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==g[0]&&(g="/"+g))}if(!m[k])for(N=0,_=u.length;N<_;N++){var F=u[N];if(-1!==g.indexOf(F)){var $=encodeURIComponent(F);$===F&&($=escape(F)),g=g.split(F).join($)}}var z=g.indexOf("#");-1!==z&&(this.hash=g.substr(z),g=g.slice(0,z));var H=g.indexOf("?");if(-1!==H?(this.search=g.substr(H),this.query=g.substr(H+1),t&&(this.query=y.parse(this.query)),g=g.slice(0,H)):t&&(this.search="",this.query={}),g&&(this.pathname=g),v[k]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){U=this.pathname||"";var W=this.search||"";this.path=U+W}return this.href=this.format(),this},o.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",a=this.hash||"",o=!1,s="";this.host?o=e+this.host:this.hostname&&(o=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(s=y.stringify(this.query));var i=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==o?(o="//"+(o||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):o||(o=""),a&&"#"!==a.charAt(0)&&(a="#"+a),i&&"?"!==i.charAt(0)&&(i="?"+i),t+o+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(i=i.replace("#","%23"))+a},o.prototype.resolve=function(e){return this.resolveObject(g(e,!1,!0)).format()},o.prototype.resolveObject=function(e){if(r.isString(e)){var t=new o;t.parse(e,!1,!0),e=t}for(var n=new o,a=Object.keys(this),s=0;s<a.length;s++){var i=a[s];n[i]=this[i]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var c=Object.keys(e),l=0;l<c.length;l++){var u=c[l];"protocol"!==u&&(n[u]=e[u])}return v[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!v[e.protocol]){for(var h=Object.keys(e),p=0;p<h.length;p++){var f=h[p];n[f]=e[f]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||b[e.protocol])n.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),n.pathname=d.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var m=n.pathname||"",y=n.search||"";n.path=m+y}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var g=n.pathname&&"/"===n.pathname.charAt(0),j=e.host||e.pathname&&"/"===e.pathname.charAt(0),O=j||g||n.host&&e.pathname,k=O,E=n.pathname&&n.pathname.split("/")||[],C=(d=e.pathname&&e.pathname.split("/")||[],n.protocol&&!v[n.protocol]);if(C&&(n.hostname="",n.port=null,n.host&&(""===E[0]?E[0]=n.host:E.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),O=O&&(""===d[0]||""===E[0])),j)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,E=d;else if(d.length)E||(E=[]),E.pop(),E=E.concat(d),n.search=e.search,n.query=e.query;else if(!r.isNullOrUndefined(e.search)){if(C)n.hostname=n.host=E.shift(),(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift());return n.search=e.search,n.query=e.query,r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!E.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var x=E.slice(-1)[0],w=(n.host||e.host||E.length>1)&&("."===x||".."===x)||""===x,N=0,T=E.length;T>=0;T--)"."===(x=E[T])?E.splice(T,1):".."===x?(E.splice(T,1),N++):N&&(E.splice(T,1),N--);if(!O&&!k)for(;N--;N)E.unshift("..");!O||""===E[0]||E[0]&&"/"===E[0].charAt(0)||E.unshift(""),w&&"/"!==E.join("/").substr(-1)&&E.push("");var S,P=""===E[0]||E[0]&&"/"===E[0].charAt(0);C&&(n.hostname=n.host=P?"":E.length?E.shift():"",(S=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=S.shift(),n.host=n.hostname=S.shift()));return(O=O||n.host&&E.length)&&!P&&E.unshift(""),E.length?n.pathname=E.join("/"):(n.pathname=null,n.path=null),r.isNull(n.pathname)&&r.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},o.prototype.parseHost=function(){var e=this.host,t=i.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},134:function(e,t,n){(function(e,a){var r;!function(o){t&&t.nodeType,e&&e.nodeType;var s="object"==typeof a&&a;s.global!==s&&s.window!==s&&s.self;var i,c=2147483647,l=36,u=/^xn--/,h=/[^\x20-\x7E]/,p=/[\x2E\u3002\uFF0E\uFF61]/g,f={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,m=String.fromCharCode;function b(e){throw RangeError(f[e])}function v(e,t){for(var n=e.length,a=[];n--;)a[n]=t(e[n]);return a}function y(e,t){var n=e.split("@"),a="";return n.length>1&&(a=n[0]+"@",e=n[1]),a+v((e=e.replace(p,".")).split("."),t).join(".")}function g(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function j(e){return v(e,(function(e){var t="";return e>65535&&(t+=m((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=m(e)})).join("")}function O(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,n){var a=0;for(e=n?d(e/700):e>>1,e+=d(e/t);e>455;a+=l)e=d(e/35);return d(a+36*e/(e+38))}function E(e){var t,n,a,r,o,s,i,u,h,p,f,m=[],v=e.length,y=0,g=128,O=72;for((n=e.lastIndexOf("-"))<0&&(n=0),a=0;a<n;++a)e.charCodeAt(a)>=128&&b("not-basic"),m.push(e.charCodeAt(a));for(r=n>0?n+1:0;r<v;){for(o=y,s=1,i=l;r>=v&&b("invalid-input"),((u=(f=e.charCodeAt(r++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:l)>=l||u>d((c-y)/s))&&b("overflow"),y+=u*s,!(u<(h=i<=O?1:i>=O+26?26:i-O));i+=l)s>d(c/(p=l-h))&&b("overflow"),s*=p;O=k(y-o,t=m.length+1,0==o),d(y/t)>c-g&&b("overflow"),g+=d(y/t),y%=t,m.splice(y++,0,g)}return j(m)}function C(e){var t,n,a,r,o,s,i,u,h,p,f,v,y,j,E,C=[];for(v=(e=g(e)).length,t=128,n=0,o=72,s=0;s<v;++s)(f=e[s])<128&&C.push(m(f));for(a=r=C.length,r&&C.push("-");a<v;){for(i=c,s=0;s<v;++s)(f=e[s])>=t&&f<i&&(i=f);for(i-t>d((c-n)/(y=a+1))&&b("overflow"),n+=(i-t)*y,t=i,s=0;s<v;++s)if((f=e[s])<t&&++n>c&&b("overflow"),f==t){for(u=n,h=l;!(u<(p=h<=o?1:h>=o+26?26:h-o));h+=l)E=u-p,j=l-p,C.push(m(O(p+E%j,0))),u=d(E/j);C.push(m(O(u,0))),o=k(n,y,a==r),n=0,++a}++n,++t}return C.join("")}i={version:"1.3.2",ucs2:{decode:g,encode:j},decode:E,encode:C,toASCII:function(e){return y(e,(function(e){return h.test(e)?"xn--"+C(e):e}))},toUnicode:function(e){return y(e,(function(e){return u.test(e)?E(e.slice(4).toLowerCase()):e}))}},void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()}).call(this,n(135)(e),n(26))},135:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},136:function(e,t,n){"use strict";e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},137:function(e,t,n){"use strict";t.decode=t.parse=n(138),t.encode=t.stringify=n(139)},138:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var i=/\+/g;e=e.split(t);var c=1e3;o&&"number"==typeof o.maxKeys&&(c=o.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var h,p,f,d,m=e[u].replace(i,"%20"),b=m.indexOf(n);b>=0?(h=m.substr(0,b),p=m.substr(b+1)):(h=m,p=""),f=decodeURIComponent(h),d=decodeURIComponent(p),a(s,f)?r(s[f])?s[f].push(d):s[f]=[s[f],d]:s[f]=d}return s};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},139:function(e,t,n){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?o(s(e),(function(s){var i=encodeURIComponent(a(s))+n;return r(e[s])?o(e[s],(function(e){return i+encodeURIComponent(a(e))})).join(t):i+encodeURIComponent(a(e[s]))})).join(t):i?encodeURIComponent(a(i))+n+encodeURIComponent(a(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},140:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(89),s=n(16),i=n(28),c=n(96),l=n(3),u=n(8),h=n(88),p=n(87),f=n(104),d=n(108),m=n(109),b=n(107),v=n(92),y=n(98),g=n(110),j=function(e){return r.a.createElement("svg",Object(l.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(112),k=n(90),E=n(70),C=n.n(E);var x=function e(t,n){return"link"===t.type?Object(p.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},w=Object(a.memo)((function(e){var t=e.items,n=Object(u.a)(e,["items"]);return t.map((function(e,t){return r.a.createElement(N,Object(l.a)({key:t,item:e},n))}))}));function N(e){switch(e.item.type){case"category":return r.a.createElement(T,e);case"link":default:return r.a.createElement(S,e)}}function T(e){var t,n,o,s=e.item,i=e.onItemClick,c=e.collapsible,p=e.activePath,f=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),d=s.items,m=s.label,b=x(s,p),v=(n=b,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),y=Object(a.useState)((function(){return!!c&&(!b&&s.collapsed)})),g=y[0],j=y[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),E=k[0],N=k[1],T=function(e){var t;void 0===e&&(e=!0),N(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){b&&!v&&g&&j(!1)}),[b,v,g]);var S=Object(a.useCallback)((function(e){e.preventDefault(),E||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===d.length?null:r.a.createElement("li",{className:Object(h.a)("menu__list-item",{"menu__list-item--collapsed":g})},r.a.createElement("a",Object(l.a)({className:Object(h.a)("menu__link",(t={"menu__link--sublist":c,"menu__link--active":c&&b},t[C.a.menuLinkText]=!c,t)),onClick:c?S:void 0,href:c?"#!":void 0},f),m),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){g||T(!1)}},r.a.createElement(w,{items:d,tabIndex:g?"-1":"0",onItemClick:i,collapsible:c,activePath:p})))}function S(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,s=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),i=n.href,c=n.label,p=x(n,o);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(v.a,Object(l.a)({className:Object(h.a)("menu__link",(t={"menu__link--active":p},t[C.a.menuLinkExternal]=!Object(y.a)(i),t)),to:i},Object(y.a)(i)&&{isNavLink:!0,exact:!0,onClick:a},s),c))}function P(e){var t=e.onClick;return r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(h.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:t},r.a.createElement(j,{className:C.a.collapseSidebarButtonIcon}))}function _(e){var t=e.responsiveSidebarOpened,n=e.onClick;return r.a.createElement("button",{"aria-label":t?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?r.a.createElement("span",{className:Object(h.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:C.a.sidebarMenuIcon,height:24,width:24}))}var A=function(e){var t,n,o=e.path,s=e.sidebar,i=e.sidebarCollapsible,c=void 0===i||i,l=e.onCollapse,u=e.isHidden,v=function(){var e=Object(f.a)().isAnnouncementBarClosed,t=Object(a.useState)(!e),n=t[0],r=t[1];return Object(b.a)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),y=Object(p.useThemeConfig)(),j=y.navbar.hideOnScroll,O=y.hideableSidebar,k=Object(f.a)().isAnnouncementBarClosed,E=function(){var e=Object(a.useState)(!1),t=e[0],n=e[1];Object(d.a)(t);var r=Object(m.a)();return Object(a.useEffect)((function(){r===m.b.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:Object(a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),x=E.showResponsiveSidebar,N=E.closeResponsiveSidebar,T=E.toggleResponsiveSidebar;return r.a.createElement("div",{className:Object(h.a)(C.a.sidebar,(t={},t[C.a.sidebarWithHideableNavbar]=j,t[C.a.sidebarHidden]=u,t))},j&&r.a.createElement(g.a,{tabIndex:-1,className:C.a.sidebarLogo}),r.a.createElement("div",{className:Object(h.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,(n={"menu--show":x},n[C.a.menuWithAnnouncementBar]=!k&&v,n))},r.a.createElement(_,{responsiveSidebarOpened:x,onClick:T}),r.a.createElement("ul",{className:"menu__list"},r.a.createElement(w,{items:s,onItemClick:N,collapsible:c,activePath:o}))),O&&r.a.createElement(P,{onClick:l}))},I=n(131),R=n.n(I),L=(n(72),n(73)),B=n.n(L),D=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),s=Object(p.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(h.a)("anchor",(n={},n[B.a.enhancedAnchor]=!s,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(k.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},M={code:function(e){var t=e.children;return Object(a.isValidElement)(t)?t:t.includes("\n")?r.a.createElement(R.a,e):r.a.createElement("code",e)},a:function(e){return r.a.createElement(v.a,e)},pre:function(e){var t,n=e.children;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:r.a.createElement(R.a,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:D("h1"),h2:D("h2"),h3:D("h3"),h4:D("h4"),h5:D("h5"),h6:D("h6")},U=n(99),q=n(23),F=n(74),$=n.n(F);function z(e){var t,n,i,l,u,f=e.currentDocRoute,d=e.versionMetadata,m=e.children,b=Object(s.default)(),v=b.siteConfig,y=b.isClient,g=d.pluginId,O=d.permalinkToSidebar,E=d.docsSidebars,C=d.version,x=O[f.path],w=E[x],N=Object(a.useState)(!1),T=N[0],S=N[1],P=Object(a.useState)(!1),_=P[0],I=P[1],R=Object(a.useCallback)((function(){_&&I(!1),S(!T)}),[_]);return r.a.createElement(c.a,{key:y,wrapperClassName:p.ThemeClassNames.wrapper.docPages,pageClassName:p.ThemeClassNames.page.docPage,searchMetadatas:{version:C,tag:Object(p.docVersionSearchTag)(g,C)}},r.a.createElement("div",{className:$.a.docPage},w&&r.a.createElement("div",{className:Object(h.a)($.a.docSidebarContainer,(t={},t[$.a.docSidebarContainerHidden]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains($.a.docSidebarContainer)&&T&&I(!0)},role:"complementary"},r.a.createElement(A,{key:x,sidebar:w,path:f.path,sidebarCollapsible:null===(n=null===(i=v.themeConfig)||void 0===i?void 0:i.sidebarCollapsible)||void 0===n||n,onCollapse:R,isHidden:_}),_&&r.a.createElement("div",{className:$.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},r.a.createElement(j,{className:$.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(h.a)($.a.docMainContainer,(l={},l[$.a.docMainContainerEnhanced]=T||!w,l))},r.a.createElement("div",{className:Object(h.a)("container padding-vert--lg",$.a.docItemWrapper,(u={},u[$.a.docItemWrapperEnhanced]=T,u))},r.a.createElement(o.a,{components:M},m)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(q.matchPath)(a.pathname,e)}));return o?r.a.createElement(z,{currentDocRoute:o,versionMetadata:n},Object(i.a)(t)):r.a.createElement(U.default,e)}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(n),f=a,d=h["".concat(s,".").concat(f)]||h[f]||p[f]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(96),s=n(90);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(s.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(s.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(s.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);