import{a as d}from"./vendor.7d1cc22d.js";function s(n,e){return Array.isArray(e)?e.reduce((o,t)=>(o[t]=n[t],o),{}):n[e]}function u(n,e="body",o={}){const t=new(d.extend(n))(o),r=t.$mount().$el,a=document.querySelector(e);return a.appendChild(r),{instance:t,unmount(){t.$destroy(),a.removeChild(r)}}}function m(n,e){n.$on("hook:mounted",()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),n.$on("hook:beforeDestroy",()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}export{m as a,u as m,s as p};