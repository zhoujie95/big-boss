<template>

  <div class="addtest">
    <div class="addtest-wrap">
      <div class="addtest-title">添加考试</div>
      <div class="addtestboard">
        <div class="eachboard">
          <p>
            <span>*</span>试卷名称
          </p>
          <el-input class="inpname" v-model="title"></el-input>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>选择考试类型:
          </p>
          <el-select v-model="exam_id" placeholder="">
            <el-option
              v-for="item in testType"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id"
            ></el-option>
          </el-select>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>选择课程:
          </p>
          <el-select placeholder="" v-model="subject_id">
            <el-option
              v-for="item in testClass"
              :key="item.subject_id"
              :label="item.subject_text"
              :value="item.subject_id"
            ></el-option>
          </el-select>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>设置题量:
          </p>
          <el-input-number
            class=".inpsize"
            v-model="number"
            value=""
            controls-position="right"
            @change="handleChange"
            :min="3"
            :max="10"
          ></el-input-number>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>考试时间:
          </p>
          <el-date-picker
            class="inptime"
            type="datetime"
            placeholder="开始时间"
            suffix-icon="el-icon-date"
            default-time="12:00:00"
            v-model="start_time"
          ></el-date-picker>
          <span>-</span>
          <el-date-picker
            class="inptime"
            type="datetime"
            placeholder="结束时间"
            suffix-icon="el-icon-date"
            default-time="12:00:00"
            v-model="end_time"
          ></el-date-picker>
        </div>
        <div class="eachboard">
          <p class="button" @click="createtest">创建试卷</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';
export default {
  data() {
    return {
      number: "",
      title: "",
      start_time: "",
      end_time: "",
      exam_id: "",
      subject_id: ""
    };
  },
  computed:{
    ...mapState("testmanager",{
      testType:state=>state.testType,
      testClass:state=>state.testClass
    })
  },
  methods: {
    handleChange(value) {
      // console.log(value);
      // console.log(this.testType,this.testClass)
    },
    createtest(){
      let { number,
      title,
      start_time,
      end_time,
      exam_id,
      subject_id} = this;
     console.log (number,
      title,
      start_time,
      end_time,
      exam_id,
      subject_id)
      if(number && title && start_time && end_time &&  exam_id && subject_id){
        this.$store.dispatch("testmanager/addtest", { number,
      title,
      start_time:start_time*1,
      end_time:end_time*1,
      exam_id,
      subject_id})
        this.$router.push({path:"edittest"})
      }
    },
    //获取考试类型
    gettestType(){
      this.$store.dispatch("testmanager/gettestType")
    },
    //获取所有课程
    gettestClass(){
      this.$store.dispatch("testmanager/gettestClass")
    }
  },
  mounted(){
    this.gettestType();
    this.gettestClass();
  }
};
</script>

<style lang="scss">
.addtest {
  width: 100%;
  height: 900px;
  background: #f0f2f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  .addtest-wrap {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .addtest-title {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      font-size: 24px;
    }
    .addtestboard {
      width: 100%;
      height: 80%;
      padding-left: 20px;
      background: white;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      .eachboard {
        flex: 1;
        p {
          font-size: 20px;
        }
        p > span {
          color: red;
        }
      }
    }
  }
}
// input框
.inpname {
  width: 300px;
}
.inpsize {
  width: 100px;
}
.inptime {
  width: 300px;
}
.button {
  width: 150px;
  height: 50px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5%;
}
</style>

