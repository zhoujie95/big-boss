<template>
  <div class="box">
    <h2>试题分类</h2>
    <div class="box-content">
      <el-button type="primary" @click="addtype">+ 添加类型</el-button>
      <el-table
        :data="questionType"
        stripe
        style="width: 100%;padding:10px;height:100%;"
        @cell-click="deletes"
      >
        <el-table-column prop="questions_type_id" label="类型ID" width="400"/>
        <el-table-column prop="questions_type_text" label="类型名称" width="400"/>
        <el-table-column label="操作">
          <el-button type="primary">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      questionType: state => state.addexam.questionType
    })
  },
  methods: {
    ...mapActions({
      getquestion: "addexam/getquestion",
      addQuesType: "addexam/addQuesType",
      deleteQues: "addexam/deleteQues"
    }),
    async deletes(row, column, cell, e) {
      if (e.target.tagName === "SPAN") {
        this.$confirm("你确定要删除该试题类型吗?", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(async () => {
          await this.deleteQues({
            id: row.questions_type_id
          }).then(
            () => {
              this.getquestion();
            },
            () => {
              console.log("111");
            }
          );
        });
      }
    },
    async addtype() {
      let num = await this.getquestion();
      this.$prompt("创建新类型", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: "请输入类型"
      }).then(async ({ value }) => {
        this.type = value;
        await this.addQuesType({
          text: this.type,
          sort: num
        });
        await this.getquestion();
      });
    }
  },
  data() {
    return {
      type: ""
    };
  },
  mounted() {
    this.getquestion();
  }
};
</script>
<style scoped lang="scss">
@import "../examType.scss";
</style>
