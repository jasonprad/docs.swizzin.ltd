(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(157)),o=n(197),l={id:"installation",title:"Getting Started",sidebar_label:"Installation",slug:"/getting-started/"},s={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Getting Started",description:"swizzin was designed to be an easy to use, modular seedbox solution.",source:"@site/docs/getting-started/home.mdx",slug:"/getting-started/",permalink:"/getting-started/",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/getting-started/home.mdx",version:"current",sidebar_label:"Installation",sidebar:"docs",next:{title:"How do I connect to the server?",permalink:"/getting-started/how-do-i-connect"}},u=[{value:"System Requirements",id:"system-requirements",children:[{value:"Supported Operating Systems",id:"supported-operating-systems",children:[]},{value:"Recommended Hardware",id:"recommended-hardware",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Advanced setup",id:"advanced-setup",children:[]}]},{value:"Additional Help",id:"additional-help",children:[]}],c={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"swizzin was designed to be an easy to use, modular seedbox solution."),Object(i.b)("h2",{id:"system-requirements"},"System Requirements"),Object(i.b)("h3",{id:"supported-operating-systems"},"Supported Operating Systems"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Debian 9/10"),Object(i.b)("li",{parentName:"ul"},"Ubuntu 16.04, Ubuntu 18.04 and Ubuntu 20.04")),Object(i.b)("h3",{id:"recommended-hardware"},"Recommended Hardware"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A KVM VPS or bare metal server is recommended"),Object(i.b)("li",{parentName:"ul"},"2+ CPU cores KVM or Intel Atom c2750"),Object(i.b)("li",{parentName:"ul"},"4 GB of RAM"),Object(i.b)("li",{parentName:"ul"},"An x86_64 (64-bit) processor is required")),Object(i.b)("p",null,"With the exception of a 64-bit processor, these are not hard and fast requirements -- you may find that you're able to get away with running on a weaker CPU or less RAM; however, best performance will be had if the applications you're using have ample resource overhead."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"quick-start"},"Quick Start"),Object(i.b)("p",null,"Make sure you have either ",Object(i.b)("inlineCode",{parentName:"p"},"curl")," or ",Object(i.b)("inlineCode",{parentName:"p"},"wget")," installed. Pick the command of your choice to get started:"),Object(i.b)(o.a,{mdxType:"InstallCmd"}),Object(i.b)("p",null,"Please note that if you are running Ubuntu and choose to run the initial setup though ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")," you should include the ",Object(i.b)("inlineCode",{parentName:"p"},"-H")," argument to ensure that your home directory is modified to /root when you sudo up. The installer will take care of this for you, and this should be the only time you need to specify ",Object(i.b)("inlineCode",{parentName:"p"},"sudo -H")," before running a swizzin command."),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo -H su -c 'bash <(wget -O- -q https://git.io/swizzin-setup)'\n")),Object(i.b)("h3",{id:"setup"},"Setup"),Object(i.b)("p",null,"After running the above command, the script will check for updates and install some necessary prerequisites before continuing."),Object(i.b)("p",null,"When finished, the installer will ask you a few questions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A username for the master user"),Object(i.b)("li",{parentName:"ul"},"A password for the master user"),Object(i.b)("li",{parentName:"ul"},"The packages you would like to install")),Object(i.b)("p",null,"In text fields, you only need to enter your text and hit ",Object(i.b)("inlineCode",{parentName:"p"},"return")," to enter. To choose packages, from the list, you can navigate with the arrow keys. Press ",Object(i.b)("inlineCode",{parentName:"p"},"space")," to select an entry. When you're satisfied with your selection, press ",Object(i.b)("inlineCode",{parentName:"p"},"tab")," to move the selector to ",Object(i.b)("inlineCode",{parentName:"p"},"Ok")," and then press enter. This will advance the screen."),Object(i.b)("p",null,"When you have finished running through the prompts, installation will start. The time it takes will depend on the number of packages you have selected."),Object(i.b)("h3",{id:"advanced-setup"},"Advanced setup"),Object(i.b)("p",null,"There's a whole bunch of options for the setup.sh to achieve custom/unattended setups, which you can read all about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/advanced-setup"}),"in this guide"),"."),Object(i.b)("h4",{id:"additional-setup-quirks"},"Additional Setup Quirks"),Object(i.b)("p",null,"A few items to be aware of as known issues. Most of these have had attempts at working around them, but it's good to be aware of things to avoid:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Installer appears frozen before any user input (usually on ",Object(i.b)("inlineCode",{parentName:"li"},"Installing dependencies")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Checking repos"),"): ",Object(i.b)("inlineCode",{parentName:"li"},"control-c")," out and ",Object(i.b)("inlineCode",{parentName:"li"},"apt update && apt upgrade")," before running the installer."),Object(i.b)("li",{parentName:"ul"},"Capital letters in usernames: capital letters should never be used for usernames"),Object(i.b)("li",{parentName:"ul"},"Usernames which may conflict with a group that already exists: for example, certain images like AWS may have an ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," group out of the box. If you try to name your user ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," the install will fail in this case.")),Object(i.b)("h2",{id:"additional-help"},"Additional Help"),Object(i.b)("p",null,"If you're having troubles with any of the items in the documentation, please first consult the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/troubleshooting"}),"Troubleshooting")," guide. If that is not enough for you, join us in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/2esbu2N"}),"Discord")," and we will attempt to help you to our best ability."),Object(i.b)("p",null,"If you have found a bug or are having an issue, please open an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/liaralabs/swizzin/issues/new/choose"}),"issue on GitHub"),"."))}d.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,l(l({ref:t},u),{},{components:n})):r.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(161),o=n(160),l=n(57),s=n.n(l),u=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(l),g=O[0],y=O[1],j=Object(a.useState)(!1),v=j[0],w=j[1];if(null!=b){var N=h[b];null!=N&&N!==g&&d.some((function(e){return e.value===N}))&&y(N)}var k=function(e){y(e),null!=b&&f(b,e)},C=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",E)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",t,s.a.tabItem,{"tabs__item--active":g===t}),style:v?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},159:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(158),o=n(159),l=n(162),s=[{label:"curl",cmd:"bash <(curl -sL git.io/swizzin) && . ~/.bashrc"},{label:"wget",cmd:"bash <(wget -qO - git.io/swizzin) && . ~/.bashrc"}];t.a=function(){return r.a.createElement(r.a.Fragment,null,s&&s.length&&r.a.createElement(i.a,{defaultValue:s[0].label,values:s.map((function(e,t){return{label:e.label,value:e.label}}))},s.map((function(e,t){return r.a.createElement(o.a,{value:e.label},r.a.createElement("div",{className:"code"},r.a.createElement(l.a,{children:e.cmd,className:"bash"})))}))))}}}]);