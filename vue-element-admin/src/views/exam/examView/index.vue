<template>
  <div class="box">
    <h2>查看试题</h2>
    <div class="box-content">
      <div class="content-top">
        <div class="top-top">
          <label>课程类型:</label>
          <ul class="nav">
            <li v-for="item in classType" :key="item.subject_id">{{item.subject_text}}</li>
          </ul>
        </div>
        <div class="top-bot">
            <label>考试类型:</label>
            <el-select v-model="exam"  placeholder="请选择">
            <el-option
              v-for="item in testType"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
          <label>题目类型:</label>
            <el-select v-model="question" placeholder="请选择">
            <el-option
              v-for="item in questionType"
              :key="item.questions_type_id"
              :label="item.questions_type_text"
              :value="item.questions_type_id"
            ></el-option>
          </el-select>
          <el-button type="primary">查询</el-button>
        </div>
      </div>
      <div class="content-bot">
         <div class='bots' v-for='(item,i) in questions'
         :key='i'>
            <div class="left">
              <p>{{item.title}}</p>
              <ul>
                <li>{{item.questions_type_text}}</li>
                <li>{{item.subject_text}}</li>
                <li>{{item.exam_name}}</li>
              </ul>
              <p>{{item.user_name}}发布</p>
            </div>
            <div class="right">
              <span>编辑</span>
            </div>
         </div>
         <div class="block">
            <!-- <el-pagination
              layout="prev, pager, next"
              :total="34"
              :size='5'
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              >
            </el-pagination> -->
          </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      testType: state => state.addexam.testType,
      classType: state => state.addexam.classType,
      questionType: state => state.addexam.questionType,
      questions:state=>state.addexam.questions.slice(0,5),
    })
  },
  methods: {
    ...mapActions({
      gettype: "addexam/gettype",
      getclass: "addexam/getclass",
      getquestion: "addexam/getquestion",
      getQuestions:'addexam/getQuestions'
    })
  },
  handleSizeChange: function (size) {
      this.pagesize = size;
      console.log(this.pagesize)  //每页下拉显示数据
  },
  handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
      console.log(this.currentPage)  //点击第几页
  },
  async mounted() {
    await this.getclass();
    await this.gettype();
    await this.getquestion();
    await this.getQuestions()
  },
  data() {
    return {
      exam: "",
      question: "",
      currentPage:1, //初始页
      pagesize:5,
    };
  }
};
</script>
<style scoped lang='scss'>
.box {
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
  top: 64px;
  background: #edeff2;
  h2 {
    padding: 10px 0 10px 20px;
  }
  .box-content {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    .content-top {
      width: 100%;
      height: 185px;
      background: #fff;
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      .top-bot {
        flex: 1;
        padding: 0 0 0 30px;
        .el-select{
           margin-left:10px;
        }
        .el-button{
          margin-left:20px;
        }
        label{
          display: inline-block;
          width:80px;
        }
      }
      .top-top {
        display: flex;
        height: 90px;
        line-height:80px;
        padding: 0 0 0 30px;
        label{
          width:100px;
        }
        .nav {
          flex:1;
          display: flex;
          li{
            flex:1;
            font-size:14px;
          }
        }
      }
    }
    .content-bot {
      width: 100%;
      background: #fff;
      border-radius: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      padding:0 30px;
      .bots{
        height:100px;
        border-bottom:1px solid lightgray;
        display: flex;
        justify-content: space-between;
        .left{
          p{
            height:30px;
            line-height:30px;
            margin:5px 0;
            color:rgba(0,0,0,0.65);
            &:nth-of-type(2){
              color:#0139FD;
              font-size:14px;
            }
          }
          ul{
            display: flex;
            li{
              border:1px solid #000;
              font-size: 13px;
              padding:5px 8px;
              &:nth-of-type(1){
                 border:1px solid #9D9DFF;
                 color:#9D9DFF;
                 background: #E6F7FF;
              }
                 &:nth-of-type(2){
                 border:1px solid #2f54eb;
                 color:#2f54eb;
                 background:#f0f5ff;
                 margin-left:20px;
              }
                &:nth-of-type(3){
                color: #fa8c16;
                background: #fff7e6;
                border:1px solid #ffd591;
                 margin-left:20px;
              }
            }
          }
        }
        .right{
          span{
            color:#0139FD;
            font-size:14px;
            line-height: 100px;
          }
        }
      }
    }
  }
}
</style>


