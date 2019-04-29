<template>
    <div class="dialog">
          <p>添加班级 <span @click='closedialog'>X</span></p>
          <p> <b>*</b> 班级名:</p>
          <el-input placeholder="班级名" v-model='classname' :disabled="disabled"></el-input>
          <p> <b>*</b> 教室名:</p>
          <el-select v-model="roomnum" placeholder="请选择教室号">
            <el-option
              v-for="item in jiaodata"
              :key="item.room_id"
              :label="item.room_text"
              :value="item.room_id"
            ></el-option>
          </el-select>
          <p> <b>*</b> 课程名:</p>
          <el-select v-model="lesson" placeholder="请选择课程名">
            <el-option
              v-for="item in kedata"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
          <div class='btn'>
             <el-button @click='closedialog'>取消</el-button>
             <el-button type='primary' @click='btnaddbanji'>确定</el-button>
          </div>
        </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:['type','name','banjiid'],
    data(){
        return {
            lesson:'',
            classname:'',
            roomnum:'',
            disabled:false,
            banjiidw:''
        }
    },
    mounted() {
        //console.log(this.type,this.name,this.banjiid)
        if(this.type=='xiu'){
            this.classname = this.name
            this.banjiidw = this.banjiid
            this.disabled = true
        }
    },
    computed: {
    ...mapState({
        jiaodata:state=>state.addbanji.jiaodata,
        kedata:state=>state.addbanji.kedata
    })
  },
  methods: {
      ...mapActions({
        getjiaoshi:'addbanji/getjiaoshi',
        getkecheng:'addbanji/getkecheng',
        addbanji:'addbanji/addbanji',
        delbanji:'addbanji/delbanji',
        upbanji:'addbanji/upbanji'
    }),
      async btnaddbanji(){

        if(this.type=='add'){
        let obj = {
            grade_name:this.classname,
            room_id:this.roomnum,
            subject_id:this.lesson
          }
          await this.addbanji(obj)
        }else{
          let objw = {
            grade_id : this.banjiidw,
            grade_name:this.classname,
            room_id:this.roomnum,
            subject_id:this.lesson
          }
          await this.upbanji(objw)
        }
      
      this.lesson='',
      this.classname='',
      this.roomnum=''
      this.banjiidw=''
      this.$emit('showdislog',this.showdislog)
    },
    closedialog(){
      this.$emit('showdislog',this.showdislog)
    }
  }
}
</script>
<style scoped lang="scss">
    .dialog{
        position: absolute;
        width:500px;
        height:400px;
        background: #fff;
        border-radius: 10px;
        top:30%;
        left:50%;
        margin-left:0px;
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
</style>

