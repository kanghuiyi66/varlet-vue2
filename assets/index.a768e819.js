import{A as a}from"./index.ef8831ff.js";import{A as d}from"./AppType.7c373718.js";import{B as h}from"./index.e4c5505d.js";import{S as n}from"./index.c9218a99.js";import{r as s}from"./index.bab5582f.js";import{d as k}from"./index.9b1139e6.js";import{u as f,a as m,_ as v,b,c as _}from"./en-US.36f69c14.js";import{w as y,a as w,b as C}from"./utils.d774da76.js";import{n as A}from"./index.c2619ef7.js";import"./index.aabf9f28.js";import"./index.d3aee650.js";import"./create.11eee831.js";import"./vendor.7d1cc22d.js";import"./shared.f8da68a0.js";import"./lock.ac20a0f2.js";import"./index.aa82ed18.js";import"./Teleport.74ff85c7.js";import"./components.a1090420.js";import"./zIndex.3167d10e.js";import"./teleport.cb83deae.js";import"./index.eacba6dd.js";import"./elements.2a324d45.js";import"./index.1b0b81cd.js";var S={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},$={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"};const{add:p,use:F,pack:E,packs:ct,merge:at}=f(),T=t=>{_(t),F(t)};m("zh-CN",v);m("en-US",b);p("zh-CN",S);p("en-US",$);var g=function(){var t=this,c=t.$createElement,o=t._self._c||c;return o("div",{staticClass:"var-actionSheet-example"},[o("app-type",[t._v(t._s(t.pack.functionCall))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:t.createBasic}},[t._v(t._s(t.pack.basicUsage))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:t.modifyTitle}},[t._v(t._s(t.pack.modifyTitle))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:t.disableAction}},[t._v(t._s(t.pack.disabled))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:t.disableCloseOnClickAction}},[t._v(t._s(t.pack.disableCloseOnClickAction))]),o("var-button",{attrs:{type:"primary",block:""},on:{click:t.customActionStyles}},[t._v(t._s(t.pack.customActionStyles))]),o("app-type",[t._v(t._s(t.pack.componentCall))]),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(e){t.show=!0}}},[t._v(t._s(t.pack.basicUsage))]),o("var-action-sheet",{attrs:{actions:t.actions,show:t.show},on:{"update:show":function(e){t.show=e},select:t.handleSelect}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(e){t.show1=!0}}},[t._v(t._s(t.pack.modifyTitle))]),o("var-action-sheet",{attrs:{title:t.pack.customTitle,actions:t.actions,show:t.show1},on:{"update:show":function(e){t.show1=e},select:t.handleSelect}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(e){t.show2=!0}}},[t._v(t._s(t.pack.disabled))]),o("var-action-sheet",{attrs:{actions:t.disabledActions,show:t.show2},on:{"update:show":function(e){t.show2=e},select:t.handleSelect}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(e){t.show3=!0}}},[t._v(t._s(t.pack.disableCloseOnClickAction))]),o("var-action-sheet",{attrs:{"close-on-click-action":!1,actions:t.actions,show:t.show3},on:{"update:show":function(e){t.show3=e},select:t.handleSelect}}),o("var-button",{attrs:{type:"warning",block:""},on:{click:function(e){t.show4=!0}}},[t._v(t._s(t.pack.customActionStyles))]),o("var-action-sheet",{attrs:{actions:t.customStyleActions,show:t.show4},on:{"update:show":function(e){t.show4=e},select:t.handleSelect}})],1)},I=[];const i=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],l=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],r=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],x={name:"ActionSheetExample",components:{VarActionSheet:a.Component,VarButton:h,AppType:d},data:()=>({actions:i,disabledActions:l,customStyleActions:r,show:!1,show1:!1,show2:!1,show3:!1,show4:!1}),computed:{pack(){return E.value}},created(){y(this,T),w(this,k);const t=s.touchmoveForbid;C(this,c=>{c==="pc"&&(s.touchmoveForbid=!1)}),this.$on("hook:beforeDestroy",()=>{s.touchmoveForbid=t})},methods:{async createBasic(){const t=await a({actions:i});t!=="close"&&n(`${this.pack.yourSelected}${t.name}`)},async modifyTitle(){const t=await a({actions:i,title:this.pack.customTitle});t!=="close"&&n(`${this.pack.yourSelected}${t.name}`)},async disableAction(){const t=await a({actions:l});t!=="close"&&n(`${this.pack.yourSelected}${t.name}`)},async customActionStyles(){const t=await a({actions:r});t!=="close"&&n(`${this.pack.yourSelected}${t.name}`)},disableCloseOnClickAction(){a({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:t=>n(`${this.pack.yourSelected}${t.name}`)})},handleSelect(t){n(`${this.pack.yourSelected}${t.name}`)}}},u={};var B=A(x,g,I,!1,U,"7a7f581e",null,null);function U(t){for(let c in u)this[c]=u[c]}var nt=function(){return B.exports}();export{nt as default};