function s(i){const r=[];function e(t){t.forEach(n=>{r.push(n),n.componentInstance&&e(n.componentInstance.$children.map(o=>o.$vnode)),n.children&&e(n.children)})}return e(i),r}function d(i,r){const{componentOptions:e}=r.$vnode;if(!e||!e.children)return;const t=s(e.children);i.sort((n,o)=>t.indexOf(n.$vnode)-t.indexOf(o.$vnode))}function c(i,r={}){const{childrenKey:e="children"}=r;return{provide(){return{[i]:this}},data(){return{[e]:[]}}}}function h(i,r={}){const{indexKey:e="index",childrenKey:t="children",parentKey:n="parent"}=r;return{inject:{[i]:{default:null}},computed:{[n](){return this[i]},[e](){return this[`bind${n}${t}Relation`](),this[n]?this[n][t].indexOf(this):null}},mounted(){this[`bind${n}${t}Relation`]()},beforeDestroy(){this[n]&&(this[n][t]=this[n][t].filter(o=>o!==this))},methods:{[`bind${n}${t}Relation`](){if(!this[n]||this[n][t].includes(this))return;const o=[...this[n][t],this];d(o,this[n]),this[n][t]=o}}}}export{c as a,h as c};