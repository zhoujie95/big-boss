<template>
  <div class="box">
    <p class="head">用户展示</p>
    <div class="wrap">
      <ul class="list">
        <li v-for="(val,key) in listdata" :key="key" @click="listclick(key)" :id="index==key?'active':'null'">{{val}}</li>
      </ul>
    </div>
    <div class="content">
      <h2>用户数据</h2>
        <el-table :data="user" style="width: 100%">
        <el-table-column prop="user_name" label="用户名" width="280"></el-table-column>
        <el-table-column prop="user_pwd" label="密码" width="1180"></el-table-column>
        <el-table-column prop="identity_text" label="身份"></el-table-column>
      </el-table>
      <el-pagination border="" layout="prev, pager, next" :total="13" class="fen"></el-pagination>
    </div>
  </div>
</template>
<script>
import { all } from 'q';
import $store from "../../store/modules/userManager";
 import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
  
      listdata:["用户数据","身份数据","api接口权限","身份和api接口关系","视图接口权限","身份和视图权限关系"],
      index:0
    };
  },
  methods:{
    listclick(index){
     this.index=index;
    },
    users(){
      this.$store.dispatch("userManager/user");   
    }
  },
    mounted(){
    this.users();
  },computed:{
      user(){
          return   $store.state.user;
       }
  },

};
</script>
<style scoped>
 *{margin:0;padding:0;}
.box {
  padding-left: 20px;
  background: #f0f2f5;
  margin-top:70px;
  width: 100%;
  cursor:pointer;
}
.head {
  font-size: 22px;
  line-height: 40px;
}
.list {
  display: flex;
  list-style: none;

}
#active {
  border: 1px solid #295eff;
  
}
.list li {
  width: 140px;
  height: 30px;
  border: 1px solid #d9d9d9; 
  text-align: center;
  font-size: 14px;
  display: inline-block;
  background: #fff;
  line-height: 25px;
  color: #ccc;
}.content{
  width: 100%;
  height: auto;
}
.content h2 {
  font-weight: normal;
  line-height:70px;
}
.active {
  border: 1px solid #1890ff;
  
}
.fen {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
