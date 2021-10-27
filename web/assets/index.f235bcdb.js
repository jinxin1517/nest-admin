var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,o=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&i(e,a,t[a]);return e},s=(e,r)=>t(e,a(r));"undefined"!=typeof require&&require;import{q as d,e as c,R as u}from"./services.dbd5ab39.js";import{a as m,P as p}from"./Table.f76b0e48.js";import{r as v,d as f,R as y,ba as g,b7 as b,g as h,H as w,L as x,t as E,q as j,a_ as T,at as S,b2 as C}from"./vendor.6b110da5.js";import{h as O,a as I}from"./untils.fef0d0c5.js";import{a as L,b as P}from"./index.de14bc76.js";import{P as k}from"./index.d8cb9eb3.js";import{A as q}from"./index.10b1c10a.js";import"./index.2986d513.js";/* empty css              */import"./index.ade18ff5.js";var F={icon:function(e,t){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M477.5 536.3L135.9 270.7l-27.5-21.4 27.6 21.5V792h752V270.8L546.2 536.3a55.99 55.99 0 01-68.7 0z",fill:t}},{tag:"path",attrs:{d:"M876.3 198.8l39.3 50.5-27.6 21.5 27.7-21.5-39.3-50.5z",fill:t}},{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-94.5 72.1L512 482 190.5 232.1h643zm54.5 38.7V792H136V270.8l-27.6-21.5 27.5 21.4 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5h.1l39.3 50.5-27.7 21.5z",fill:e}}]}},name:"mail",theme:"twotone"},z=function(e,t){return v.exports.createElement(q,f(f({},e),{},{ref:t,icon:F}))};z.displayName="MailTwoTone";var R=v.exports.forwardRef(z);const $=e=>{const{avatar:t}=e,[a,r]=v.exports.useState(!1),[l,n]=v.exports.useState(""),[i,o]=v.exports.useState(""),[s,d]=v.exports.useState([]);v.exports.useEffect((()=>{var e,a;t&&(o(null==(e=null==t?void 0:t[0])?void 0:e.name),n(null==(a=null==t?void 0:t[0])?void 0:a.url),d(t))}),[t]);const c=y.createElement("div",null,y.createElement(m,null),y.createElement("div",{style:{marginTop:8}},"Upload"));return y.createElement(y.Fragment,null,y.createElement(L.Item,{label:"头像",name:"avatar"},y.createElement(g,{fileList:s,beforeUpload:()=>!1,maxCount:1,listType:"picture-card",onPreview:async e=>{o(e.name||e.url.substring(e.url.lastIndexOf("/")+1)),r(!0)},onChange:async e=>{var t,a;console.log(e),d(null==e?void 0:e.fileList);const{file:r}=e;(null==(t=null==e?void 0:e.fileList)?void 0:t.length)>0?(r.preview=await I(null==(a=null==e?void 0:e.fileList)?void 0:a[0].originFileObj),n(r.url||r.preview)):n("")}},!l&&c)),y.createElement(b,{visible:a,title:i,footer:null,onCancel:()=>r(!1)},y.createElement("img",{alt:"头像",style:{width:"100%"},src:l})))};var _="object"==typeof h&&h&&h.Object===Object&&h,N="object"==typeof self&&self&&self.Object===Object&&self;_||N||Function("return this")();var V="object"==typeof h&&h&&h.Object===Object&&h,D="object"==typeof self&&self&&self.Object===Object&&self;function M(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState}V||D||Function("return this")();var A=[],H=!1;if("undefined"!=typeof window&&window.addEventListener&&!H){var U=function(){if(M()&&(void 0===navigator.onLine||navigator.onLine))for(var e=0;e<A.length;e++){(0,A[e])()}};window.addEventListener("visibilitychange",U,!1),window.addEventListener("focus",U,!1),H=!0}var B=[],G=!1;if("undefined"!=typeof window&&window.addEventListener&&!G){window.addEventListener("visibilitychange",(function(){if(M())for(var e=0;e<B.length;e++){(0,B[e])()}}),!1),G=!0}var K=y.createContext({});K.displayName="UseRequestConfigContext";K.Provider;function Z(e){var t=e||{},a=t.initialValue,r=t.transformer,l=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,l,n=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(o){l={error:o}}finally{try{r&&!r.done&&(a=n.return)&&a.call(n)}finally{if(l)throw l.error}}return i}(v.exports.useState(a),2),n=l[0],i=l[1],o=v.exports.useCallback((function(){return i(a)}),[]),s=v.exports.useRef(r);return s.current=r,[n,{onChange:v.exports.useCallback((function(e){var t=e.target.value;return"function"==typeof s.current?i(s.current(t)):i(t)}),[]),reset:o}]}const{Option:W}=x,J=e=>{const{setCaptcha:t,cItem:a}=e,[r,{onChange:l,reset:n}]=Z({transformer:e=>e.replace(/[^\d]/g,"")}),[i,o]=v.exports.useState([]);return v.exports.useEffect((()=>{(async()=>{const e=await d();e&&o(e.data)})()}),[]),y.createElement(y.Fragment,null,y.createElement(P,{width:"md",name:"userName",label:"用户名",tooltip:"最长为 16 位",placeholder:"请输入用户名",rules:[{required:!0,message:"请输入用户名!"},{validator:(e,t,a)=>{t.length>16?a("用户名过长，最长为 16 位"):a()}}]}),y.createElement(P,{width:"md",name:"email",label:"邮箱",placeholder:"请输入邮箱",rules:[{type:"email",message:"请输入正确的邮箱!"},{required:!0,message:"请输入邮箱!"}]}),y.createElement(L.Item,{label:"手机号",name:"phone",rules:[{required:!0,message:"请输入手机号!"},{validator:(e,t,a)=>{/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/g.test(t)?a():a("请输入正确的手机号")}}]},y.createElement(w,{allowClear:!0,maxLength:11,className:"input-fix-md",value:r||(null==a?void 0:a.phone)||"",onChange:l})),!a&&y.createElement(y.Fragment,null,y.createElement(P.Password,{width:"md",label:"密码",name:"password",extra:"密码至少包含 数字和英文，长度6-20",validateFirst:!0,rules:[{required:!0,message:"请输入密码!"},{validator:(e,t,a)=>{/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/g.test(t)?a():a("密码至少包含 数字和英文，长度6-20")}}]}),y.createElement(P.Password,{width:"md",label:"确认密码",name:"confirmPassword",placeholder:"请再次输入密码",rules:[{required:!0,message:"请输入确认密码密码!"},({getFieldValue:e})=>({validator:(t,a)=>a&&e("password")!==a?Promise.reject(new Error("两次输入密码不一致!")):Promise.resolve()})]})),y.createElement(L.Item,{label:"角色",name:"role",rules:[{required:!0,message:"请选择角色!"}]},y.createElement(x,{placeholder:"请选择角色",className:"input-fix-md",allowClear:!0},null==i?void 0:i.map((e=>y.createElement(W,{value:null==e?void 0:e.name,key:null==e?void 0:e._id},null==e?void 0:e.name))))),y.createElement($,{avatar:null==a?void 0:a.avatar}),y.createElement(k,{fieldProps:{size:"large",prefix:y.createElement(R,null)},captchaProps:{size:"large"},label:"验证码",phoneName:"phone",name:"captcha",rules:[{required:!0,message:"请输入验证码"}],placeholder:"请输入验证码",onGetCaptcha:async e=>{const a=parseInt((1e4*Math.random()).toString());t(a.toString()),E.success(`验证码为${a}`)}}))},Q=()=>{const[e,t]=v.exports.useState(!1),[a,r]=v.exports.useState(),l=v.exports.useRef(),[n,i]=v.exports.useState("1111"),[f,g]=v.exports.useState([]),[b,h]=v.exports.useState([]);v.exports.useEffect((()=>{(async()=>{const e=await d();e&&h(e.data)})()}),[]);const w=[{dataIndex:"index",valueType:"indexBorder",width:48},{title:"用户名",dataIndex:"userName",copyable:!0,ellipsis:!0,tip:"标题过长会自动收缩",formItemProps:{rules:[{required:!0,message:"此项为必填项"}]},render:(e,t)=>{var a,r;return y.createElement(T,{justify:"start",align:"middle",style:{flexFlow:"nowrap"}},(null==t?void 0:t.avatar)&&y.createElement(S,{style:{flex:"0 0 auto",marginRight:"5px"},src:null==(r=null==(a=t.avatar)?void 0:a[0])?void 0:r.url}),e)}},{title:"邮箱",dataIndex:"email"},{title:"手机号",dataIndex:"phone"},{title:"角色",dataIndex:"role",renderFormItem:()=>y.createElement(x,{allowClear:!0},null==b?void 0:b.map((e=>y.createElement(x.Option,{value:e.name,key:e._id},null==e?void 0:e.name))))},{title:"创建时间",dataIndex:"registerTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"创建时间",dataIndex:"created_at",valueType:"dateTimeRange",hideInTable:!0,search:{transform:e=>({startTime:e[0],endTime:e[1]})}},{title:"操作",valueType:"option",width:180,render:(e,t,a,r)=>[y.createElement(j,{type:"link",key:"editable",onClick:()=>{P(t)}},"编辑"),y.createElement(C,{key:"del",placement:"topRight",title:"确定要删除吗?",onConfirm:()=>{var e,a;return k(null==t?void 0:t._id,null==(a=null==(e=null==t?void 0:t.avatar)?void 0:e[0])?void 0:a.uid)},okText:"确定",okType:"danger",cancelText:"取消"},y.createElement(j,{type:"link",danger:!0,key:"delete"},"删除"))]}],I=()=>{t(!0)},L=()=>{t(!1)},P=e=>{r(e),I()},k=async(e,t)=>{var a;const r=await(async(e,t)=>O(`/api/users/${e}/${t}`,{method:"DELETE"}))(e,t);r&&(null==(a=null==l?void 0:l.current)||a.reload(),E.success(r.message||"删除成功"))};return y.createElement(y.Fragment,null,y.createElement(p,{scroll:{x:!0},bordered:!0,request:async(e,t,a)=>{const r=await(async e=>O("/api/users",{method:"GET",params:e}))(o(o(o({},e),t),a));return r?{data:r.data,success:!0,total:r.total}:{data:void 0,success:!1,total:0}},columns:w,actionRef:l,editable:{type:"multiple"},columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"_id",search:{labelWidth:"auto"},form:{syncToUrl:(e,t)=>"get"===t?s(o({},e),{created_at:[e.startTime,e.endTime]}):e},pagination:{pageSize:5,pageSizeOptions:["5","10","20","30","50","100"]},dateFormatter:"string",headerTitle:"用户列表",toolBarRender:()=>[y.createElement(j,{key:"out",onClick:()=>{c(f,"角色管理")}},"导出数据"),y.createElement(j,{key:"button",icon:y.createElement(m,null),type:"primary",onClick:()=>{I(),r(void 0)}},"新建")]}),y.createElement(u,{onCloseDrawer:L,visibleDrawer:e,cItem:a,title:"新增用户",renderFormItemDom:()=>y.createElement(J,{setCaptcha:i,cItem:a}),onFinish:async e=>{var t,r,i,d;if(n===(null==e?void 0:e.captcha))if(a){const r=()=>{var t,a,r,l,n;return(null==(a=null==(t=null==e?void 0:e.avatar)?void 0:t.file)?void 0:a.preview)?null==(r=null==e?void 0:e.avatar)?void 0:r.file.preview:0===(null==(n=null==(l=null==e?void 0:e.avatar)?void 0:l.fileList)?void 0:n.length)?"":null==e?void 0:e.avatar},n=await(async(e,t)=>O(`/api/users/${e}`,{method:"PATCH",data:t}))(null==a?void 0:a._id,s(o({},e),{avatar:r()}));n&&(null==(t=null==l?void 0:l.current)||t.reload(),E.success(n.message||"更新成功"),L())}else{const t=await(async e=>O("/api/users",{method:"POST",data:e}))(s(o({},e),{avatar:null==(i=null==(r=null==e?void 0:e.avatar)?void 0:r.file)?void 0:i.preview}));t&&(null==(d=null==l?void 0:l.current)||d.reload(),E.success(t.message||"创建成功"),L())}else E.error("验证码错误")}}))};export{Q as default};
