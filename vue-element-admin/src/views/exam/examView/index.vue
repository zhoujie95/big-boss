<template>
<div class="box">
  <h2>查看试题</h2>
  <div class="box-content">
    <div class="content-top">
      <div class="top-top">
        <label>课程类型:</label>
        <ul class="nav">
          <li @click="allchose" :class="{'current':all}">all</li>
          <li
            v-for="(item,i) in classType"
            :key="item.subject_id"
            @click="changeState(i)"
            :class="{'current':i===defaultIndex||all}"
          >{{item.subject_text}}</li>
        </ul>
      </div>
      <div class="top-bot">
        <label>考试类型:</label>
        <el-select v-model="exam" placeholder="请选择">
          <el-option
            v-for="item in testType"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          ></el-option>
        </el-select>
        <label>题目类型:</label>
        <el-select v-model="ques" placeholder="请选择">
          <el-option
            v-for="item in questionType"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_id"
          ></el-option>
        </el-select>
        <el-button type="primary" @click="selects">查询</el-button>
      </div>
    </div>
    <div class="content-bot">
      <div
        class="bots"
        v-for="(item,i) in allquestions.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        :key="i"
        @click="quesdetail(item,$event)"
      >
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
          <span @click="editQuest(item.json_path,$event)">编辑</span>
        </div>
      </div>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
            :total="allquestions.length"
            :page-size="5"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  mounted() {
    this.getclass();
    this.gettype();
    this.getquestion();
    this.getAllQues();
  },
  computed: {
    ...mapState({
      testType: state => state.addexam.testType,
      classType: state => state.addexam.classType,
      questionType: state => state.addexam.questionType,
      allquestions: state => state.addexam.allquestions
    })
  },
  methods: {
    ...mapActions({
      gettype: "addexam/gettype",
      getclass: "addexam/getclass",
      getquestion: "addexam/getquestion",
      getQuestions: "addexam/getQuestions",
      getAllQues: "addexam/getAllQues",
      selectQues: "addexam/selectQues"
    }),
    handleSizeChange: function(size) {
      this.pagesize = size; //每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage; //点击第几页
    },
    changeState(ind) {
      this.defaultIndex = this.defaultIndex == null ? ind : null;
      this.all = false;
    },
    allchose() {
      this.all = !this.all;
      this.defaultIndex = null;
    },
   async selects() {
      let obj = {
        subject_id: this.all
          ? this.classType.map(item => item.subject_id).join(",")
          : this.defaultIndex !== null
            ? this.classType[this.defaultIndex].subject_id
            : "",
        exam_id: this.exam,
        questions_type_id: this.ques
      };
      for (let item of Object.keys(obj)) {
        if (!obj[item]) {
          delete obj[item];
        }
      }
     await this.selectQues(obj);
    },
    editQuest(exam_id, e) {
      // console.log(e.target.tagName)
      if (e.target.tagName === "SPAN") {
        this.$router.push({
          path: `/edit/Questions`,
          query: {
            id: exam_id.split(".")[0]
          }
        });
      }
    },
    quesdetail(item, e) {
      localStorage.setItem("quesItem", JSON.stringify(item));
      if (e.target.tagName === "DIV") {
        this.$router.push({
          path: `/detail/Questions`,
          query: {
            id: item.questions_id
          }
        });
      }
    }
  },
  data() {
    return {
      exam: "",
      ques: "",
      all: false,
      currentPage: 1, //初始页
      pagesize: 5,
      defaultIndex: null,
      len:34
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
  margin-top: 64px;
  background: #edeff2;
  h2 {
    padding: 10px 0 10px 20px;
  }
  .box-content {
    width: 98%;
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
        padding: 0 0 0 20px;
        .el-select {
          margin-left: 10px;
        }
        .el-button {
          margin-left: 20px;
        }
        label {
          display: inline-block;
          width: 80px;
        }
      }
      .top-top {
        display: flex;
        height: 90px;
        line-height: 80px;
        padding: 0 0 0 20px;
        label {
          width: 80px;
        }
        .nav {
          flex: 1;
          flex-shrink: 1;
          display: flex;
          & > li {
            flex: 1;
            text-align: center;
            font-size: 13px;
            &:nth-of-type(1) {
              width: 50px;
            }
            &.current {
              color: #2f54eb;
            }
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
      padding: 0 20px;
      .bots {
        height: 100px;
        border-bottom: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        .left {
          p {
            height: 30px;
            line-height: 30px;
            margin: 5px 0;
            color: rgba(0, 0, 0, 0.65);
            &:nth-of-type(2) {
              color: #0139fd;
              font-size: 14px;
            }
          }
          ul {
            display: flex;
            li {
              border: 1px solid #000;
              font-size: 13px;
              padding: 5px 8px;
              &:nth-of-type(1) {
                border: 1px solid #9d9dff;
                color: #9d9dff;
                background: #e6f7ff;
              }
              &:nth-of-type(2) {
                border: 1px solid #2f54eb;
                color: #2f54eb;
                background: #f0f5ff;
                margin-left: 20px;
              }
              &:nth-of-type(3) {
                color: #fa8c16;
                background: #fff7e6;
                border: 1px solid #ffd591;
                margin-left: 20px;
              }
            }
          }
        }
        .right {
          span {
            color: #0139fd;
            font-size: 14px;
            line-height: 100px;
          }
        }
      }
      .block {
        .el-pagination {
          width: 200px;
          margin-top: 10px;
          float: right;
        }
      }
    }
  }
}
</style>
