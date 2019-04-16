<template>
  <div class="box">
    <h2>试题分类</h2>
    <div class="box-content">
      <el-button type="primary" @click="addtype">+ 添加类型</el-button>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"/>
        <el-table-column prop="name" label="姓名" width="180"/>
        <el-table-column prop="address" label="地址"/>
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
/* eslint-disable */
export default {
  methods: {
    addtype() {
      this.$prompt("创建新类型", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValue: "请输入类型"
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
@import "../examType.scss";
</style>
