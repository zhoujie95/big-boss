<template>
  <div class="box">
    <h2>试题详情</h2>
    <div class="box-content">
      <div class="left">
        <p>出题人:{{data.user_name}}</p>
        <div class="left-top">
          <p>题目信息</p>
          <ul class="nav">
            <li>{{data.questions_type_text}}</li>
            <li>{{data.subject_text}}</li>
            <li>{{data.exam_name}}</li>
          </ul>
        </div>
        <div class="top-content">
          <p>{{data.title}}</p>
          <markdown-editor v-model='content' style='height:600px;marginTop:30px'/>
        </div>
      </div>
      <div class="right">
        <p>答案信息</p>
        <markdown-editor v-model='answer' style='height:400px;marginTop:60px'/>
      </div>
    </div>
  </div>
</template>
<script>
import MarkdownEditor from "@/components/MarkdownEditor";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      content: "",
      data: [],
      answer:''
    };
  },
 async mounted() {
    this.data=JSON.parse(localStorage.getItem('quesItem'))
    this.content=this.data.questions_stem
    this.answer=this.data.questions_answer
  }
};
</script>
<style scoped lang="scss">
.box/deep/.tui-editor-contents{
  height:600px;
}
.box {
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  background: #edeff2;
  h2 {
    height: 40px;
    line-height: 40px;
    padding: 10px 0 10px 30px;
  }
  .box-content {
    width: 100%;
    flex: 1;
    margin: 10px auto;
    display: flex;
    font-size:14px;
    line-height: 25px;
    .left {
      width: 800px;
      height: 100%;
      margin: 0 20px 0 30px;
      border-radius: 10px;
      background: #fff;
      padding:15px;
      .left-top {
        margin-top:10px;
        p {
          font-size:14px;
        }
        .nav {
          display: flex;
          height:30px;
          padding-top:5px;
          line-height:17px;
          margin-bottom:15px;
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
    }
    .right {
      width: 500px;
      height: 100%;
      border-radius: 10px;
      background: #fff;
      padding:10px;
      p{
        margin:30px 0 60px 0;
      }
    }
  }
}
</style>