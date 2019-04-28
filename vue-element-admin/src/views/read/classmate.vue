<template>
  <div class="box">
    <h2></h2>
    <div class="content-top">
      <span>状态 :</span>
      <el-select v-model="exam" placeholder="请选择">
        <el-option
          v-for="item in testType"
          :key="item.exam_id"
          :label="item.exam_name"
          :value="item.exam_id"
        ></el-option>
      </el-select>
      <span>班级 :</span>
      <el-select v-model="exam" placeholder="请选择">
        <el-option
          v-for="item in allclass"
          :key="item.grade_id"
          :label="item.grade_name"
          :value="item.grade_id"
        ></el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="content-bot">
      <p>试卷列表</p>
      <el-table
         ref="Table"
        :data="details.slice((currentPage-1)*pagesize,currentPage*pagesize)
          "
        stripe
        style="width: 100%;padding:10px;height:auto;border:'1px solid lighgrey'"
        @cell-click='godetail'
      >
        <el-table-column label="班级" width="180">
           {{gradename}}
        </el-table-column>
        <el-table-column prop="student_name" label="姓名" width="180"/>
        <el-table-column prop="state" label="阅卷状态" width="180"/>
        <el-table-column prop="start_time" label="开始时间" width="180"/>
        <el-table-column prop="end_time" label="结束时间" width="180"/>
        <el-table-column prop='score' label="成材率" width="180"/>
        <el-table-column label="操作">批卷</el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="5"
          layout="prev, pager, next,sizes,jumper"
          :total="details.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['details']),
    ...mapState({
      allclass: state => state.testpaper.allclass
    })
  },
  methods: {
    ...mapActions({
      getdetail: "testpaper/getdetail",
      getClasses: "testpaper/getClasses"
    }),
     handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    godetail(row){
      this.$router.push({
        path:'/read/details',
         query:{
             exam_student_id:row.exam_student_id
         }
      })
    }
  },
  async mounted() {
    let grade = localStorage.getItem("grade_id");
    let gradename=localStorage.getItem('grade')
    this.gradename=gradename
    await this.getdetail({
      grade_id: grade
    });
    await this.getClasses();
  },
  data() {
    return {
      exam: "",
      currentPage4: 1,
      currentPage: 1,
      pagesize: 5,
      testType: [],
      studentmes: [],
      gradename:''
    };
  }
};
</script>
<style scoped lang="scss">
.box {
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;
  top: 64px;
  background: #f0f2f5;
  display: flex;
  padding: 0 30px;
  flex-direction: column;
  & > h2 {
    width: 100%;
    height: 40px;
  }
  .content-top {
    height: 130px;
    line-height: 130px;
    padding-left: 60px;
    border-radius: 10px;
    background: #fff;
    .el-select {
      margin: 0 10px;
    }
    .el-button {
      width: 100px;
    }
  }
  .content-bot {
    flex: 1;
    border-radius: 10px;
    background: #fff;
    margin-top: 20px;
    & > p {
      padding: 20px 0 10px 15px;
    }
    .el-table {
      padding: 10px;
      margin-top: 30px;
    }
    .block {
      .el-pagination {
        width: 430px;
        margin-top: 10px;
        float: right;
      }
    }
  }
}
</style>