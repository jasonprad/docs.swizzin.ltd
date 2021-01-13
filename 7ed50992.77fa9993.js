(window.webpackJsonp=window.webpackJsonp||[]).push([[45,17],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(2),s=a(6),i=(a(0),a(144)),o=a(48),r={id:"emby",title:"Emby",sidebar_label:"Emby"},c={unversionedId:"applications/emby",id:"applications/emby",isDocsHomePage:!1,title:"Emby",description:"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets.",source:"@site/docs/applications/emby.mdx",slug:"/applications/emby",permalink:"/applications/emby",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/emby.mdx",version:"current",sidebar_label:"Emby",sidebar:"docs",previous:{title:"Znc",permalink:"/applications/znc"},next:{title:"Jellyfin",permalink:"/applications/jellyfin"}},l=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Further setup",id:"further-setup",children:[]}],b={rightToc:l};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets."),Object(i.b)("p",null,"Or sit back and enjoy Emby from the living room. Emby apps are available for Android TV, Amazon Fire TV, Chromecast, Roku, Xbox, Home Theater Computers, and more."),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing emby is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install emby\n")),Object(i.b)("p",null,"This command will configure an emby docker container for your user."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"Emby can be accessed from your browser at ",Object(i.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/emby/")),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)("p",null,"The systemd service file for Emby is the default file. No modifications have been made to change its arguments."),Object(i.b)(o.default,{service:"emby-server",mdxType:"SystemdTabs"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"When you load up Emby for the first time, you'll be greeted by the setup wizard. Setup is fairly straightforward."),Object(i.b)("h2",{id:"further-setup"},"Further setup"),Object(i.b)("p",null,"While not covered in this documentation, there are further guides and documentations on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://emby.media/community/index.php?/forum/24-tutorials-and-guides/"}),"Emby Forum")))}u.isMDXComponent=!0},145:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(148),o=a(146),r=a(50),c=a.n(r),l=37,b=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=Object(i.a)(),y=p.tabGroupChoices,h=p.setTabGroupChoices,f=Object(n.useState)(r),v=f[0],O=f[1],j=Object(n.useState)(!1),w=j[0],T=j[1];if(null!=d){var g=y[d];null!=g&&g!==v&&u.some((function(e){return e.value===g}))&&O(g)}var x=function(e){O(e),null!=d&&h(d,e)},k=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||T(!0)},C=function(){T(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",E),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",E),window.removeEventListener("mousedown",C)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":v===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),E(e)},onFocus:function(){return x(t)},onClick:function(){x(t),T(!1)},onPointerDown:function(){return T(!1)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(2),s=a(6),i=(a(0),a(144)),o=a(145),r=a(147),c=a(149),l={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current"},u=[],d={rightToc:u};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"status",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"start",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(c.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0}}]);