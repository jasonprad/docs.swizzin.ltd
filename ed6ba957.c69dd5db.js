(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(157)),l=n(158),r=n(159),c={id:"deluge",title:"Deluge",sidebar_label:"Deluge"},s={unversionedId:"applications/deluge",id:"applications/deluge",isDocsHomePage:!1,title:"Deluge",description:"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client.",source:"@site/docs/applications/deluge.mdx",slug:"/applications/deluge",permalink:"/applications/deluge",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/deluge.mdx",version:"current",sidebar_label:"Deluge",sidebar:"docs",previous:{title:"Tautulli",permalink:"/applications/tautulli"},next:{title:"Flood",permalink:"/applications/flood"}},b=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Deluge Version",id:"deluge-version",children:[]}]},{value:"Upgrading and Recompiling",id:"upgrading-and-recompiling",children:[]},{value:"How to Access",id:"how-to-access",children:[{value:"Thin Client (recommended)",id:"thin-client-recommended",children:[]},{value:"Web UI",id:"web-ui",children:[]},{value:"deluge-console",id:"deluge-console",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Default Download Location",id:"default-download-location",children:[]},{value:"Web Download Location",id:"web-download-location",children:[]},{value:"Plugins",id:"plugins",children:[]}]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[{value:"Transdroid",id:"transdroid",children:[]},{value:"Other Local Clients",id:"other-local-clients",children:[]},{value:"Connecting to a remote client (i.e. Sonarr)",id:"connecting-to-a-remote-client-ie-sonarr",children:[]}]}],u={toc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client."),Object(i.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(i.b)("p",null,"Installing Deluge is easy. Simply issue the following command from SSH:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install deluge\n")),Object(i.b)("p",null,'This command will configure Deluge and the associated web interface "Deluge-Web" for use with your user.'),Object(i.b)("p",null,"After installation, if there will be two 2 new packages installed: libtorrent, and deluge-common. Due to potential packaging conflicts with your distribution's repository, the package ",Object(i.b)("inlineCode",{parentName:"p"},"deluge-common")," has been held by apt and will not be marked for upgrade. You may see apt issue a warning regarding the held ",Object(i.b)("inlineCode",{parentName:"p"},"deluge-common")," package. This is completely normal and it means the apt mark is working as expected. The package name for ",Object(i.b)("inlineCode",{parentName:"p"},"libtorrent")," does not interfere with any apt packages and should not issue any upgrade warnings."),Object(i.b)("h3",{id:"deluge-version"},"Deluge Version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Repo"),": performs an ",Object(i.b)("inlineCode",{parentName:"li"},"apt-get install deluged deluge-console deluge-web")," and pulls whatever is available from your operating system's repository. To check versions, you can use the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.debian.org/distrib/packages"}),"Debian Package Tracker")," or the ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://packages.ubuntu.com/"}),"Ubuntu Package Tracker"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deluge 1.3.15"),": pulls the current head of the ",Object(i.b)("inlineCode",{parentName:"li"},"1.3-stable")," branch from Deluge and uses ",Object(i.b)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",Object(i.b)("inlineCode",{parentName:"li"},"dpkg"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Deluge 2"),": pulls the current head of the ",Object(i.b)("inlineCode",{parentName:"li"},"master")," branch from Deluge and uses ",Object(i.b)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",Object(i.b)("inlineCode",{parentName:"li"},"dpkg"),".")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you intend to use the thin client with your installation, your local version of Deluge must be reasonably similar to your remote version of Deluge. For instance, you're unable to use the thin client for Deluge v2 if your local version is 1.3.15."))),Object(i.b)("h4",{id:"unattended-variables"},"Unattended variables"),Object(i.b)("p",null,"When installing Deluge, you may specify the variable ",Object(i.b)("inlineCode",{parentName:"p"},"DELUGE_VERSION")," to bypass the version popup. Accepted values are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repo")," -- Will install Deluge from your OS repository"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"stable-1.3")," -- Will compile Deluge from the head of the stable-1.3 branch (1.3.15)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"master")," -- Will compile Deluge from the head of the master branch (2.0)")),Object(i.b)("h4",{id:"libtorrent-patching"},"Libtorrent Patching"),Object(i.b)("p",null,"If you would like to patch the settings pack of libtorrent (or any other aspect for that matter), the libtorrent compile will check if ",Object(i.b)("inlineCode",{parentName:"p"},"/root/libtorrent-{RC_1_1,RC_1_2}.patch")," exists. If it does, then the installer will automatically patch the libtorrent source with this patch before libtorrent is compiled. This may be of note since the ltconfig plugin does not exist for qBittorent, thus if you are interested in changing certain settings pack settings for qBittorrent settings which are not currently exposed through the WebUI, then this is the only way to change those settings without manually compiling libtorrent."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RC_1_1")," is used when compiling libtorrent 1.1.",Object(i.b)("em",{parentName:"p"}," (e.g. Deluge 1.3.15 and qBittorrent 4.1."),")"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RC_1_2")," is used when compiling libtorrent 1.2.* (e.g. Deluge 2.0 and qBittorrent >= 4.2)"),Object(i.b)("p",null,"You must supply your own patch!"),Object(i.b)("h2",{id:"upgrading-and-recompiling"},"Upgrading and Recompiling"),Object(i.b)("p",null,"If you decide you'd like to change the version of Deluge/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade deluge at any time with the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box upgrade deluge\n")),Object(i.b)("p",null,"This command will start the Deluge upgrade script. The installer will ask which version of Deluge you'd like to install and will then work on installing it."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("h3",{id:"thin-client-recommended"},"Thin Client (recommended)"),Object(i.b)("p",null,'The GTK thin client uses a secure connection to your slot to display the remote contents in the local client. Generally speaking, the thin client is capable of handling more torrents and simply offers better performance than the alternative Web UI. However, in order to use the Thin client, you must have a version of Deluge installed locally on the computer you wish to access your remote client from. Thus the argument of Thin vs Web is generally a choice between "Performance" and "Convenience". Further, the Thin client supports a broader range of plugins -- many plugins have no interface for the Web UI at all.'),Object(i.b)("p",null,"In order to use the Thin client, you must have a recent version of Deluge installed locally on your computer. Below are instructions for popular operating systems:"),Object(i.b)(l.a,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Debian/Ubuntu",value:"debuntu"},{label:"OpenSUSE",value:"opensuse"},{label:"Fedora",value:"fedora"},{label:"Arch Linux",value:"arch"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"windows",mdxType:"TabItem"},Object(i.b)("p",null,"  Grab the most recent version from ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ftp.osuosl.org/pub/deluge/windows/?C=M;O=D"}),"here")," and save it to a common location (i.e. Downloads).\nRun the installer and follow the prompts.")),Object(i.b)(r.a,{value:"macos",mdxType:"TabItem"},Object(i.b)("p",null,"  You can grab a pre-2.0 version of deluge ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://ftp.osuosl.org/pub/deluge/mac_osx/?C=M;O=D"}),"here"),", or install it via ",Object(i.b)("inlineCode",{parentName:"p"},"brew")," like so"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# For version 1.x\nbrew install --cask deluge \n# For python-based deluge\nbrew install pygobject3 gtk+3 adwaita-icon-theme\nbrew install libtorrent-rasterbar\nbrew link gettext --force\npip3 install deluge\n"))),Object(i.b)(r.a,{value:"debuntu",mdxType:"TabItem"},Object(i.b)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt update\nsudo apt install deluge\n"))),Object(i.b)(r.a,{value:"opensuse",mdxType:"TabItem"},Object(i.b)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo zypper install deluge\n"))),Object(i.b)(r.a,{value:"fedora",mdxType:"TabItem"},Object(i.b)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo dnf install deluge\n"))),Object(i.b)(r.a,{value:"arch",mdxType:"TabItem"},Object(i.b)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo pacman -S deluge\n")))),Object(i.b)("hr",null),Object(i.b)("p",null,"Now that Deluge is installed on your machine, you need to configure it to connect to your slot."),Object(i.b)("p",null,'First, we must prevent Deluge from starting in "Classic" mode. To do this, open Deluge. In the menu, go to ',Object(i.b)("inlineCode",{parentName:"p"},"Preferences > Interface"),' and un-tick the box which states "Classic Mode".'),Object(i.b)("p",null,'Deluge will prompt you to restart. Click "Ok" and re-open Deluge.'),Object(i.b)("p",null,'You\'ll notice when you re-open the application that a new connection dialog box will open. Hit the "Add" button and use the following details:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"Hostname: <the hostname of your server>\nUsername: <your username>\nPassword: <your password>\nPort: <the daemon port of your instance>\n")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During the configuration of Deluge on your slot, the setup output both your Daemon and Web ports. If you've forgotten your daemon port, you can find it with the following command:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cat ~/.config/deluge/core.conf | grep daemon_port\n")))),Object(i.b)("p",null,"Once you click okay, you'll be taken back to the connection dialog. Your new connection will be listed and if everything is okay, you'll see a green check box next to it. When you click connect, you'll be taken to your client."),Object(i.b)("h3",{id:"web-ui"},"Web UI"),Object(i.b)("p",null,"The web UI is significantly easier to access, which is why many prefer it. You can access deluge-web from ",Object(i.b)("inlineCode",{parentName:"p"},"https://yourhost.ltd/deluge"),"."),Object(i.b)("p",null,"If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a dialog box from Deluge-Web. This password is the same as the one you just entered."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This second password authentication layer cannot be fully removed due to restrictions in Deluge. However, you can increase the length of time that the cookie is stored locally by your browser to one year (from one hour):"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'sudo systemctl stop deluge-web@<username>\nsed -i \'s/"session_timeout": 3600,/"session_timeout": 31536000,/g\' ~/.config/deluge/web.conf\nsudo systemctl start deluge-web@<username>\n')))),Object(i.b)("h3",{id:"deluge-console"},"deluge-console"),Object(i.b)("h4",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"You can access the command line version of the deluge console by using the command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"deluge-console\n")),Object(i.b)("h4",{id:"connecting-to-your-daemon"},"Connecting to Your Daemon"),Object(i.b)("p",null,"Once loaded, you'll need to specify your daemon port to connect to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"connect 127.0.0.1:<daemon port>\n")),Object(i.b)("h4",{id:"available-commands"},"Available Commands"),Object(i.b)("p",null,"Once you have successfully connected to the daemon, you can get started with the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),'>>> help\nadd - Add a torrent\ncache - Show information about the disk cache\nconfig - Show and set configuration values\nconnect - Connect to a new deluge server.\ndebug - Enable and disable debugging\ndel - Remove a torrent\nexit - Exit from the client.\nhalt - Shutdown the deluge server.\nhelp - displays help on other commands\ninfo - Show information about the torrents\npause - Pause a torrent\nplugin - Manage plugins with this command\nquit - Exit from the client.\nreannounce - Update tracker for torrent(s)\nrecheck - Forces a recheck of the torrent data\nresume - Resume a torrent\nrm - Remove a torrent\nupdate-tracker - Update tracker for torrent(s)\nFor help on a specific command, use "<command> --help"\n')),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Most of the settings in the preferences should be left alone; however, you're welcome to alter settings such as ",Object(i.b)("inlineCode",{parentName:"p"},"Download location"),". That said, you should leave the majority of ",Object(i.b)("inlineCode",{parentName:"p"},"Connection Settings")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ltConfig")," settings alone, as the settings have already been optimized for use on your slot."),Object(i.b)("h3",{id:"default-download-location"},"Default Download Location"),Object(i.b)("p",null,"Files downloaded by Deluge will be placed in ",Object(i.b)("inlineCode",{parentName:"p"},"~/torrents/deluge")," by default. You can change this behavior by change the preference: ",Object(i.b)("inlineCode",{parentName:"p"},"Download to")," in the Deluge download preferences."),Object(i.b)("h3",{id:"web-download-location"},"Web Download Location"),Object(i.b)("p",null,"Similarly, any files in the default download directory (",Object(i.b)("inlineCode",{parentName:"p"},"~/torrents/deluge"),") will be available for browsing via the web server at the location: ",Object(i.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/deluge.downloads")),Object(i.b)("h3",{id:"plugins"},"Plugins"),Object(i.b)("p",null,"There are a wide array of plugins available for Deluge. You can find a list of them in the Deluge wiki, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.deluge-torrent.org/wiki/Plugins"}),"here"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Not all plugins have a web-ui component. You will likely need to install and manage the options for most of the plugins on the prior page with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#thin-client-recommended"}),"thin client"),"."))),Object(i.b)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),Object(i.b)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge."),Object(i.b)("h3",{id:"transdroid"},"Transdroid"),Object(i.b)("p",null,"Use these settings when connecting your transdroid client to your Deluge instance:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"IP or Hostname: <yourhostname.ltd>\nUser name: <your username>\nPassword: <your password>\nDeluge web password: <your password again>\nAdvanced Settings:\nPort Number: 443\nFolder: /deluge\nUse SSL: On\nAccept all SSL certificates: yes (optional with a valid ssl certificate)\n")),Object(i.b)("h3",{id:"other-local-clients"},"Other Local Clients"),Object(i.b)("p",null,"Settings for connecting another local client (i.e. Sonarr), to your Deluge instance:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Host: ",Object(i.b)("inlineCode",{parentName:"li"},"127.0.0.1")),Object(i.b)("li",{parentName:"ul"},"Daemon port: ",Object(i.b)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/core.conf | grep daemon_port")),Object(i.b)("li",{parentName:"ul"},"Web port: ",Object(i.b)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/web.conf | grep port")),Object(i.b)("li",{parentName:"ul"},"URL base: ",Object(i.b)("inlineCode",{parentName:"li"},"/deluge")," (only if accessing via ",Object(i.b)("inlineCode",{parentName:"li"},"https"),")")),Object(i.b)("h3",{id:"connecting-to-a-remote-client-ie-sonarr"},"Connecting to a remote client (i.e. Sonarr)"),Object(i.b)("p",null,"By default, the web interface of Deluge is bound to ",Object(i.b)("inlineCode",{parentName:"p"},"127.0.0.1"),". In other words, the interface isn't directly accessible from a remote connection. If you want to connect Deluge-web to a remote instance of an application (for instance, Sonarr running from home), you'll need to enable remote connections."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/getting-started/how-do-i-connect"}),"SSH")," into your slot and issue the following commands:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"box stop deluge-web\nsed -i 's/127.0.0.1/0.0.0.0/g' ~/.config/deluge/web.conf\nbox start deluge-web\n")),Object(i.b)("p",null,"You can now connect to your Deluge-web instance through ",Object(i.b)("inlineCode",{parentName:"p"},"http://hostname.ltd:<delugeport>")))}d.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?o.a.createElement(m,r(r({ref:t},s),{},{components:n})):o.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(161),l=n(160),r=n(57),c=n.n(r),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,u=e.values,d=e.groupId,p=e.className,m=Object(i.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(a.useState)(r),O=f[0],j=f[1],v=Object(a.useState)(!1),y=v[0],w=v[1];if(null!=d){var N=h[d];null!=N&&N!==O&&u.some((function(e){return e.value===N}))&&j(N)}var D=function(e){j(e),null!=d&&g(d,e)},C=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",x)}}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":O===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),k(e)},onFocus:function(){return D(t)},onClick:function(){D(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},159:function(e,t,n){"use strict";var a=n(3),o=n(0),i=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},160:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},161:function(e,t,n){"use strict";var a=n(0),o=n(171);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},171:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o}}]);