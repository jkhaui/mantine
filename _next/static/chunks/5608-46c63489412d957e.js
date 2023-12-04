"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5608],{45608:function(e,t,o){o.d(t,{h:function(){return U}});var r=o(27378),n=o(71078),a=o(92082),l=o(83453),i=o(96739),s=o(6231),d=o(63433),c=o(54526),u=o(71656);let[b,p]=(0,u.R)("Combobox component was not found in tree");var m=o(72840),x=o(513),f=o(20410);function w({onKeyDown:e,withKeyboardNavigation:t,withAriaAttributes:o,withExpandedAttribute:n,targetType:a}){let l=p(),[i,s]=(0,r.useState)(null),d=o?{"aria-haspopup":"listbox","aria-expanded":n&&!!(l.store.listId&&l.store.dropdownOpened)||void 0,"aria-controls":l.store.listId,"aria-activedescendant":l.store.dropdownOpened&&i||void 0,autoComplete:"off","data-expanded":!!l.store.dropdownOpened||void 0}:{};return{...d,onKeyDown:o=>{e?.(o),!l.readOnly&&t&&("ArrowDown"===o.nativeEvent.code&&(o.preventDefault(),l.store.dropdownOpened?s(l.store.selectNextOption()):(l.store.openDropdown("keyboard"),s(l.store.selectActiveOption()))),"ArrowUp"===o.nativeEvent.code&&(o.preventDefault(),l.store.dropdownOpened?s(l.store.selectPreviousOption()):(l.store.openDropdown("keyboard"),s(l.store.selectActiveOption()))),"Enter"===o.nativeEvent.code&&(l.store.dropdownOpened?(o.preventDefault(),l.store.clickSelectedOption()):"button"===a&&(o.preventDefault(),l.store.openDropdown("keyboard"))),"Escape"===o.nativeEvent.code&&l.store.closeDropdown("keyboard"),"Space"===o.nativeEvent.code&&"button"===a&&(o.preventDefault(),l.store.toggleDropdown("keyboard")))}}}let v={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1},y=(0,f.d)((e,t)=>{let{children:o,refProp:n,withKeyboardNavigation:a,withAriaAttributes:l,withExpandedAttribute:s,targetType:c,...u}=(0,i.w)("ComboboxTarget",v,e);if(!(0,x.k)(o))throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let b=p(),f=w({targetType:c,withAriaAttributes:l,withKeyboardNavigation:a,withExpandedAttribute:s,onKeyDown:o.props.onKeyDown}),y=(0,r.cloneElement)(o,{...f,...u});return r.createElement(d.J.Target,{ref:(0,m.Yx)(t,b.store.targetRef)},y)});y.displayName="@mantine/core/ComboboxTarget";var h=o(62443);let C={},g=(0,f.d)((e,t)=>{let{classNames:o,styles:n,className:a,style:l,hidden:s,...c}=(0,i.w)("ComboboxDropdown",C,e),u=p();return r.createElement(d.J.Dropdown,{...c,ref:t,role:"presentation","data-hidden":s||void 0,...u.getStyles("dropdown",{className:a,style:l,classNames:o,styles:n})})});g.classes=h.Z,g.displayName="@mantine/core/ComboboxDropdown";var E=o(31002),k=o(56589);let A={},D=(0,f.d)((e,t)=>{let o=(0,i.w)("ComboboxOptions",A,e),{classNames:n,className:a,style:l,styles:s,id:d,onMouseDown:c,labelledBy:u,...b}=o,m=p(),x=(0,E.M)(d);return(0,r.useEffect)(()=>{m.store.setListId(x)},[x]),r.createElement(k.x,{ref:t,...m.getStyles("options",{className:a,style:l,classNames:n,styles:s}),...b,id:x,role:"listbox","aria-labelledby":u,onMouseDown:e=>{e.preventDefault(),c?.(e)}})});D.classes=h.Z,D.displayName="@mantine/core/ComboboxOptions";let S={},O=(0,f.d)((e,t)=>{let o=(0,i.w)("ComboboxOption",S,e),{classNames:n,className:a,style:l,styles:s,vars:d,onClick:c,id:u,active:b,onMouseDown:m,onMouseOver:x,disabled:f,selected:w,...v}=o,y=p(),h=(0,r.useId)();return r.createElement(k.x,{...y.getStyles("option",{className:a,classNames:n,styles:s,style:l}),...v,ref:t,id:u||h,mod:["combobox-option",{"combobox-active":b,"combobox-disabled":f,"combobox-selected":w}],role:"option",onClick:e=>{f?e.preventDefault():(y.onOptionSubmit?.(o.value,o),c?.(e))},onMouseDown:e=>{e.preventDefault(),m?.(e)},onMouseOver:e=>{y.resetSelectionOnOptionHover&&y.store.resetSelectedOption(),x?.(e)}})});O.classes=h.Z,O.displayName="@mantine/core/ComboboxOption";var T=o(42487);let N={withAriaAttributes:!0,withKeyboardNavigation:!0},R=(0,f.d)((e,t)=>{let o=(0,i.w)("ComboboxSearch",N,e),{classNames:n,styles:a,unstyled:l,vars:s,withAriaAttributes:d,onKeyDown:c,withKeyboardNavigation:u,size:b,...x}=o,f=p(),v=f.getStyles("search"),y=w({targetType:"input",withAriaAttributes:d,withKeyboardNavigation:u,withExpandedAttribute:!1,onKeyDown:c});return r.createElement(T.I,{ref:(0,m.Yx)(t,f.store.searchRef),classNames:[{input:v.className},n],styles:[{input:v.style},a],size:b||f.size,...y,...x,__staticSelector:"Combobox"})});R.classes=h.Z,R.displayName="@mantine/core/ComboboxSearch";let I={},Z=(0,f.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxEmpty",I,e),c=p();return r.createElement(k.x,{ref:t,...c.getStyles("empty",{className:n,classNames:o,styles:l,style:a}),...d})});Z.classes=h.Z,Z.displayName="@mantine/core/ComboboxEmpty";var K=o(13685);let q={},$=(0,f.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxFooter",q,e),c=p();return r.createElement(k.x,{ref:t,...c.getStyles("footer",{className:n,classNames:o,style:a,styles:l}),...d})});$.classes=h.Z,$.displayName="@mantine/core/ComboboxFooter";let P={},F=(0,f.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxHeader",P,e),c=p();return r.createElement(k.x,{ref:t,...c.getStyles("header",{className:n,classNames:o,style:a,styles:l}),...d})});F.classes=h.Z,F.displayName="@mantine/core/ComboboxHeader";let M={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1},_=(0,f.d)((e,t)=>{let{children:o,refProp:n,withKeyboardNavigation:a,withAriaAttributes:l,withExpandedAttribute:s,targetType:d,...c}=(0,i.w)("ComboboxEventsTarget",M,e);if(!(0,x.k)(o))throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let u=p(),b=w({targetType:d,withAriaAttributes:l,withKeyboardNavigation:a,withExpandedAttribute:s,onKeyDown:o.props.onKeyDown});return(0,r.cloneElement)(o,{...b,...c,[n]:(0,m.Yx)(t,u.store.targetRef,o?.ref)})});_.displayName="@mantine/core/ComboboxEventsTarget";let z={refProp:"ref"},H=(0,f.d)((e,t)=>{let{children:o,refProp:n}=(0,i.w)("ComboboxDropdownTarget",z,e);if(p(),!(0,x.k)(o))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return r.createElement(d.J.Target,{ref:t,refProp:n},o)});H.displayName="@mantine/core/ComboboxDropdownTarget";let J={},B=(0,f.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,children:d,label:c,...u}=(0,i.w)("ComboboxGroup",J,e),b=p();return r.createElement(k.x,{ref:t,...b.getStyles("group",{className:n,classNames:o,style:a,styles:l}),...u},c&&r.createElement("div",{...b.getStyles("groupLabel",{classNames:o,styles:l})},c),d)});B.classes=h.Z,B.displayName="@mantine/core/ComboboxGroup";var G=o(96217);let V=(0,r.forwardRef)(({size:e,onMouseDown:t,onClick:o,onClear:n,...a},l)=>r.createElement(G.P,{ref:l,size:e||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0,...a,onMouseDown:e=>{e.preventDefault(),t?.(e)},onClick:e=>{n(),o?.(e)}}));V.displayName="@mantine/core/ComboboxClearButton";let Y={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},L=(0,l.Z)((e,{size:t,dropdownPadding:o})=>({options:{"--combobox-option-fz":(0,a.yv)(t),"--combobox-option-padding":(0,a.ap)(t,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===o?void 0:(0,n.h)(o),"--combobox-option-fz":(0,a.yv)(t),"--combobox-option-padding":(0,a.ap)(t,"combobox-option-padding")}}));function U(e){let t=(0,i.w)("Combobox",Y,e),{classNames:o,styles:n,unstyled:a,children:l,store:u,vars:p,onOptionSubmit:m,size:x,dropdownPadding:f,resetSelectionOnOptionHover:w,__staticSelector:v,readOnly:y,...C}=t,g=(0,c.K)(),E=u||g,k=(0,s.y)({name:v||"Combobox",classes:h.Z,props:t,classNames:o,styles:n,unstyled:a,vars:p,varsResolver:L});return r.createElement(b,{value:{getStyles:k,store:E,onOptionSubmit:m,size:x,resetSelectionOnOptionHover:w,readOnly:y}},r.createElement(d.J,{opened:E.dropdownOpened,...C,onClose:E.closeDropdown,withRoles:!1,unstyled:a},l))}U.extend=e=>e,U.classes=h.Z,U.displayName="@mantine/core/Combobox",U.Target=y,U.Dropdown=g,U.Options=D,U.Option=O,U.Search=R,U.Empty=Z,U.Chevron=K.d,U.Footer=$,U.Header=F,U.EventsTarget=_,U.DropdownTarget=H,U.Group=B,U.ClearButton=V},54526:function(e,t,o){o.d(t,{K:function(){return a}});var r=o(27378),n=o(58675);function a({defaultOpened:e,opened:t,onOpenedChange:o,onDropdownClose:a,onDropdownOpen:l,loop:i=!0,scrollBehavior:s="instant"}={}){let[d,c]=(0,n.C)({value:t,defaultValue:e,finalValue:!1,onChange:o}),u=(0,r.useRef)(null),b=(0,r.useRef)(-1),p=(0,r.useRef)(null),m=(0,r.useRef)(null),x=(0,r.useRef)(-1),f=(0,r.useRef)(-1),w=(0,r.useRef)(-1),v=(0,r.useCallback)((e="unknown")=>{d||(c(!0),l?.(e))},[c,l,d]),y=(0,r.useCallback)((e="unknown")=>{d&&(c(!1),a?.(e))},[c,a,d]),h=(0,r.useCallback)((e="unknown")=>{d?y(e):v(e)},[y,v,d]),C=(0,r.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-selected]`);e?.removeAttribute("data-combobox-selected"),e?.removeAttribute("aria-selected")},[]),g=(0,r.useCallback)(e=>{let t=document.getElementById(u.current),o=t?.querySelectorAll("[data-combobox-option]");if(!o)return null;let r=e>=o.length?0:e<0?o.length-1:e;return(b.current=r,o?.[r]&&!o[r].hasAttribute("data-combobox-disabled"))?(C(),o[r].setAttribute("data-combobox-selected","true"),o[r].setAttribute("aria-selected","true"),o[r].scrollIntoView({block:"nearest",behavior:s}),o[r].id):null},[s,C]),E=(0,r.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-active]`);if(e){let t=document.querySelectorAll(`#${u.current} [data-combobox-option]`),o=Array.from(t).findIndex(t=>t===e);return g(o)}return g(0)},[g]),k=(0,r.useCallback)(()=>g(function(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[g,i]),A=(0,r.useCallback)(()=>g(function(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[g,i]),D=(0,r.useCallback)(()=>g(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(document.querySelectorAll(`#${u.current} [data-combobox-option]`))),[g]),S=(0,r.useCallback)((e="selected")=>{w.current=window.setTimeout(()=>{let t=document.querySelectorAll(`#${u.current} [data-combobox-option]`),o=Array.from(t).findIndex(t=>t.hasAttribute(`data-combobox-${e}`));b.current=o},0)},[]),O=(0,r.useCallback)(()=>{b.current=-1,C()},[C]),T=(0,r.useCallback)(()=>{let e=document.querySelectorAll(`#${u.current} [data-combobox-option]`),t=e?.[b.current];t?.click()},[]),N=(0,r.useCallback)(e=>{u.current=e},[]),R=(0,r.useCallback)(()=>{x.current=window.setTimeout(()=>p.current.focus(),0)},[]),I=(0,r.useCallback)(()=>{f.current=window.setTimeout(()=>m.current.focus(),0)},[]);return(0,r.useEffect)(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(f.current),window.clearTimeout(w.current)},[]),{dropdownOpened:d,openDropdown:v,closeDropdown:y,toggleDropdown:h,selectedOptionIndex:b.current,selectOption:g,selectFirstOption:D,selectActiveOption:E,selectNextOption:k,selectPreviousOption:A,resetSelectedOption:O,updateSelectedOptionIndex:S,listId:u.current,setListId:N,clickSelectedOption:T,searchRef:p,focusSearchInput:R,targetRef:m,focusTarget:I}}}}]);