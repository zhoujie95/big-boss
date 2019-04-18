<template>
  <div class="box">
    <h2>班级管理</h2>
    <div class="box-content">
      <el-button type="primary" @click="addclass">+ 添加班级</el-button>
      <el-table :data="tableData" stripe style="width:100%">
        <el-table-column prop="classroom" label="班级名" width="180"></el-table-column>
        <el-table-column prop="class" label="课程名" width="180"></el-table-column>
        <el-table-column prop="num" label="教室号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    addclass() {
      const h = this.$createElement;
      this.$msgbox({
        title: "添加班级",
        inputPlaceholder: "请输入班级号",
        message: h("div", null, [
          h("p", { style: "margin:10px" }, [
            h("b", { style: "color: red;marginRight:10px" }, "*"),
            h("span", "班级号:")
          ]),
          h(`el-input`),
          h("p", { style: "margin:10px" }, [
            h("b", { style: "color: red;marginRight:10px" }, "*"),
            h("span", "教室号:")
          ]),
          h("el-select", { style: "width:100%;" }),
          h("p", { style: "margin:10px" }, [
            h("b", { style: "color: red;marginRight:10px" }, "*"),
            h("span", "课程名:")
          ]),
          h("el-select", { style: "width:100%;" })
        ])
      });
    }
  },
  data() {
    return {
      tableData: [
        {
          classroom: "2016-05-02",
          num: "王小虎",
          class: "上海市普陀区金沙江路 1518 弄"
        },
        {
          classroom: "2016-05-02",
          num: "王小虎",
          class: "上海市普陀区金沙江路 1518 弄"
        },
        {
          classroom: "2016-05-02",
          num: "王小虎",
          class: "上海市普陀区金沙江路 1518 弄"
        },
        {
          classroom: "2016-05-02",
          num: "王小虎",
          class: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
.box {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  background: #edeff2;
  overflow: hidden;
  & > h2 {
    padding: 20px 0 10px 20px;
  }
  .box-content {
    margin: 20px auto;
    width: 95%;
    height: 90%;
    border-radius: 10px;
    background: #fff;
    & > .el-button {
      margin: 20px;
    }
  }
}
</style>