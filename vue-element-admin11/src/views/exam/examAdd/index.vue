<template>
  <div class='examAdd'>
     <h2>添加试题</h2>
     <div class="examAdd-content">
       <p>题目信息</p>
       <p>题干</p>
       <el-input v-model="input" placeholder="请输入题目标题，不超过20个字"></el-input>
       <p>题目主题</p>
       <div class="examAdd-title"></div>
     </div>
  </div>
</template>
<script>
export default {
  props: {

  },
  data() {
    return {
      input:''
    }
  }
}
</script>
<style scoped lang="scss">
    .app-main{
      background: #F0F2F5;
      padding:10px !important;
      .examAdd{
        width:100%;
        height:100%;
          h2{
            padding:0 30px !important;
            margin-top: 10px;
            line-height:25px;
        }
        .examAdd-content{
          width:1200px;
          margin-left:30px;
          height:800px !important;
          border:1px solid lightgray;
          border-radius:10px;
          padding:24px;
          .el-input{
            width:500px;
          }
        }
        .examAdd-title{
          width:1150px;
          height:300px;
          border:1px solid lightgray;
          border-radius: 8px;
        }
      }
    }
</style>
