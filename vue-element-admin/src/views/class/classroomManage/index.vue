<template>
  <div class="box">
    <h2>教室管理</h2>
    <div class="box-content">
      <el-button type="primary" @click="openroom">+ 添加教室</el-button>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="教室号" width="180"></el-table-column>
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
    openroom() {
      this.$prompt("教室号", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: "教室名"
      });
    }
  },
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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