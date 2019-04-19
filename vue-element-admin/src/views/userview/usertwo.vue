<template>
  <div class="box">
    <p class="head">用户展示</p>
    <div class="wrap">
      <ul class="list">
        <li
          v-for="(val,key) in listdata"
          :key="key"
          @click="listclick(key)"
          :id="index==key?'active':'null'"
        >{{val}}</li>
      </ul>
    </div>
    <div class="content">
      <h2>{{h2}}</h2>
      <div :style="index==0?'display:block':'display:none'">
        <el-table
          style="width: 100%"
          :data="user.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        >
          <el-table-column prop="user_name" label="用户名" width="280" class="table"></el-table-column>
          <el-table-column prop="user_pwd" label="密码" width="1180"></el-table-column>
          <el-table-column prop="identity_text" label="身份"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next" :total="user.length" class="fen" @current-change="current_change"></el-pagination>
      </div>
      <div :style="index==1?'display:block':'display:none'">
        <el-table  :data="shenfen.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="identity_text" label="身份名称" width="1680"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next" :total="shenfen.length" class="fen" @current-change="current_change"></el-pagination>
      </div>
      <div :style="index==2?'display:block':'display:none'">
        <el-table  :data="api.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="api_authority_text" label="api权限名称" width="380"></el-table-column>
          <el-table-column prop="api_authority_url" label="api权限url" width="1080"></el-table-column>
          <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next"  class="fen" @current-change="current_change"
                     :total="api.length"></el-pagination>
      </div>
      <div :style="index==3?'display:block':'display:none'">
        <el-table :data="identityapi.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="identity_text" label="身份名称" width="380"></el-table-column>
          <el-table-column prop="api_authority_text" label="api权限名称" width="380"></el-table-column>
          <el-table-column prop="api_authority_url" label="api权限url" width="680"></el-table-column>
          <el-table-column prop="api_authority_method" label="api权限方法"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next" :total="identityapi.length" class="fen" @current-change="current_change"></el-pagination>
      </div>
      <div :style="index==4?'display:block':'display:none'">
        <el-table  :data="view.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%">
          <el-table-column prop="view_authority_text" label="视图权限名称" width="280"></el-table-column>
          <el-table-column prop="view_id" label="视图id"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next"  class="fen" @current-change="current_change" :total="view.length"></el-pagination>
      </div>
      <div :style="index==5?'display:block':'display:none'">
        <el-table   :data="identityview.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width:100%">
          <el-table-column prop="identity_text" label="身份" width="380"></el-table-column>
          <el-table-column prop="view_authority_text" label="视图名称" width="380"></el-table-column>
          <el-table-column prop="view_id" label="视图id" width="910"></el-table-column>
        </el-table>
        <el-pagination border layout="prev, pager, next"  class="fen"  @current-change="current_change" :total="view.length"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { all } from "q";
import $store from "../../store/modules/userManager";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      listdata: [
        "用户数据",
        "身份数据",
        "api接口权限",
        "身份和api接口关系",
        "视图接口权限",
        "身份和视图权限关系"
      ],
      index: 0,
      h2: "用户数据",
      pagesize: 10, //每页的数据条数
      currentPage: 1 //默认开始页面
    };
  },
  methods: {
    listclick(index) {
      this.index = index;
      this.h2 = this.listdata[index];
    },
    users() {
      this.$store.dispatch("userManager/user");
    },
    dd() {
      this.$store.dispatch("userManager/identity");
    },
    nn() {
      this.$store.dispatch("userManager/api");
    },
    shenfenapi() {
      this.$store.dispatch("userManager/identityapi");
    },
    bb() {
      this.$store.dispatch("userManager/views");
    },
    shenfenview() {
      this.$store.dispatch("userManager/identityview");
    },

    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex == 0) {
        return "background:#fff";
      } else {
        return "";
      }
    },
      current_change:function(currentPage){
        this.currentPage = currentPage;
      }
  },
  mounted() {
    this.users();
    this.dd();
    this.nn();
    this.shenfenapi();
    this.bb();
    this.shenfenview();
  },
  computed: {
    user() {
      return $store.state.user;
    },
    shenfen() {
      return $store.state.shenfen;
    },
    api() {
      return $store.state.apis;
    },
    identityapi() {
      return $store.state.list;
    },
    view() {
      return $store.state.view;
    },
    identityview() {
      return $store.state.viewlist;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  padding-left: 20px;
  background: #f0f2f5;
  margin-top: 70px;
  width: 100%;
  cursor: pointer;
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
  background: #fff;
  border-color: #0139fd;
  color: #0139fd;
  box-shadow: -1px 0 0 0 #0139fd;
}
.list li {
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  background: #fff;
  padding: 0 15px;
  height: 32px;
  line-height: 30px;
  color: rgba(0, 0, 0, 0.65);
}
.content {
  width: 100%;
  height: auto;
}
.content h2 {
  font-weight: normal;
  line-height: 70px;
}
/* .el-table_1_column_1  {
  height: 96px;
} */
.active {
  border: 1px solid #1890ff;
}
.fen {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
