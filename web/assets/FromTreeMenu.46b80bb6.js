import{h as a}from"./index.24a0892b.js";const m=async m=>a("/api/menu",{method:"POST",data:m}),n=async m=>a(`/api/menu/${m}`,{method:"DELETE"}),s=async(m,n)=>a(`/api/menu/${m}`,{method:"PATCH",data:n}),e=async m=>a("/api/menu/many",{method:"POST",data:m});export{e as a,m as c,n as d,s as u};
