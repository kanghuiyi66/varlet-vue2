import{A as o}from"./AppType.b7282488.js";import{S as i}from"./index.e81fb174.js";import{d as c}from"./index.9b1139e6.js";import{u as v,a as u,_ as n,b as p,c as _}from"./en-US.0b8219db.js";import{w as m,a as d}from"./utils.d774da76.js";import{n as h}from"./index.9ef319cd.js";import"./create.03b31fc7.js";import"./vendor.10bd23ac.js";import"./shared.f8da68a0.js";import"./validation.e947fe21.js";import"./index.36e5d4cd.js";import"./index.19abdf8c.js";import"./index.b82c43fb.js";import"./relation.9e421618.js";var f={basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",notAvailable:"\u4E0D\u53EF\u7528",size:"\u4E0D\u540C\u5927\u5C0F",loading:"\u52A0\u8F7D\u72B6\u6001",validateValue:"\u503C\u7684\u6821\u9A8C",text:"\u662F\u5426\u6253\u5F00\u5F00\u5173",state:"\u9519\u8BEF\uFF01"},b={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"};const{add:r,use:k,pack:w,packs:W,merge:q}=v(),x=a=>{_(a),k(a)};u("zh-CN",n);u("en-US",p);r("zh-CN",f);r("en-US",b);var C=function(){var a=this,l=a.$createElement,e=a._self._c||l;return e("div",{staticClass:"var-switch-outer"},[e("app-type",[a._v(a._s(a.pack.basicUsage))]),e("div",{staticClass:"var-switch__example-block"},[e("var-switch",{model:{value:a.value,callback:function(t){a.value=t},expression:"value"}})],1),e("app-type",[a._v(a._s(a.pack.notAvailable))]),e("div",{staticClass:"var-switch__example-block"},[e("var-switch",{attrs:{disabled:""},model:{value:a.value1,callback:function(t){a.value1=t},expression:"value1"}}),e("var-switch",{attrs:{readonly:""},model:{value:a.value1,callback:function(t){a.value1=t},expression:"value1"}})],1),e("app-type",[a._v(a._s(a.pack.customColor))]),e("div",{staticClass:"var-switch__example-block"},[e("var-switch",{attrs:{ripple:!1},model:{value:a.value2,callback:function(t){a.value2=t},expression:"value2"}}),e("var-switch",{attrs:{color:"#ff9f00","close-color":"#f5cb90"},model:{value:a.value2,callback:function(t){a.value2=t},expression:"value2"}})],1),e("app-type",[a._v(a._s(a.pack.size))]),e("div",{staticClass:"var-switch__example-block"},[e("var-switch",{attrs:{size:"15"},model:{value:a.value3,callback:function(t){a.value3=t},expression:"value3"}}),e("var-switch",{model:{value:a.value3,callback:function(t){a.value3=t},expression:"value3"}}),e("var-switch",{attrs:{size:"25"},model:{value:a.value3,callback:function(t){a.value3=t},expression:"value3"}})],1),e("app-type",[a._v(a._s(a.pack.loading))]),e("div",{staticClass:"var-switch__example-block"},[e("var-switch",{attrs:{value:!0,loading:""}}),e("var-switch",{attrs:{value:!0,size:"25",loading:"","loading-color":"#ff9f00"}})],1),e("app-type",[a._v(a._s(a.pack.validateValue))]),e("var-switch",{attrs:{rules:[function(t){return t===!0||a.pack.state}]},model:{value:a.value4,callback:function(t){a.value4=t},expression:"value4"}})],1)},g=[];const F={name:"SwitchExample",components:{VarSwitch:i,AppType:o},data(){return{value:!0,value1:!0,value2:!0,value3:!0,value4:!0}},computed:{pack(){return w.value}},created(){m(this,x),d(this,c)}},s={};var z=h(F,C,g,!1,y,"cb8530b6",null,null);function y(a){for(let l in s)this[l]=s[l]}var G=function(){return z.exports}();export{G as default};