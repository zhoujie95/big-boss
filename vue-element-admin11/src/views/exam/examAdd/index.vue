<template>
   <div class="box">
     <div class="box-content">
      <h2>添加试题</h2>
      <div class="examAdd-content">
        <p>题目信息</p>
        <p>题干</p>
        <el-input v-model="input" placeholder="请输入题目标题，不超过20个字"></el-input>
        <p>题目主题</p>
        <div class="examAdd-title">
            <div class="title-header">
              <ul>
                <li><i class="el-icon-caret-left"></i></li>
                <li><i class="el-icon-caret-right"></i></li>
                <li>H1</li>
                <li>H2</li>
                <li>H3</li>
                <li>H4</li>
                <li><i class="el-icon-picture"></i></li>
                <li><i class="el-icon-share"></i></li>
                <li>&lt; &gt;</li>
                <li><i class="el-icon-download"></i></li>
                <ol>
                  <li><i class='el-icon-rank'></i></li>
                  <li><i class='el-icon-view'></i></li>
                </ol>
              </ul>
            </div>
            <div class="title-content">
                <ul></ul>
                <div class="right-content">
                    <textarea placeholder="请输入内容..."></textarea>
                </div>
            </div>
        </div>
          <p>请选择考试类型:</p>
          <template>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
          <p>请选择课程类型:</p>
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in classes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <p>请选择题目类型:</p>
            <template>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
            <div class="examAdd-title">
            <div class="title-header">
              <ul>
                <li><i class="el-icon-caret-left"></i></li>
                <li><i class="el-icon-caret-right"></i></li>
                <li>H1</li>
                <li>H2</li>
                <li>H3</li>
                <li>H4</li>
                <li><i class="el-icon-picture"></i></li>
                <li><i class="el-icon-share"></i></li>
                <li>&lt; &gt;</li>
                <li><i class="el-icon-download"></i></li>
                <ol>
                  <li><i class='el-icon-rank'></i></li>
                  <li><i class='el-icon-view'></i></li>
                </ol>
              </ul>
            </div>
            <div class="title-content">
                <ul></ul>
                <div class="right-content">
                    <textarea placeholder="请输入内容..."></textarea>
                </div>
            </div>
        </div>
      </div>
      <el-button type="primary">提交</el-button>
     </div>
   </div>  
</template>
<script>
export default {
  props: {

  },
  data() {
    return {
       options: [{
          value: '选项1',
          label: '周考一'
        }, {
          value: '选项2',
          label: '周考二'
        }, {
          value: '选项3',
          label: '周考三'
        }, {
          value: '选项4',
          label: '月考'
        }],
       classes: [{
          value: '选项1',
          label: 'JS上'
        }, {
          value: '选项2',
          label: 'JS下'
        }, {
          value: '选项3',
          label: '模块化开发'
        }, {
          value: '选项4',
          label: '移动端开发'
        }, {
          value: '选项5',
          label: 'node基础'
        }, {
          value: '选项6',
          label: '组件化开发(vue)'
        }, {
          value: '选项7',
          label: '渐进式开发(react)'
        }, {
          value: '选项8',
          label: '项目实战'
        }],
        types:[{
          value:'选项1',
          label:'简答题'
        },{
          value:'选项2',
          label:'代码阅读器'
        },{
          value:'选项3',
          label:'代码补全'
        },{
          value:'选项4',
          label:'修改bug'
        },{
          value:'选项5',
          label:'手写代码'
        }],
      input:'',
      value:''
    }
  }
}
</script>
<style scoped lang="scss">
    @import '../examAdd.scss'
</style>
