<template>
   <div class="addtest">
       <div class="addtest-wrap">
           <div class="addtest-title">添加考试</div>
           <div class="addtestboard">
               <div class="eachboard">
                   <p><span>*</span>试卷名称</p>
                   <el-input class="inpname"></el-input>
               </div>
               <div class="eachboard">
                   <p><span>*</span>选择考试类型:</p>
                    <el-select v-model="value1" placeholder="">
                        <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
               </div>
                <div class="eachboard">
                   <p><span>*</span>选择课程:</p>
                    <el-select  placeholder=""  v-model="value2">
                        <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="eachboard">
                   <p><span>*</span>设置题量:</p>
                    <el-input-number class=".inpsize"  v-model="num8" value="" controls-position="right" @change="handleChange" :min="3" :max="10"></el-input-number>
                </div>
                <div class="eachboard">
                   <p><span>*</span>考试时间:</p>
                    <el-date-picker class="inptime"
                        type="datetime"
                        placeholder="开始时间"
                        suffix-icon="el-icon-date"
                        default-time="12:00:00">
                    </el-date-picker>
                    <span>-</span>
                    <el-date-picker class="inptime"
                        type="datetime"
                        placeholder="结束时间"
                        suffix-icon="el-icon-date"
                        default-time="12:00:00">
                    </el-date-picker>
               </div>
                <div class="eachboard">
                   <p class="button">创建试卷</p>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
    data() {
      return {
        num8: "",
        options1: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2: ''
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
}
</script>

<style lang="scss">
    .addtest{
        width: 100%;
        height:900px;
        background:#f0f2f5;
        box-sizing:border-box;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
        .addtest-wrap{
            width:90%;
            height:100%;
            display:flex;
            flex-direction: column;
            box-sizing:border-box;
            .addtest-title{
                width: 100%;
                height:100px;
                display:flex;
                align-items: center;
                font-size:24px;
            }
            .addtestboard{
                width: 100%;
                height:80%;
                padding-left:20px;
                background:white;
                display:flex;
                flex-direction: column;
                border-radius:10px;
                .eachboard{
                    flex:1;
                    p{
                        font-size:20px;
                    }
                    p>span{
                        color:red;
                    }
                }
            }
            
        }
    }
    // input框
    .inpname{
        width: 300px;
    }
    .inpsize{
        width: 100px;
    }
    .inptime{
        width: 300px;
    }
    .button{
        width: 150px;
        height:50px;
        background:blue;
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        border-radius:5%;
    }
</style>
