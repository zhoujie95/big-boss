<template>
  <div>
    <div class="box">
    <h2>{{titles}}</h2>
    <div class="box-content">
      <div class="examAdd-content">
        <p>题目信息</p>
        <p>题干</p>
        <el-input v-model="title" placeholder="请输入题目标题，不超过20个字"/>
        <p>题目主题</p>
        <div class="examAdd-title">
          <div class="title-header">
            <ul>
              <li>
                <i class="el-icon-caret-left"/>
              </li>
              <li>
                <i class="el-icon-caret-right"/>
              </li>
              <li>H1</li>
              <li>H2</li>
              <li>H3</li>
              <li>H4</li>
              <li>
                <i class="el-icon-picture"/>
              </li>
              <li>
                <i class="el-icon-share"/>
              </li>
              <li>&lt; &gt;</li>
              <li>
                <i class="el-icon-download"/>
              </li>
              <ol>
                <li>
                  <i class="el-icon-rank"/>
                </li>
                <li>
                  <i class="el-icon-view"/>
                </li>
              </ol>
            </ul>
          </div>
          <div class="title-content">
            <ul></ul>
            <div class="right-content">
              <textarea placeholder="请输入内容..." v-model="content"></textarea>
            </div>
          </div>
        </div>
          <el-form :rules='rules' :model="ruleForm" ref='ruleForms'>
            <p>请选择考试类型:</p>
            <el-form-item>
                <el-select v-model="ruleForm.exam"  placeholder="请选择">
                <el-option
                  v-for="item in testType"
                  :key="item.exam_id"
                  :label="item.exam_name"
                  :value="item.exam_id"
                ></el-option>
              </el-select>
            </el-form-item>
            <p>请选择课程类型:</p>
            <el-form-item>
              <el-select v-model="ruleForm.classes" placeholder="请选择">
                <el-option
                  v-for="item in classType"
                  :key="item.subject_id"
                  :label="item.subject_text"
                  :value="item.subject_id"
                ></el-option>
              </el-select>
          </el-form-item>
          <p>请选择题目类型:</p>
          <el-form-item>
            <el-select v-model="ruleForm.question" placeholder="请选择">
              <el-option
                v-for="item in questionType"
                :key="item.questions_type_id"
                :label="item.questions_type_text"
                :value="item.questions_type_id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="examAdd-title">
          <div class="title-header">
            <ul>
              <li>
                <i class="el-icon-caret-left"/>
              </li>
              <li>
                <i class="el-icon-caret-right"/>
              </li>
              <li>H1</li>
              <li>H2</li>
              <li>H3</li>
              <li>H4</li>
              <li>
                <i class="el-icon-picture"/>
              </li>
              <li>
                <i class="el-icon-share"/>
              </li>
              <li>&lt; &gt;</li>
              <li>
                <i class="el-icon-download"/>
              </li>
              <ol>
                <li>
                  <i class="el-icon-rank"/>
                </li>
                <li>
                  <i class="el-icon-view"/>
                </li>
              </ol>
            </ul>
          </div>
          <div class="title-content">
            <ul></ul>
            <div class="right-content">
              <textarea placeholder="请输入内容..." v-model="content2"></textarea>
            </div>
          </div>
        </div>
      </div>
     <el-button type="primary" @click='addquest'>提交</el-button>
    </div>
  </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  props:['titles','data','handeltype'],
  data(){
     return{
       ruleForm:{
        exam:'',
        classes:'',
        question:'',
       },
        title:'',
        content:'',
        content2:'',
        rules:{
        exam:[
          {required: true,message:'请选择考试类型'},
          {required:true,message:'请选择课程类型'},
          {required:true,message:'请选择题目类型'}
        ]
      },
     }
  },

  computed:{
    ...mapState({
       testType:state=>state.addexam.testType,
       classType:state=>state.addexam.classType,
       questionType:state=>state.addexam.questionType,
       userInfo:state=>state.user.userInfo
    })
  },
  methods:{
     ...mapActions({
        gettype:'addexam/gettype',
        getclass:'addexam/getclass',
        getquestion:'addexam/getquestion',
        addquestion:'addexam/addquestion',
        updateques:'addexam/updateques'
     }),
    addquest(){
      if(this.handeltype==='add'){
        //是添加试题的页面
          this.$confirm('你确定要添加该试题吗?',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
       }).then(async ()=>{
           if(!this.ruleForm.question||!this.ruleForm.exam||!this.ruleForm.classes||!this.title||!this.content||!this.content2){
               this.$alert('参数验证错误',{
                 type:'warning'
               })
           }else{
              await this.addquestion({
                    questions_type_id:this.ruleForm.question.toString(),
                    title:this.title,
                    questions_stem:this.content,
                    questions_answer:this.content2,
                    //课程id
                    subject_id:this.ruleForm.classes,
                    //用户id
                    user_id:this.userInfo.user_id,
                    //考试类型id
                    exam_id:this.ruleForm.exam
              }).then(res=>{
                  if(res&&res.code==1){
                    this.$alert('添加试题成功')
                  }
              }) 
           }

        })
      }else{
        //是编辑页面
        this.$confirm('您确定修改吗?','确定修改这道题吗',{
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
        }).then(()=>{
          if(this.title&&this.content&&this.content2&&this.exam&&this.classes&&this.question){
              this.updateques({
                    questions_type_id:this.question.toString(),
                    title:this.title,
                    questions_stem:this.content,
                    questions_answer:this.content2,
                    //课程id
                    subject_id:this.classes,
                    //考试类型id
                    exam_id:this.exam,
                    //试题id
                    questions_id:this.data[0].questions_id
              })
           }
        })
      }      
   }
  },
  async mounted(){
     await this.gettype()
     await this.getclass()
     await this.getquestion()
     if(this.data.length){
        this.title=this.data[0].title
        this.content2=this.data[0].questions_answer
        this.content=this.data[0].questions_stem
        this.exam=this.data[0].exam_id
        this.classes=this.data[0].subject_id
        this.question=this.data[0].questions_type_id
     }
  }
}
</script>
<style scoped lang="scss">
  @import "../examAdd.scss";
</style>