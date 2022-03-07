import{n as a}from"./index.9ef319cd.js";import"./vendor.10bd23ac.js";var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"varlet-site-doc"},[t("h1",[e._v("\u591A\u5217\u9009\u62E9\u5668")]),e._m(0),t("div",{staticClass:"card"},[t("h3",[e._v("\u5F15\u5165")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'vue'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Picker } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

Vue.use(Picker)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u5C40\u90E8\u5F15\u5165")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" { Picker } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("components")]),e._v(`: {
    [Picker.Component.name]: Picker
  }
}
`)])])])],1),t("h2",[e._v("\u51FD\u6570\u8C03\u7528")]),t("div",{staticClass:"card"},[t("h3",[e._v("\u591A\u5217\u6EDA\u52A8")]),e._m(1),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(` columns = [
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
  `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index)
]
`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { state, texts, indexes } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("await")]),e._v(` Picker(columns)
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u7EA7\u8054\u6EDA\u52A8")]),e._m(2),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" columns "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui/json/area.json'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { state, texts, indexes } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("await")]),e._v(` Picker({
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("cascade")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(`,
  columns
})
`)])])])],1),t("h2",[e._v("\u7EC4\u4EF6\u8C03\u7528")]),t("div",{staticClass:"card"},[t("h3",[e._v("\u591A\u5217\u6EDA\u52A8")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-picker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":columns")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"columns"')]),e._v(" />")]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: [
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
      `),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("Array")]),e._v(".from({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("length")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("20")]),e._v(" }).map("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[e._v("_, index")]),e._v(") =>")]),e._v(` index),
    ]
  })
}
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u7EA7\u8054\u6EDA\u52A8")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("var-picker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("cascade")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":columns")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"columns"')]),e._v(" />")]),e._v(`
`)])])]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: [
      {
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u5317\u4EAC\u5E02'")]),e._v(`,
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u5E02\u8F96\u533A'")]),e._v(`
          }
        ]
      },
      {
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u6CB3\u5317\u7701'")]),e._v(`,
        `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("children")]),e._v(`: [
          {
            `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("text")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'\u77F3\u5BB6\u5E84\u5E02'")]),e._v(`
          }
        ]
      }
    ]
  })
}
`)])])])],1),t("div",{staticClass:"card"},[t("h3",[e._v("\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8")]),t("p",[e._v("\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u4E86\u5B8C\u6574\u7684\u7701\u5E02\u533A\u4FE1\u606F\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002")]),t("var-site-code-example",[t("pre",{staticClass:"hljs"},[t("code",{pre:!0},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" area "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'@varlet-vue2/ui/json/area.json'")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(` {
  `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("data")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[e._v("() =>")]),e._v(` ({
    `),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("columns")]),e._v(`: area
  })
}
`)])])])],1),t("h2",[e._v("API")]),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),e._m(10)])},_=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u4ECB\u7ECD")]),t("p",[e._v("\u63D0\u4F9B\u4E86\u51FD\u6570\u548C\u7EC4\u4EF6\u4E24\u79CD\u8C03\u7528\u65B9\u5F0F\u3002\u540C\u65F6\u652F\u6301\u7EA7\u8054\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u591A\u7EA7\u8054\u52A8\u3002")])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Picker \u4F20\u5165\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4 "),t("code",{pre:!0},[e._v("columns")]),e._v(", "),t("code",{pre:!0},[e._v("columns")]),e._v(" \u7684\u6BCF\u4E00\u9879\u5C31\u662F\u6BCF\u4E00\u5217\u7684\u5185\u5BB9\u3002 Picker \u8FD4\u56DE\u7528\u6237\u89E6\u53D1\u72B6\u6001\uFF0C\u9009\u62E9\u7684\u6587\u672C\uFF0C\u9009\u62E9\u7684\u4E0B\u6807\u3002")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("p",[e._v("Picker \u4F20\u5165\u4E00\u4E2A "),t("code",{pre:!0},[e._v("cascade")]),e._v(" \u5C5E\u6027\u5F00\u542F\u7EA7\u8054\u6EDA\u52A8\u3002 \u7EC4\u4EF6\u5E93\u5185\u7F6E\u63D0\u4F9B\u4E86\u7701\u5E02\u533A\u4E09\u7EA7\u8054\u52A8\uFF0C\u5F15\u5165 "),t("code",{pre:!0},[e._v("area.json")]),e._v("\u3002")])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u5C5E\u6027")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("columns")])]),t("td",[e._v("\u5217\u5185\u5BB9")]),t("td",[t("em",[e._v("NormalColumn[] | CascadeColumn[] | Texts")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("\u6807\u9898")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u63D0\u793A")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("text-key")])]),t("td",[e._v("\u6587\u672C\u7684\u5C5E\u6027 key")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("text")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("toolbar")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cascade")])]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("option-height")])]),t("td",[e._v("\u9009\u9879\u7684\u9AD8\u5EA6(px rem)")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("44")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("option-count")])]),t("td",[e._v("\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("6")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm-button-text")])]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u6587\u5B57")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u786E\u8BA4")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel-button-text")])]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u6587\u5B57")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u53D6\u6D88")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm-button-text-color")])]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel-button-text-color")])]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker Options")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("columns")])]),t("td",[e._v("\u5217\u5185\u5BB9")]),t("td",[t("em",[e._v("NormalColumn[] | CascadeColumn[] | Texts")])]),t("td",[t("code",{pre:!0},[e._v("[]")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("\u6807\u9898")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u63D0\u793A")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("textKey")])]),t("td",[e._v("\u6587\u672C\u7684\u5C5E\u6027 key")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("text")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("toolbar")])]),t("td",[e._v("\u662F\u5426\u663E\u793A\u4E0A\u65B9\u5DE5\u5177\u680F")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cascade")])]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u7EA7\u8054\u6A21\u5F0F")]),t("td",[t("em",[e._v("boolean")])]),t("td",[t("code",{pre:!0},[e._v("true")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("optionHeight")])]),t("td",[e._v("\u9009\u9879\u7684\u9AD8\u5EA6")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("44")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("optionCount")])]),t("td",[e._v("\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570")]),t("td",[t("em",[e._v("string | number")])]),t("td",[t("code",{pre:!0},[e._v("6")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirmButtonText")])]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u6587\u5B57")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u786E\u8BA4")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancelButtonText")])]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u6587\u5B57")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("\u53D6\u6D88")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirmButtonTextColor")])]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u989C\u8272")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancelButtonTextColor")])]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u989C\u8272")]),t("td",[t("em",[e._v("string")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpen")])]),t("td",[e._v("\u5F39\u51FA\u5C42\u5F00\u542F\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onOpened")])]),t("td",[e._v("\u5F39\u51FA\u5C42\u5F00\u542F\u52A8\u753B\u7ED3\u675F\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClose")])]),t("td",[e._v("\u5F39\u51FA\u5C42\u5173\u95ED\u56DE\u8C03")]),t("td",[t("em",[e._v("() => void")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onClosed")])]),t("td",[e._v("\u5173\u95ED\u5F39\u51FA\u5C42\u52A8\u753B\u7ED3\u675F\u65F6\u56DE\u8C03")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onChange")])]),t("td",[e._v("\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u56DE\u8C03")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onConfirm")])]),t("td",[e._v("\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("onCancel")])]),t("td",[e._v("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[t("em",[e._v("(texts: Texts, indexes: number[]) => void")])]),t("td",[t("code",{pre:!0},[e._v("() => void")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker NormalColumn")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("texts")])]),t("td",[e._v("\u6587\u672C\u6570\u7EC4")]),t("td",[t("em",[e._v("Texts")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("initialIndex")])]),t("td",[e._v("\u521D\u59CB\u5316\u7D22\u5F15")]),t("td",[t("em",[e._v("number")])]),t("td",[t("code",{pre:!0},[e._v("0")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("Picker CascadeColumn")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("text")])]),t("td",[e._v("\u6BCF\u4E00\u884C\u7684\u6587\u672C")]),t("td",[t("em",[e._v("any")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("children")])]),t("td",[e._v("\u5B50\u7EA7")]),t("td",[t("em",[e._v("CascadeColumn[]")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u65B9\u6CD5")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u65B9\u6CD5\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u8FD4\u56DE\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 confirm \u4E8B\u4EF6")]),t("td",[t("code",{pre:!0},[e._v("-")])]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("\u7ACB\u523B\u505C\u6B62\u6EDA\u52A8\u5E76\u89E6\u53D1 cancel \u4E8B\u4EF6")]),t("td",[t("code",{pre:!0},[e._v("-")])]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u4E8B\u4EF6")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u4E8B\u4EF6\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("change")])]),t("td",[e._v("\u9009\u62E9\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4")])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[t("code",{pre:!0},[e._v("texts: Texts")]),e._v(" \u9009\u62E9\u7684\u5185\u5BB9\u6570\u7EC4 "),t("br"),e._v(" "),t("code",{pre:!0},[e._v("indexes: number[]")]),e._v(" \u9009\u62E9\u7684\u4E0B\u6807\u6570\u7EC4")])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u63D2\u69FD")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u63D2\u69FD\u540D")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u53C2\u6570")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("cancel")])]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u5185\u5BB9")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("title")])]),t("td",[e._v("\u6807\u9898\u5185\u5BB9")]),t("td",[t("code",{pre:!0},[e._v("-")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("confirm")])]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u5185\u5BB9")]),t("td",[t("code",{pre:!0},[e._v("-")])])])])])])},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card"},[t("h3",[e._v("\u6837\u5F0F\u53D8\u91CF")]),t("p",[e._v("\u4EE5\u4E0B\u4E3A\u7EC4\u4EF6\u4F7F\u7528\u7684 css \u53D8\u91CF\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),t("a",{attrs:{href:"#/zh-CN/style-provider"}},[e._v("StyleProvider \u7EC4\u4EF6")]),e._v("\u8FDB\u884C\u6837\u5F0F\u5B9A\u5236")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u53D8\u91CF\u540D")]),t("th",[e._v("\u9ED8\u8BA4\u503C")])])]),t("tbody",[t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-background")])]),t("td",[t("code",{pre:!0},[e._v("#fff")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-toolbar-height")])]),t("td",[t("code",{pre:!0},[e._v("44px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-confirm-button-text-color")])]),t("td",[t("code",{pre:!0},[e._v("var(--color-primary)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-cancel-button-text-color")])]),t("td",[t("code",{pre:!0},[e._v("#888")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-picked-border")])]),t("td",[t("code",{pre:!0},[e._v("1px solid rgba(0, 0, 0, 0.12)")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-title-font-size")])]),t("td",[t("code",{pre:!0},[e._v("16px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-toolbar-padding")])]),t("td",[t("code",{pre:!0},[e._v("0 4px")])])]),t("tr",[t("td",[t("code",{pre:!0},[e._v("--picker-mask-background-image")])]),t("td",[t("code",{pre:!0},[e._v("linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)),linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))")])])])])])])}];const d={components:{}},s={};var c=a(d,v,_,!1,n,null,null,null);function n(e){for(let r in s)this[r]=s[r]}var o=function(){return c.exports}();export{o as default};