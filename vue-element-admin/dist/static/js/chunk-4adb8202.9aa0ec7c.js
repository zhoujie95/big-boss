(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4adb8202"],{abf6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"testlist"},[s("div",{staticClass:"testlist-wrap"},[s("div",{staticClass:"testlist-title"},[t._v("考试列表")]),t._v(" "),s("div",{staticClass:"testlist-find"},[s("div",{staticClass:"itemoclass"},[s("span",[t._v("考试类型:")]),t._v(" "),s("el-select",{attrs:{placeholder:""},model:{value:t.exam_id,callback:function(e){t.exam_id=e},expression:"exam_id"}},t._l(t.testType,function(t){return s("el-option",{key:t.exam_id,attrs:{label:t.exam_name,value:t.exam_id}})}),1)],1),t._v(" "),s("div",{staticClass:"itemoclass"},[s("span",[t._v("课程:")]),t._v(" "),s("el-select",{attrs:{placeholder:""},model:{value:t.subject_id,callback:function(e){t.subject_id=e},expression:"subject_id"}},t._l(t.testClass,function(t){return s("el-option",{key:t.subject_id,attrs:{label:t.subject_text,value:t.subject_id}})}),1)],1),t._v(" "),s("div",{staticClass:"findbtn",on:{click:function(e){return t.findlist(t.exam_id,t.subject_id)}}},[s("svg-icon",{attrs:{"icon-class":"search"}}),t._v("  查询\n      ")],1)]),t._v(" "),s("div",{staticClass:"testlist-box"},[s("div",{staticClass:"listtitle"},[s("p",[t._v("试卷列表")]),t._v(" "),s("div",{staticClass:"listitem-btn"},t._l(t.qh,function(e,a){return s("p",{key:e.id,class:{"listitem-btn-active":t.light===e.id,"testlist-doing":1===a},on:{click:function(s){return t.lightblue(e.id)}}},[t._v(t._s(e.content))])}),0)]),t._v(" "),s("div",{staticClass:"listdata"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.testlistdata}},[s("el-table-column",{attrs:{prop:"title",label:"试卷信息"}}),t._v(" "),s("el-table-column",{attrs:{prop:"grade_name",label:"班级"}}),t._v(" "),s("el-table-column",{attrs:{prop:"user_name",label:"创建人"}}),t._v(" "),s("el-table-column",{attrs:{prop:"start_time",label:"开始时间"}}),t._v(" "),s("el-table-column",{attrs:{prop:"end_time",label:"结束时间"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini"},on:{click:function(s){return t.handleEdit(e.$index,e.row)}}},[t._v("详情")])]}}])})],1)],1)])])])},i=[],l=s("cebc"),n=s("2f62"),c={data:function(){return{subject_id:"",exam_id:"",light:0,qh:[{content:"全部",id:0},{content:"进行中",id:1},{content:"已结束",id:2}]}},methods:{aa:function(){this.$store.dispatch("testmanager/gettestlist"),this.$store.dispatch("testmanager/gettestType"),this.$store.dispatch("testmanager/gettestClass")},handleEdit:function(t,e){this.$store.dispatch("testmanager/getdetail",e.exam_exam_id),this.$router.push({path:"testdetail"})},lightblue:function(t){this.light=t,t?this.$store.dispatch("testmanager/gettestlist",{index:t}):this.$store.dispatch("testmanager/gettestlist")},findlist:function(t,e){t&&e&&this.$store.dispatch("testmanager/gettestlist",{exam_id:t,subject_id:e})}},computed:Object(l["a"])({},Object(n["d"])("testmanager",{testlistdata:function(t){return t.testlistdata},testType:function(t){return t.testType},testClass:function(t){return t.testClass}})),mounted:function(){this.aa()}},d=c,r=(s("bfa8"),s("2877")),o=Object(r["a"])(d,a,i,!1,null,null,null);e["default"]=o.exports},bfa8:function(t,e,s){"use strict";var a=s("ff35"),i=s.n(a);i.a},ff35:function(t,e,s){}}]);