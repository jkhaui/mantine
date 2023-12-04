(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2450],{69079:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/collapse",function(){return n(81234)}])},81234:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(24246),i=n(71670),r=n(3916),a=n(30289),s=n(27378),l=n(87921),u=n(56589),c=n(22971),h=n(8671),d=n(4184),Text=n(26569);let m=`
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
`,p={type:"code",code:m,component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return s.createElement(u.x,{maw:400,mx:"auto"},s.createElement(c.Z,{justify:"center",mb:5},s.createElement(h.z,{onClick:t},"Toggle content")),s.createElement(d.U,{in:e},s.createElement(Text.x,null,"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")))}},f=`
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
`,w={type:"code",code:f,component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return s.createElement(u.x,{maw:400,mx:"auto"},s.createElement(c.Z,{justify:"center",mb:5},s.createElement(h.z,{onClick:t},"Toggle with linear transition")),s.createElement(d.U,{in:e,transitionDuration:1e3,transitionTimingFunction:"linear"},s.createElement(Text.x,null,"From Bulbapedia: Bulbasaur is a small, quadrupedal Pok\xe9mon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.")))}};function g({children:e,buttonProps:t,...n}){let[o,i]=(0,s.useState)(!1);return s.createElement(u.x,{maw:400,mx:"auto",mt:"md"},s.createElement(h.z,{onClick:()=>i(e=>!e),mb:5,...t}),s.createElement(d.U,{in:o,...n},e))}let x="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.",b={type:"code",component:function(){return s.createElement(g,{buttonProps:{children:"Root collapse"}},s.createElement(Text.x,{mt:"md",size:"lg",fw:700},"This collapse contains another collapse"),s.createElement(Text.x,{mt:"xs"},x),s.createElement(g,{buttonProps:{variant:"outline",children:"Inner collapse"}},s.createElement(Text.x,{mt:"md",size:"lg",fw:700},"This collapse is inside another collapse"),s.createElement(Text.x,{mt:"xs"},x)))}},E=(0,r.A)(a.us.Collapse);function k(e){let t={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,o.jsx)(t.p,{children:"Set following props to control transition:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionDuration"})," – duration in ms"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"transitionTimingFunction"})," – timing function (ease, linear, etc.), defaults to ",(0,o.jsx)(t.code,{children:"ease"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"onTransitionEnd"})," – called when transition ends (both open and close)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"nested-collapse-components",children:"Nested Collapse components"}),"\n",(0,o.jsx)(n,{data:b})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,{...e,children:(0,o.jsx)(k,{...e})})}},4184:function(e,t,n){"use strict";n.d(t,{U:function(){return f}});var o=n(27378),i=n(82269),r=n(2256),a=n(96739),s=n(48649),l=n(56589),u=n(31542),c=n(82591),h=n(72840);function d(e){return e?.current?e.current.scrollHeight:"auto"}let m="undefined"!=typeof window&&window.requestAnimationFrame,p={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},f=(0,o.forwardRef)((e,t)=>{let{children:n,in:f,transitionDuration:w,transitionTimingFunction:g,style:x,onTransitionEnd:b,animateOpacity:E,...k}=(0,a.w)("Collapse",p,e),y=(0,r.rZ)(),j=(0,i.J)(),C=!!y.respectReducedMotion&&j,T=C?0:w,B=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:n=()=>{},opened:i}){let r=(0,o.useRef)(null),a={display:"none",height:0,overflow:"hidden"},[s,l]=(0,o.useState)(i?{}:a),p=e=>{(0,u.flushSync)(()=>l(e))},f=e=>{p(t=>({...t,...e}))};function w(n){let o=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(n);return{transition:`height ${o}ms ${t}`}}(0,c.l)(()=>{"function"==typeof m&&(i?m(()=>{f({willChange:"height",display:"block",overflow:"hidden"}),m(()=>{let e=d(r);f({...w(e),height:e})})}):m(()=>{let e=d(r);f({...w(e),willChange:"height",height:e}),m(()=>f({height:0,overflow:"hidden"}))}))},[i]);let g=e=>{if(e.target===r.current&&"height"===e.propertyName){if(i){let e=d(r);e===s.height?p({}):f({height:e}),n()}else 0===s.height&&(p(a),n())}};return function({style:e={},refKey:t="ref",...n}={}){let o=n[t];return{"aria-hidden":!i,...n,[t]:(0,h.lq)(r,o),onTransitionEnd:g,style:{boxSizing:"border-box",...e,...s}}}}({opened:f,transitionDuration:T,transitionTimingFunction:g,onTransitionEnd:b});return 0===T?f?o.createElement(l.x,{...k},n):null:o.createElement(l.x,{...B({style:(0,s.c)(x,y),ref:t,...k})},o.createElement("div",{style:{opacity:f||!E?1:0,transition:E?`opacity ${T}ms ${g}`:"none"}},n))});f.displayName="@mantine/core/Collapse"},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return i}});var o=n(27378);function i(e=!1,t){let{onOpen:n,onClose:i}=t||{},[r,a]=(0,o.useState)(e),s=(0,o.useCallback)(()=>{a(e=>e||(n?.(),!0))},[n]),l=(0,o.useCallback)(()=>{a(e=>e?(i?.(),!1):e)},[i]),u=(0,o.useCallback)(()=>{r?l():s()},[l,s,r]);return[r,{open:s,close:l,toggle:u}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=69079)}),_N_E=e.O()}]);