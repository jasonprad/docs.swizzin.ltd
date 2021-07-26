(window.webpackJsonp=window.webpackJsonp||[]).push([[42,17,76,82],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),r=(n(0),n(165)),s=n(65),i=n(57),l=n(60),c={id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},u={unversionedId:"applications/jellyfin",id:"applications/jellyfin",isDocsHomePage:!1,title:"Jellyfin",description:"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project.",source:"@site/docs/applications/jellyfin.mdx",sourceDirName:"applications",slug:"/applications/jellyfin",permalink:"/applications/jellyfin",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/jellyfin.mdx",version:"current",sidebar_label:"Jellyfin",frontMatter:{id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},sidebar:"docs",previous:{title:"Emby",permalink:"/applications/emby"},next:{title:"Mango",permalink:"/applications/mango"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Access",id:"access",children:[]},{value:"User management",id:"user-management",children:[]},{value:"Adding more users&#39; media to Jellyfin",id:"adding-more-users-media-to-jellyfin",children:[]},{value:"Service management",id:"service-management",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Reinstallation Steps",id:"reinstallation-steps",children:[]},{value:"Unable to connect using apps",id:"unable-to-connect-using-apps",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You can install Jellyfin using the following command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"sudo box install jellyfin\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Finish install in browser")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please make sure to finish the setup of the application through the web browser, and create your admin user."))),Object(r.b)("h2",{id:"access"},"Access"),Object(r.b)("p",null,"You can access jellyfin through ",Object(r.b)("inlineCode",{parentName:"p"},"https://domain.tld/jellyfin")," if you have nginx installed, or through ",Object(r.b)("inlineCode",{parentName:"p"},"https://domain.tld:port")," if you do not."),Object(r.b)("h2",{id:"user-management"},"User management"),Object(r.b)("p",null,"Jellyfin manages its users in a separate database. ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"box")," does not add users to the database in any way"),". You will need to manage the jellyfin users manually. Whether you choose to keep those in sync with box or not is up to you"),Object(r.b)("h2",{id:"adding-more-users-media-to-jellyfin"},"Adding more users' media to Jellyfin"),Object(r.b)(s.default,{serviceName:"Jellyfin",serviceUsr:"jellyfin",mdxType:"PermsSrv"}),Object(r.b)("h2",{id:"service-management"},"Service management"),Object(r.b)(i.default,{service:"jellyfin",mdxType:"SystemdTabs"}),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)(l.default,{mdxType:"Troubleshooting"}),Object(r.b)("p",null,"Jellyfin has a general ",Object(r.b)("a",{parentName:"p",href:"https://jellyfin.org/docs/general/administration/troubleshooting.html"},"Troubleshooting guide")," which we highly suggest you follow first in case you have any issues."),Object(r.b)("h3",{id:"reinstallation-steps"},"Reinstallation Steps"),Object(r.b)("p",null,"If you have previously had a Jellyfin installation and are having issues with getting the server setup, use the following guide to get everything up and running:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Install Jellyfin on your server using the traditional steps above."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("em",{parentName:"li"},"in your browser")," Navigate to your panel (yourdomain.tld)"),Object(r.b)("li",{parentName:"ol"},"Login"),Object(r.b)("li",{parentName:"ol"},'Right Click and hit "Inspect Element"'),Object(r.b)("li",{parentName:"ol"},'Go to "Storage"'),Object(r.b)("li",{parentName:"ol"},'Click "Local Storage" in the sidebar'),Object(r.b)("li",{parentName:"ol"},"Click the domain relating to your server"),Object(r.b)("li",{parentName:"ol"},"Find the key ",Object(r.b)("inlineCode",{parentName:"li"},"_deviceId2")," and delete it"),Object(r.b)("li",{parentName:"ol"},"Find the key ",Object(r.b)("inlineCode",{parentName:"li"},"jellyfin_credentials")," and delete it"),Object(r.b)("li",{parentName:"ol"},"Refresh / Reload the page.")),Object(r.b)("h3",{id:"unable-to-connect-using-apps"},"Unable to connect using apps"),Object(r.b)("p",null,"Some jellyfin clients will not work with self-signed certificates. For that reason we recommend that you follow the ",Object(r.b)("a",{parentName:"p",href:"/applications/letsencrypt"},"LetsEncrypt")," guide and set up a valid signed certificate. You can grab a valid free domain from various places like ",Object(r.b)("inlineCode",{parentName:"p"},"freenom"),", or get a proper personalized one from places like ",Object(r.b)("inlineCode",{parentName:"p"},"namecheap"),"."))}m.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.a.createElement(b,i(i({ref:t},c),{},{components:n})):o.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";var a=n(0),o=n(173);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},169:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(174),s=n(167),i=n(59),l=n.n(i),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,d=e.groupId,m=e.className,b=Object(r.a)(),h=b.tabGroupChoices,y=b.setTabGroupChoices,f=Object(a.useState)(i),g=f[0],v=f[1],j=Object(a.useState)(!1),O=j[0],k=j[1];if(null!=d){var w=h[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&v(w)}var N=function(e){v(e),null!=d&&y(d,e)},x=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},C=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",T),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",T),window.removeEventListener("mousedown",C)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},m)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":g===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),T(e)},onFocus:function(){return N(t)},onClick:function(){N(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},170:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},171:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),s={Prism:a.a,theme:o};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),i(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?l({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),i(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},i=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(i))}})),i(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=l({},m(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?l({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),i(this,"tokenize",(function(e,t,n,a){var o={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,i=[],l=[i];s>-1;){for(;(r=a[s]++)<o[s];){var d=void 0,m=t[s],b=n[s][r];if("string"==typeof b?(m=s>0?m:["plain"],d=b):(m=p(m,b.type),b.alias&&(m=p(m,b.alias)),d=b.content),"string"==typeof d){var h=d.split(c),y=h.length;i.push({types:m,content:h[0]});for(var f=1;f<y;f++)u(i),l.push(i=[]),i.push({types:m,content:h[f]})}else s++,t.push(m),n.push(d),a.push(0),o.push(d.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return u(i),l}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=b},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),o=n(0),r=n.n(o),s=n(167),i=n(171);var l=n(175),c=n.n(l),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(168),d=n(166),m=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},b=n(177),h=n(58),y=n.n(h),f=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,l=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,h=Object(o.useState)(!1),v=h[0],j=h[1],O=Object(o.useState)(!1),k=O[0],w=O[1];Object(o.useEffect)((function(){w(!0)}),[]);var N=Object(d.parseCodeBlockTitle)(l)||u,x=Object(o.useRef)(null),T=[],C=m(),E=Array.isArray(t)?t.join(""):t;if(l&&f.test(l)){var D=l.match(f)[1];T=c()(D).filter((function(e){return e>0}))}var S=n&&n.replace(/language-/,"");!S&&p.defaultLanguage&&(S=p.defaultLanguage);var P=E.replace(/\n$/,"");if(0===T.length&&void 0!==S){for(var I,L="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(S),z=E.replace(/\n$/,"").split("\n"),M=0;M<z.length;){var J=M+1,U=z[M].match(B);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=J+",";break;case"highlight-start":I=J;break;case"highlight-end":L+=I+"-"+(J-1)+","}z.splice(M,1)}else M+=1}T=c()(L),P=z.join("\n")}var A=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),r&&(o.removeAllRanges(),o.addRange(r)),a&&a.focus()}(P),j(!0),setTimeout((function(){return j(!1)}),2e3)};return r.a.createElement(i.a,Object(a.a)({},i.b,{key:String(k),theme:C,code:P,language:S}),(function(e){var t,n=e.className,o=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement("div",{className:y.a.codeBlockContainer},N&&r.a.createElement("div",{style:o,className:y.a.codeBlockTitle},N),r.a.createElement("div",{className:Object(s.a)(y.a.codeBlockContent,S)},r.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,y.a.codeBlock,"thin-scrollbar",(t={},t[y.a.codeBlockWithTitle]=N,t))},r.a.createElement("div",{className:y.a.codeBlockLines,style:o},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return T.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))})))})))),r.a.createElement("button",{ref:x,type:"button","aria-label":Object(b.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(y.a.copyButton),onClick:A},v?r.a.createElement(b.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(b.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},173:function(e,t,n){"use strict";var a=n(0),o=n.n(a).a.createContext(void 0);t.a=o},174:function(e,t,n){"use strict";var a=n(0),o=n(176);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},175:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,o,r]=t;if(a&&r){a=parseInt(a),r=parseInt(r);const e=a<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=a;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},176:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),o=n(8),r=(n(0),n(165)),s=n(169),i=n(170),l=n(172),c={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"code"},Object(r.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"status",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"start",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"stop",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"restart",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"enable",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(r.b)(i.a,{value:"disable",mdxType:"TabItem"},Object(r.b)(l.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},60:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(8),r=(n(0),n(165)),s={},i={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},l=[],c={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can always also try the ",Object(r.b)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}u.isMDXComponent=!0},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(165)),s=n(172),i={},l={unversionedId:"snippets/permsmediasrv",id:"snippets/permsmediasrv",isDocsHomePage:!1,title:"permsmediasrv",description:"{props.serviceName} runs as the user {props.serviceUsr}. This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like {props.serviceUsr} to play.",source:"@site/docs/snippets/permsmediasrv.mdx",sourceDirName:"snippets",slug:"/snippets/permsmediasrv",permalink:"/snippets/permsmediasrv",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/permsmediasrv.mdx",version:"current",frontMatter:{}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,n.serviceName," runs as the user ",Object(r.b)("command",null,n.serviceUsr),". This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like ",n.serviceUsr," to play."),Object(r.b)("p",null,"During the installation, only the master user is present in this group."),Object(r.b)("p",null,"In order to access non-master-user files cleanly, please add the ",n.serviceUsr," user to the group of users who can access the desired user's files, and ensure that this group has access to the media you would like to access."),Object(r.b)(s.a,{children:"usermod -a -G <aUser> "+n.serviceUsr+"\nchmod g+rx -R /home/<aUser>",className:"bash",mdxType:"CodeBlock"}))}p.isMDXComponent=!0}}]);