(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ec0bb0e"],{ad16:function(e,t,s){},ea78:function(e,t,s){"use strict";var a=s("ad16"),i=s.n(a);i.a},f862:function(e,t,s){},ff69:function(e,t,s){"use strict";var a=s("f862"),i=s.n(a);i.a},ff9e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("eladd",{attrs:{titles:e.title,data:e.data,handeltype:e.handeltype}})},i=[],n=(s("7f7f"),s("cebc")),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"box"},[s("h2",[e._v(e._s(e.titles))]),e._v(" "),s("div",{staticClass:"box-content"},[s("div",{staticClass:"examAdd-content"},[s("p",[e._v("题目信息")]),e._v(" "),s("p",[e._v("题干")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入题目标题，不超过20个字"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),s("p",[e._v("题目主题")]),e._v(" "),s("div",{staticClass:"examAdd-title"},[e._m(0),e._v(" "),s("div",{staticClass:"title-content"},[s("ul"),e._v(" "),s("div",{staticClass:"right-content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{placeholder:"请输入内容..."},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})])])]),e._v(" "),s("el-form",{ref:"ruleForms",attrs:{rules:e.rules,model:e.ruleForm}},[s("p",[e._v("请选择考试类型:")]),e._v(" "),s("el-form-item",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.exam,callback:function(t){e.$set(e.ruleForm,"exam",t)},expression:"ruleForm.exam"}},e._l(e.testType,function(e){return s("el-option",{key:e.exam_id,attrs:{label:e.exam_name,value:e.exam_id}})}),1)],1),e._v(" "),s("p",[e._v("请选择课程类型:")]),e._v(" "),s("el-form-item",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.classes,callback:function(t){e.$set(e.ruleForm,"classes",t)},expression:"ruleForm.classes"}},e._l(e.classType,function(e){return s("el-option",{key:e.subject_id,attrs:{label:e.subject_text,value:e.subject_id}})}),1)],1),e._v(" "),s("p",[e._v("请选择题目类型:")]),e._v(" "),s("el-form-item",[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.question,callback:function(t){e.$set(e.ruleForm,"question",t)},expression:"ruleForm.question"}},e._l(e.questionType,function(e){return s("el-option",{key:e.questions_type_id,attrs:{label:e.questions_type_text,value:e.questions_type_id}})}),1)],1)],1),e._v(" "),s("div",{staticClass:"examAdd-title"},[e._m(1),e._v(" "),s("div",{staticClass:"title-content"},[s("ul"),e._v(" "),s("div",{staticClass:"right-content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content2,expression:"content2"}],attrs:{placeholder:"请输入内容..."},domProps:{value:e.content2},on:{input:function(t){t.target.composing||(e.content2=t.target.value)}}})])])])],1),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.addquest}},[e._v("提交")])],1)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title-header"},[s("ul",[s("li",[s("i",{staticClass:"el-icon-caret-left"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-caret-right"})]),e._v(" "),s("li",[e._v("H1")]),e._v(" "),s("li",[e._v("H2")]),e._v(" "),s("li",[e._v("H3")]),e._v(" "),s("li",[e._v("H4")]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-picture"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-share"})]),e._v(" "),s("li",[e._v("< >")]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-download"})]),e._v(" "),s("ol",[s("li",[s("i",{staticClass:"el-icon-rank"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-view"})])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title-header"},[s("ul",[s("li",[s("i",{staticClass:"el-icon-caret-left"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-caret-right"})]),e._v(" "),s("li",[e._v("H1")]),e._v(" "),s("li",[e._v("H2")]),e._v(" "),s("li",[e._v("H3")]),e._v(" "),s("li",[e._v("H4")]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-picture"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-share"})]),e._v(" "),s("li",[e._v("< >")]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-download"})]),e._v(" "),s("ol",[s("li",[s("i",{staticClass:"el-icon-rank"})]),e._v(" "),s("li",[s("i",{staticClass:"el-icon-view"})])])])])}],o=(s("6b54"),s("96cf"),s("3b8d")),c=s("2f62"),u={props:["titles","data","handeltype"],data:function(){return{ruleForm:{exam:"",classes:"",question:""},title:"",content:"",content2:"",rules:{exam:[{required:!0,message:"请选择考试类型"},{required:!0,message:"请选择课程类型"},{required:!0,message:"请选择题目类型"}]}}},computed:Object(n["a"])({},Object(c["d"])({testType:function(e){return e.addexam.testType},classType:function(e){return e.addexam.classType},questionType:function(e){return e.addexam.questionType},userInfo:function(e){return e.user.userInfo}})),methods:Object(n["a"])({},Object(c["b"])({gettype:"addexam/gettype",getclass:"addexam/getclass",getquestion:"addexam/getquestion",addquestion:"addexam/addquestion",updateques:"addexam/updateques"}),{addquest:function(){var e=this;"add"===this.handeltype?this.$confirm("你确定要添加该试题吗?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.question&&e.ruleForm.exam&&e.ruleForm.classes&&e.title&&e.content&&e.content2){t.next=4;break}e.$alert("参数验证错误",{type:"warning"}),t.next=6;break;case 4:return t.next=6,e.addquestion({questions_type_id:e.ruleForm.question.toString(),title:e.title,questions_stem:e.content,questions_answer:e.content2,subject_id:e.ruleForm.classes,user_id:e.userInfo.user_id,exam_id:e.ruleForm.exam}).then(function(t){t&&1==t.code&&e.$alert("添加试题成功")});case 6:case"end":return t.stop()}},t)}))):this.$confirm("您确定修改吗?","确定修改这道题吗",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.title&&e.content&&e.content2&&e.exam&&e.classes&&e.question&&e.updateques({questions_type_id:e.question.toString(),title:e.title,questions_stem:e.content,questions_answer:e.content2,subject_id:e.classes,exam_id:e.exam,questions_id:e.data[0].questions_id})})}}),mounted:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.gettype();case 2:return e.next=4,this.getclass();case 4:return e.next=6,this.getquestion();case 6:this.data.length&&(this.title=this.data[0].title,this.content2=this.data[0].questions_answer,this.content=this.data[0].questions_stem,this.exam=this.data[0].exam_id,this.classes=this.data[0].subject_id,this.question=this.data[0].questions_type_id);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},d=u,m=(s("ea78"),s("2877")),_=Object(m["a"])(d,l,r,!1,null,"21ea8b2f",null),v=_.exports,p={data:function(){return{title:"",data:[],handeltype:""}},computed:Object(n["a"])({},Object(c["d"])({allquestions:function(e){return e.addexam.allquestions}})),components:{eladd:v},methods:Object(n["a"])({},Object(c["b"])({getAllQues:"addexam/getAllQues"})),mounted:function(){var e=this;this.title="examAdd"===this.$route.name?"添加试题":"编辑试题",this.handeltype="examAdd"===this.$route.name?"add":"update",this.data="examAdd"===this.$route.name?this.data:this.allquestions.filter(function(t){return t.questions_id===e.$route.query.id})}},f=p,h=(s("ff69"),Object(m["a"])(f,a,i,!1,null,"7a5b163b",null));t["default"]=h.exports}}]);