<template>
  <div class="addtest">
    <div class="addtest-wrap">
      <div class="addtest-title">添加考试</div>
      <div class="addtestboard">
        <div class="eachboard">
          <p>
            <span>*</span>试卷名称
          </p>
          <el-input class="inpname" v-model="testname"></el-input>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>选择考试类型:
          </p>
          <el-select v-model="value1" placeholder="">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.xxid"
            ></el-option>
          </el-select>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>选择课程:
          </p>
          <el-select placeholder="" v-model="value2">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.lxid"
            ></el-option>
          </el-select>
        </div>
        <div class="eachboard">
          <p>
            <span>*</span>设置题量:
          </p>
          <el-input-number
            class=".inpsize"
            v-model="num8"
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
            v-model="starttime"
          ></el-date-picker>
          <span>-</span>
          <el-date-picker
            class="inptime"
            type="datetime"
            placeholder="结束时间"
            suffix-icon="el-icon-date"
            default-time="12:00:00"
            v-model="endtime"
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
export default {
  data() {
    return {
      num8: "",
      testname: "",
      starttime: "",
      endtime: "",
      value1: "",
      value2: "",
      options1: [
        {
          value: "选项1",
          label: "周考1",
          xxid: "xx1"
        },
        {
          value: "选项2",
          label: "周考2",
          xxid: "xx2"
        },
        {
          value: "选项3",
          label: "周考3",
          xxid: "xx3"
        },
        {
          value: "选项4",
          label: "月考",
          xxid: "xx4"
        }
      ],

      options2: [
        {
          value: "选项1",
          label: "js上",
          lxid: "lx1"
        },
        {
          value: "选项2",
          label: "js下",
          lxid: "lx2"
        },
        {
          value: "选项3",
          label: "模块化开发",
          lxid: "lx3"
        },
        {
          value: "选项4",
          label: "移动化开发",
          lxid: "lx4"
        },
        {
          value: "选项5",
          label: "渐进式开发",
          lxid: "lx5"
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
      // console.log(this.endtime)
    },
    createtest(){
     let { num8,
      testname,
      starttime,
      endtime,
      value1,
      value2} = this;
      // console.log(starttime*1,"a")
     num8 && testname && starttime && endtime && value1 && value2 && this.$router.push({name:"edittest",params:{num8,
      testname,
      starttime,
      endtime,
      value1,
      value2}})
   
   }
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

