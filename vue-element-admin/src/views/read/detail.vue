
<template>
  <div class="box">
    <h2 class="tit">阅卷</h2>
    <div class="main">
      <div class="main_left">
        <div class="item_exam" v-for="(item) in student?student.questions:[]" :key="item.exam_exam_id">
          <p>{{item.title}}</p>
          <p class='describe'>{{item.questions_stem}}</p>
          <!-- <markdown-editor/> -->
          <div class="div">
            <div class="div-left">
            <span>学生答案</span>
            <code>{{item.student_answer}}</code>
            </div>
             <div class="div-right">
            <span>标准答案</span>
            <code>{{item.questions_answer}}</code>
            <!-- <markdown-editor value='item.questions_answer'/> -->
             </div>

          </div>
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
        <el-button type="primary">确定</el-button>
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
      score: 0
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
    //console.log("student....", this.student);
  },
  methods: {
    ...mapActions({
      getstudent: "testpaper/getstudent"
    }),
    formatTooltip(val) {
      return val / 100;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  margin-top: 64px;
  height: 1300px;
  padding-left: 20px;
  background: #f0f2f5;
  h2 {
    padding-left: 20px;
  }
  .main {
    width: 100%;
    height: 90%;
    border-radius: 10px;
    background: #f0f2f5;
    margin: 10px auto;
    display: flex;
    .main_left {
      width: 800px;
      height:100%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: #fff;
      margin: 0 20px 0 20px;
      p{
        padding:5px 10px;
        margin-top:10px;  
        &.describe{
          color:#999;
          line-height: 30px;
          margin:10px 0;
          font-weight: normal;
        }
      }
      .item_exam{
        height:auto;
        &>div{
        display: flex;
        .div-left{
          width:200px;

          code{
            line-height: 25px;
            width:200px;
            margin-top:10px;
            padding:10px;
          }
        }
        .div-right{
          flex:1;
               code{
                 width:500px;
                 margin-left:10px;
                 margin-top:5px;
            line-height: 25px;
          }
        }
      }
      }
    }
    .main_right {
      width: 300px;
      position: fixed;
      top: 50%;
      margin-top: -150px;
      right: 50px;
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
