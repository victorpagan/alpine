import{d as a,I as i,ao as n,m as c,b as o,c as d,O as h,M as u,l}from"./0sj_jyWR.js";const m=["src","alt","width","height"],f=a({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const e=t,r=i(()=>{var s;return(s=e.src)!=null&&s.startsWith("/")&&!e.src.startsWith("//")?n(e.src,c().app.baseURL):e.src});return(s,g)=>(o(),d("img",h(s.$attrs,{src:u(r),alt:t.alt,width:t.width,height:t.height}),null,16,m))}}),b=l(f,[["__scopeId","data-v-34d2b7c5"]]);export{b as default};