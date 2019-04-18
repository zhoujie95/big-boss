<template>
    <div class="box">
        <h2 class="tit">待批班级</h2>
        <div class="main">
            <el-table
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%;border-radius:'10px'"
                class="table"
                id="tabels"
            >
                <el-table-column prop="date" label="班级名" width="134"></el-table-column>
                <el-table-column prop="name" label="课程名称" width="257"></el-table-column>
                <el-table-column prop="address" label="阅卷状态" width="160"></el-table-column>
                <el-table-column prop="name_two" label="课程名称" width="257"></el-table-column>
                <el-table-column prop="pass" label="成材率" width="135"></el-table-column>
                <el-table-column label="操作" width="110">
                    <template slot-scope="scope">
                        <el-button
                            @click="handleClick(scope.row)"
                            type="text"
                            size="small"
                            class="options"
                        >批卷</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination_box">
                <el-pagination
                    class="pagination"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[5, 10, 15, 20]"
                    :page-size="5"
                    layout="prev, pager, next,sizes,jumper"
                    :total="tableData.length"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-04",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-01",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-03",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-03",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-031111",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-03",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        },
        {
          date: "2016-05-03",
          name: "	渐进式开发(react)",
          address: "",
          name_two: "渐进式开发(react)",
          pass: 34308
        }
      ],
      currentPage4: 1,
      currentPage: 1,
      pagesize: 5
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: 0 24px;
  background: #f0f2f5;
  overflow: auto;
}
.tit {
  width: 100%;
  padding: 30px 0px 20px 0;
  margin-top: 0px;
  font-weight: normal;
}
.has-gutter {
  background: rgba(0, 0, 0, 0.65);
}
.main {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 30px;
}
.table {
  width: 100%;
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
}
.options {
  font-size: 14px;
}
.pagination_box {
  width: 100%;
}
.pagination {
  float: right;
  padding: 15px 30px 30px 0;
}
.el-table::before {
  display: none;
}
</style>