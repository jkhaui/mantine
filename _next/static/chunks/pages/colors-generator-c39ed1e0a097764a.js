(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5318],{37983:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors-generator",function(){return n(18060)}])},71611:function(e,t,n){"use strict";n.d(t,{$:function(){return B}});var r=n(24246);n(27378);var o=n(40624),i=n(56589),l=n(82827),s=n(91428),Text=n(26569),a=n(22971),c=n(8671),u=n(86010),d=n(9121),h=n(86175),m=n(73832),_=n.n(m);function p(e){let{icon:t,...n}=e;return(0,r.jsx)(c.z,{component:"a",target:"_blank",rel:"noopener noreferrer",leftSection:t,radius:"md",classNames:{root:_().socialButton,section:_().socialButtonSection},...n})}function x(e){let{className:t,...n}=e;return(0,r.jsx)(p,{className:(0,o.Z)(_().discordButton,t),icon:(0,r.jsx)(u.D,{size:16}),href:h.$.discordLink,...n,children:"Join Discord community"})}function f(e){let{className:t,...n}=e;return(0,r.jsx)(p,{className:(0,o.Z)(_().twitterButton,t),icon:(0,r.jsx)(d.Z,{size:16}),href:h.$.twitterLink,...n,children:"Follow Mantine on Twitter"})}var j=n(17992),g=n(79894),b=n.n(g),v=n(13830),w=n.n(v);function k(e){let{data:t,title:n}=e,o=t.map((e,t)=>(0,r.jsx)(Text.x,{className:w().link,component:"next"===e.type?b():"a",href:e.link,children:e.label},t));return(0,r.jsxs)("div",{className:w().wrapper,children:[(0,r.jsx)(Text.x,{className:w().title,children:n}),o]})}let C=[{title:"About",data:[{type:"next",label:"Contribute",link:"/contribute"},{type:"next",label:"About Mantine",link:"/about"},{type:"next",label:"Changelog",link:"/changelog/previous-versions"},{type:"link",label:"Releases",link:h.$.gitHubLinks.releases}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:h.$.discordLink},{type:"link",label:"Follow on Twitter",link:h.$.twitterLink},{type:"link",label:"Follow on Github",link:"https://github.com/rtivital"},{type:"link",label:"GitHub discussions",link:h.$.gitHubLinks.discussions}]},{title:"Project",data:[{type:"link",label:"Mantine UI",link:h.$.uiLink},{type:"link",label:"Documentation",link:h.$.docsLink},{type:"link",label:"Github organization",link:h.$.gitHubLinks.organization},{type:"link",label:"npm organization",link:h.$.npmLink}]}];var y=n(40872),N=n.n(y);function B(e){let{withNavbar:t}=e,n=C.map(e=>(0,r.jsx)(k,{data:e.data,title:e.title},e.title));return(0,r.jsxs)("div",{className:N().root,children:[(0,r.jsx)("div",{className:N().spacer}),(0,r.jsx)(i.x,{mod:{"with-navbar":t},className:(0,o.Z)(N().wrapper,l.Z.classNames.fullWidth),children:(0,r.jsxs)(s.W,{size:1100,children:[(0,r.jsxs)("div",{className:N().inner,children:[(0,r.jsxs)("div",{className:N().logoSection,children:[(0,r.jsx)(j.T,{}),(0,r.jsx)(Text.x,{className:N().description,fz:"sm",children:"Build fully functional accessible web applications faster than ever"})]}),(0,r.jsx)("div",{className:N().groups,children:n})]}),(0,r.jsx)("div",{className:N().afterFooter,children:(0,r.jsxs)(a.Z,{justify:"space-between",wrap:"wrap",children:[(0,r.jsxs)(Text.x,{fz:"xs",className:N().afterFooterNote,children:["Built by ",(0,r.jsx)("a",{href:"https://github.com/rtivital",children:"Vitaly Rtishchev"})," and"," ",(0,r.jsx)("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors",children:"these awesome people"})]}),(0,r.jsxs)("div",{className:N().social,children:[(0,r.jsx)(x,{className:N().socialButton}),(0,r.jsx)(f,{className:N().socialButton})]})]})})]})})]})}},25179:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r=n(24246);n(27378);var o=n(71611),i=n(21400),l=n.n(i);function s(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:l().content,children:t}),(0,r.jsx)(o.$,{withNavbar:!0})]})}},18060:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var r=n(24246),o=n(27378),i=n(88038),l=n.n(i),s=n(25179),a=n(40624),c=n(12929),u=n.n(c);function d(e){let{className:t,children:n,...o}=e;return(0,r.jsx)("div",{className:(0,a.Z)(u().wrapper,t),...o,children:(0,r.jsx)("div",{className:u().container,children:n})})}function h(e){let{title:t,...n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"".concat(t," | Mantine")})}),(0,r.jsx)(s._,{children:(0,r.jsx)(d,{...n})})]})}var m=n(86677),_=n(2488),p=n(8298),x=n.n(p);let f=[.96,.907,.805,.697,.605,.547,.518,.445,.395,.34],j=[.32,.16,.08,.04,0,0,.04,.08,.16,.32];var g=n(37430),b=n(16202),v=n(76927);function w(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}var k=n(22971),C=n(41312),y=n.n(C);function N(e){let{colors:t,baseColorIndex:n,displayColorsInfo:o}=e,i=t.map((e,t)=>(0,r.jsx)("div",{className:y().item,children:(0,r.jsx)(b.b,{color:e.hex(),radius:0,className:y().swatch,withShadow:!1,"data-base":t===n||void 0,c:!function(e,t=.179){return function(e){let t=w(e.r),n=w(e.g),r=w(e.b);return .2126*t+.7152*n+.0722*r}((0,v.c)(e))>t}(e.hex())?"white":"black",children:o&&(0,r.jsxs)("div",{className:y().label,children:[(0,r.jsx)("span",{className:y().index,children:t}),(0,r.jsx)("span",{className:y().hex,children:e.hex()})]})})},t));return(0,r.jsx)(k.Z,{gap:0,wrap:"nowrap",className:y().root,children:i})}var B=n(16659),F=n(51979),T=n(1674),z=n(8671),L=n(7033),D=n(36227),S=n(17829),P=n(71078),E=n(42487);let I=[{name:"Blue gray",color:"#63687C"},{name:"Brown",color:"#5D4037"},{name:"Tomato",color:"#F06418"},{name:"Deep orange",color:"#fc8a08"},{name:"Bright orange",color:"#FFA903"},{name:"Yellow",color:"#D9D02F"},{name:"Bright green",color:"#6BD731"},{name:"Green",color:"#2BDD66"},{name:"Light blue",color:"#00B5FF"},{name:"Sky blue",color:"#099CFF"},{name:"Pale blue",color:"#5474B4"},{name:"Bright blue",color:"#0063FF"},{name:"Deep blue",color:"#1F32C4"},{name:"Pale indigo",color:"#4C5897"},{name:"Purple",color:"#4F23C0"},{name:"Pale purple",color:"#504C97"},{name:"Violet",color:"#7B2EDA"},{name:"Pale violet",color:"#6B31B2"},{name:"Dark pink",color:"#8931B2"},{name:"Bright pink",color:"#C02ADF"},{name:"Pink",color:"#F018E8"},{name:"Magenta",color:"#F01879"},{name:"Bright red",color:"#F0185C"},{name:"Pale red",color:"#C91A52"},{name:"Deep red",color:"#C91A25"},{name:"Red",color:"#F21616"}];var M=n(7708),Z=n.n(M);function W(e){let{value:t,onChange:n,displayColorsInfo:i,setDisplayColorsInfo:l}=e,[s,a]=(0,o.useState)(t),[c,u]=(0,o.useState)(!1),d=(0,m.useRouter)(),h=(0,T.V)(),_=e=>{d.replace({query:{...d.query,color:e.replace("#","")}},void 0,{scroll:!1})},p=e=>{a(e),n(e)},f=I.map(e=>(0,r.jsx)(z.z,{variant:"default",leftSection:(0,r.jsx)(b.b,{size:20,color:e.color}),radius:"md",onClick:()=>{p(e.color),_(e.color)},children:e.name},e.color));return(0,r.jsxs)("div",{className:Z().root,children:[(0,r.jsxs)("div",{className:Z().inputs,children:[(0,r.jsx)(L.o,{value:s,onChange:e=>{let t=e.currentTarget.value,r=!x().valid(t);a(t),u(r),r||n(t),r||_(t)},error:c,label:"Enter base color",className:Z().input,size:"md",radius:"md"}),(0,r.jsx)(D.z,{value:t,onChange:p,onChangeEnd:_,size:"lg",classNames:{saturation:Z().saturation,wrapper:Z().colorPicker}}),(0,r.jsx)(S.r,{className:Z().switch,label:"Display colors info",size:"md",checked:i,onChange:e=>l(e.currentTarget.checked),mt:"xl"}),(0,r.jsx)(z.z,{fullWidth:!0,leftSection:h.copied?(0,r.jsx)(B.Z,{style:{width:(0,P.h)(18)}}):(0,r.jsx)(F.Z,{style:{width:(0,P.h)(18)}}),rightSection:(0,r.jsx)("span",{}),justify:"space-between",size:"md",mt:"xl",radius:"md",onClick:()=>h.copy(window.location.href),children:h.copied?"Copied":"Copy URL"})]}),(0,r.jsxs)("div",{className:Z().presets,children:[(0,r.jsx)(E.I.Label,{size:"md",children:"Preset"}),(0,r.jsx)(k.Z,{gap:"xs",children:f})]})]})}var $=n(50221),R=n(28862),A=n(77717);function G(e){let{colors:t}=e,[n]=(0,A.c)(t,100);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.I.Label,{display:"block",size:"md",labelElement:"div",mt:"xl",mb:"sm",children:"Variants preview"}),(0,r.jsx)($.M,{theme:{colors:{"__colors-generator__":n}},children:(0,r.jsx)(R.i.ScrollContainer,{minWidth:600,children:(0,r.jsxs)(R.i,{withTableBorder:!0,withColumnBorders:!0,children:[(0,r.jsx)(R.i.Thead,{children:(0,r.jsxs)(R.i.Tr,{children:[(0,r.jsx)(R.i.Th,{ta:"center",children:"Filled"}),(0,r.jsx)(R.i.Th,{ta:"center",children:"Light"}),(0,r.jsx)(R.i.Th,{ta:"center",children:"Outline"}),(0,r.jsx)(R.i.Th,{ta:"center",children:"Subtle"})]})}),(0,r.jsx)(R.i.Tbody,{children:(0,r.jsxs)(R.i.Tr,{children:[(0,r.jsx)(R.i.Td,{children:(0,r.jsx)(z.z,{color:"__colors-generator__",fullWidth:!0,children:"Button"})}),(0,r.jsx)(R.i.Td,{children:(0,r.jsx)(z.z,{color:"__colors-generator__",variant:"light",fullWidth:!0,children:"Button"})}),(0,r.jsx)(R.i.Td,{children:(0,r.jsx)(z.z,{color:"__colors-generator__",variant:"outline",fullWidth:!0,children:"Button"})}),(0,r.jsx)(R.i.Td,{children:(0,r.jsx)(z.z,{color:"__colors-generator__",variant:"subtle",fullWidth:!0,children:"Button"})})]})})]})})})]})}function J(e){let{colors:t}=e,n=JSON.stringify(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.I.Label,{size:"md",labelElement:"div",mt:"xl",children:"Colors array"}),(0,r.jsx)(g.yp,{language:"json",code:JSON.stringify(t,null,2)},"".concat(n,"-1")),(0,r.jsx)(E.I.Label,{size:"md",labelElement:"div",mt:"xl",children:"Usage with MantineProvider"}),(0,r.jsx)(g.yp,{language:"tsx",code:"import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';\n\nconst myColor: MantineColorsTuple = ".concat(JSON.stringify(t,null,2).replace(/"/g,"'"),";\n\nconst theme = createTheme({\n  colors: {\n    myColor,\n  }\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <App />\n    </MantineProvider>\n  );\n}")},n)]})}function O(){let e=(0,m.useRouter)(),t="#".concat(e.query.color),[n,i]=(0,o.useState)("#5474B4"),{colors:l,baseColorIndex:s}=function(e){let t=p(e),n=function(e){let t=e.get("hsl.l");return f.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e)}(t),r=f.findIndex(e=>e===n),o=f.map(e=>t.set("hsl.l",e)).map(e=>p(e)).map((e,t)=>{let n=j[t]-j[r];return n>=0?e.saturate(n):e.desaturate(-1*n)});return{baseColorIndex:r,colors:o}}(n),[a,c]=(0,_._)({key:"display-colors-info",defaultValue:!0});return(0,o.useEffect)(()=>{/^#[0-9A-F]{6}$/i.test(t)&&i(t)},[e.query.color]),(0,r.jsxs)("div",{children:[(0,r.jsx)(g.an,{order:1,children:"Mantine colors generator"}),(0,r.jsx)(W,{value:n,onChange:i,displayColorsInfo:a,setDisplayColorsInfo:c}),(0,r.jsx)(N,{colors:l,baseColorIndex:s,displayColorsInfo:a}),(0,r.jsx)(G,{colors:l.map(e=>e.hex())}),(0,r.jsx)(J,{colors:l.map(e=>e.hex())})]})}function Y(){return(0,r.jsx)(h,{title:"Colors generator",children:(0,r.jsx)(O,{})})}},7708:function(e){e.exports={root:"ColorsInput_root__wluJW",colorPicker:"ColorsInput_colorPicker__r7vDj",saturation:"ColorsInput_saturation__tm_uJ",input:"ColorsInput_input__DxN2i",switch:"ColorsInput_switch__0P2d4"}},41312:function(e){e.exports={root:"ColorsList_root__JeG8b",item:"ColorsList_item__pTrvg",swatch:"ColorsList_swatch__U4owx",label:"ColorsList_label__oDSyy",hex:"ColorsList_hex__2hIFk",index:"ColorsList_index__0v6AH"}},40872:function(e){e.exports={root:"Footer_root__d69lf",spacer:"Footer_spacer__m8ICY",wrapper:"Footer_wrapper__rpDYh",inner:"Footer_inner__FbJ6a",logoSection:"Footer_logoSection__60cxm",description:"Footer_description__s_1Tl",title:"Footer_title__D7snR",afterFooter:"Footer_afterFooter__Bk3gc",afterFooterNote:"Footer_afterFooterNote__xzYGO",groups:"Footer_groups__y7eTr",social:"Footer_social__RYYyg",socialButton:"Footer_socialButton___uZwM"}},13830:function(e){e.exports={wrapper:"LinksGroup_wrapper__LUD9P",link:"LinksGroup_link__rMava",title:"LinksGroup_title__EBDF3"}},21400:function(e){e.exports={content:"PageBase_content__8Q6WJ"}},12929:function(e){e.exports={wrapper:"PageContentContainer_wrapper__H87Vs",container:"PageContentContainer_container__ZWj4F"}},73832:function(e){e.exports={socialButton:"SocialButton_socialButton__YzW0G",socialButtonSection:"SocialButton_socialButtonSection__yZ0Qx",discordButton:"SocialButton_discordButton__WILTe",twitterButton:"SocialButton_twitterButton__Nss83"}},91428:function(e,t,n){"use strict";n.d(t,{W:function(){return m}});var r=n(27378),o=n(92082),i=n(83453),l=n(96739),s=n(6231),a=n(56589),c=n(20410),u={root:"m-7485cace"};let d={},h=(0,i.Z)((e,{size:t,fluid:n})=>({root:{"--container-size":n?void 0:(0,o.ap)(t,"container-size")}})),m=(0,c.d)((e,t)=>{let n=(0,l.w)("Container",d,e),{classNames:o,className:i,style:c,styles:m,unstyled:_,vars:p,fluid:x,...f}=n,j=(0,s.y)({name:"Container",classes:u,props:n,className:i,style:c,classNames:o,styles:m,unstyled:_,vars:p,varsResolver:h});return r.createElement(a.x,{ref:t,mod:{fluid:x},...j("root"),...f})});m.classes=u,m.displayName="@mantine/core/Container"},77717:function(e,t,n){"use strict";n.d(t,{c:function(){return o}});var r=n(27378);function o(e,t,n={leading:!1}){let[o,i]=(0,r.useState)(e),l=(0,r.useRef)(!1),s=(0,r.useRef)(null),a=(0,r.useRef)(!1),c=()=>window.clearTimeout(s.current);return(0,r.useEffect)(()=>{l.current&&(!a.current&&n.leading?(a.current=!0,i(e)):(c(),s.current=window.setTimeout(()=>{a.current=!1,i(e)},t)))},[e,n.leading,t]),(0,r.useEffect)(()=>(l.current=!0,c),[]),[o,c]}},9121:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(27378),o=n(56589),i=n(71078);function l({size:e,style:t,...n}){return r.createElement(o.x,{component:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 209",fill:"currentColor",style:[{width:(0,i.h)(e),height:(0,i.h)(e)},t],...n},r.createElement("path",{fillRule:"nonzero",d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 01-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 01-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 01-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 00256 25.45"}))}}},function(e){e.O(0,[5557,9774,2888,179],function(){return e(e.s=37983)}),_N_E=e.O()}]);