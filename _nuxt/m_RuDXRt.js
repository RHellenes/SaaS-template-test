import{_ as W,a as Z}from"./DWHze32E.js";import{_ as K}from"./v_g61Ax-.js";import{R as q,aq as Q,S as z,d as C,V as P,W as x,G as h,ar as X,as as Y,Z as A,at as ee,au as U,I as E,av as te,aw as ae,ax as D,ay as se,c as i,e as c,n as m,ab as t,O as f,h as $,P as p,g as u,f as j,N as v,w as y,k as G,t as O,F,M as R,az as re,ao as ne,ah as V,ai as ie,aj as le,al as I,am as oe,s as M}from"./CNMvcGbG.js";const ue={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},T=q(z.ui.strategy,z.ui.avatar,Q),ce=q(z.ui.strategy,z.ui.avatarGroup,ue),de=C({inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:r}){const{ui:s,attrs:l}=P("avatarGroup",x(e,"ui"),ce,x(e,"class")),a=h(()=>X(r)),o=h(()=>typeof e.max=="string"?parseInt(e.max,10):e.max),_=h(()=>a.value.map((b,n)=>{const d={};return!e.max||o.value&&n<o.value?(e.size&&(d.size=e.size),d.class=b.props.class||"",d.class=Y(A(d.class,s.value.ring,s.value.margin),d.class),ee(b,d)):o.value!==void 0&&n===o.value?U(E,{size:e.size||T.default.size,text:`+${a.value.length-o.value}`,class:A(s.value.ring,s.value.margin)}):null}).filter(Boolean).reverse());return()=>U("div",{class:s.value.wrapper,...l.value},_.value)}}),ge=j("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),me=j("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),fe=["datetime"],pe=C({inheritAttrs:!1,__name:"BlogPost",props:{...te,title:{type:String,default:void 0},description:{type:String,default:void 0},date:{type:[String,Date],default:void 0},image:{type:[String,Object],default:void 0},badge:{type:Object,default:void 0},authors:{type:Array,default:void 0},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=ae(),s=e,l=h(()=>({wrapper:A("relative group flex flex-col w-full gap-y-6",s.orientation==="horizontal"&&(s.image||r.image)?"lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center":void 0),image:{wrapper:"ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",base:"object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"},container:"flex flex-col justify-between flex-1",inner:"flex-1",badge:{wrapper:"mb-3",base:""},title:"text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",description:"text-base text-gray-500 dark:text-gray-400 mt-1",date:"text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",authors:{wrapper:"relative flex items-center gap-x-3 mt-4",avatar:{base:"relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",size:"xs"}}})),{ui:a,attrs:o}=P("blog.post",x(s,"ui"),l,x(s,"class"),!0),_=h(()=>D(s)),b=h(()=>(s.title||r.title&&se(r.title())||"Post link").trim());return(n,d)=>{var N;const B=K,k=re,g=ne,w=E,H=de;return i(),c("article",p({class:t(a).wrapper},t(o)),[e.image||n.$slots.image?(i(),c("div",{key:0,class:m(t(a).image.wrapper)},[f(n.$slots,"image",{},()=>[$(B,p(typeof e.image=="string"?{src:e.image,alt:e.title}:{alt:e.title,...e.image},{class:t(a).image.base}),null,16,["class"])])],2)):u("",!0),j("div",{class:m(t(a).container)},[j("div",{class:m(t(a).inner)},[n.to?(i(),v(k,p({key:0,"aria-label":t(b)},t(_),{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>[ge]),_:1},16,["aria-label"])):u("",!0),e.badge||n.$slots.badge?(i(),c("div",{key:1,class:m(t(a).badge.wrapper)},[f(n.$slots,"badge",{},()=>[e.badge?(i(),v(g,p({key:0},{variant:"subtle",...e.badge},{class:t(a).badge.base}),null,16,["class"])):u("",!0)])],2)):u("",!0),e.title||n.$slots.title?(i(),c("h2",{key:2,class:m(t(a).title)},[f(n.$slots,"title",{},()=>[G(O(e.title),1)])],2)):u("",!0),e.description||n.$slots.description?(i(),c("div",{key:3,class:m(t(a).description)},[f(n.$slots,"description",{},()=>[G(O(e.description),1)])],2)):u("",!0),f(n.$slots,"default")],2),(N=e.authors)!=null&&N.length||e.date?(i(),c("div",{key:0,class:m(t(a).authors.wrapper)},[f(n.$slots,"authors",{},()=>{var L;return[(L=e.authors)!=null&&L.length?(i(),v(H,{key:0},{default:y(()=>[(i(!0),c(F,null,R(e.authors,(S,J)=>(i(),v(w,p({key:J,alt:S.name,class:t(a).authors.avatar.base,ref_for:!0},{size:t(a).authors.avatar.size,...S.avatar}),{default:y(()=>[S.to?(i(),v(k,p({key:0,ref_for:!0},{target:"_blank",...t(D)(S)},{class:"focus:outline-none",tabindex:"-1"}),{default:y(()=>[me]),_:2},1040)):u("",!0)]),_:2},1040,["alt","class"]))),128))]),_:1})):u("",!0)]}),f(n.$slots,"date",{},()=>[e.date?(i(),c("time",{key:0,datetime:new Date(e.date).toISOString(),class:m(t(a).date)},O(e.date),11,fe)):u("",!0)])],2)):u("",!0)],2)],16)}}}),ve=C({inheritAttrs:!1,__name:"BlogList",props:{orientation:{type:String,default:"horizontal"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const r=e,s=h(()=>({wrapper:{horizontal:"flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",vertical:"flex flex-col gap-y-16 w-full"}[r.orientation]})),{ui:l,attrs:a}=P("blog.list",x(r,"ui"),s,x(r,"class"),!0);return(o,_)=>(i(),c("div",p({class:t(l).wrapper},t(a)),[f(o.$slots,"default")],16))}}),xe=C({__name:"index",async setup(e){let r,s;const{data:l}=([r,s]=V(()=>I("blog",()=>M("/blog").findOne())),r=await r,s(),r);if(!l.value)throw ie({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:a}=([r,s]=V(()=>I("posts",()=>M("/blog").where({_extension:"md"}).sort({date:-1}).find())),r=await r,s(),r);return le({title:l.value.title,ogTitle:l.value.title,description:l.value.description,ogDescription:l.value.description}),(o,_)=>{const b=W,n=pe,d=ve,B=Z,k=oe;return i(),v(k,null,{default:y(()=>[$(b,p(t(l),{class:"py-[50px]"}),null,16),$(B,null,{default:y(()=>[$(d,null,{default:y(()=>[(i(!0),c(F,null,R(t(a),(g,w)=>(i(),v(n,{key:w,to:g._path,title:g.title,description:g.description,image:g.image,date:new Date(g.date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"}),authors:g.authors,badge:g.badge,orientation:w===0?"horizontal":"vertical",class:m([w===0&&"col-span-full"]),ui:{description:"line-clamp-2"}},null,8,["to","title","description","image","date","authors","badge","orientation","class"]))),128))]),_:1})]),_:1})]),_:1})}}});export{xe as default};
