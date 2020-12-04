(window.webpackJsonp=window.webpackJsonp||[]).push([[19,16],{139:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(142),o=a(140),c=a(50),l=a.n(c),r=37,b=39;t.a=function(e){var t=e.block,a=e.children,c=e.defaultValue,d=e.values,m=e.groupId,u=e.className,p=Object(s.a)(),h=p.tabGroupChoices,v=p.setTabGroupChoices,O=Object(n.useState)(c),j=O[0],g=O[1],f=Object(n.useState)(!1),y=f[0],w=f[1];if(null!=m){var N=h[m];null!=N&&N!==j&&d.some((function(e){return e.value===N}))&&g(N)}var T=function(e){g(e),null!=m&&v(m,e)},k=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},C=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":j===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case r:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),x(e)},onFocus:function(){return T(t)},onClick:function(){T(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===j}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(2),i=a(6),s=(a(0),a(138)),o=a(139),c=a(141),l=a(143),r={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},d=[],m={rightToc:d};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"code"},Object(s.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"start",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(c.a,{value:"stop",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(c.a,{value:"restart",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(c.a,{value:"enable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(s.b)(c.a,{value:"disable",mdxType:"TabItem"},Object(s.b)(l.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}u.isMDXComponent=!0},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),s=(a(0),a(138)),o=a(48),c={id:"ombi",title:"Ombi",sidebar_label:"Ombi"},l={unversionedId:"applications/ombi",id:"applications/ombi",isDocsHomePage:!1,title:"Ombi",description:"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users.",source:"@site/docs/applications/ombi.mdx",slug:"/applications/ombi",permalink:"/applications/ombi",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/ombi.mdx",version:"current",sidebar_label:"Ombi",sidebar:"docs",previous:{title:"Medusa",permalink:"/applications/medusa"},next:{title:"Sickchill",permalink:"/applications/sickchill"}},r=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"Upgrading",id:"upgrading",children:[{value:"Upgrading to v4",id:"upgrading-to-v4",children:[]}]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],b={rightToc:r};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Ombi is a self-hosted web application that automatically gives your shared Plex or Emby users the ability to request content by themselves! Ombi can be linked to multiple TV Show and Movie DVR tools to create a seamless end-to-end experience for your users. "),Object(s.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(s.b)("p",null,"Installing Ombi is easy. Simply issue the following command from SSH:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install ombi\n")),Object(s.b)("p",null,"This command will configure and install ombi for your user."),Object(s.b)("p",null,"After installation, the files are stored in ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/Ombi")," and the configuration and database are stored in ",Object(s.b)("inlineCode",{parentName:"p"},"/etc/Ombi")),Object(s.b)("h2",{id:"upgrading"},"Upgrading"),Object(s.b)("p",null,"Ombi is installed and maintained by the unofficially provided repository. In order to keep ombi up-to-date, update your packages with:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo apt -y update\nsudo apt -y upgrade\n")),Object(s.b)("h3",{id:"upgrading-to-v4"},"Upgrading to v4"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"At the time of writing, v4 is not stable. That is why v3 is the default install, although it is EOL.\nOnce v4 becomes Stable, the default installation will no longer install v3.\nThis method will persist for the convenience of upgrading from v3 to v4."))),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Please make sure to make backups in case you would like to downgrade. You can find out how to do this on the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tidusjar/Ombi/wiki/Backups"}),"Ombi Wiki")))),Object(s.b)("p",null,"You can install the v4 through the ",Object(s.b)("em",{parentName:"p"},"other")," unofficially provided repository by running the following command."),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{}),"box upgrade ombi\n")),Object(s.b)("p",null,"The upgrading procedure on v4 is the same as above, i.e. through the use of ",Object(s.b)("inlineCode",{parentName:"p"},"apt")),Object(s.b)("h2",{id:"how-to-access"},"How to Access"),Object(s.b)("p",null,"After installation, Ombi will be available at the following web address: ",Object(s.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/ombi")),Object(s.b)("h2",{id:"service-management"},"Service Management"),Object(s.b)("p",null,"The systemd service for Ombi is not enabled for use in a multi-user environment."),Object(s.b)("p",null,"The service file resides at:"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/ombi.service\n")),Object(s.b)(o.default,{service:"ombi",mdxType:"SystemdTabs"}))}d.isMDXComponent=!0}}]);