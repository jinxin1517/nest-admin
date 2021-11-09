var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&n(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{a as d,e as u,R as m,b as c,d as p,u as y,c as f}from"./services.62fa0db1.js";import{a as v}from"./FromTreeMenu.b7a7fc35.js";import{q as h,t as g}from"./index.0e86a1bf.js";import{b,a as x}from"./index.71288ad6.js";import{P as w}from"./Table.1481c2fd.js";import{r as E,a$ as T,bg as k,R as S,z as j,W as O,bl as I,b9 as _,C}from"./vendor.f67ea38f.js";import{P as F}from"./index.a296d583.js";import"./index.ed542ea6.js";import"./Google.e01fde31.js";import"./index.esm.a5edf398.js";import"./index.43940c01.js";const P=()=>{const[e,t]=E.exports.useState(!1),[a,r]=E.exports.useState(),l=E.exports.useRef(),[i,n]=E.exports.useState([]),[P,q]=E.exports.useState([]),[D,R]=E.exports.useState([]),$=T(),L=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"角色名",dataIndex:"name",copyable:!0,ellipsis:!0,tip:"标题过长会自动收缩",formItemProps:{rules:[{required:!0,message:"此项为必填项"}]}},{title:"权限",dataIndex:"authority",renderFormItem:()=>S.createElement(O,{allowClear:!0},null==P?void 0:P.map((e=>S.createElement(O.Option,{value:e._id,key:e._id},$({id:`menu.${null==e?void 0:e.name}`}))))),render:e=>S.createElement(S.Fragment,null,null==e?void 0:e.map((e=>S.createElement(I,{key:null==e?void 0:e._id,color:null==e?void 0:e.color,style:{marginBottom:"5px"}},$({id:`menu.${null==e?void 0:e.name}`})))))},{title:"创建时间",dataIndex:"registerTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"创建时间",dataIndex:"created_at",valueType:"dateTimeRange",hideInTable:!0,search:{transform:e=>({startTime:e[0],endTime:e[1]})}},{title:"操作",valueType:"option",width:180,render:(e,t,a,r)=>[S.createElement(j,{type:"link",key:"editable",onClick:()=>{N(null==t?void 0:t._id)}},"编辑"),S.createElement(_,{key:"del",placement:"topRight",title:"确定要删除吗?",onConfirm:()=>W(null==t?void 0:t._id,null==t?void 0:t.name),okText:"确定",okType:"danger",cancelText:"取消"},S.createElement(j,{type:"link",danger:!0,key:"delete"},"删除"))]}];E.exports.useEffect((()=>{(async()=>{const e=await h();q(null==e?void 0:e.data)})()}),[]),E.exports.useEffect((()=>{if(e){(async()=>{if(P){const e=g(P,"_id","lastMenu",(e=>(e.title=$({id:`menu.${e.name}`}),e.value=e._id,(null==e?void 0:e.isLink)?(e.disabled=!0,e):e)));n(e)}})()}}),[e,a]);const z=()=>{t(!0)},B=()=>{t(!1)},N=async e=>{const t=await c(e);r(null==t?void 0:t.data),z()},W=async(e,t)=>{var a;const r=await p(e,t);if(r){await v({name:t})&&(null==(a=null==l?void 0:l.current)||a.reload(),C.success(r.message||"删除成功"))}},A={treeData:i,treeDefaultExpandAll:!0,treeCheckable:!0,treeCheckStrictly:!0,showCheckedStrategy:k.SHOW_ALL,placeholder:"请选择",allowClear:!0,className:"input-fix-md",dropdownStyle:{maxHeight:400,overflow:"auto"}};return S.createElement(S.Fragment,null,S.createElement(w,{scroll:{x:!0},bordered:!0,request:async(e,t,a)=>{var r;const l=await h(),i=await d(o(o(o({},e),t),a)),n=null==(r=i.data)?void 0:r.map((e=>{var t;return e.authority=[],null==(t=null==l?void 0:l.data)||t.forEach((t=>{t.authority.includes(e.name)&&e.authority.push(t)})),e})),s=JSON.parse(JSON.stringify(n));if(i){const e=s.map((e=>{var t;const a=[];null==(t=null==e?void 0:e.authority)||t.map((e=>{a.push($({id:`menu.${e.name}`}))})),e.authority=a;const{name:r,authority:l,registerTime:i}=e;return{name:r,authority:l,registerTime:new Date(i).toLocaleString()}}));return R(e),{data:n,success:!0,total:i.total}}return{data:void 0,success:!1,total:0}},columns:L,actionRef:l,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"_id",search:{labelWidth:"auto"},form:{syncToUrl:(e,t)=>"get"===t?s(o({},e),{created_at:[e.startTime,e.endTime]}):e},pagination:{pageSize:5,pageSizeOptions:["5","10","20","30","50","100"]},dateFormatter:"string",headerTitle:"角色列表",toolBarRender:()=>[S.createElement(j,{key:"out",onClick:()=>{u(D,"角色管理")}},"导出数据"),S.createElement(j,{key:"button",icon:S.createElement(F,null),type:"primary",onClick:()=>{z(),r(void 0)}},"新建")]}),S.createElement(m,{onCloseDrawer:B,visibleDrawer:e,cItem:a,title:"新增角色",renderFormItemDom:()=>S.createElement(S.Fragment,null,S.createElement(b,{width:"md",name:"name",label:"角色名",tooltip:"最长为 16 位",placeholder:"请输入角色名",rules:[{required:!0,message:"请输入角色名!"},{validator:(e,t,a)=>{t.length>16?a("角色名过长，最长为 16 位"):a()}}]}),S.createElement(x.Item,{label:"权限",name:"authority",rules:[{required:!0,message:"请选择权限!"}]},S.createElement(k,o({},A)))),onFinish:async e=>{var t,r,i;const n=null==(t=null==e?void 0:e.authority)?void 0:t.map((e=>e.value));if(a){const t=await y(null==a?void 0:a._id,s(o({},e),{authority:n}));if(t){await v(s(o({},e),{authority:n}))&&(null==(r=null==l?void 0:l.current)||r.reload(),C.success(t.message||"更新成功"),B())}}else{const t=await f(s(o({},e),{authority:n}));if(t){await v(s(o({},e),{authority:n}))&&(null==(i=null==l?void 0:l.current)||i.reload(),C.success(t.message||"创建成功"),B())}}}}))};export{P as default};
