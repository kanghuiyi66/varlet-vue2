import{d as h}from"./create.11eee831.js";import{l as m}from"./elements.2a324d45.js";import{n as u}from"./index.c2619ef7.js";import{R as _}from"./index.4bff487f.js";import{S as d}from"./index.65e2d687.js";import{B as y}from"./index.e4c5505d.js";import{A as f}from"./AppType.7c373718.js";import{r as n}from"./index.bab5582f.js";import{d as g}from"./index.9b1139e6.js";import{w as C,b as T,g as S}from"./utils.d774da76.js";import{u as k,a as p,_ as b,b as V,c as F}from"./en-US.36f69c14.js";import"./vendor.7d1cc22d.js";import"./shared.f8da68a0.js";import"./index.eacba6dd.js";import"./validation.b62c0932.js";import"./index.aabf9f28.js";import"./relation.9e421618.js";import"./index.1b0b81cd.js";import"./components.a1090420.js";const x={styleVars:{type:Object,default:()=>({})}};var $=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"var-style-provider",style:e.formatStyleVars(e.styleVars)},[e._t("default")],2)},R=[];const P=h({name:"VarStyleProvider",props:x,methods:{formatStyleVars:m}}),c={};var w=u(P,$,R,!1,E,null,null,null);function E(e){for(let o in c)this[o]=c[o]}var r=function(){return w.exports}();const l=[];function a(e={}){l.forEach(t=>document.documentElement.style.removeProperty(t)),l.length=0;const o=m(e);Object.entries(o).forEach(([t,s])=>{document.documentElement.style.setProperty(t,s),l.push(t)})}a.Component=r;r.install=function(e){e.component(r.name,r)};a.install=function(e){e.component(r.name,r)};var z={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},B={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:v,use:N,pack:j,packs:ce,merge:ie}=k(),D=e=>{F(e),N(e)};p("zh-CN",b);p("en-US",V);v("zh-CN",z);v("en-US",B);var U=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"var-styleProvider-example"},[t("app-type",[e._v(e._s(e.pack.componentCall))]),t("var-style-provider",{attrs:{"style-vars":e.styleVars}},[t("var-rate",{model:{value:e.state.score,callback:function(s){e.$set(e.state,"score",s)},expression:"state.score"}}),t("var-switch",{model:{value:e.state.license,callback:function(s){e.$set(e.state,"license",s)},expression:"state.license"}}),t("var-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",block:""},on:{click:e.toggleTheme}},[e._v(e._s(e.pack.toggleTheme))])],1),t("app-type",[e._v(e._s(e.pack.functionCall))]),t("var-button",{attrs:{type:"primary",block:""},on:{click:e.toggleRootTheme}},[e._v(e._s(e.pack.toggleRootTheme))])],1)},A=[];const L={name:"StyleProviderExample",components:{VarStyleProvider:a.Component,VarRate:_,VarSwitch:d,VarButton:y,AppType:f},data:()=>({state:{score:5,license:!0},styleVars:null,successTheme:{"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},rootStyleVars:null,darkTheme:{"--color-primary":"#3f51b5"}}),computed:{pack(){return j.value}},created(){C(this,D);const e=n.touchmoveForbid;T(this,o=>{o==="pc"&&(n.touchmoveForbid=!1)}),this.$on("hook:beforeDestroy",()=>{n.touchmoveForbid=e,a(S()==="darkThemes"?g:null)})},methods:{toggleTheme(){this.styleVars=this.styleVars?null:this.successTheme},toggleRootTheme(){this.rootStyleVars=this.rootStyleVars?null:this.darkTheme,a(this.rootStyleVars)}}},i={};var M=u(L,U,A,!1,O,null,null,null);function O(e){for(let o in i)this[o]=i[o]}var me=function(){return M.exports}();export{me as default};