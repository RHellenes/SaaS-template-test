import{r as B,aS as D,d as G,G as h,a_ as Q,C as P,a$ as Pe,b0 as qe,b1 as He,b2 as ne,b3 as Ne,b4 as ie,o as oe,D as me,au as $e,aT as We,aU as Je,aV as Qe,aW as de,aX as Ge,F as ue,aQ as ge,aR as Ye,b5 as Ke,b6 as we,b as Ae,b7 as Ze,b8 as K,aB as Xe,b9 as xe,aY as L,l as ye,R as he,S as N,V as re,W as Z,ba as Ve,K as Oe,as as Le,Z as Y,c as f,e as S,f as T,$ as _e,bb as et,P as q,n as b,O as A,k as _,t as J,g as V,bc as tt,bd as at,H as Se,I as Be,X as lt,be as nt,bf as it,Y as ot,bg as ut,bh as rt,J as st,L as dt,N as j,w as U,bi as x,h as X,T as ct,M as be,Q as vt,aH as pt,bj as ft,bk as bt,ab as C,a1 as mt,bl as ae,U as gt,bm as yt,bn as ht}from"./CNMvcGbG.js";import{_ as Ot}from"./Cn0cVgPR.js";import{f as St,c as R,a as kt,l as $t,n as wt,u as Ct,r as Mt,i as It}from"./DYXVupOQ.js";import{d as At,e as Vt}from"./B-NCklY9.js";const Lt={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}};let Ce=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Me(e){var r,c;let o=(r=e.innerText)!=null?r:"",v=e.cloneNode(!0);if(!(v instanceof HTMLElement))return o;let a=!1;for(let m of v.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))m.remove(),a=!0;let t=a?(c=v.innerText)!=null?c:"":o;return Ce.test(t)&&(t=t.replace(Ce,"")),t}function Bt(e){let r=e.getAttribute("aria-label");if(typeof r=="string")return r.trim();let c=e.getAttribute("aria-labelledby");if(c){let o=c.split(" ").map(v=>{let a=document.getElementById(v);if(a){let t=a.getAttribute("aria-label");return typeof t=="string"?t.trim():Me(a).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return Me(e).trim()}function jt(e){let r=B(""),c=B("");return()=>{let o=D(e);if(!o)return"";let v=o.innerText;if(r.value===v)return c.value;let a=Bt(o).trim().toLowerCase();return r.value=v,c.value=a,a}}function Dt(e,r){return e===r}var Rt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Rt||{}),Ft=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ft||{}),Et=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Et||{});function Tt(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let je=Symbol("ListboxContext");function ce(e){let r=Xe(je,null);if(r===null){let c=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,ce),c}return r}let Ut=G({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Dt},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:r,attrs:c,emit:o}){let v=B(1),a=B(null),t=B(null),m=B(null),d=B([]),y=B(""),s=B(null),n=B(1);function i(l=p=>p){let p=s.value!==null?d.value[s.value]:null,g=xe(l(d.value.slice()),$=>D($.dataRef.domRef)),u=p?g.indexOf(p):null;return u===-1&&(u=null),{options:g,activeOptionIndex:u}}let w=h(()=>e.multiple?1:0),[O,k]=At(h(()=>e.modelValue),l=>o("update:modelValue",l),h(()=>e.defaultValue)),F=h(()=>O.value===void 0?Q(w.value,{1:[],0:void 0}):O.value),I={listboxState:v,value:F,mode:w,compare(l,p){if(typeof e.by=="string"){let g=e.by;return(l==null?void 0:l[g])===(p==null?void 0:p[g])}return e.by(l,p)},orientation:h(()=>e.horizontal?"horizontal":"vertical"),labelRef:a,buttonRef:t,optionsRef:m,disabled:h(()=>e.disabled),options:d,searchQuery:y,activeOptionIndex:s,activationTrigger:n,closeListbox(){e.disabled||v.value!==1&&(v.value=1,s.value=null)},openListbox(){e.disabled||v.value!==0&&(v.value=0)},goToOption(l,p,g){if(e.disabled||v.value===1)return;let u=i(),$=St(l===R.Specific?{focus:R.Specific,id:p}:{focus:l},{resolveItems:()=>u.options,resolveActiveIndex:()=>u.activeOptionIndex,resolveId:W=>W.id,resolveDisabled:W=>W.dataRef.disabled});y.value="",s.value=$,n.value=g??1,d.value=u.options},search(l){if(e.disabled||v.value===1)return;let p=y.value!==""?0:1;y.value+=l.toLowerCase();let g=(s.value!==null?d.value.slice(s.value+p).concat(d.value.slice(0,s.value+p)):d.value).find($=>$.dataRef.textValue.startsWith(y.value)&&!$.dataRef.disabled),u=g?d.value.indexOf(g):-1;u===-1||u===s.value||(s.value=u,n.value=1)},clearSearch(){e.disabled||v.value!==1&&y.value!==""&&(y.value="")},registerOption(l,p){let g=i(u=>[...u,{id:l,dataRef:p}]);d.value=g.options,s.value=g.activeOptionIndex},unregisterOption(l){let p=i(g=>{let u=g.findIndex($=>$.id===l);return u!==-1&&g.splice(u,1),g});d.value=p.options,s.value=p.activeOptionIndex,n.value=1},theirOnChange(l){e.disabled||k(l)},select(l){e.disabled||k(Q(w.value,{0:()=>l,1:()=>{let p=P(I.value.value).slice(),g=P(l),u=p.findIndex($=>I.compare(g,P($)));return u===-1?p.push(g):p.splice(u,1),p}}))}};Pe([t,m],(l,p)=>{var g;I.closeListbox(),qe(p,He.Loose)||(l.preventDefault(),(g=D(t))==null||g.focus())},h(()=>v.value===0)),ne(je,I),Ne(h(()=>Q(v.value,{0:ie.Open,1:ie.Closed})));let E=h(()=>{var l;return(l=D(t))==null?void 0:l.closest("form")});return oe(()=>{me([E],()=>{if(!E.value||e.defaultValue===void 0)return;function l(){I.theirOnChange(e.defaultValue)}return E.value.addEventListener("reset",l),()=>{var p;(p=E.value)==null||p.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:p,disabled:g,form:u,...$}=e,W={open:v.value===0,disabled:g,value:F.value};return $e(ue,[...l!=null&&F.value!=null?Vt({[l]:F.value}).map(([ee,ve])=>$e(We,Je({features:Qe.Hidden,key:ee,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:u,disabled:g,name:ee,value:ve}))):[],de({ourProps:{},theirProps:{...c,...Ge($,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:W,slots:r,attrs:c,name:"Listbox"})])}}}),zt=G({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:r,slots:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-button-${ge()}`,t=ce("ListboxButton");o({el:t.buttonRef,$el:t.buttonRef});function m(n){switch(n.key){case L.Space:case L.Enter:case L.ArrowDown:n.preventDefault(),t.openListbox(),K(()=>{var i;(i=D(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(R.First)});break;case L.ArrowUp:n.preventDefault(),t.openListbox(),K(()=>{var i;(i=D(t.optionsRef))==null||i.focus({preventScroll:!0}),t.value.value||t.goToOption(R.Last)});break}}function d(n){switch(n.key){case L.Space:n.preventDefault();break}}function y(n){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})})):(n.preventDefault(),t.openListbox(),Tt(()=>{var i;return(i=D(t.optionsRef))==null?void 0:i.focus({preventScroll:!0})})))}let s=Ye(h(()=>({as:e.as,type:r.type})),t.buttonRef);return()=>{var n,i;let w={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{...O}=e,k={ref:t.buttonRef,id:a,type:s.value,"aria-haspopup":"listbox","aria-controls":(n=D(t.optionsRef))==null?void 0:n.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(i=D(t.labelRef))==null?void 0:i.id,a].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:m,onKeyup:d,onClick:y};return de({ourProps:k,theirProps:O,slot:w,attrs:r,slots:c,name:"ListboxButton"})}}}),Pt=G({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:r,slots:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-options-${ge()}`,t=ce("ListboxOptions"),m=B(null);o({el:t.optionsRef,$el:t.optionsRef});function d(n){switch(m.value&&clearTimeout(m.value),n.key){case L.Space:if(t.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),t.search(n.key);case L.Enter:if(n.preventDefault(),n.stopPropagation(),t.activeOptionIndex.value!==null){let i=t.options.value[t.activeOptionIndex.value];t.select(i.dataRef.value)}t.mode.value===0&&(t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})}));break;case Q(t.orientation.value,{vertical:L.ArrowDown,horizontal:L.ArrowRight}):return n.preventDefault(),n.stopPropagation(),t.goToOption(R.Next);case Q(t.orientation.value,{vertical:L.ArrowUp,horizontal:L.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),t.goToOption(R.Previous);case L.Home:case L.PageUp:return n.preventDefault(),n.stopPropagation(),t.goToOption(R.First);case L.End:case L.PageDown:return n.preventDefault(),n.stopPropagation(),t.goToOption(R.Last);case L.Escape:n.preventDefault(),n.stopPropagation(),t.closeListbox(),K(()=>{var i;return(i=D(t.buttonRef))==null?void 0:i.focus({preventScroll:!0})});break;case L.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(t.search(n.key),m.value=setTimeout(()=>t.clearSearch(),350));break}}let y=Ke(),s=h(()=>y!==null?(y.value&ie.Open)===ie.Open:t.listboxState.value===0);return()=>{var n,i;let w={open:t.listboxState.value===0},{...O}=e,k={"aria-activedescendant":t.activeOptionIndex.value===null||(n=t.options.value[t.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(i=D(t.buttonRef))==null?void 0:i.id,"aria-orientation":t.orientation.value,id:a,onKeydown:d,role:"listbox",tabIndex:0,ref:t.optionsRef};return de({ourProps:k,theirProps:O,slot:w,attrs:r,slots:c,features:we.RenderStrategy|we.Static,visible:s.value,name:"ListboxOptions"})}}}),qt=G({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:r,attrs:c,expose:o}){var v;let a=(v=e.id)!=null?v:`headlessui-listbox-option-${ge()}`,t=ce("ListboxOption"),m=B(null);o({el:m,$el:m});let d=h(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===a:!1),y=h(()=>Q(t.mode.value,{0:()=>t.compare(P(t.value.value),P(e.value)),1:()=>P(t.value.value).some(l=>t.compare(P(l),P(e.value)))})),s=h(()=>Q(t.mode.value,{1:()=>{var l;let p=P(t.value.value);return((l=t.options.value.find(g=>p.some(u=>t.compare(P(u),P(g.dataRef.value)))))==null?void 0:l.id)===a},0:()=>y.value})),n=jt(m),i=h(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:m}));oe(()=>t.registerOption(a,i)),Ae(()=>t.unregisterOption(a)),oe(()=>{me([t.listboxState,y],()=>{t.listboxState.value===0&&y.value&&Q(t.mode.value,{1:()=>{s.value&&t.goToOption(R.Specific,a)},0:()=>{t.goToOption(R.Specific,a)}})},{immediate:!0})}),Ze(()=>{t.listboxState.value===0&&d.value&&t.activationTrigger.value!==0&&K(()=>{var l,p;return(p=(l=D(m))==null?void 0:l.scrollIntoView)==null?void 0:p.call(l,{block:"nearest"})})});function w(l){if(e.disabled)return l.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),K(()=>{var p;return(p=D(t.buttonRef))==null?void 0:p.focus({preventScroll:!0})}))}function O(){if(e.disabled)return t.goToOption(R.Nothing);t.goToOption(R.Specific,a)}let k=kt();function F(l){k.update(l)}function I(l){k.wasMoved(l)&&(e.disabled||d.value||t.goToOption(R.Specific,a,0))}function E(l){k.wasMoved(l)&&(e.disabled||d.value&&t.goToOption(R.Nothing))}return()=>{let{disabled:l}=e,p={active:d.value,selected:y.value,disabled:l},{value:g,disabled:u,...$}=e,W={id:a,ref:m,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":y.value,disabled:void 0,onClick:w,onFocus:O,onPointerenter:F,onMouseenter:F,onPointermove:I,onMousemove:I,onPointerleave:E,onMouseleave:E};return de({ourProps:W,theirProps:$,slot:p,attrs:c,slots:r,name:"ListboxOption"})}}});const Ie=he(N.ui.strategy,N.ui.checkbox,Lt),Ht=G({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>Ie.default.color,validator(e){return N.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:c,attrs:o}=re("checkbox",Z(e,"ui"),Ie,Z(e,"class")),{emitFormChange:v,color:a,name:t,inputId:m}=Ve(e),d=m.value??Oe("$5i8o8j1Lt0"),y=h({get(){return e.modelValue},set(i){r("update:modelValue",i)}}),s=i=>{r("change",i.target.checked),v()},n=h(()=>Le(Y(c.value.base,c.value.form,c.value.rounded,c.value.background,c.value.border,a.value&&c.value.ring.replaceAll("{color}",a.value),a.value&&c.value.color.replaceAll("{color}",a.value)),e.inputClass));return{ui:c,attrs:o,toggle:y,inputId:d,name:t,inputClass:n,onChange:s}}}),Nt=["data-n-ids"],Wt=["id","name","required","value","disabled","indeterminate"],Jt=["for"];function Qt(e,r,c,o,v,a){return f(),S("div",{class:b(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[T("div",{class:b(e.ui.container)},[_e(T("input",q({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=t=>e.toggle=t),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),null,16,Wt),[[et,e.toggle]])],2),e.label||e.$slots.label?(f(),S("div",{key:0,class:b(e.ui.inner)},[T("label",{for:e.inputId,class:b(e.ui.label)},[A(e.$slots,"label",{},()=>[_(J(e.label),1)]),e.required?(f(),S("span",{key:0,class:b(e.ui.required)},"*",2)):V("",!0)],10,Jt),e.help?(f(),S("p",{key:0,class:b(e.ui.help)},J(e.help),3)):V("",!0)],2)):V("",!0)],10,Nt)}const Gt=ye(Ht,[["render",Qt]]),H=he(N.ui.strategy,N.ui.select,tt),le=he(N.ui.strategy,N.ui.selectMenu,at),Yt=G({components:{HCombobox:$t,HComboboxButton:wt,HComboboxOptions:Ct,HComboboxOption:Mt,HComboboxInput:It,HListbox:Ut,HListboxButton:zt,HListboxOptions:Pt,HListboxOption:qt,UIcon:Se,UAvatar:Be},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>H.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>H.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>le.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>le.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>le.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(H.size).includes(e)}},color:{type:String,default:()=>H.default.color,validator(e){return[...N.ui.colors,...Object.keys(H.color)].includes(e)}},variant:{type:String,default:()=>H.default.variant,validator(e){return[...Object.keys(H.variant),...Object.values(H.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:c}){const{ui:o,attrs:v}=re("select",Z(e,"ui"),H,Z(e,"class")),{ui:a}=re("selectMenu",Z(e,"uiMenu"),le),t=h(()=>lt({},e.popper,a.value.popper)),[m,d]=nt(t.value),{size:y,rounded:s}=it({ui:o,props:e}),{emitFormBlur:n,emitFormChange:i,inputId:w,color:O,size:k,name:F}=Ve(e,H),I=h(()=>y.value||k.value),E=B(""),l=h({get(){return e.query??E.value},set(M){E.value=M,r("update:query",M)}}),p=h(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const M=e.options.find(z=>z[e.valueAttribute]===e.modelValue);return M?M[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),g=h(()=>{var z,te;const M=((te=(z=o.value.color)==null?void 0:z[O.value])==null?void 0:te[e.variant])||o.value.variant[e.variant];return Le(Y(o.value.base,a.value.select,s.value,o.value.size[I.value],o.value.gap[I.value],e.padded?o.value.padding[I.value]:"p-0",M==null?void 0:M.replaceAll("{color}",O.value),(u.value||c.leading)&&o.value.leading.padding[I.value],($.value||c.trailing)&&o.value.trailing.padding[I.value]),e.placeholder&&!e.modelValue&&o.value.placeholder,e.selectClass)}),u=h(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),$=h(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),W=h(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),ee=h(()=>e.loading&&!u.value?e.loadingIcon:e.trailingIcon||e.icon),ve=h(()=>Y(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[I.value])),De=h(()=>Y(o.value.icon.base,O.value&&N.ui.colors.includes(O.value)&&o.value.icon.color.replaceAll("{color}",O.value),o.value.icon.size[I.value],e.loading&&o.value.icon.loading)),Re=h(()=>Y(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[I.value])),Fe=h(()=>Y(o.value.icon.base,O.value&&N.ui.colors.includes(O.value)&&o.value.icon.color.replaceAll("{color}",O.value),o.value.icon.size[I.value],e.loading&&!u.value&&o.value.icon.loading)),ke=typeof e.searchable=="function"?ot(e.searchable,e.debounce):void 0,pe=ut(async()=>e.searchable&&ke?await ke(l.value):l.value===""?e.options:e.options.filter(M=>{var z;return((z=e.searchAttributes)!=null&&z.length?e.searchAttributes:[e.optionAttribute]).some(te=>{if(["string","number"].includes(typeof M))return String(M).search(new RegExp(l.value,"i"))!==-1;const fe=rt(M,te);return fe!=null&&String(fe).search(new RegExp(l.value,"i"))!==-1})}),[],{lazy:e.searchableLazy}),Ee=h(()=>l.value===""||e.showCreateOptionWhen==="empty"&&pe.value.length||e.showCreateOptionWhen==="always"&&pe.value.find(z=>["string","number"].includes(typeof z)?z===l.value:z[e.optionAttribute]===l.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function Te(){e.clearSearchOnClose&&(l.value="")}me(d,M=>{M?r("open"):(Te(),r("close"),n())});function Ue(M){r("update:modelValue",M),r("change",M),i()}function ze(M){l.value=M.target.value}return st(()=>Oe("$gMauUSmmV0")),{ui:o,uiMenu:a,attrs:v,name:F,inputId:w,popper:t,trigger:m,container:d,label:p,isLeading:u,isTrailing:$,selectClass:g,leadingIconName:W,leadingIconClass:De,leadingWrapperIconClass:ve,trailingIconName:ee,trailingIconClass:Fe,trailingWrapperIconClass:Re,filteredOptions:pe,createOption:Ee,query:l,onUpdate:Ue,onQueryChange:ze}}}),Kt=["value","required"],Zt=["id","disabled"],Xt={class:"truncate"};function xt(e,r,c,o,v,a){const t=Se,m=dt("HComboboxInput"),d=Be;return f(),j(x(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:b(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:U(({open:y})=>[e.required?(f(),S("input",{key:0,value:e.modelValue,required:e.required,class:b(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,Kt)):V("",!0),(f(),j(x(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:b(e.uiMenu.trigger)},{default:U(()=>[A(e.$slots,"default",{open:y,disabled:e.disabled,loading:e.loading},()=>[T("button",q({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(f(),S("span",{key:0,class:b(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[X(t,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])])],2)):V("",!0),A(e.$slots,"label",{},()=>[e.label?(f(),S("span",{key:0,class:b(e.uiMenu.label)},J(e.label),3)):(f(),S("span",{key:1,class:b(e.uiMenu.label)},J(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(f(),S("span",{key:1,class:b(e.trailingWrapperIconClass)},[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[X(t,{name:e.trailingIconName,class:b(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):V("",!0)],16,Zt)])]),_:2},1032,["class"])),y?(f(),S("div",{key:1,ref:"container",class:b([e.uiMenu.container,e.uiMenu.width])},[X(ct,q({appear:""},e.uiMenu.transition),{default:U(()=>[T("div",null,[e.popper.arrow?(f(),S("div",{key:0,"data-popper-arrow":"",class:b(Object.values(e.uiMenu.arrow))},null,2)):V("",!0),(f(),j(x(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:b([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:U(()=>{var s,n;return[e.searchable?(f(),j(m,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:b(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):V("",!0),(f(!0),S(ue,null,be(e.filteredOptions,(i,w)=>(f(),j(x(e.searchable?"HComboboxOption":"HListboxOption"),{key:w,as:"template",value:e.valueAttribute?i[e.valueAttribute]:i,disabled:i.disabled},{default:U(({active:O,selected:k,disabled:F})=>[T("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,O?e.uiMenu.option.active:e.uiMenu.option.inactive,k&&e.uiMenu.option.selected,F&&e.uiMenu.option.disabled])},[T("div",{class:b(e.uiMenu.option.container)},[A(e.$slots,"option",{option:i,active:O,selected:k},()=>[i.icon?(f(),j(t,{key:0,name:i.icon,class:b([e.uiMenu.option.icon.base,O?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,i.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):i.avatar?(f(),j(d,q({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...i.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):i.chip?(f(),S("span",{key:2,class:b(e.uiMenu.option.chip.base),style:vt({background:`#${i.chip}`})},null,6)):V("",!0),T("span",Xt,J(["string","number"].includes(typeof i)?i:i[e.optionAttribute]),1)])],2),k?(f(),S("span",{key:0,class:b([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[X(t,{name:e.selectedIcon,class:b(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):V("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(f(),j(x(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:U(({active:i,selected:w})=>[T("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,i?e.uiMenu.option.active:e.uiMenu.option.inactive])},[T("div",{class:b(e.uiMenu.option.container)},[A(e.$slots,"option-create",{option:e.createOption,active:i,selected:w},()=>[T("span",{class:b(e.uiMenu.option.create)},'Create "'+J(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((s=e.filteredOptions)!=null&&s.length)?(f(),S("p",{key:2,class:b(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[_(' No results for "'+J(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?V("",!0):(f(),S("p",{key:3,class:b(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[_(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):V("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const _t=ye(Yt,[["render",xt]]);class se extends Error{constructor(r){super(r),this.message=r,Object.setPrototypeOf(this,se.prototype)}}const ea=G({props:{schema:{type:[Object,Function],default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:r,emit:c}){const o=Oe("$HmcKyWTjax"),v=ft(`form-${o}`);oe(()=>{v.on(async s=>{var n;s.type!=="submit"&&((n=e.validateOn)!=null&&n.includes(s.type))&&await d(s.path,{silent:!0})})}),Ae(()=>{v.reset()});const a=B([]);ne("form-errors",a),ne("form-events",v);const t=B({});ne("form-inputs",t);async function m(){let s=await e.validate(e.state);if(e.schema)if(na(e.schema))s=s.concat(await ia(e.state,e.schema));else if(ta(e.schema))s=s.concat(await la(e.state,e.schema));else if(oa(e.schema))s=s.concat(await ra(e.state,e.schema));else if(sa(e.schema))s=s.concat(await da(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return s}async function d(s,n={silent:!1}){let i=s;if(s&&!Array.isArray(s)&&(i=[s]),i){const w=a.value.filter(k=>!i.includes(k.path)),O=(await m()).filter(k=>i.includes(k.path));a.value=w.concat(O)}else a.value=await m();if(a.value.length>0){if(n.silent)return!1;throw new se(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function y(s){var i;const n=s;try{(i=e.validateOn)!=null&&i.includes("submit")&&await d();const w={...n,data:e.state};c("submit",w)}catch(w){if(!(w instanceof se))throw w;const O={...n,errors:a.value.map(k=>({...k,id:t.value[k.path]}))};c("error",O)}}return r({validate:d,errors:a,setErrors(s,n){n?a.value=a.value.filter(i=>i.path!==n).concat(s):a.value=s},async submit(){await y(new Event("submit"))},getErrors(s){return s?a.value.filter(n=>n.path===s):a.value},clear(s){s?a.value=a.value.filter(n=>n.path!==s):a.value=[]}}),{onSubmit:y}}});function ta(e){return e.validate&&e.__isYupSchema__}function aa(e){return e.inner!==void 0}async function la(e,r){try{return await r.validate(e,{abortEarly:!1}),[]}catch(c){if(aa(c))return c.inner.map(o=>({path:o.path??"",message:o.message}));throw c}}function na(e){return e.parse!==void 0}async function ia(e,r){const c=await r.safeParseAsync(e);return c.success===!1?c.error.issues.map(o=>({path:o.path.join("."),message:o.message})):[]}function oa(e){return e.validateAsync!==void 0&&e.id!==void 0}function ua(e){return e.isJoi===!0}async function ra(e,r){try{return await r.validateAsync(e,{abortEarly:!1}),[]}catch(c){if(ua(c))return c.details.map(o=>({path:o.path.join("."),message:o.message}));throw c}}function sa(e){return"_parse"in e||"_run"in e||typeof e=="function"&&"schema"in e}async function da(e,r){var o;return((o=(await("_parse"in r?r._parse(e):"_run"in r?r._run({typed:!1,value:e},{}):r(e))).issues)==null?void 0:o.map(v=>{var a;return{path:((a=v.path)==null?void 0:a.map(t=>t.key).join("."))||"",message:v.message}}))||[]}function ca(e,r,c,o,v,a){return f(),S("form",{onSubmit:r[0]||(r[0]=pt((...t)=>e.onSubmit&&e.onSubmit(...t),["prevent"]))},[A(e.$slots,"default")],32)}const va=ye(ea,[["render",ca]]),ga=G({inheritAttrs:!1,__name:"AuthForm",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},align:{type:String,default:"bottom"},loading:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},providers:{type:Array,default:()=>[]},submitButton:{type:Object,default:()=>({})},schema:{type:Object,default:void 0},validate:{type:[Function,Array],default:void 0},validateOn:{type:Array,default:()=>["submit"]},divider:{type:String,default:"or"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["submit"],setup(e,{expose:r}){const c=e,o=h(()=>({wrapper:"w-full max-w-sm space-y-6",base:"",container:Y("gap-y-6 flex flex-col",c.align==="top"&&"flex-col-reverse"),title:"text-2xl text-gray-900 dark:text-white font-bold",description:"text-gray-500 dark:text-gray-400 mt-1",icon:{wrapper:"mb-2 pointer-events-none",base:"w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"},providers:"space-y-3",form:"space-y-6",footer:"text-sm text-gray-500 dark:text-gray-400 mt-2",default:{submitButton:{label:"Continue"}}})),v=B(),{ui:a,attrs:t}=re("auth.form",Z(c,"ui"),o,Z(c,"class"),!0),m=bt(Object.values(c.fields).reduce((d,{name:y,value:s})=>(d[y]=s,d),{}));return r({formRef:v,state:m}),(d,y)=>{var E,l,p,g;const s=Se,n=gt,i=Ot,w=Gt,O=_t,k=yt,F=ht,I=va;return f(),S("div",q({class:C(a).wrapper},C(t)),[e.icon||d.$slots.icon||e.title||d.$slots.title||e.description||d.$slots.description?(f(),S("div",{key:0,class:b(C(a).base)},[e.icon||d.$slots.icon?(f(),S("div",{key:0,class:b(C(a).icon.wrapper)},[A(d.$slots,"icon",{},()=>[X(s,{name:e.icon,class:b(C(a).icon.base)},null,8,["name","class"])])],2)):V("",!0),e.title||d.$slots.title?(f(),S("p",{key:1,class:b(C(a).title)},[A(d.$slots,"title",{},()=>[_(J(e.title),1)])],2)):V("",!0),e.description||d.$slots.description?(f(),S("div",{key:2,class:b(C(a).description)},[A(d.$slots,"description",{},()=>[_(J(e.description),1)])],2)):V("",!0)],2)):V("",!0),T("div",{class:b(C(a).container)},[(E=e.providers)!=null&&E.length?(f(),S("div",{key:0,class:b(C(a).providers)},[(f(!0),S(ue,null,be(e.providers,(u,$)=>(f(),j(n,q({key:$,ref_for:!0},u,{block:"",onClick:u.click}),null,16,["onClick"]))),128))],2)):V("",!0),(l=e.providers)!=null&&l.length&&((p=e.fields)!=null&&p.length)?(f(),j(i,{key:1,label:e.divider},null,8,["label"])):V("",!0),(g=e.fields)!=null&&g.length?(f(),j(I,{key:2,ref_key:"formRef",ref:v,state:C(m),schema:e.schema,validate:e.validate,"validate-on":e.validateOn,class:b(C(a).form),onSubmit:y[0]||(y[0]=u=>d.$emit("submit",u.data))},{default:U(()=>[(f(!0),S(ue,null,be(e.fields,u=>(f(),j(F,{key:u.name,label:u.type==="checkbox"?"":u.label??"",description:u.description,help:u.help,hint:u.hint,name:u.name,size:u.size},mt({default:U(()=>[A(d.$slots,`${u.name}-field`,q({ref_for:!0},{state:C(m),field:C(ae)(u,["description","help","hint","size"])}),()=>[u.type==="checkbox"?(f(),j(w,q({key:0,modelValue:C(m)[u.name],"onUpdate:modelValue":$=>C(m)[u.name]=$,ref_for:!0},C(ae)(u,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):u.type==="select"?(f(),j(O,q({key:1,modelValue:C(m)[u.name],"onUpdate:modelValue":$=>C(m)[u.name]=$,ref_for:!0},C(ae)(u,["description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"])):(f(),j(k,q({key:2,modelValue:C(m)[u.name],"onUpdate:modelValue":$=>C(m)[u.name]=$,ref_for:!0},C(ae)(u,["label","description","help","hint","size"])),null,16,["modelValue","onUpdate:modelValue"]))])]),_:2},[d.$slots[`${u.name}-label`]?{name:"label",fn:U(()=>[A(d.$slots,`${u.name}-label`)]),key:"0"}:void 0,d.$slots[`${u.name}-description`]?{name:"description",fn:U(()=>[A(d.$slots,`${u.name}-description`)]),key:"1"}:void 0,d.$slots[`${u.name}-hint`]?{name:"hint",fn:U(()=>[A(d.$slots,`${u.name}-hint`)]),key:"2"}:void 0,d.$slots[`${u.name}-help`]?{name:"help",fn:U(()=>[A(d.$slots,`${u.name}-help`)]),key:"3"}:void 0]),1032,["label","description","help","hint","name","size"]))),128)),A(d.$slots,"validation"),X(n,q({type:"submit",block:"",loading:e.loading},{...C(a).default.submitButton,...e.submitButton}),null,16,["loading"])]),_:3},8,["state","schema","validate","validate-on","class"])):V("",!0)],2),d.$slots.footer?(f(),S("p",{key:1,class:b(C(a).footer)},[A(d.$slots,"footer")],2)):V("",!0)],16)}}});export{ga as _};
