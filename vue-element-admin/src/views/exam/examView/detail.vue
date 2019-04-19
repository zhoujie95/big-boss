<template>
  <div class="box">
    <h2>试题详情</h2>
    <div class="box-content">
      <div class="left">
        <p>出题人:{{data[0].user_name}}</p>
        <div class="left-top">
          <p>题目信息</p>
          <ul class="nav">
            <li>{{data[0].questions_type_text}}</li>
            <li>{{data[0].subject_text}}</li>
            <li>{{data[0].exam_name}}</li>
          </ul>
        </div>
        <div class="top-content">{{data[0].questions_stem.split('示例')[0]}}</div>
        <markdown-editor>
            11111
        </markdown-editor>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
import MarkdownEditor from "@/components/MarkdownEditor";
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {
    MarkdownEditor
  },
  data() {
    return {
      content: "",
      data: []
    };
  },
  computed: {
    ...mapState({
      allquestions: state => state.addexam.allquestions
    })
  },
  methods: {
    ...mapActions({
      getAllQues: "addexam/getAllQues"
    })
  },
  created() {},
  async mounted() {
    await this.getAllQues();
    this.data =
      this.$route.name === "examAdd"
        ? this.data
        : this.allquestions.filter(
            item => item.questions_id === this.$route.query.id
          );
  }
};
</script>
<style scoped lang="scss">
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
    .left {
      width: 700px;
      height: 100%;
      margin: 0 20px 0 30px;
      border-radius: 10px;
      background: #fff;
      .left-top {
        display: flex;
        p {
          margin: 10px 0;
          float: left;
        }
        .nav {
          display: flex;
          li {
            margin: 0 10px;
          }
        }
      }
    }
    .right {
      width: 500px;
      height: 100%;
      border-radius: 10px;
      background: #fff;
    }
  }
}
</style>