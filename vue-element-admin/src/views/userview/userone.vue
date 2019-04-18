<template>
  <div class="box">
    <p class="head">添加用户</p>
    <div class="wrap">
      <div>
        <dl>
          <dt>
            <span v-for="(val,key) in title" :key="key" @click="titleclick(key)" :id="index==key?'active':'null'">{{val}}</span>
          </dt>
          <dd>
            <el-select v-model="value" placeholder="请选择身份id" class="sele">
              <el-option
                v-for="item in shenfen"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_id"
              ></el-option>
            </el-select>
            <input type="text" placeholder="请添加用户名">
            <input type="text" placeholder="请输入密码">
            <el-select v-model="value2" placeholder="请选择身份id" class="sele" :style="index==0?'display:none':'display:block'">
              <el-option
                 v-for="item in shenfen"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_id"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加身份</span>
          </dt>
          <dd>
            <input type="text" placeholder="请输入身份名称">
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加api接口权限</span>
          </dt>
          <dd>
            <input type="text" placeholder="请输入api接口权限名称">
            <input type="text" placeholder="请输入api接口权限url">
            <input type="text" placeholder="请输入api接口权限方法">
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加视图接口权限</span>
          </dt>
          <dd>
            <el-select v-model="value3" placeholder="请选择已有视图" class="sele">
              <el-option
                v-for="item in view"
                :key="item.view_authority_id"
                :label="item.view_authority_text"
                :value="item.view_authority_id"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">给身份设置api接口权限</span>
          </dt>
          <dd>
            <el-select v-model="value4" placeholder="请选择身份id" class="sele">
              <el-option
                  v-for="item in shenfen"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_id"
              ></el-option>
            </el-select>
            <el-select v-model="value7" placeholder="请选择api接口权限" class="sele">
              <el-option
                v-for="item in api"
                :key="item.api_authority_id"
                :label="item.api_authority_text"
                :value="item.api_authority_id"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">给身份设置视图权限</span>
          </dt>
          <dd>
            <el-select v-model="value5" placeholder="请选择身份id" class="sele">
              <el-option
                 v-for="item in shenfen"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_id"
              ></el-option>
            </el-select>
            <el-select v-model="value6" placeholder="请选择视图权限id" class="sele">
              <el-option
                v-for="item in view"
                :key="item.view_authority_id"
                :label="item.view_authority_text"
                :value="item.view_authority_id"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import $store from "../../store/modules/userManager";
import { all } from 'q';
export default {
  data() {
    return {
      value: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      title:["添加用户","更新用户"],
      index:0,


    };
  },
  methods:{
    titleclick(index){
      this.index=index;
    },
    dd(){
    this.$store.dispatch("userManager/identity");   
     },
    bb(){
    this.$store.dispatch("userManager/views");   
    },
    nn(){
      this.$store.dispatch("userManager/api");   
    }
  },
  computed:{
      shenfen(){
          return   $store.state.shenfen;
       },
       view(){
         return  $store.state.view;
       },
       api(){
          return  $store.state.apis;
       }
  },
  mounted(){
    this.dd();
    this.bb();
    this.nn()
  }
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
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.wrap div {
  border: 1px solid #eee;
  width: 33.3%;
  /* height: 250px; */
  border-radius: 5px;
  
}
.wrap div dl {
  margin-left: 10px;
  margin-top: 20px;
}
.wrap div span {
  width: 160px;
  height: 30px;
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  background: #fff;
  line-height: 25px;
}
.wrap div dl input {
  display: block;
  margin-top: 20px;
  width: 100%;
  height: 32px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
 
}
.wrap div dl .sele {
  display: block;

  margin-top: 20px;
}
.wrap div dl button:nth-child(1) {
  width: 120px;
  height: 30px;
  color: #fff;
  background: #295eff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

}
.wrap div dl button:nth-child(2) {
  width: 60px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 20px;
}
#active {
  border: 1px solid #0139fd;
  color: #0139fd;
}
</style>


