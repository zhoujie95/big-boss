<template>
  <div class="box">
    <h2>学生管理</h2>
    <div class="box-content">
      <div class="inpt">
        <el-input v-model="cont" placeholder="请输入内容"></el-input>
        <template>
          <el-select v-model="jiaoshi" placeholder="请选择教室号">
            <el-option
              v-for="item in jiaodata"
              :key="item.room_id"
              :label="item.room_text"
              :value="item.room_text"
            ></el-option>
          </el-select>
        </template>
        <template>
          <el-select v-model="banji" placeholder="请选择班级名">
            <el-option
              v-for="item in bandata"
              :key="item.grade_id"
              :label="item.grade_name"
              :value="item.grade_name"
            ></el-option>
          </el-select>
        </template>
        <el-button type="primary" @click="btnsousuo()">搜索</el-button>
        <el-button type="primary" @click="btnchongzhi()">重置</el-button>
        <div class="main">
            <el-table
                :data="studentdata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%;border-radius:'10px'"
                class="table"
                id="tabels"
            >
                <el-table-column prop="student_name" label="姓名" width="134"></el-table-column>
                <el-table-column prop="student_id" label="学号" width="160"></el-table-column>
                <el-table-column prop="grade_name" label="班级" width="160"></el-table-column>
                <el-table-column prop="room_text" label="教室" width="140"></el-table-column>
                <el-table-column prop="student_pwd" label="密码" width="135"></el-table-column>
                <el-table-column label="操作" width="110">
                    <template slot-scope="scope">
                        <el-button
                            @click="handleDelete(scope.$index, scope.row)"
                            type="text"
                            size="small"
                            class="options"
                        >删除</el-button>
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
                    :total="studentdata.length"
                ></el-pagination>
            </div>
        </div>
         
      </div>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      cont: "",
      jiaoshi:'',
      banji:'',
      currentPage4: 1,
      currentPage: 1,
      pagesize: 5
    };
  },
  methods: {
    ...mapActions({
      getstudent:'addstudent/getstudent',
      delstudent:'addstudent/delstudent',
      getbandata:'addbanji/getbandata',
      getjiaoshi:'addbanji/getjiaoshi',
      soustudent:'addstudent/soustudent'
    }),
    async handleDelete(ind,rew){
      //console.log(rew.student_id)
      await this.delstudent({student_id:rew.student_id})
      await this.getstudent()
    },
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    btnchongzhi(){
      this.cont= '',
      this.jiaoshi='',
      this.banji=''
    },
    btnsousuo(){
      // console.log(this.cont)
      // console.log(this.jiaoshi)
      // console.log(this.banji)
      if(this.cont==''&&this.jiaoshi==''&&this.banji==''){
        this.getstudent()
      }else{
          let newdata = this.studentdata.filter(item=>{
            return this.cont==item.student_name||this.jiaoshi==item.room_text||this.banji==item.grade_name
          })
          //console.log(newdata)
          if(newdata){
            this.soustudent(newdata)
          }
      }
    }
  },
  computed: {
    ...mapState({
      studentdata:state=>state.addstudent.studentdata,
      bandata:state=>state.addbanji.bandata,
      jiaodata:state=>state.addbanji.jiaodata
    })
  },
  async mounted() {
    await this.getstudent()
    await this.getbandata()
    await this.getjiaoshi()      
    //console.log(this.studentdata)                                                                                                                                                          
  }
};
</script>
<style scoped lang="scss">
.app-main > .box {
  position: relative;
  width: 100%;
  background: #edeff2;
  overflow: hidden;
  & > h2 {
    padding: 20px 0 10px 20px;
  }
  .box-content {
    padding: 10px;
    .el-input {
      width: 180px;
      height: 32px;
      margin: 10px;
    }
    .el-button {
      width: 110px;
      height: 35px;
      margin: 0 10px;
    }
    .el-table {
      margin-top: 0px;
    }
  }
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