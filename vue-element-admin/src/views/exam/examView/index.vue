<template>
  <div class="box">
    <h2>查看试题</h2>
    <div class="box-content">
      <div class="content-top">
        <div class="top-top">
          <label>课程类型:</label>
          <ul class="nav">
            <li>all</li>
            <li
              v-for="(item,i) in classType"
              :key="item.subject_id"
              @click="changeState(i)"
              :class="{'current':i===defaultIndex}"
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
            :total="34"
            :size="5"
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
      this.defaultIndex = ind;
    },
    async selects() {
      await this.selectQues({
        subject_id: this.classType[this.defaultIndex].subject_id,
        exam_id: this.exam,
        questions_type_id: this.ques
      });
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
  async mounted() {
    await this.getclass();
    await this.gettype();
    await this.getquestion();
    await this.getAllQues();
  },
  data() {
    return {
      exam: "",
      ques: "",
      currentPage: 1, //初始页
      pagesize: 5,
      defaultIndex: null
    };
  }
};
</script>
<style scoped lang='scss'>
.box {
<<<<<<< HEAD
  padding-left: 20px;
  background: #f0f2f5;
}
.head {
  font-size: 22px;
  line-height: 40px;
}
.wrap {
  margin-top: 30px;
  background: #fff;
  height: 200px;
  border: 1px solid #fff;
  border-radius: 10px;
  list-style: none;
}
.wrap div {
  display: flex;
}
.wrap label {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  line-height: 100px;
  padding-left: 80px;
  display: inline-block;
}
.wrap ul {
  list-style: none;
  display: flex;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
.wrap ul li {
  padding-left: 30px;
  line-height: 92px;
}
.wrap ul li:nth-child(1) {
  padding-left: 0;
}
.nav {
  margin-top: 5px;
}
.sele {
  display: inline-block;
  width: 350px;
  margin-left: 10px;
  margin-top: -7px;
}
.exam label {
  line-height: 20px;
}
.exam button {
  margin-left: 20px;
  margin-top: -5px;
  width: 100px;
  height: 30px;
  line-height: 4px;
}
.content {
  margin-top: 30px;
  background: #fff;
  height: auto;
  border: 1px solid #fff;
  border-radius: 10px;
}
.small {
  /* border: 1px solid #eee; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.left {
  margin-left: 20px;
}
.left p {
  display: block;
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 22px;
}
.left a {
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 22px;
  color: blue;
}
.left div {
  display: block;
}
.left div ul {
  display: flex;
  list-style: none;
  /* margin-left: -50px; */
}
.left ul li {
  margin-left: 10px;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  font-size: 12px;
}
.left ul li:nth-child(1) {
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.left ul li:nth-child(2) {
  color: #2f54eb;
  background: #f0f5ff;
  border-color: #adc6ff;
}
.left ul li:nth-child(3) {
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}
.right {
  margin-right: 20px;
  color: #2f54eb;
}
.fen {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
=======
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
          display: flex;
          & > li {
            padding: 5px 10px;
            text-align: center;
            font-size: 14px;
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
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
}
</style>


