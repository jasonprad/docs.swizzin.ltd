"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[9040,865,2295,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},50:function(e,t,n){var a=n(7294),o=n(2713);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},1996:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),r=n(4544),i=n(9962),s=n(8002),l="code_1pQk";var d=function(e){var t=(0,i.Z)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,d=(0,o.useState)(!1),p=d[0],u=d[1];(0,o.useEffect)((function(){u(!0)}),[]);var c=(0,s.Z)().isDarkTheme,m=n.theme,h=n.darkTheme||m,k=c?h:m,f=e.language,g=void 0===f?"bash":f,v=e.code;return o.createElement(r.ZP,(0,a.Z)({},r.lG,{code:v,language:g,key:p,theme:k}),(function(e){var t=e.className,n=e.style,a=e.tokens,r=e.getLineProps,i=e.getTokenProps;return o.createElement("pre",{className:t+" "+l,style:n},a.map((function(e,t){return o.createElement("div",r({line:e,key:t}),e.map((function(e,t){return o.createElement("span",i({token:e,key:t}))})))})))}))}},4297:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o=n(50),r=n(6010),i="tabItem_HqPw",s=37,l=39;var d=function(e){var t=e.block,n=e.children,d=e.defaultValue,p=e.values,u=e.groupId,c=e.className,m=(0,o.Z)(),h=m.tabGroupChoices,k=m.setTabGroupChoices,f=(0,a.useState)(d),g=f[0],v=f[1],y=(0,a.useState)(!1),b=y[0],w=y[1];if(null!=u){var N=h[u];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&v(N)}var x=function(e){v(e),null!=u&&k(u,e)},T=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},S=function(){w(!1)};return(0,a.useEffect)((function(){return window.addEventListener("keydown",C),window.addEventListener("mousedown",S),function(){window.removeEventListener("keydown",C),window.removeEventListener("mousedown",S)}}),[]),a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},c)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:(0,r.Z)("tabs__item",t,i,{"tabs__item--active":g===t}),style:b?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),C(e)},onFocus:function(){return x(t)},onClick:function(){x(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},2816:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return h},default:function(){return f}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(204),s=n(9971),l=n(2830),d=n(1899),p=["components"],u={id:"sonarr",title:"Sonarr",sidebar_label:"Sonarr"},c=void 0,m={unversionedId:"applications/sonarr",id:"applications/sonarr",isDocsHomePage:!1,title:"Sonarr",description:"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.",source:"@site/docs/applications/sonarr.mdx",sourceDirName:"applications",slug:"/applications/sonarr",permalink:"/applications/sonarr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/sonarr.mdx",version:"current",frontMatter:{id:"sonarr",title:"Sonarr",sidebar_label:"Sonarr"},sidebar:"docs",previous:{title:"Sickgear",permalink:"/applications/sickgear"},next:{title:"Radarr",permalink:"/applications/radarr"}},h=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Optional parameters",id:"optional-parameters",children:[]}]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Migrating from v2",id:"migrating-from-v2",children:[{value:"v2 setups that were modified",id:"v2-setups-that-were-modified",children:[]}]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Add a new show (and your first root directory)",id:"add-a-new-show-and-your-first-root-directory",children:[]},{value:"Connect download clients",id:"connect-download-clients",children:[]},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",children:[]},{value:"Add an indexer with NZBHydra",id:"add-an-indexer-with-nzbhydra",children:[]},{value:"Sonarr and user homedir permissions",id:"sonarr-and-user-homedir-permissions",children:[]},{value:"Other tasks",id:"other-tasks",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"Downgrading to v2",id:"downgrading-to-v2",children:[]}],k={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sonarr is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"Installing Sonarr is easy. Simply issue the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install sonarr\n")),(0,r.kt)("p",null,"This command will configure sonarr for your user. Sonarr is installed via an apt repository, thus the easiest way to keep it up to date is by issuing the command ",(0,r.kt)("inlineCode",{parentName:"p"},"apt update && apt upgrade"),". The sonarr base files will be located in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/sonarr")),(0,r.kt)("h3",{id:"optional-parameters"},"Optional parameters"),(0,r.kt)(i.default,{mdxType:"InstallOptsWarning"}),(0,r.kt)("p",null,"The following is an example of how this would look"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"export sonarrv3owner='autodlbot'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sonarrv2owner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to specify a non-master user which sonarr v2 might have ran under before for the migration and user-group adding."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sonarrv3owner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to specify a non-master user which sonarr v3 will run as after the installation.")))),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"Once setup, sonarr will be available at the link ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/sonarr")),(0,r.kt)("h2",{id:"migrating-from-v2"},"Migrating from v2"),(0,r.kt)("p",null,"The install script for Sonarr v3 includes functionality to migrate and remove a v2 (",(0,r.kt)("inlineCode",{parentName:"p"},"sonarr"),") installation. Please keep the v2 installed for optimal results. ",(0,r.kt)("strong",{parentName:"p"},"It is not possible to have both v2 and v3 installed at the same time.")),(0,r.kt)("p",null,"An additional backup of the v2 configuration is created in ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/sonarrv2.bak/"),", which includes an internal Sonarr backup file triggered via API right before the installation."),(0,r.kt)("p",null,"Please check the Downgrading chapter if you want to go back."),(0,r.kt)("h3",{id:"v2-setups-that-were-modified"},"v2 setups that were modified"),(0,r.kt)("p",null,"If you have toyed with the v2 Sonarr configuration and are not using the vanilla setup by swizzin (e.g. modified service files, overrides, etc.), you should make sure to run some extra steps before."),(0,r.kt)("p",null,"You should generally follow the following steps at your own risk. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Back up your sonarrv2 through the web interface."),(0,r.kt)("li",{parentName:"ol"},"Make a remote copy of the entire Sonarr folder just in case."),(0,r.kt)("li",{parentName:"ol"},"Stop your sonarr service or process"),(0,r.kt)("li",{parentName:"ol"},"Remove Sonarrv2 through ",(0,r.kt)("inlineCode",{parentName:"li"},"box remove sonarrv2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"verify you cleaned up all custom configs in random places"))),(0,r.kt)("li",{parentName:"ol"},"Link/copy your old ",(0,r.kt)("inlineCode",{parentName:"li"},".config/nzb")," directory to the sonarrv3 migration path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'ln -s /home/"${sonarrv2owner}"/.config/NzbDrone /usr/lib/sonarr/nzbdrone-appdata')))),(0,r.kt)("li",{parentName:"ol"},"Install sonarr v3 with ",(0,r.kt)("inlineCode",{parentName:"li"},"box install sonarrv3"))),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"Service status for sonarr is handled by systemd and is owned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"sonarr")," package. The systemd service file resides at"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/lib/systemd/system/sonarr.service\n")),(0,r.kt)("p",null,"It is not recommended to make alterations directly to this file. Rather, use ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl edit sonarr")," if you would like to make adjustments."),(0,r.kt)(s.default,{service:"sonarr",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Out of the box, Sonarr comes with very little pre-set configuration. Following are some basic tasks to help get your client up and running."),(0,r.kt)("h3",{id:"add-a-new-show-and-your-first-root-directory"},"Add a new show (and your first root directory)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"At the top, click series."),(0,r.kt)("li",{parentName:"ol"},"Click the button ",(0,r.kt)("inlineCode",{parentName:"li"},"+ Add Series")),(0,r.kt)("li",{parentName:"ol"},"Type the name of the show you want to add"),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Path"),", choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Add a new path"),". Enter the path for the folder you wish to add your Sonarr shows to and click the green check-mark to add the directory.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'"/home/<username>/media/TV Shows"'))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Change the other settings to your own needs"),(0,r.kt)("li",{parentName:"ol"},"Click the green + to add the show.")),(0,r.kt)("h3",{id:"connect-download-clients"},"Connect download clients"),(0,r.kt)(l.default,{mdxType:"Conn4Arrs"}),(0,r.kt)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),(0,r.kt)("p",null,"Sonarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",(0,r.kt)("a",{parentName:"p",href:"/applications/jackett"},"Jackett"),". To add an indexer with Jackett, use the following steps."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")),(0,r.kt)("p",{parentName:"div"},"We need to edit this link to ",(0,r.kt)("strong",{parentName:"p"},"remove https")," and ",(0,r.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,r.kt)("inlineCode",{parentName:"p"},"12345"),", your edited URL would look like this:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/\n")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Torrent")," choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Torznab")),(0,r.kt)("li",{parentName:"ol"},"Use the settings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: <tracker name>\nURL: <click copy torznab feed in jackett and modify as per above>\nAPI: <copy and paste from jackett UI>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"add-an-indexer-with-nzbhydra"},"Add an indexer with NZBHydra"),(0,r.kt)("p",null,"Sonarr only supports a few indexers out of the box, but the indexers can be expanded by using the application ",(0,r.kt)("a",{parentName:"p",href:"/applications/nzbhydra"},"NZBHydra"),". To add an indexer with NZBHydra, use the following steps."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, when receiving the newznab feeds from NZBHydra, it will need to be modified to be connected with the application. The default link looks like:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhostname.ltd>/nzbhydra/api\n")),(0,r.kt)("p",{parentName:"div"},"We need to edit this link to ",(0,r.kt)("strong",{parentName:"p"},"remove https"),", ",(0,r.kt)("strong",{parentName:"p"},"change your host to localhost")," and ",(0,r.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,r.kt)("inlineCode",{parentName:"p"},"5076"),", your edited URL would look like this:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://localhost:5076/nzbhydra/api\n")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",(0,r.kt)("inlineCode",{parentName:"li"},"+")," to add a new indexer."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Usenet")," choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Newznab")),(0,r.kt)("li",{parentName:"ol"},"Use the settings:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: NZBHydra2\nURL: <click copy Newznab feed in NZBHydra and modify as per above>\nAPI: <copy and paste from NZBHydra UI>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,r.kt)("h3",{id:"sonarr-and-user-homedir-permissions"},"Sonarr and user homedir permissions"),(0,r.kt)("p",null,"Sonarr is running as the master user (unless changed in install options using parameters), so that user needs to be able to see the directories you'd like sonarr to see as well. You can achieve this by adding the desired user to the group of whoever runs the sonarr process. e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"usermod -a -G <user with data> <master/sonarrv3owner>")),(0,r.kt)("h3",{id:"other-tasks"},"Other tasks"),(0,r.kt)("p",null,"You may wish to further alter your setup by setting quality profiles or setting up post-processing so that media is automatically transferred to your Sonarr library when your torrents are completed. If you need further help, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sonarr/Sonarr/wiki"},"Sonarr Wiki"),"."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)(d.default,{mdxType:"Troubleshooting"}),(0,r.kt)("p",null,"Please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sonarr/Sonarr/issues"},"github issues")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/M6BvZn5"},"Sonarr Discord community")," in case you are having problems with this application."),(0,r.kt)("h2",{id:"downgrading-to-v2"},"Downgrading to v2"),(0,r.kt)("p",null,"In order to downgrade, remove ",(0,r.kt)("inlineCode",{parentName:"p"},"sonarrv3")," and install ",(0,r.kt)("inlineCode",{parentName:"p"},"sonarr")," again. The original configuration files will be untouched. Any changes in v3 will not be migrated, as the installation will only look at the old files."),(0,r.kt)("p",null,"If the installation does not reproduce your original v2 content, please see the Migration and Backup steps on the Sonarr Github, and use the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/swizzin/backups/sonarrv2.bak"),' as the "original" files.'),(0,r.kt)("p",null,"Please consult the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sonarr/Sonarr/wiki/Backup-and-Restore"},"Sonarr's wiki for downgrading steps")),(0,r.kt)("p",null,"Therefore, you could achieve a downgrade with the following (untested!) example steps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"box remove sonarrv3\nbox install sonarr\nsystemctl stop sonarr@<master>\ncd /home/<master>/.config\nmv sonarr sonarrv3bak\ncp /root/swizzin/backups/sonarrv2.back./* NzbDrone/\nchown -R <master>:<master> NzbDrone\nsystemctl start sonarr@<master>\n")))}f.isMDXComponent=!0},2830:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(4297),s=n(8448),l=n(1996),d=["components"],p={},u=void 0,c={unversionedId:"snippets/conn4arr",id:"snippets/conn4arr",isDocsHomePage:!1,title:"conn4arr",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/snippets/conn4arr.mdx",sourceDirName:"snippets",slug:"/snippets/conn4arr",permalink:"/snippets/conn4arr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/conn4arr.mdx",version:"current",frontMatter:{}},m=[],h={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To add a download client, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,r.kt)(i.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Transmission",value:"transmission"},{label:"Deluge",value:"deluge"},{label:"nzbGet",value:"nzbget"},{label:"qBittorrent",value:"qbittorrent"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"rutorrent",mdxType:"TabItem"},(0,r.kt)(l.Z,{code:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>",lang:"plaintext",mdxType:"CodeSnippet"})),(0,r.kt)(s.Z,{value:"transmission",mdxType:"TabItem"},(0,r.kt)(l.Z,{code:"To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,\nwhen logged in as the user you want to use transmission of (i.e. not root).\n----------\nHost: 127.0.0.1\nPort: <See above, e.g. 9091>\nURL Base: /transmission/ (Should be default)\nUsername: <your username>\nPassword: <your password>\nCategory: <optional, e.g. Sonarr or TV>\nConnect using HTTPS: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),(0,r.kt)(s.Z,{value:"deluge",mdxType:"TabItem"},(0,r.kt)(l.Z,{code:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"})),(0,r.kt)(s.Z,{value:"nzbget",mdxType:"TabItem"},(0,r.kt)(l.Z,{code:"NZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",lang:"plaintext",mdxType:"CodeSnippet"})),(0,r.kt)(s.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,r.kt)(l.Z,{code:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",lang:"plaintext",mdxType:"CodeSnippet"}))))}k.isMDXComponent=!0},204:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],s={},l=void 0,d={unversionedId:"snippets/installoptswarning",id:"snippets/installoptswarning",isDocsHomePage:!1,title:"installoptswarning",description:"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.",source:"@site/docs/snippets/installoptswarning.md",sourceDirName:"snippets",slug:"/snippets/installoptswarning",permalink:"/snippets/installoptswarning",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/installoptswarning.md",version:"current",frontMatter:{}},p=[],u={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure you know what you're doing!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Please note that it is difficult for us to support these options as they are custom for each install")),(0,r.kt)("p",{parentName:"div"},"None of the options are sanity-checked on install so setting something wrong could break your installation."),(0,r.kt)("p",{parentName:"div"},"Again, you do not need to set these if you don't know what you're doing."))),(0,r.kt)("p",null,"There are a couple options you can set ",(0,r.kt)("strong",{parentName:"p"},"before")," installing transmission through export. "),(0,r.kt)("p",null,"If you'd like to use one of these, run ",(0,r.kt)("inlineCode",{parentName:"p"},"export option=value")," ",(0,r.kt)("strong",{parentName:"p"},"before")," running the install command."))}c.isMDXComponent=!0},9971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return k}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=n(4297),s=n(8448),l=n(1462),d=["components"],p={},u=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},m=[],h={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0},1899:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(4137)),i=["components"],s={},l=void 0,d={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",isDocsHomePage:!1,title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",version:"current",frontMatter:{}},p=[],u={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can always also try the ",(0,r.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!"))))}c.isMDXComponent=!0}}]);