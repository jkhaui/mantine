(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5819],{71611:function(e,t,a){"use strict";a.d(t,{$:function(){return B}});var n=a(24246);a(27378);var i=a(40624),o=a(56589),r=a(82827),l=a(91428),Text=a(26569),s=a(22971),c=a(8671),d=a(86010),u=a(9121),m=a(86175),b=a(73832),p=a.n(b);function h(e){let{icon:t,...a}=e;return(0,n.jsx)(c.z,{component:"a",target:"_blank",rel:"noopener noreferrer",leftSection:t,radius:"md",classNames:{root:p().socialButton,section:p().socialButtonSection},...a})}function k(e){let{className:t,...a}=e;return(0,n.jsx)(h,{className:(0,i.Z)(p().discordButton,t),icon:(0,n.jsx)(d.D,{size:16}),href:m.$.discordLink,...a,children:"Join Discord community"})}function f(e){let{className:t,...a}=e;return(0,n.jsx)(h,{className:(0,i.Z)(p().twitterButton,t),icon:(0,n.jsx)(u.Z,{size:16}),href:m.$.twitterLink,...a,children:"Follow Mantine on Twitter"})}var v=a(17992),_=a(79894),g=a.n(_),x=a(13830),y=a.n(x);function w(e){let{data:t,title:a}=e,i=t.map((e,t)=>(0,n.jsx)(Text.x,{className:y().link,component:"next"===e.type?g():"a",href:e.link,children:e.label},t));return(0,n.jsxs)("div",{className:y().wrapper,children:[(0,n.jsx)(Text.x,{className:y().title,children:a}),i]})}let T=[{title:"About",data:[{type:"next",label:"Contribute",link:"/contribute"},{type:"next",label:"About Mantine",link:"/about"},{type:"next",label:"Changelog",link:"/changelog/previous-versions"},{type:"link",label:"Releases",link:m.$.gitHubLinks.releases}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:m.$.discordLink},{type:"link",label:"Follow on Twitter",link:m.$.twitterLink},{type:"link",label:"Follow on Github",link:"https://github.com/rtivital"},{type:"link",label:"GitHub discussions",link:m.$.gitHubLinks.discussions}]},{title:"Project",data:[{type:"link",label:"Mantine UI",link:m.$.uiLink},{type:"link",label:"Documentation",link:m.$.docsLink},{type:"link",label:"Github organization",link:m.$.gitHubLinks.organization},{type:"link",label:"npm organization",link:m.$.npmLink}]}];var N=a(40872),j=a.n(N);function B(e){let{withNavbar:t}=e,a=T.map(e=>(0,n.jsx)(w,{data:e.data,title:e.title},e.title));return(0,n.jsxs)("div",{className:j().root,children:[(0,n.jsx)("div",{className:j().spacer}),(0,n.jsx)(o.x,{mod:{"with-navbar":t},className:(0,i.Z)(j().wrapper,r.Z.classNames.fullWidth),children:(0,n.jsxs)(l.W,{size:1100,children:[(0,n.jsxs)("div",{className:j().inner,children:[(0,n.jsxs)("div",{className:j().logoSection,children:[(0,n.jsx)(v.T,{}),(0,n.jsx)(Text.x,{className:j().description,fz:"sm",children:"Build fully functional accessible web applications faster than ever"})]}),(0,n.jsx)("div",{className:j().groups,children:a})]}),(0,n.jsx)("div",{className:j().afterFooter,children:(0,n.jsxs)(s.Z,{justify:"space-between",wrap:"wrap",children:[(0,n.jsxs)(Text.x,{fz:"xs",className:j().afterFooterNote,children:["Built by ",(0,n.jsx)("a",{href:"https://github.com/rtivital",children:"Vitaly Rtishchev"})," and"," ",(0,n.jsx)("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors",children:"these awesome people"})]}),(0,n.jsxs)("div",{className:j().social,children:[(0,n.jsx)(k,{className:j().socialButton}),(0,n.jsx)(f,{className:j().socialButton})]})]})})]})})]})}},40872:function(e){e.exports={root:"Footer_root__d69lf",spacer:"Footer_spacer__m8ICY",wrapper:"Footer_wrapper__rpDYh",inner:"Footer_inner__FbJ6a",logoSection:"Footer_logoSection__60cxm",description:"Footer_description__s_1Tl",title:"Footer_title__D7snR",afterFooter:"Footer_afterFooter__Bk3gc",afterFooterNote:"Footer_afterFooterNote__xzYGO",groups:"Footer_groups__y7eTr",social:"Footer_social__RYYyg",socialButton:"Footer_socialButton___uZwM"}},13830:function(e){e.exports={wrapper:"LinksGroup_wrapper__LUD9P",link:"LinksGroup_link__rMava",title:"LinksGroup_title__EBDF3"}},73832:function(e){e.exports={socialButton:"SocialButton_socialButton__YzW0G",socialButtonSection:"SocialButton_socialButtonSection__yZ0Qx",discordButton:"SocialButton_discordButton__WILTe",twitterButton:"SocialButton_twitterButton__Nss83"}},66763:function(e,t,a){"use strict";a.d(t,{a:function(){return n}});let n={selectors:{root:"Root element",label:"Thumb label",thumb:"Thumb element",trackContainer:"Wraps track element",track:"Slider track",bar:"Track filled part",markWrapper:"Contains `mark` and `markLabel` elements",mark:"Mark displayed on track",markLabel:"Label of the associated mark, displayed below track"},vars:{root:{"--slider-size":"Controls track `height`","--slider-color":"Controls filled track, thumb and marks `background`","--slider-thumb-size":"Controls thumb `width` and `height`","--slider-radius":"Controls `border-radius` of track and thumb"}},modifiers:[{modifier:"data-disabled",selector:["trackContainer","track","bar","thumb","mark"],condition:"`disabled` prop is set"},{modifier:"data-inverted",selector:["track","bar"],condition:"`inverted` prop is set"},{modifier:"data-dragging",selector:"thumb",condition:"slider is being dragged"},{modifier:"data-filled",selector:"mark",condition:"mark position is less or equal slider value"}]}},91428:function(e,t,a){"use strict";a.d(t,{W:function(){return b}});var n=a(27378),i=a(92082),o=a(83453),r=a(96739),l=a(6231),s=a(56589),c=a(20410),d={root:"m-7485cace"};let u={},m=(0,o.Z)((e,{size:t,fluid:a})=>({root:{"--container-size":a?void 0:(0,i.ap)(t,"container-size")}})),b=(0,c.d)((e,t)=>{let a=(0,r.w)("Container",u,e),{classNames:i,className:o,style:c,styles:b,unstyled:p,vars:h,fluid:k,...f}=a,v=(0,l.y)({name:"Container",classes:d,props:a,className:o,style:c,classNames:i,styles:b,unstyled:p,vars:h,varsResolver:m});return n.createElement(s.x,{ref:t,mod:{fluid:k},...v("root"),...f})});b.classes=d,b.displayName="@mantine/core/Container"},83601:function(e,t,a){"use strict";a.d(t,{m:function(){return L}});var n=a(27378),i=a(31002),o=a(58675),r=a(88140),l=a(92082),s=a(83453),c=a(89738),d=a(96739),u=a(6231),m=a(56589),b=a(20410),p=a(71656);let[h,k]=(0,p.R)("Tabs component was not found in the tree");var f={root:"m-89d60db1","list--default":"m-576c9d4",list:"m-89d33d6d",panel:"m-b0c91715",tab:"m-4ec4dce6",tabSection:"m-fc420b1f","tab--default":"m-539e827b","list--outline":"m-6772fbd5","tab--outline":"m-b59ab47c","tab--pills":"m-c3381914"};let v={},_=(0,b.d)((e,t)=>{let a=(0,d.w)("TabsList",v,e),{children:i,className:o,grow:r,justify:l,classNames:s,styles:c,style:u,...b}=a,p=k();return n.createElement(m.x,{...b,...p.getStyles("list",{className:o,style:u,classNames:s,styles:c,props:a,variant:p.variant}),ref:t,role:"tablist",variant:p.variant,mod:{grow:r,orientation:p.orientation,placement:"vertical"===p.orientation&&p.placement,inverted:p.inverted},"aria-orientation":p.orientation,__vars:{"--tabs-justify":l}},i)});_.classes=f,_.displayName="@mantine/core/TabsList";let g={},x=(0,b.d)((e,t)=>{let a=(0,d.w)("TabsPanel",g,e),{children:i,className:o,value:r,classNames:l,styles:s,style:c,...u}=a,b=k(),p=b.value===r,h=b.keepMounted||a.keepMounted?i:p?i:null;return n.createElement(m.x,{...u,...b.getStyles("panel",{className:o,classNames:l,styles:s,style:[c,p?void 0:{display:"none"}],props:a}),ref:t,mod:{orientation:b.orientation},role:"tabpanel",id:b.getPanelId(r),"aria-labelledby":b.getTabId(r)},h)});x.classes=f,x.displayName="@mantine/core/TabsPanel";var y=a(61734),w=a(2256),T=a(49134),N=a(19397);let j={},B=(0,b.d)((e,t)=>{let a=(0,d.w)("TabsTab",j,e),{className:i,children:o,rightSection:r,leftSection:l,value:s,onClick:u,onKeyDown:m,disabled:b,color:p,style:h,classNames:f,styles:v,vars:_,...g}=a,x=(0,w.rZ)(),{dir:B}=(0,T.gm)(),F=k(),C=s===F.value,S={classNames:f,styles:v,props:a};return n.createElement(N.k,{...g,...F.getStyles("tab",{className:i,style:h,variant:F.variant,...S}),disabled:b,unstyled:F.unstyled,variant:F.variant,mod:{active:C,disabled:b,orientation:F.orientation,inverted:F.inverted,placement:"vertical"===F.orientation&&F.placement},ref:t,role:"tab",id:F.getTabId(s),"aria-selected":C,tabIndex:C||null===F.value?0:-1,"aria-controls":F.getPanelId(s),onClick:e=>{F.onChange(F.allowTabDeactivation&&s===F.value?null:s),u?.(e)},__vars:{"--tabs-color":p?(0,c.p)(p,x):void 0},onKeyDown:(0,y.R)({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:F.activateTabWithKeyboard,loop:F.loop,orientation:F.orientation||"horizontal",dir:B,onKeyDown:m})},l&&n.createElement("span",{...F.getStyles("tabSection",S),"data-position":"left"},l),o&&n.createElement("span",{...F.getStyles("tabLabel",S)},o),r&&n.createElement("span",{...F.getStyles("tabSection",S),"data-position":"right"},r))});B.classes=f,B.displayName="@mantine/core/TabsTab";let F="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",C={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},S=(0,s.Z)((e,{radius:t,color:a})=>({root:{"--tabs-radius":(0,l.H5)(t),"--tabs-color":(0,c.p)(a,e)}})),L=(0,b.d)((e,t)=>{let a=(0,d.w)("Tabs",C,e),{defaultValue:l,value:s,onChange:c,orientation:b,children:p,loop:k,id:v,activateTabWithKeyboard:_,allowTabDeactivation:g,variant:x,color:y,radius:w,inverted:T,placement:N,keepMounted:j,classNames:B,styles:L,unstyled:z,className:E,style:$,vars:Z,...D}=a,M=(0,i.M)(v),[I,P]=(0,o.C)({value:s,defaultValue:l,finalValue:null,onChange:c}),W=(0,u.y)({name:"Tabs",props:a,classes:f,className:E,style:$,classNames:B,styles:L,unstyled:z,vars:Z,varsResolver:S});return n.createElement(h,{value:{placement:N,value:I,orientation:b,id:M,loop:k,activateTabWithKeyboard:_,getTabId:(0,r.A)(`${M}-tab`,F),getPanelId:(0,r.A)(`${M}-panel`,F),onChange:P,allowTabDeactivation:g,variant:x,color:y,radius:w,inverted:T,keepMounted:j,unstyled:z,getStyles:W}},n.createElement(m.x,{ref:t,id:M,variant:x,mod:{orientation:b,inverted:"horizontal"===b&&T,placement:"vertical"===b&&N},...W("root"),...D},p))});L.classes=f,L.displayName="@mantine/core/Tabs",L.Tab=B,L.Panel=x,L.List=_},88140:function(e,t,a){"use strict";function n(e,t){return a=>{if("string"!=typeof a||0===a.trim().length)throw Error(t);return`${e}-${a}`}}a.d(t,{A:function(){return n}})},9121:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(27378),i=a(56589),o=a(71078);function r({size:e,style:t,...a}){return n.createElement(i.x,{component:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209",fill:"currentColor",style:[{width:(0,o.h)(e),height:(0,o.h)(e)},t],...a},n.createElement("path",{fillRule:"nonzero",d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"}))}}}]);