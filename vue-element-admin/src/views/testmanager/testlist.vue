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
          <el-table :data="testlistdata" style="width: 100%">
            <el-table-column prop="title" label="试卷信息"></el-table-column>
            <el-table-column prop="grade_name" label="班级"></el-table-column>
            <el-table-column prop="user_name" label="创建人"></el-table-column>
            <el-table-column prop="start_time" label="开始时间"></el-table-column>
            <el-table-column prop="end_time" label="结束时间"></el-table-column>
            <el-table-column  label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">详情</el-button>
            </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {mapState,mapGetters,mapMutations,mapActions} from "vuex";
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "周考1"
        },
        {
          value: "选项2",
          label: "周考2"
        },
        {
          value: "选项3",
          label: "周考3"
        },
        {
          value: "选项4",
          label: "月考"
        }
      ],
      value1: "",
      options2: [
        {
          value: "选项1",
          label: "js上"
        },
        {
          value: "选项2",
          label: "js下"
        },
        {
          value: "选项3",
          label: "模块化开发"
        },
        {
          value: "选项4",
          label: "移动化开发"
        },
        {
          value: "选项5",
          label: "渐进式开发"
        }
      ],
      value2: "",
    };
  },
  methods:{
     aa(){
       this.$store.dispatch("testmanager/gettestlist");
      },
      //点击查看详情
      handleEdit(index, row) {
        console.log(index, row.exam_exam_id);
      },
  },
  computed:{
    ...mapState("testmanager",{
      testlistdata:state=>state.testlistdata
    })
  },
  mounted(){
    this.aa()
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
