<template>
    <div class="box">
      <!-- 用户展示 -->
       <p class="head">用户展示</p>
       <div class="wrap">
           <ul class="list">
               <li id="active">用户数据</li>
               <li>身份数据</li>
               <li>api接口权限</li>
               <li>身份和api接口关系</li>
               <li>视图接口权限</li>
               <li>身份和视图权限关系</li>
           </ul>
       </div>
       <div class="content">
          <h2>用户数据</h2>
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="user"
        label="用户名"
        width="280">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="1180">
      </el-table-column>
      <el-table-column
        prop="identity"
        label="身份">
      </el-table-column>
    </el-table>
    <el-pagination
  border
  layout="prev, pager, next"
  :total="3" class="fen">
</el-pagination>
       </div>
    </div>
</template>
<script>
export default {
  data() {
        return {
          tableData: [{
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
           identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          },, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }, {
            user: 'zhaoxiaoru',
            password: '10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718',
            identity: '出题者'
          }]
        }
      }
}
</script>
<style scoped>
.box{
    padding-left: 20px;
    background: #f0f2f5
}
.head{
    font-size: 22px;
    line-height: 40px;
}
.list{
   display: flex;
    list-style: none;
}
.list li{
width: 140px;
 height: 30px;
 border:1px solid #d9d9d9;
 text-align: center;
 font-size: 14px;
 display: inline-block;
 background: #fff;
 line-height: 25px;
 color: #ccc;
}
.content h2{
    font-weight: normal;
}
#active{
  border: 1px solid #1890ff;
}
.fen{
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

</style>
