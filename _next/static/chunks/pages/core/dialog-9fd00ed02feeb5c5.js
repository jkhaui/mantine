(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8074],{75030:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/dialog",function(){return t(5690)}])},5690:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return B}});var n=t(24246),i=t(71670),l=t(3916),r=t(30289),s=t(27378),a=t(22971),c=t(8671),d=t(92082),u=t(83453),m=t(96739),f=t(6231),h=t(20410),p=t(31282),x=t(98477),g={root:"m-e2125a27",closeButton:"m-5abab665"},b=t(88101),j=t(96217);let w={shadow:"md",p:"md",withBorder:!1,transitionProps:{transition:"pop-top-right",duration:200},position:{bottom:30,right:30}},D=(0,u.Z)((e,{size:o})=>({root:{"--dialog-size":(0,d.ap)(o,"dialog-size")}})),y=(0,h.d)((e,o)=>{let t=(0,m.w)("Dialog",w,e),{classNames:n,className:i,style:l,styles:r,unstyled:a,vars:c,zIndex:d,position:u,keepMounted:h,opened:y,transitionProps:E,withCloseButton:k,withinPortal:C,children:_,onClose:v,portalProps:z,...B}=t,N=(0,f.y)({name:"Dialog",classes:g,props:t,className:i,style:l,classNames:n,styles:r,unstyled:a,vars:c,varsResolver:D});return s.createElement(p.D,{zIndex:d,position:u,ref:o,withinPortal:C,portalProps:z,unstyled:a},s.createElement(b.u,{keepMounted:h,mounted:y,...E},e=>s.createElement(x.X,{unstyled:a,...N("root",{style:e}),...B},k&&s.createElement(j.P,{onClick:v,unstyled:a,...N("closeButton")}),_)))});y.classes=g,y.displayName="@mantine/core/Dialog";var Text=t(26569),E=t(7033),k=t(87921);let C=`
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
`,_={type:"code",component:function(){let[e,{toggle:o,close:t}]=(0,k.q)(!1);return s.createElement(s.Fragment,null,s.createElement(a.Z,{justify:"center"},s.createElement(c.z,{onClick:o},"Toggle dialog")),s.createElement(y,{opened:e,withCloseButton:!0,onClose:t,size:"lg",radius:"md"},s.createElement(Text.x,{size:"sm",mb:"xs",fw:500},"Subscribe to email newsletter"),s.createElement(a.Z,{align:"flex-end"},s.createElement(E.o,{placeholder:"hello@gluesticker.com",style:{flex:1}}),s.createElement(c.z,{onClick:t},"Subscribe"))))},code:C},v=(0,l.A)(r.us.Dialog);function z(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is a simplified version of ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"})," component.\nIt does not include most of accessibility and usability ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"})," features:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"Focus trap is not available"}),"\n",(0,n.jsx)(o.li,{children:"Does not close on click outside"}),"\n",(0,n.jsx)(o.li,{children:"Does not have overlay"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"Dialog"})," to attract attention with not important information or action,\nfor example, you can create an email subscription form:"]}),"\n",(0,n.jsx)(t,{data:_}),"\n",(0,n.jsx)(o.h2,{id:"change-position",children:"Change position"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is rendered in ",(0,n.jsx)(o.a,{href:"/core/portal/",children:"Portal"})," and has fixed position, set ",(0,n.jsx)(o.code,{children:"position"})," prop to control dialog's position:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"// Dialog in top left corner\n<Dialog position={{ top: 20, left: 20 }} />\n\n// Dialog in bottom left corner\n<Dialog position={{ bottom: 20, left: 20 }} />\n"})}),"\n",(0,n.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Dialog"})," is not accessible and most likely will not be announced by screen reader,\nmake sure you do not put any important information. In most cases it would be better\nto select ",(0,n.jsx)(o.a,{href:"/core/modal/",children:"Modal"}),", ",(0,n.jsx)(o.a,{href:"/core/drawer/",children:"Drawer"})," or ",(0,n.jsx)(o.a,{href:"/others/notifications/",children:"Notifications"}),"."]})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(v,{...e,children:(0,n.jsx)(z,{...e})})}},31282:function(e,o,t){"use strict";t.d(o,{D:function(){return p}});var n=t(27378),i=t(71078),l=t(13041),r=t(83453),s=t(96739),a=t(6231),c=t(56589),d=t(20410),u=t(15666),m={root:"m-7f854edf"};let f={position:{bottom:0,right:0},zIndex:(0,l.w)("modal"),withinPortal:!0},h=(0,r.Z)((e,{zIndex:o,position:t})=>({root:{"--affix-z-index":o?.toString(),"--affix-top":(0,i.h)(t?.top),"--affix-left":(0,i.h)(t?.left),"--affix-bottom":(0,i.h)(t?.bottom),"--affix-right":(0,i.h)(t?.right)}})),p=(0,d.d)((e,o)=>{let t=(0,s.w)("Affix",f,e),{classNames:i,className:l,style:r,styles:d,unstyled:p,vars:x,portalProps:g,zIndex:b,withinPortal:j,position:w,...D}=t,y=(0,a.y)({name:"Affix",classes:m,props:t,className:l,style:r,classNames:i,styles:d,unstyled:p,vars:x,varsResolver:h});return n.createElement(u.q,{...g,withinPortal:j},n.createElement(c.x,{ref:o,...y("root"),...D}))});p.classes=m,p.displayName="@mantine/core/Affix"},87921:function(e,o,t){"use strict";t.d(o,{q:function(){return i}});var n=t(27378);function i(e=!1,o){let{onOpen:t,onClose:i}=o||{},[l,r]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{r(e=>e||(t?.(),!0))},[t]),a=(0,n.useCallback)(()=>{r(e=>e?(i?.(),!1):e)},[i]),c=(0,n.useCallback)(()=>{l?a():s()},[a,s,l]);return[l,{open:s,close:a,toggle:c}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=75030)}),_N_E=e.O()}]);