import{p,I as u}from"./index.28a6df0e.js";import{d as f}from"./create.11eee831.js";import{p as d}from"./components.a1090420.js";import{n as m}from"./index.c2619ef7.js";function _(e){return["default","primary","info","success","warning","danger"].includes(e)}function v(e){return["normal","mini","small","large"].includes(e)}const h={type:{type:String,default:"default",validator:_},size:{type:String,default:"normal",validator:v},color:{type:String},textColor:{type:String},iconName:d(p,"name"),plain:{type:Boolean,default:!1},round:{type:Boolean,default:!0},block:{type:Boolean,default:!1},closable:{type:Boolean,default:!1}};var y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"var-fade"}},[t("span",e._b({staticClass:"var-chip var--box",class:e.contentClass,style:e.chipStyles},"span",e.$attrs,!1),[e._t("left"),t("span",{class:["var-chip--text-"+e.size]},[e._t("default")],2),e._t("right"),e.closable?t("span",{staticClass:"var-chip--close",on:{click:e.onClose}},[t("var-icon",{attrs:{name:""+(e.iconName?e.iconName:"close-circle")}})],1):e._e()],2)])},C=[];const g=f({name:"VarChip",components:{VarIcon:u},inheritAttrs:!1,props:h,computed:{chipStyles(){const{plain:e,textColor:n,color:t}=this;return e?{color:n||t,borderColor:t}:{color:n,background:t}},contentClass(){const{size:e,block:n,type:t,plain:r,round:s}=this,l=n?"var--flex":"var--inline-flex",i=r?`var-chip--plain var-chip--plain-${t}`:`var-chip--${t}`,c=s&&"var-chip--round";return[`var-chip--${e}`,l,i,c]}},methods:{onClose(e){var n,t;(t=(n=this.getListeners()).onClose)==null||t.call(n,e)}}}),o={};var x=m(g,y,C,!1,b,null,null,null);function b(e){for(let n in o)this[n]=o[n]}var a=function(){return x.exports}();a.install=function(e){e.component(a.name,a)};export{a as C};