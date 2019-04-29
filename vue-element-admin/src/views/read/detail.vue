
<template>
  <div class="box">
    <h2 class="tit">阅卷</h2>
    <div class="main">
      <div class="main_left">
        <div
          class="item_exam"
          v-for="(item,i) in student?student.questions:[]"
          :key="item.exam_exam_id"
        >
          <p>{{item.title}}</p>
          <markdown-editor :value="stem[i]"/>
        </div>
      </div>
      <div class="main_right">
        <div class="score">
          <h2>{{student.student_name}}</h2>
          <div>
            <p>得分:</p>
            <h2>{{ score }}</h2>
          </div>
        </div>
        <div class="block">
          <el-slider v-model="score" class="slider"/>
        </div>
        <el-button type="primary" @click="upup">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MarkdownEditor from "@/components/MarkdownEditor";
export default {
  data() {
    return {
      score: 0,
      stem: [],
      answer: []
    };
  },
  components: {
    MarkdownEditor
  },
  computed: {
    ...mapState({
      student: state => state.testpaper.student
    })
  },
  async mounted() {
    await this.getstudent(this.$route.query);
    this.score=this.student.score||0
    //console.log("student....",this.student);
    for (var i = 0; i < this.student.questions.length; i++) {
      this.stem.push(this.student.questions[i].questions_stem);
      this.answer.push(this.student.questions[i].questions_answer);
    }
  },
  methods: {
    ...mapActions({
      getstudent: "testpaper/getstudent",
      upscore: "testpaper/upscore"
    }),
    upup() {
      this.$confirm("你确定批改试卷吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(
        async () => {
          await this.upscore({
            score: this.score
          }).then(() => {
            this.$router.push({
              path: "/read/classmate",
              query: {
                exam_student_id: this.getstudent.exam_student_id
              }
            });
          });
        },
        () => {}
      );
    },
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>

<style scoped lang='scss'>
.box/deep/.te-ww-container {
  width: 900px;
  height: auto;
  margin: 10px 0;
}
.box {
  width: 100%;
  margin-top: 64px;
  height: 1800px;
  padding-left: 20px;
  background: #f0f2f5;
  overflow: auto;
  h2 {
    padding-left: 20px;
  }
  .main {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #f0f2f5;
    margin: 10px auto;
    display: flex;
    .main_left {
      width: 950px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: #fff;
      margin: 0 20px 0 10px;
      .item_exam {
        &:nth-of-type(1) {
          height: 850px;
          margin-bottom: 350px;
        }
        &:nth-of-type(2) {
          height: 100px;
          margin-bottom: 100px;
        }
        &:nth-of-type(3) {
          height: 100px;
          margin-bottom: 20px;
        }
      }
      p {
        padding: 5px 10px;
        &.describe {
          color: #999;
          line-height: 30px;
          font-weight: normal;
        }
      }
    }
    .main_right {
      width: 250px;
      position: fixed;
      top: 50%;
      margin-top: -150px;
      right: 30px;
      height: 261.5px;
      border-radius: 10px;
      overflow: hidden;
      background: #fff;
      .el-button {
        margin-left: 10px;
        width: 100px;
      }
      .score {
        width: 100%;
        padding-top: 10px;
        padding-left: 25px;
        box-sizing: border-box;

        & > h2 {
          padding: 0;
        }
        & > div {
          display: flex;
          height: 100px;
          p {
            line-height: 100px;
          }
          h2 {
            color: blue;
            font-size: 30px;
            line-height: 100px;
          }
        }
        .block {
          padding: 10px;
        }
      }
    }
  }
}
.slider {
  width: 86%;
  margin-left: 7%;
}
.tit {
  width: 100%;
  padding: 30px 0px 0px 0;
  margin-top: 0px;
  font-weight: normal;
  margin-bottom: 35px;
}
</style>
