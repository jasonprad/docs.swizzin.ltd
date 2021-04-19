(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(8),o=(n(0),n(160)),r={id:"setup",title:"Getting a developer setup",sidebar_label:"Setup"},l={unversionedId:"dev/setup",id:"dev/setup",isDocsHomePage:!1,title:"Getting a developer setup",description:"VM",source:"@site/docs/dev/setup.md",sourceDirName:"dev",slug:"/dev/setup",permalink:"/dev/setup",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/dev/setup.md",version:"current",sidebar_label:"Setup",frontMatter:{id:"setup",title:"Getting a developer setup",sidebar_label:"Setup"},sidebar:"docs",previous:{title:"So you want to contribute?",permalink:"/dev/intro"},next:{title:"The project's structure",permalink:"/dev/structure"}},c=[{value:"VM",id:"vm",children:[{value:"Multipass",id:"multipass",children:[]},{value:"LXD",id:"lxd",children:[]},{value:"Parallels",id:"parallels",children:[]}]},{value:"Editor and source code",id:"editor-and-source-code",children:[{value:"Plugins",id:"plugins",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Updating mechanism",id:"updating-mechanism",children:[]}]},{value:"Working across forks",id:"working-across-forks",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"vm"},"VM"),Object(o.b)("p",null,"We highly suggest you use a virtualized environment to test your swizzin set up. It is extremely convenient to have this isolated from the rest of your system, and be able to discard and initialize a system within minutes."),Object(o.b)("h3",{id:"multipass"},"Multipass"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sausage's preferred development setup")),Object(o.b)("div",{parentName:"div",className:"admonition-content"})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enable virtualization OS and BIOS side"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://multipass.run"},"Install multipass")),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"multipass shell")," to start a default primary VM and join the shell. "),Object(o.b)("li",{parentName:"ol"},"Get swizzin repo on your VM",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"You can mount it wherever you want (your user directory should be auto-mounted into ",Object(o.b)("inlineCode",{parentName:"li"},"/home/ubuntu")," if you're using the ",Object(o.b)("inlineCode",{parentName:"li"},"primary")," instance)"),Object(o.b)("li",{parentName:"ol"},"You can clone it wherever you want"))),Object(o.b)("li",{parentName:"ol"},"Install swizzin with ",Object(o.b)("inlineCode",{parentName:"li"},"dev=true bash /path/to/setup.sh"))),Object(o.b)("h3",{id:"lxd"},"LXD"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TODO")),Object(o.b)("h3",{id:"parallels"},"Parallels"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Download your image"),Object(o.b)("li",{parentName:"ol"},"Create a VM"),Object(o.b)("li",{parentName:"ol"},"Run through the OS install"),Object(o.b)("li",{parentName:"ol"},"Get swizzin repo on your VM",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"You can mount it wherever you want"),Object(o.b)("li",{parentName:"ol"},"You can clone it wherever you want"))),Object(o.b)("li",{parentName:"ol"},"Install swizzin with ",Object(o.b)("inlineCode",{parentName:"li"},"dev=true bash /path/to/setup.sh")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Make a snapshot"))),Object(o.b)("h2",{id:"editor-and-source-code"},"Editor and source code"),Object(o.b)("p",null,"We highly suggest you keep your code on your host and mount it into your VM so your changes are kept when you throw away VMs, and so that you need to set up your git environment only once"),Object(o.b)("p",null,"Our development setup is basically made for VSCode/Codium"),Object(o.b)("h3",{id:"plugins"},"Plugins"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"TODO")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Please see contributors.md in the main repo while this is under development"))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"This will install swizzin and as part of the setup, symlink your folder to ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/swizzin/"),". This is useful if your virtualization auto-mounts from your host. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"dev=true bash /path/to/setup.sh\n")),Object(o.b)("p",null,"You can also already have the swizzin folder mounted/cloned in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/"),", this option will switch to use the ",Object(o.b)("inlineCode",{parentName:"p"},".dev.lock")," option. This is useful if you're manually mounting the folder from your host, or have cloned directly into your VM."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"dev=true bash /etc/swizzin/setup.sh\n")),Object(o.b)("h3",{id:"updating-mechanism"},"Updating mechanism"),Object(o.b)("p",null,"The updater will always reset ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/swizzin")," to the latest commit in ",Object(o.b)("inlineCode",{parentName:"p"},"master"),", which you don't necessarily always want."),Object(o.b)("p",null,"We have made a couple ways to make sure that you can skip that, so that you can then manipulate the content of the directory on your own."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Running ",Object(o.b)("inlineCode",{parentName:"li"},"box update --no-git")),Object(o.b)("li",{parentName:"ul"},"Making ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/swizzin")," a symlink to some other directory on your FS",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This should be done for you if you ran ",Object(o.b)("inlineCode",{parentName:"li"},"setup.sh")," when it was located outside of ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/swizzin")," with ",Object(o.b)("inlineCode",{parentName:"li"},"dev=true")))),Object(o.b)("li",{parentName:"ul"},"Adding ",Object(o.b)("inlineCode",{parentName:"li"},".dev.lock")," to ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/swizzin/"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This should be done for you if you ran ",Object(o.b)("inlineCode",{parentName:"li"},"setup.sh")," when it was located in ",Object(o.b)("inlineCode",{parentName:"li"},"/etc/swizzin")," with ",Object(o.b)("inlineCode",{parentName:"li"},"dev=true")),Object(o.b)("li",{parentName:"ul"},"You can do ",Object(o.b)("inlineCode",{parentName:"li"},"touch /etc/swizzin/.dev.lock"))))),Object(o.b)("h2",{id:"working-across-forks"},"Working across forks"),Object(o.b)("p",null,"If you need a branch from someplace else, please use the GitHub CLI tool ",Object(o.b)("inlineCode",{parentName:"p"},"gh")),Object(o.b)("p",null,"You can read how to install and use the tool on the ",Object(o.b)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI website"),"."),Object(o.b)("p",null,"You can then just run ",Object(o.b)("inlineCode",{parentName:"p"},"gh pr checkout 401")," to checkout PR #401"))}u.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||p[d]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);