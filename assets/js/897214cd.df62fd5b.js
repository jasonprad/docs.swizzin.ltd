(window.webpackJsonp=window.webpackJsonp||[]).push([[52,16,80],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),o=(n(0),n(163)),s=n(57),i=n(60),c={id:"filebrowser",title:"Filebrowser",sidebar_label:"Filebrowser"},l={unversionedId:"applications/filebrowser",id:"applications/filebrowser",isDocsHomePage:!1,title:"Filebrowser",description:"filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files. It allows the creation of multiple users and each user can have its own directory. It can be used as a standalone app or as a middleware.",source:"@site/docs/applications/filebrowser.mdx",sourceDirName:"applications",slug:"/applications/filebrowser",permalink:"/applications/filebrowser",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/filebrowser.mdx",version:"current",sidebar_label:"Filebrowser",frontMatter:{id:"filebrowser",title:"Filebrowser",sidebar_label:"Filebrowser"},sidebar:"docs",previous:{title:"ffmpeg",permalink:"/applications/ffmpeg"},next:{title:"Librespeed",permalink:"/applications/librespeed"}},u=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration &amp; Usage",id:"configuration--usage",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"filebrowser provides a file managing interface within a specified directory and it can be used to upload, delete, preview, rename and edit your files. It allows the creation of multiple users and each user can have its own directory. It can be used as a standalone app or as a middleware."),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Filebrowser is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install filebrowser\n")),Object(o.b)("p",null,"This command will configure filebrowser."),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("p",null,"Once setup, Filebrowser will be available at the link ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/filebrowser")),Object(o.b)("p",null,"Use your swizzin credentials when logging into the service"),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"Like all box configured applications, you can manage Filebrowser via SSH with box with start, stop, restart, enable and disable commands."),Object(o.b)(s.default,{service:"filebrowser",mdxType:"SystemdTabs"}),Object(o.b)("h2",{id:"configuration--usage"},"Configuration & Usage"),Object(o.b)("p",null,"Out of the box, Filebrowser comes with everything you need. You can navigate your box directories, upload files and download files."),Object(o.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)(i.default,{mdxType:"Troubleshooting"}),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/filebrowser/filebrowser"},"Filebrowser project on Github"),". Please check the Wiki first, and see if there are any closed issues from the past which might be relevant to your problems."))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(170),s=n(165),i=n(58),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,y=m.setTabGroupChoices,h=Object(a.useState)(i),g=h[0],v=h[1],j=Object(a.useState)(!1),w=j[0],O=j[1];if(null!=d){var k=f[d];null!=k&&k!==g&&p.some((function(e){return e.value===k}))&&v(k)}var x=function(e){v(e),null!=d&&y(d,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},C=function(){O(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":g===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),O(!1)},onPointerDown:function(){return O(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},167:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},168:function(e,t,n){"use strict";var a=n(0),r=n(172);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=c({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?c({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=c({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?c({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),i(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,i=[],c=[i];s>-1;){for(;(o=a[s]++)<r[s];){var d=void 0,b=t[s],m=n[s][o];if("string"==typeof m?(b=s>0?b:["plain"],d=m):(b=p(b,m.type),m.alias&&(b=p(b,m.alias)),d=m.content),"string"==typeof d){var f=d.split(l),y=f.length;i.push({types:b,content:f[0]});for(var h=1;h<y;h++)u(i),c.push(i=[]),i.push({types:b,content:f[h]})}else s++,t.push(b),n.push(d),a.push(0),r.push(d.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(i),c}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},170:function(e,t,n){"use strict";var a=n(0),r=n(171);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},173:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),r=n(0),o=n.n(r),s=n(165),i=n(169);var c=n(173),l=n.n(c),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(168),d=n(164),b=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},m=n(175),f=n(59),y=n.n(f),h=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,c=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,f=Object(r.useState)(!1),v=f[0],j=f[1],w=Object(r.useState)(!1),O=w[0],k=w[1];Object(r.useEffect)((function(){k(!0)}),[]);var x=Object(d.parseCodeBlockTitle)(c)||u,T=Object(r.useRef)(null),N=[],C=b(),E=Array.isArray(t)?t.join(""):t;if(c&&h.test(c)){var P=c.match(h)[1];N=l()(P).filter((function(e){return e>0}))}var S=n&&n.replace(/language-/,"");!S&&p.defaultLanguage&&(S=p.defaultLanguage);var D=E.replace(/\n$/,"");if(0===N.length&&void 0!==S){for(var I,B="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(S),z=E.replace(/\n$/,"").split("\n"),M=0;M<z.length;){var F=M+1,A=z[M].match(L);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=F+",";break;case"highlight-start":I=F;break;case"highlight-end":B+=I+"-"+(F-1)+","}z.splice(M,1)}else M+=1}N=l()(B),D=z.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(D),j(!0),setTimeout((function(){return j(!1)}),2e3)};return o.a.createElement(i.a,Object(a.a)({},i.b,{key:String(O),theme:C,code:D,language:S}),(function(e){var t,n=e.className,r=e.style,i=e.tokens,c=e.getLineProps,l=e.getTokenProps;return o.a.createElement("div",{className:y.a.codeBlockContainer},x&&o.a.createElement("div",{style:r,className:y.a.codeBlockTitle},x),o.a.createElement("div",{className:Object(s.a)(y.a.codeBlockContent,S)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,y.a.codeBlock,"thin-scrollbar",(t={},t[y.a.codeBlockWithTitle]=x,t))},o.a.createElement("div",{className:y.a.codeBlockLines,style:r},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},l({token:e,key:t})))})))})))),o.a.createElement("button",{ref:T,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(y.a.copyButton),onClick:_},v?o.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(163)),s=n(166),i=n(167),c=n(174),l={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"status",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"start",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(i.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),o=(n(0),n(163)),s={},i={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can always also try the ",Object(o.b)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0}}]);