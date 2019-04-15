<template>
  <div class='box'>
    <h2>学生管理</h2>
    <div class="box-content">
       <div class="inpt">
         <el-input v-model="cont" placeholder="请输入内容"></el-input>
            <template>
              <el-select v-model="value" placeholder="请选择教室号">
                <el-option
                  v-for="item in classrooms"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <template>
              <el-select v-model="value" placeholder="请选择班级名">
                <el-option
                  v-for="item in classes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
             <el-button type="primary">搜索</el-button>
             <el-button type="primary">重置</el-button>
             <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="学号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="class"
                  label="班级">
                </el-table-column>
                <el-table-column
                  prop="classroom"
                  label="教室">
                </el-table-column>
                    <el-table-column
                  prop="psd"
                  label="密码">
                </el-table-column>
                <el-table-column label="操作">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="danger"
                          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                      </template>
                </el-table-column>
        </el-table>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  data(){
    return {
       cont:'',
       tableData: [{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        },{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        },{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        },{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        },{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        },{
           name:'张三',
           num:'9370100073',
           class:'1611C',
           classroom:'34301',
           psd:'12345'
        }],
        classrooms: [{
          value: '选项1',
          label: '34303'
        }, {
          value: '选项2',
          label: '34301'
        }, {
          value: '选项3',
          label: '34302'
        }, {
          value: '选项4',
          label: '34300'
        }],
        classes: [{
          value: '选项1',
          label: '1701B'
        }, {
          value: '选项2',
          label: '1701C'
        }]
    }
  }
}
</script>
<style scoped lang="scss">
      .app-main>.box{ 
          position: relative;
          width: 100%;
          background: #EDEFF2;
          overflow: hidden;
            &>h2{
              padding:20px 0 10px 20px;
            }
        .box-content{
          padding:10px;
          .el-input{
            width:180px;
            height:32px;
            margin:10px;
          }
          .el-button{
            width:110px;
            height:35px;
            margin:0 10px;
          }
          .el-table{
            margin-top:30px;
          }
        }
       }
</style>