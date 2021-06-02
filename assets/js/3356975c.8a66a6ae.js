(window.webpackJsonp=window.webpackJsonp||[]).push([[27,16],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(163)),s=n(57),c={id:"bazarr",title:"Bazarr",sidebar_label:"Bazarr"},i={unversionedId:"applications/bazarr",id:"applications/bazarr",isDocsHomePage:!1,title:"Bazarr",description:"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you.",source:"@site/docs/applications/bazarr.mdx",sourceDirName:"applications",slug:"/applications/bazarr",permalink:"/applications/bazarr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/bazarr.mdx",version:"current",sidebar_label:"Bazarr",frontMatter:{id:"bazarr",title:"Bazarr",sidebar_label:"Bazarr"},sidebar:"docs",previous:{title:"Autodl",permalink:"/applications/autodl"},next:{title:"Lidarr",permalink:"/applications/lidarr"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[{value:"More info",id:"more-info",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Bazarr is a companion application to Sonarr and Radarr. It manages and downloads subtitles based on your requirements. You define your preferences by TV show or movie and Bazarr takes care of everything for you."),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Bazarr is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"sudo box install bazarr\n")),Object(o.b)("p",null,"This command will configure bazarr for the main user."),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("p",null,"Once setup, bazarr will be available at the link ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/bazarr")),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"The systemd script for bazarr can be found at"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"/etc/systemd/system/bazarr.service\n")),Object(o.b)("p",null,"By default, bazarr can only be configured for use with a single user with swizzin."),Object(o.b)(s.default,{service:"bazarr",mdxType:"SystemdTabs"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Forgot your API key or port? No worries, here are one-liners you can submit from SSH:"),Object(o.b)("p",{parentName:"div"},"Sonarr:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/sonarr/config.xml | grep -e \\<Api -e \\<Port\n")),Object(o.b)("p",{parentName:"div"},"Radarr:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/Radarr/config.xml | grep -e \\<Api -e \\<Port\n")))),Object(o.b)("h3",{id:"more-info"},"More info"),Object(o.b)("p",null,"If you need further help, please refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/morpheus65535/bazarr/wiki"},"Bazarr Wiki"),"."))}p.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(170),s=n(165),c=n(58),i=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),y=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(c),v=h[0],g=h[1],j=Object(a.useState)(!1),O=j[0],k=j[1];if(null!=d){var w=y[d];null!=w&&w!==v&&p.some((function(e){return e.value===w}))&&g(w)}var x=function(e){g(e),null!=d&&f(d,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},C=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",t,i.a.tabItem,{"tabs__item--active":v===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),T(e)},onFocus:function(){return x(t)},onClick:function(){x(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},167:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},168:function(e,t,n){"use strict";var a=n(0),r=n(172);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),c(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,c=[],i=[c];s>-1;){for(;(o=a[s]++)<r[s];){var d=void 0,b=t[s],m=n[s][o];if("string"==typeof m?(b=s>0?b:["plain"],d=m):(b=p(b,m.type),m.alias&&(b=p(b,m.alias)),d=m.content),"string"==typeof d){var y=d.split(l),f=y.length;c.push({types:b,content:y[0]});for(var h=1;h<f;h++)u(c),i.push(c=[]),c.push({types:b,content:y[h]})}else s++,t.push(b),n.push(d),a.push(0),r.push(d.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(c),i}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},170:function(e,t,n){"use strict";var a=n(0),r=n(171);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},173:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(3),r=n(0),o=n.n(r),s=n(165),c=n(169);var i=n(173),l=n.n(i),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(168),d=n(164),b=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},m=n(175),y=n(59),f=n.n(y),h=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function g(e){var t=e.children,n=e.className,i=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,y=Object(r.useState)(!1),g=y[0],j=y[1],O=Object(r.useState)(!1),k=O[0],w=O[1];Object(r.useEffect)((function(){w(!0)}),[]);var x=Object(d.parseCodeBlockTitle)(i)||u,N=Object(r.useRef)(null),T=[],C=b(),z=Array.isArray(t)?t.join(""):t;if(i&&h.test(i)){var E=i.match(h)[1];T=l()(E).filter((function(e){return e>0}))}var B=n&&n.replace(/language-/,"");!B&&p.defaultLanguage&&(B=p.defaultLanguage);var S=z.replace(/\n$/,"");if(0===T.length&&void 0!==B){for(var P,D="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(B),L=z.replace(/\n$/,"").split("\n"),A=0;A<L.length;){var M=A+1,R=L[A].match(I);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=M+",";break;case"highlight-start":P=M;break;case"highlight-end":D+=P+"-"+(M-1)+","}L.splice(A,1)}else A+=1}T=l()(D),S=L.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(S),j(!0),setTimeout((function(){return j(!1)}),2e3)};return o.a.createElement(c.a,Object(a.a)({},c.b,{key:String(k),theme:C,code:S,language:B}),(function(e){var t,n=e.className,r=e.style,c=e.tokens,i=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:f.a.codeBlockContainer},x&&o.a.createElement("div",{style:r,className:f.a.codeBlockTitle},x),o.a.createElement("div",{className:Object(s.a)(f.a.codeBlockContent,B)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,f.a.codeBlock,"thin-scrollbar",(t={},t[f.a.codeBlockWithTitle]=x,t))},o.a.createElement("div",{className:f.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return T.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:N,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(f.a.copyButton),onClick:_},g?o.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(163)),s=n(166),c=n(167),i=n(174),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"status",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(c.a,{value:"start",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(c.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(c.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(c.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(c.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);