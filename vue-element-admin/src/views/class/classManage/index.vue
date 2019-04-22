<template>
  <div class="box">
    <h2>班级管理</h2>
    <div class="box-content">
<<<<<<< HEAD
      <el-button type="primary" @click="addclass">+ 添加班级</el-button>
      <el-table :data="bandata" stripe style="width:100%">
        <el-table-column prop="grade_name" label="班级名" width="180"></el-table-column>
        <el-table-column prop="subject_text" label="课程名" width="180"></el-table-column>
        <el-table-column prop="room_text" label="教室号"></el-table-column>
=======
      <el-button type="primary" @click='showdialog'>+ 添加班级</el-button>
      <el-table :data="tableData" stripe style="width:100%">
        <el-table-column prop="classroom" label="班级名" width="180"></el-table-column>
        <el-table-column prop="class" label="课程名" width="180"></el-table-column>
        <el-table-column prop="num" label="教室号"></el-table-column>
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
<<<<<<< HEAD
       <bj-dialog v-if="dialogshow" v-on:showdislog="showdislog" :type="type" :name="name" :banjiid="banjiid"/>
=======
       <div class="dialog" v-if='dialogshow'>
          <p>添加班级 <span @click='closedialog'>X</span></p>
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
             <el-button @click='closedialog'>取消</el-button>
             <el-button type='primary' @click='closedialog'>确定</el-button>
          </div>
       </div>
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
    </div>
    <div class="mask" v-if='dialogshow'></div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import BjDialog from '@/components/banjitk/bjdialog.vue'
export default {
   data(){
     return{
      dialogshow:false,
      type:'',
      name:''
     }
   },
   components:{
     BjDialog
   },
  computed: {
    ...mapState({
        bandata:state=>state.addbanji.bandata
    })
  },
  mounted() {
    this.getbandata()
    this.getjiaoshi()
    this.getkecheng()
  },
  methods: {
<<<<<<< HEAD
    
    ...mapActions({
        getbandata:'addbanji/getbandata',
        getjiaoshi:'addbanji/getjiaoshi',
        getkecheng:'addbanji/getkecheng',
        addbanji:'addbanji/addbanji',
        delbanji:'addbanji/delbanji'
    }),
    addclass() {
      this.dialogshow = true
      this.type = 'add'
    },
    showdislog(){
      this.getbandata()
      this.dialogshow = false
    },
    handleEdit(ind,rew){
      //console.log(ind,rew)
      this.dialogshow = true
      this.type = 'xiu'
      this.name = rew.grade_name
      this.banjiid = rew.grade_id
    },
    async handleDelete(ind,rew){
      //console.log(rew.grade_id)
      await this.delbanji({grade_id:rew.grade_id})
      await this.getbandata()
    }
=======
     showdialog(){
        this.dialogshow=true
     },
     closedialog(){
        this.dialogshow=false
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
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
  }
 
};
</script>
<style scoped lang="scss">
.box {
  width: 100%;
<<<<<<< HEAD
  //height: calc(100vh - 84px);
=======
  height: calc(100vh - 84px);
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
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
