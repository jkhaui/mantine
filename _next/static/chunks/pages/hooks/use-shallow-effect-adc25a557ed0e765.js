(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8607],{94113:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-shallow-effect",function(){return l(61649)}])},61649:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return o}});var s=l(24246),i=l(71670),c=l(3916),t=l(30289);let a=(0,c.A)(t.us.useShallowEffect);function r(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-shallow-effect"})," works exactly like ",(0,s.jsx)(n.code,{children:"useEffect"}),", but performs shallow dependencies comparison instead of referential comparison:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { useShallowEffect } from '@mantine/hooks';\n\n// Will be called on each render\nuseEffect(() => {}, [{ a: 1 }]);\n\n// Will be called only once\nuseShallowEffect(() => {}, [{ a: 1 }]);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Hook works with primitive values, arrays and objects:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Primitive values are handled like in useEffect\nuseShallowEffect(() => {}, [1, 2, 3]);\n\n// Arrays with primitive values will not trigger callback\nuseShallowEffect(() => {}, [[1], [2], [3]]);\n\n// Objects with primitive values will not trigger callback\nuseShallowEffect(() => {}, [{ a: 1 }, { b: 2 }]);\n\n// Arrays with objects will trigger callback since values are not shallow equal\nuseShallowEffect(() => {}, [[{ a: 1 }], [{ b: 2 }]]);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function useShallowEffect(\n  cb: () => void,\n  dependencies?: React.DependencyList\n): void;\n"})})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,{...e,children:(0,s.jsx)(r,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=94113)}),_N_E=e.O()}]);