<template>
<div class="box">
  <p class="head">试题查看</p>
  <div class="wrap">
      <div>
   <label>课程类型:</label>
            <ul class="nav">
                <li>All</li>
                <li>javaScript上</li>
                <li>javaScript下</li>
                <li>模块化开发</li>
                <li>移动端开发</li>
                <li>node基础</li>
                <li>组件化开发(vue)</li>
                <li>渐进式开发(react)</li>
                <li>项目实战</li>
                <li>javaScript高级</li>
                <li>node高级</li>
            </ul>
      </div>
      <div class="exam">
 <label>考试类型:</label>
      <el-select v-model="value" placeholder="请选择" class="sele">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <label >题目类型:</label>
      <el-select v-model="value1" placeholder="请选择" class="sele">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <el-button type="primary">查询</el-button>    
      </div>
        
  </div>
  <div class="content">
      <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
       <div class="small">
          <div class="left">
         <p>机器人归位</p>
         <div>
          <ul>
              <li>代码补全</li>
              <li>javaScript上</li>
              <li>周考1</li>
          </ul>
         </div>
          
         <a>dingshaoshan 发布</a>
          </div>
          <div class="right">
              <span>编辑</span>
          </div>
         
      </div>
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
        options: [{
          value: '选项1',
          label: '周考1'
        }, {
          value: '选项2',
          label: '周考2'
        }, {
          value: '选项3',
          label: '周考3'
        }, {
          value: '选项4',
          label: '月考'
        }],
        type:[{
          value:'选项1',
          label:"简答题"
        },{
          value:'选项2',
          label:"代码阅读题"
        },{
          value:'选项3',
          label:"代码补全"
        },{
          value:'选项4',
          label:"修改bug"
        },{
          value:'选项5',
          label:"手写代码"
        }],
        value: '',
        value1:''
      }
    }
}
</script>
<style scoped>
.box{
    padding-left: 20px;
    background: #f0f2f5;
}
.head{
    font-size: 22px;
    line-height: 40px;
}
.wrap{
    margin-top: 30px;
    background: #fff;
    height: 200px;
    border:1px solid #fff;
    border-radius: 10px;
     list-style: none; 
}
.wrap div{
    display: flex;
}
.wrap label{
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 100px;
    padding-left: 80px;
    display:inline-block;
}
.wrap ul{
     list-style: none; 
     display: flex;
     color: rgba(0, 0, 0, 0.65);
     font-size: 14px;
     
}
.wrap ul li{
    padding-left: 30px;
    line-height: 79px;
}
.wrap ul li:nth-child(1){
    padding-left:0;
}
.nav{
  margin-top:5px;
}
.sele{
    display: inline-block;
    width: 350px;
    margin-left: 10px;
    margin-top: -7px;
}
.exam label{
    line-height: 20px;
}
.exam button{
    margin-left: 20px;
    margin-top: -5px;
    width: 100px;
    height: 30px;
    line-height: 4px;
}
.content{
    margin-top: 30px;
    background: #fff;
    height: auto;
    border:1px solid #fff;
    border-radius: 10px; 
   
}
.small{
    /* border: 1px solid #eee; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.left{
  margin-left: 20px;
}
.left p{
    display: block;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 22px;
    
}
.left a{
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 22px;
    color: blue;
}
.left div{
  display: block;
}
.left div ul{
    display: flex;
    list-style: none;
    margin-left: -50px;
}
.left ul li{
margin-left: 10px;
line-height: 20px;
  height: 22px;
    padding: 0 7px;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    font-size: 12px;
}
.left ul li:nth-child(1){
  color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
}
.left ul li:nth-child(2){
      color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
}
.left ul li:nth-child(3){
      color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
}
.right{
  margin-right: 20px;
  color: #2f54eb;
}
.fen{
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>


