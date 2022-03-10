import{n as a}from"./index.0a9349fd.js";import"./vendor.10bd23ac.js";var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"varlet-site-doc"},[s("h1",[t._v("Steps")]),t._m(0),s("div",{staticClass:"card"},[s("h3",[t._v("Install")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'vue'")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { Steps, Step } "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'@varlet-vue2/ui'")]),t._v(`

Vue.use(Steps).use(Step)
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Basic Usage")]),t._m(1),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":active")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"active"')]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step1"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step2"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step3"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step4"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"primary"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("block")]),t._v(" @"),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"next"')]),t._v(">")]),t._v("next"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-button")]),t._v(">")]),t._v(`
`)])])]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(` {
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("() =>")]),t._v(` ({
    `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(`
  }),
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(`: {
    `),s("span",{pre:!0,attrs:{class:"hljs-function"}},[s("span",{pre:!0,attrs:{class:"hljs-title"}},[t._v("next")]),t._v("("),s("span",{pre:!0,attrs:{class:"hljs-params"}}),t._v(")")]),t._v(` {
      `),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".active = ("),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("this")]),t._v(".active + "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(") % "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("4")]),t._v(`
    }
  }
}
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Custom Style")]),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(` 
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":active")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"active"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active-color")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#f44336"')]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("inactive-color")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"#e99eb4"')]),t._v(`
>`)]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fire"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("inactive-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart-half-full"')]),t._v(">")]),t._v(`
    Step1
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fire"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("inactive-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart-half-full"')]),t._v(">")]),t._v(`
    Step2
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fire"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("inactive-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart-half-full"')]),t._v(">")]),t._v(`
    Step3
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("active-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("current-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"fire"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("inactive-icon")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"heart-half-full"')]),t._v(">")]),t._v(`
    Step4
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(">")]),t._v(`
`)])])])],1),s("div",{staticClass:"card"},[s("h3",[t._v("Vertical Mode")]),t._m(2),s("var-site-code-example",[s("pre",{staticClass:"hljs"},[s("code",{pre:!0},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("direction")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"vertical"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":active")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"active"')]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step1"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step2"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step3"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
  `),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v("Step4"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-step")]),t._v(">")]),t._v(`
`),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("var-steps")]),t._v(">")]),t._v(`
`)])])])],1),s("h2",[t._v("API")]),t._m(3),t._m(4),t._m(5),t._m(6)])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("Intro")]),s("p",[t._v("Steps is a navigation bar that guides users through the steps of a task.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Use "),s("code",{pre:!0},[t._v("active")]),t._v(" prop to control the progress of step, value is index of step and is counted from "),s("code",{pre:!0},[t._v("0")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Change the display direction of the step bar through the "),s("code",{pre:!0},[t._v("direction")]),t._v(" attribute.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("Props")]),s("h4",[t._v("Steps Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("active")])]),s("td",[t._v("Active step")]),s("td",[s("em",[t._v("string | number")])]),s("td",[s("code",{pre:!0},[t._v("0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("direction")])]),s("td",[t._v("Mode of steps, Can be set to "),s("code",{pre:!0},[t._v("vertical")])]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("horizontal")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("active-color")])]),s("td",[t._v("Active step color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("#2979ff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("inactive-color")])]),s("td",[t._v("Inactive step color")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("#9e9e9e")])])])])]),s("h4",[t._v("Step Props")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Prop")]),s("th",[t._v("Description")]),s("th",[t._v("Type")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("active-icon")])]),s("td",[t._v("Active icon name")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("check")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("current-icon")])]),s("td",[t._v("Icon name of current ste")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("inactive-icon")])]),s("td",[t._v("Inactive icon name")]),s("td",[s("em",[t._v("string")])]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("Events")]),s("h4",[t._v("Steps Events")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Event")]),s("th",[t._v("Description")]),s("th",[t._v("arguments")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("click-step")])]),s("td",[t._v("Emitted after click step")]),s("td",[s("code",{pre:!0},[t._v("index: number")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("Slots")]),s("h4",[t._v("Step Slots")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),s("th",[t._v("Description")]),s("th",[t._v("SlotProps")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("default")])]),s("td",[t._v("Content of step")]),s("td",[s("code",{pre:!0},[t._v("-")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h3",[t._v("Style Variables")]),s("p",[t._v("Here are the CSS variables used by the component, Styles can be customized using "),s("a",{attrs:{href:"#/en-US/style-provider"}},[t._v("StyleProvider")])]),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),s("th",[t._v("Default")])])]),s("tbody",[s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-size")])]),s("td",[s("code",{pre:!0},[t._v("20px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-background")])]),s("td",[s("code",{pre:!0},[t._v("#9e9e9e")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-font-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-md)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-color")])]),s("td",[s("code",{pre:!0},[t._v("#fff")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-active-color")])]),s("td",[s("code",{pre:!0},[t._v("var(--color-primary)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-margin")])]),s("td",[s("code",{pre:!0},[t._v("4px 0")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-tag-icon-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-lg)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-content-font-size")])]),s("td",[s("code",{pre:!0},[t._v("var(--font-size-md)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-content-color")])]),s("td",[s("code",{pre:!0},[t._v("rgba(0, 0, 0, 0.38)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-content-active-color")])]),s("td",[s("code",{pre:!0},[t._v("#000")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-line-background")])]),s("td",[s("code",{pre:!0},[t._v("#000")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-vertical-min-height")])]),s("td",[s("code",{pre:!0},[t._v("30px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-vertical-tag-margin")])]),s("td",[s("code",{pre:!0},[t._v("0 4px")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-vertical-line-height")])]),s("td",[s("code",{pre:!0},[t._v("calc(100% - 30px)")])])]),s("tr",[s("td",[s("code",{pre:!0},[t._v("--step-vertical-line-min-height")])]),s("td",[s("code",{pre:!0},[t._v("20px")])])])])])])}];const _={components:{}},r={};var n=a(_,v,p,!1,l,null,null,null);function l(t){for(let e in r)this[e]=r[e]}var i=function(){return n.exports}();export{i as default};