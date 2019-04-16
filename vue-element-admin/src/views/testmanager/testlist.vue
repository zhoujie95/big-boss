<template>
  <div class="testlist">
    <div class="testlist-wrap">
      <div class="testlist-title">考试列表</div>
      <div class="testlist-find">
        <div class="itemoclass">
          <span>考试类型:</span>
          <el-select v-model="value1" placeholder="">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="itemoclass">
          <span>课程:</span>
          <el-select v-model="value2" placeholder="">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="findbtn">
          <svg-icon icon-class="search"/>&nbsp;&nbsp;查询
        </div>
      </div>
      <div class="testlist-box">
        <div class="listtitle">
          <p>试卷列表</p>
          <div class="listitem-btn">
            <p class="listitem-btn-active">全部</p>
            <p class="testlist-doing">进行中</p>
            <p>已结束</p>
          </div>
        </div>
        <div class="listdata">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="试卷信息"></el-table-column>
            <el-table-column prop="name" label="班级"></el-table-column>
            <el-table-column prop="address" label="创建人"></el-table-column>
            <el-table-column prop="address" label="开始时间"></el-table-column>
            <el-table-column prop="address" label="结束时间"></el-table-column>
            <el-table-column prop="detail" label="操作"></el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value1: "",
      options2: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value2: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          detail: "详情"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          detail: "详情"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          detail: "详情"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          detail: "详情"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.testlist {
  width: 100%;
  height: 749px;
  background: #f0f2f5;
  box-sizing: border-box;
  overflow-y: auto;
  .testlist-wrap {
    width: 98%;
    padding: 50px;
    .testlist-title {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      font-size: 24px;
    }
    .testlist-find {
      width: 100%;
      height: 150px;
      background: white;
      border-radius: 10px;
      display: flex;
      padding: 40px;
      .itemoclass {
        width: 350px;
        height: 50px;
      }
      .findbtn {
        width: 150px;
        height: 37px;
        text-align: center;
        line-height: 37px;
        background: blue;
        color: white;
        border-radius: 5px;
      }
    }
    .testlist-box {
      width: 100%;
      //   height: 500px;
      margin-top: 20px;
      background: white;
      border-radius: 10px;
    }
  }
}
//试卷列表
.listtitle {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .listitem-btn {
    width: 300px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    p {
      flex: 1;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .testlist-doing {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
    .listitem-btn-active {
      border: 1px solid blue;
    }
  }
}
.listdata {
  width: 100%;
  background: white;
  padding: 20px;
}
</style>
