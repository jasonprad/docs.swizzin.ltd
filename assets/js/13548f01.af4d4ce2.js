(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{161:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var o=t(0),i=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=o,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||r;return t?i.a.createElement(f,c(c({ref:n},u),{},{components:t})):i.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<r;u++)a[u]=t[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var o=t(3),i=t(8),r=(t(0),t(161)),a={id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},c={unversionedId:"dev/functions",id:"dev/functions",isDocsHomePage:!1,title:"Functions to streamline our flow",description:"Snippets",source:"@site/docs/dev/functions.md",sourceDirName:"dev",slug:"/dev/functions",permalink:"/dev/functions",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/functions.md",version:"current",sidebar_label:"Functions",frontMatter:{id:"functions",title:"Functions to streamline our flow",sidebar_label:"Functions"},sidebar:"docs",previous:{title:"The project's structure",permalink:"/dev/structure"},next:{title:"So you want to run some pre-release software?",permalink:"/dev/beta-testing"}},s=[{value:"Snippets",id:"snippets",children:[]},{value:"Functions available through <code>global.sh</code>",id:"functions-available-through-globalsh",children:[{value:"OS functions",id:"os-functions",children:[]},{value:"User functions",id:"user-functions",children:[]},{value:"Echo functions",id:"echo-functions",children:[]},{value:"Apt functions",id:"apt-functions",children:[]}]},{value:"Functions that need to be <code>source</code>d",id:"functions-that-need-to-be-sourced",children:[{value:"Python functions for <code>pyenv</code> and <code>venv</code>",id:"python-functions-for-pyenv-and-venv",children:[]},{value:"Other functions in <code>utils</code>",id:"other-functions-in-utils",children:[]}]}],u={toc:s};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"snippets"},"Snippets"),Object(r.b)("p",null,"We are keeping a lot of reusable code in the ",Object(r.b)("inlineCode",{parentName:"p"},".vscode/*.code-snippets")," files."),Object(r.b)("p",null,"These give you auto-completions within VSCode and its derivatives, and have pre-defined fields which you can tab-through in order to skip to the next ones."),Object(r.b)("p",null,"There ",Object(r.b)("em",{parentName:"p"},"should")," be snippets available for all of the functions declared in ",Object(r.b)("inlineCode",{parentName:"p"},"global.sh"),"."),Object(r.b)("h2",{id:"functions-available-through-globalsh"},"Functions available through ",Object(r.b)("inlineCode",{parentName:"h2"},"global.sh")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Work in progress!")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"We don't have this chapter written out fully yet. You can find out what most of these do and how they work in the ",Object(r.b)("inlineCode",{parentName:"p"},"contributors.md")," file in the main repo"))),Object(r.b)("h3",{id:"os-functions"},"OS functions"),Object(r.b)("h3",{id:"user-functions"},"User functions"),Object(r.b)("h3",{id:"echo-functions"},"Echo functions"),Object(r.b)("h3",{id:"apt-functions"},"Apt functions"),Object(r.b)("h2",{id:"functions-that-need-to-be-sourced"},"Functions that need to be ",Object(r.b)("inlineCode",{parentName:"h2"},"source"),"d"),Object(r.b)("h3",{id:"python-functions-for-pyenv-and-venv"},"Python functions for ",Object(r.b)("inlineCode",{parentName:"h3"},"pyenv")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"venv")),Object(r.b)("h3",{id:"other-functions-in-utils"},"Other functions in ",Object(r.b)("inlineCode",{parentName:"h3"},"utils")))}l.isMDXComponent=!0}}]);