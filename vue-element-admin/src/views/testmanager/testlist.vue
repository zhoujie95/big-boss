<template>
  <div class="testlist">
    <div class="testlist-wrap">
      <div class="testlist-title">考试列表</div>
      <div class="testlist-find">
        <div class="itemoclass">
          <span>考试类型:</span>
           <el-select v-model="exam_id" placeholder="">
            <el-option
              v-for="item in testType"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </div>
        <div class="itemoclass">
          <span>课程:</span>
          <el-select placeholder="" v-model="subject_id">
            <el-option
              v-for="item in testClass"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>
        <div class="findbtn" @click="findlist(exam_id,subject_id)">
          <svg-icon icon-class="search" />&nbsp;&nbsp;查询
        </div>
        <el-button type='primary' @click='exportExcel'>导出试卷</el-button>
      </div>
      <div class="testlist-box">
        <div class="listtitle">
          <p>试卷列表</p>
          <div class="listitem-btn">
          <p v-for="(item,index) in qh" :key="item.id" @click="lightblue(item.id)" :class="{'listitem-btn-active':light===item.id,'testlist-doing':index===1}">{{item.content}}</p>
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
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      subject_id:"",
      exam_id:"",
      light: 0,
      qh: [
        {
          content: "全部",
          id: 0
        },
        {
          content: "进行中",
          id: 1
        },
        {
          content: "已结束",
          id: 2
        }
      ]
    };
  },
  methods: {
    aa() {
      this.$store.dispatch("testmanager/gettestlist");
      this.$store.dispatch("testmanager/gettestType");
      this.$store.dispatch("testmanager/gettestClass");
    },
    //点击查看详情
    handleEdit(index, row) {
      this.$store.dispatch("testmanager/getdetail",row.exam_exam_id);
      this.$router.push({path:"testdetail"})
    },
    //点击切换高亮
    lightblue(e) {
      this.light = e;
      if(e){
        this.$store.dispatch("testmanager/gettestlist",{index:e})
      }else{
        this.$store.dispatch("testmanager/gettestlist");
      }
    },
    //点击查询
    findlist(exam_id,subject_id){
      if(exam_id && subject_id){
        this.$store.dispatch("testmanager/gettestlist",{exam_id,subject_id});
      }
    },
    exportExcel(){
      //console.log(this.testlistdata)
      let header=Object.keys(this.testlistdata[0])
      let list=this.testlistdata.map(item=>{
          let arr=Object.values(item)
          return arr.map(item=>JSON.stringify(item))
      })
      //console.log(list)
      //导出试卷--->
       import('@/vendor/Export2Excel').then(excel => {
        excel.export_json_to_excel({
          header:header,
          data:list,
          filename:'',
          bookType: 'xlsx'
        })
      })
    }
  },
  computed: {
    ...mapState("testmanager", {
      testlistdata: state => state.testlistdata,
      testType:state=>state.testType,
      testClass:state=>state.testClass
    })
  },
  mounted() {
    this.aa();
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
      .el-button{
        height:37px;
        line-height: 20px;
        font-size: 16px;
        margin-left:10px;
        background: #0000FF;
      }
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
      .daobtn{
        width: 150px;
        height: 37px;
        text-align: center;
        line-height: 37px;
        background: blue;
        color: white;
        border-radius: 5px;
        margin-left: 10px;
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
