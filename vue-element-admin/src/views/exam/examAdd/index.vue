<template>
  <div class="box">
    <div class="box-content">
      <h2>添加试题</h2>
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
        <p>请选择考试类型:</p>
        <template>
          <el-select v-model="exam"  placeholder="请选择">
            <el-option
              v-for="item in examtype"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </template>
        <p>请选择课程类型:</p>
        <template>
          <el-select v-model="classes" placeholder="请选择">
            <el-option
              v-for="item in classtype"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </template>
        <p>请选择题目类型:</p>
        <template>
          <el-select v-model="question" placeholder="请选择">
            <el-option
              v-for="item in  questiontype"
              :key="item.questions_type_id"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
        </template>
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
            <div class="right-content">
              <textarea placeholder="请输入内容..." v-model="content2"></textarea>
            </div>
          </div>
        </div>
      </div>
      <el-button type="primary" @click='submitquestion'>提交</el-button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {mapActions,mapState} from 'vuex'
import { getToken} from '@/utils/auth'
import axios from 'axios'
export default {
  computed:{
    ...mapState({
       testType:state=>state.addexam.testType,
       classType:state=>state.addexam.classType,
       questionType:state=>state.addexam.questionType
    })
  },
  methods:{
     ...mapActions({
        gettype:'addexam/gettype',
        getclass:'addexam/getclass',
        getquestion:'addexam/getquestion',
        submitquestion:'addexam/submitquestion'
     }),
     submitquestion(){
         if(this.title&&this.content&&this.content2&&this.exam&&this.classes&&this.question){
             axios.post('/api/exam/questions',{
               //试题类型id
                questions_type_id:this.question.toString(),
                title:this.title,
                questions_stem:this.content,
                questions_answer:this.content2,
                //课程id
                subject_id:this.classes,
                //用户id
                user_id:'w6l6n-cbvl6s',
                //考试类型id
                exam_id:this.exam
             },{
               headers:{'authorization':getToken()}
             })
         }
     }
  },
  data() {
    return {
      examtype: [],
      classtype: [],
      questiontype: [],
      title:'',
      content:'',
      content2:'',
      exam:'',
      classes:'',
      question:''
    };
  },
  mounted(){
    this.gettype()
    this.getclass()
    this.getquestion()
    this.examtype=this.testType.data
    this.classtype=this.classType.data
    this.questiontype=this.questionType.data
  }
};
</script>
<style scoped lang="scss">
@import "../examAdd.scss";
</style>
