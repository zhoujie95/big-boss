<template>
  <div class="box">
    <h2>教室管理</h2>
    <div class="box-content">
      <el-button type="primary" @click="openroom">+ 添加教室</el-button>
      <el-table :data="jiaodata" stripe style="width: 100%">
        <el-table-column prop="room_text" label="教室号" width="300"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  
  computed: {
    ...mapState({
        jiaodata:state=>state.addjiaoshi.jiaodata
    })
  },
  methods: {
    ...mapActions({
        getjiaoshi:'addjiaoshi/getjiaoshi',
        patydata:'addjiaoshi/addjiaoshi',
        deljiaoshi:'addjiaoshi/deljiaoshi'
    }),
    //弹框  添加教室
    openroom() {
      this.$prompt("教室号", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(async ({ value }) => {
          await this.patydata(value)
          await this.getjiaoshi()
        })
    },
    //点击删除  第一个参数是下标 第二个是删除的数据
    async handleDelete(ind,rew){
      //console.log(rew.room_id)
      await this.deljiaoshi({room_id:rew.room_id})
      await this.getjiaoshi()
    }
  },
  async mounted() {
    //加载完成   请求数据
    await this.getjiaoshi()

  }
};
</script>
<style scoped lang="scss">
.box {
  position: relative;
  width: 100%;
  // height: calc(100vh - 84px);
  background: #edeff2;
  overflow: hidden;
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
  }
}
</style>