<template>
  <div class="addtest">
    <div class="addtest-wrap">
      <div class="addtest-title">添加考试</div>
      <div class="addtestboard">
        <el-form style="margin:0" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="试题名称"  prop="title">
            <el-input v-model="ruleForm.title" class="testnameinp"></el-input>
          </el-form-item>
          <el-form-item label="选择考试类型" prop="exam_id">
            <el-select placeholder="" v-model="ruleForm.exam_id">
              <el-option
              v-for="item in testType"
              :key="item.exam_id"
              :label="item.exam_name"
              :value="item.exam_id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择考试课程" prop="subject_id">
            <el-select placeholder="" v-model="ruleForm.subject_id">
              <el-option
                v-for="item in testClass"
                :key="item.subject_id"
                :label="item.subject_text"
                :value="item.subject_id">
                </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="设置题量" prop="number">
            <el-input-number
              class=".inpsize"
              v-model="ruleForm.number"
              value=""
              controls-position="right"
              @change="handleChange"
              :min="3"
              :max="10">
            </el-input-number>
          </el-form-item>
          <el-form-item label="考试时间" required>
              <div class="testtime">
                 <el-form-item prop="start_time">
                <el-date-picker
                class="inptime"
                type="datetime"
                placeholder="开始时间"
                suffix-icon="el-icon-date"
                default-time="12:00:00"
                v-model="ruleForm.start_time"
              ></el-date-picker>
              </el-form-item>
              <span>-</span>
              <el-form-item prop="start_time">
                <el-date-picker
                class="inptime"
                type="datetime"
                placeholder="结束时间"
                suffix-icon="el-icon-date"
                default-time="12:00:00"
                v-model="ruleForm.end_time"
                ></el-date-picker>
              </el-form-item>
              </div>
          </el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">创建试卷</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
          title: '',
          exam_id: '',
          subject_id: "",
          number:"",
          start_time: "",
          end_time: "",
        },
        rules: {
          title: [
            { required: true, message: '请输入考试名称', trigger: 'blur' }
          ],
          exam_id: [
            { required: true, message: '请选择考试类型', trigger: 'change' }
          ],
          subject_id: [
           { required: true, message: '请选择考试课程', trigger: 'change' }
          ],
          number:[
            { required: true, message: '请选择题量', trigger: 'change'}
          ],
          start_time: [
            { type: 'date', required: true, message: '请选择考试开始时间', trigger: 'change' }
          ],
          end_time: [
            { type: 'date', required: true, message: '请选择考试结束时间', trigger: 'change' }
          ]
        }
    };
  },
  computed: {
    ...mapState("testmanager", {
      testType: state => state.testType,
      testClass: state => state.testClass
    })
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            this.createtest();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
    },
    handleChange(value) {},
    createtest() {
      let { number, title, start_time, end_time, exam_id, subject_id } = this.ruleForm;
      if (number && title && start_time && end_time && exam_id && subject_id) {
        this.$store.dispatch("testmanager/addtest", {
          number,
          title,
          start_time: start_time * 1,
          end_time: end_time * 1,
          exam_id,
          subject_id
        });
        this.$router.push({ path: "edittest" });
      }
    },
    
    gettestType() {
      
      this.$store.dispatch("testmanager/gettestType");
    },
    
    gettestClass() {
      this.$store.dispatch("testmanager/gettestClass");
    }
  },
  mounted() {
    //获取考试类型
   this.gettestType();
   //获取所有课程
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
   .el-form-item__content { padding:-200px !important; }
   .testnameinp{width: 500px;}
   .el-form-item__label {
     float:none;
   }
   .testnameinp,.el-select,.testtime, .el-input-number {
     margin-left:-100px;
   }
   .testtime{display:flex;}
  .addtest-wrap {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    .addtest-title {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      font-size: 24px;
      margin-top: 50px;
    }
    .addtestboard {
      width: 100%;
      height: 60%;
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

