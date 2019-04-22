{/* <div class="eachboard">
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
</div>  */}