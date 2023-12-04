(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3358],{8893:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-media-query",function(){return i(65236)}])},65236:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return f}});var t=i(24246),a=i(71670),o=i(3916),r=i(30289),d=i(27378),s=i(71078),c=i(73988),l=i(73133);let u=`
import { Badge } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${(0,s.em)(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`,h={type:"code",code:u,component:function(){let e=(0,l.a)(`(min-width: ${(0,s.em)(900)})`);return d.createElement(c.C,{color:e?"teal":"red",variant:"filled"},"Breakpoint ",e?"matches":"does not match")},centered:!0},m=(0,o.A)(r.us.useMediaQuery);function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:i}=n;return i||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"use-media-query"})," subscribes to media queries.\nIt receives a media query as an argument and returns ",(0,t.jsx)(n.code,{children:"true"})," if the given media query matches the current state.\nThe hook relies on ",(0,t.jsx)(n.code,{children:"window.matchMedia()"})," ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia",children:"API"}),"\nand will return ",(0,t.jsx)(n.code,{children:"false"})," if the API is not available, unless an initial value is provided in the second argument."]}),"\n",(0,t.jsxs)(n.p,{children:["Resize browser window to trigger ",(0,t.jsx)(n.code,{children:"window.matchMedia"})," event:"]}),"\n",(0,t.jsx)(i,{data:h}),"\n",(0,t.jsx)(n.h2,{id:"server-side-rendering",children:"Server Side Rendering"}),"\n",(0,t.jsxs)(n.p,{children:["During server side rendering the hook will always return ",(0,t.jsx)(n.code,{children:"false"})," as ",(0,t.jsx)(n.code,{children:"window.matchMedia"})," api is not available,\nif that is not a desired behavior, you can override the initial value:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useMediaQuery } from '@mantine/hooks';\n\nfunction Demo() {\n  // Set initial value in second argument and getInitialValueInEffect option to false\n  const matches = useMediaQuery('(max-width: 40em)', true, {\n    getInitialValueInEffect: false,\n  });\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"function useMediaQuery(\n  query: string,\n  initialValue?: boolean,\n  options?: {\n    getInitialValueInEffect: boolean;\n  }\n): boolean;\n"})})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(m,{...e,children:(0,t.jsx)(g,{...e})})}},73988:function(e,n,i){"use strict";i.d(n,{C:function(){return g}});var t=i(27378),a=i(92082),o=i(83453),r=i(89738),d=i(96739),s=i(6231),c=i(56589),l=i(50332),u={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let h={},m=(0,o.Z)((e,{radius:n,color:i,gradient:t,variant:o,size:d})=>{let s=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:t,variant:o||"filled"});return{root:{"--badge-height":(0,a.ap)(d,"badge-height"),"--badge-padding-x":(0,a.ap)(d,"badge-padding-x"),"--badge-fz":(0,a.ap)(d,"badge-fz"),"--badge-radius":void 0===n?void 0:(0,a.H5)(n),"--badge-bg":i||o?s.background:void 0,"--badge-color":i||o?s.color:void 0,"--badge-bd":i||o?s.border:void 0,"--badge-dot-color":"dot"===o?(0,r.p)(i,e):void 0}}}),g=(0,l.b)((e,n)=>{let i=(0,d.w)("Badge",h,e),{classNames:a,className:o,style:r,styles:l,unstyled:g,vars:f,radius:p,color:b,gradient:v,leftSection:x,rightSection:w,children:j,variant:y,fullWidth:E,...k}=i,_=(0,s.y)({name:"Badge",props:i,classes:u,className:o,style:r,classNames:a,styles:l,unstyled:g,vars:f,varsResolver:m});return t.createElement(c.x,{variant:y,mod:{block:E},..._("root",{variant:y}),ref:n,...k},x&&t.createElement("span",{..._("section"),"data-position":"left"},x),t.createElement("span",{..._("label")},j),w&&t.createElement("span",{..._("section"),"data-position":"right"},w))});g.classes=u,g.displayName="@mantine/core/Badge"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=8893)}),_N_E=e.O()}]);