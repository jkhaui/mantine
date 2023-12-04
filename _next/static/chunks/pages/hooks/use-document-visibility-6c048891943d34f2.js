(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1922],{80770:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-document-visibility",function(){return n(80825)}])},80825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var i=n(24246),o=n(71670),c=n(3916),u=n(30289),r=n(27378),Text=n(26569),s=n(13224);let l=`
import { Text } from '@mantine/core';
import { useDocumentTitle, useDocumentVisibility } from '@mantine/hooks';

function Demo() {
  const documentState = useDocumentVisibility();
  useDocumentTitle(\`Document is \${documentState}\`);
  return <Text>Switch to another tab to see document title change</Text>;
}
`,d={type:"code",code:l,component:function(){let e=function(){let[e,t]=(0,r.useState)("visible");return(0,r.useEffect)(()=>{let e=()=>t(document.visibilityState);return document.addEventListener("visibilitychange",e),()=>document.removeEventListener("visibilitychange",e)},[]),e}();return(0,s.j)(`Document is ${e}`),r.createElement(Text.x,null,"Switch to another tab to see document title change")}},a=(0,c.A)(u.us.useDocumentVisibility);function m(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"use-document-visibility"})," hook returns current ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState",children:"document.visibilityState"}),"\n– it allows detecting if the current tab is active:"]}),"\n",(0,i.jsx)(n,{data:d}),"\n",(0,i.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"function useDocumentVisibility(): 'visible' | 'hidden';\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,i.jsx)(a,{...e,children:(0,i.jsx)(m,{...e})})}},13224:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var i=n(62849);function o(e){(0,i.Y)(()=>{"string"==typeof e&&e.trim().length>0&&(document.title=e.trim())},[e])}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=80770)}),_N_E=e.O()}]);