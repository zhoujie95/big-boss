<template>
  <div class="box">
    <h2>班级管理</h2>
    <div class="box-content">
      <el-button type="primary" @click='showdialog'>+ 添加班级</el-button>
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
       <div class="dialog" v-if='dialogshow'>
          <p>添加班级 <span>X</span></p>
          <p> <b>*</b> 班级名:</p>
          <el-input placeholder="班级名" v-model='classname'></el-input>
          <p> <b>*</b> 教室名:</p>
          <el-select v-model="roomnum" placeholder="请选择教室号">
            <el-option
              v-for="item in classroom"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
          <p> <b>*</b> 课程名:</p>
          <el-select v-model="lesson" placeholder="请选择课程名">
            <el-option
              v-for="item in classroom"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
          <div class='btn'>
             <el-button>取消</el-button>
             <el-button type='primary'>确定</el-button>
          </div>
       </div>
    </div>
    <div class="mask" v-if='dialogshow'></div>
  </div>
</template>
<script>
export default {
  methods: {
     showdialog(){
        this.dialogshow=true
     }
  },
  data() {
    return {
      dialogshow:false,
      lesson:'',
      classname:'',
      roomnum:'',
      classroom:[],
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
  width: 100%;
  height: calc(100vh - 84px);
  overflow: hidden;
  &>.mask{
       width:1519.2px;
      height:1200px;
      background: rgba(0,0,0,0.4);
      position: absolute;
      top:-64px;
      z-index:60;
      left:-227px;
  }
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
      &>.dialog{
        position: absolute;
        width:500px;
        height:400px;
        background: #fff;
        border-radius: 10px;
        top:50%;
        left:50%;
        margin-left:-250px;
        margin-top:-200px;
        z-index:70;
        padding:20px;
        .el-select{
          width:100%;
        }
        .btn{
          text-align: center;
          padding:20px;
        }
        p{
          height:30px;
          padding:0 10px;
          line-height: 30px;
          margin:10px 0;
          b{
            color:red;
          }
          &:nth-of-type(1){
            display: flex;
            justify-content: space-between;
          }
        }
      }
  }

}
</style>