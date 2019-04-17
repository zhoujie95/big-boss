<template>
  <div class="box">
    <p class="head">添加用户</p>
    <div class="wrap">
      <div>
        <dl>
          <dt>
            <span v-for="(val,key) in title" :key="key" @click="titleclick(key)" :id="index==key?'active':'null'">{{val}}</span>
          </dt>
          <dd>
            <el-select v-model="value" placeholder="请选择身份id" class="sele">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <input type="text" placeholder="请添加用户名">
            <input type="text" placeholder="请输入密码">
            <el-select v-model="value2" placeholder="请选择身份id" class="sele" :style="index==0?'display:none':'display:block'">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加身份</span>
          </dt>
          <dd>
            <input type="text" placeholder="请输入身份名称">
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加api接口权限</span>
          </dt>
          <dd>
            <input type="text" placeholder="请输入api接口权限名称">
            <input type="text" placeholder="请输入api接口权限url">
            <input type="text" placeholder="请输入api接口权限方法">
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">添加视图接口权限</span>
          </dt>
          <dd>
            <el-select v-model="value3" placeholder="请选择已有视图" class="sele">
              <el-option
                v-for="item in view"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">给身份设置api接口权限</span>
          </dt>
          <dd>
            <el-select v-model="value4" placeholder="请选择身份id" class="sele">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="value7" placeholder="请选择api接口权限" class="sele">
              <el-option
                v-for="item in api"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>
            <span id="active">给身份设置视图权限</span>
          </dt>
          <dd>
            <el-select v-model="value5" placeholder="请选择身份id" class="sele">
              <el-option
                v-for="item in identity"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="value6" placeholder="请选择视图权限id" class="sele">
              <el-option
                v-for="item in view"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <p>
              <button>确定</button>
              <button>重置</button>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      identity: [
        {
          value: "选项1",
          label: "管理者"
        },
        {
          value: "选项2",
          label: "浏览者"
        },
        {
          value: "选项3",
          label: "出题者"
        }
      ],
      view: [
        {
          value: "选项1",
          label: "登录"
        },
        {
          value: "选项2",
          label: "主界面"
        },
        {
          value: "选项3",
          label: "添加试题"
        },
        {
          value: "选项4",
          label: "试题界面"
        },
        {
          value: "选项5",
          label: "查看试题"
        },
        {
          value: "选项6",
          label: "编辑试题"
        },
        {
          value: "选项7",
          label: "试题详情"
        },
        {
          value: "选项8",
          label: "添加用户"
        },
        {
          value: "选项9",
          label: "角色管理"
        },
        {
          value: "选项10",
          label: "用户展示"
        },
        {
          value: "选项11",
          label: "添加考试"
        },
        {
          value: "选项12",
          label: "班级管理"
        },
        {
          value: "选项13",
          label: "教室管理"
        },
        {
          value: "选项14",
          label: "学生管理"
        },
        {
          value: "选项15",
          label: "判卷列表"
        },
        {
          value: "选项16",
          label: "创建试卷"
        },
        {
          value: "选项17",
          label: "试卷详情"
        },
        {
          value: "选项18",
          label: "特批班级"
        },
        {
          value: "选项19",
          label: "批卷详情"
        },
        {
          value: "选项20",
          label: "阅卷"
        }
      ],
      api: [
        {
          value: "选项1",
          label: "获取所有考试类型"
        },
        {
          value: "选项2",
          label: "获取所有课程"
        },
        {
          value: "选项3",
          label: "删除指定的试题类型"
        },
        {
          value: "选项4",
          label: "添加试题类型"
        },
        {
          value: "选项5",
          label: "获取所有的试题类型"
        },
        {
          value: "选项6",
          label: "添加试题接口"
        },
        {
          value: "选项7",
          label: "获取所有试题"
        },
        {
          value: "选项8",
          label: "展示用户数据"
        },
        {
          value: "选项9",
          label: "展示api接口权限数据"
        },
        {
          value: "选项10",
          label: "展示身份数据"
        },
        {
          value: "选项11",
          label: "展示身份和api权限关系"
        },
        {
          value: "选项12",
          label: "添加用户"
        },
        {
          value: "选项13",
          label: "添加视图权限"
        },
        {
          value: "选项14",
          label: "添加身份"
        },
        {
          value: "选项15",
          label: "添加api接口权限"
        },
        {
          value: "选项16",
          label: "给身份设定api接口权限"
        },
        {
          value: "选项17",
          label: "更新用户信息(用户名，用户密码，用户身份)"
        },
        {
          value: "选项18",
          label: "登录接口"
        },
        {
          value: "选项19",
          label: "获取当前用户信息"
        },
        {
          value: "选项20",
          label: "获取视图权限数据"
        },
        {
          value: "选项21",
          label: "给身份设定视图权限"
        },
        {
          value: "选项22",
          label: "展示身份和视图权限关系"
        },
        {
          value: "选项23",
          label: "根据用户id,返回该用户的视图"
        },
        {
          value: "选项24",
          label: "按条件获取用户数据"
        },
        {
          value: "选项25",
          label: "更新试题"
        },
        {
          value: "选项26",
          label: "添加学生"
        },
        {
          value: "选项27",
          label: "查看所有学生"
        },
        {
          value: "选项28",
          label: "查看所有教室"
        },
        {
          value: "选项29",
          label: "添加教室"
        },
        {
          value: "选项30",
          label: "查看所有班级"
        },
        {
          value: "选项31",
          label: "添加班级"
        },
        {
          value: "选项32",
          label: "更新班级"
        },
        {
          value: "选项33",
          label: "更新教室"
        },
        {
          value: "选项34",
          label: "获取学生试卷列表"
        }
      ],
      value: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      title:["添加用户","更新用户"],
      index:0
    };
  },
  methods:{
    titleclick(index){
      this.index=index;
    }
  }
};
</script>
<style scoped>
 *{margin:0;padding:0;}
.box {
  padding-left: 20px;
  background: #f0f2f5;
  margin-top:70px;
  width: 100%;
  cursor:pointer;
}
.head {
  font-size: 22px;
  line-height: 40px;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
}
.wrap div {
  border: 1px solid #eee;
  width: 33.3%;
  /* height: 250px; */
  border-radius: 5px;
  
}
.wrap div dl {
  margin-left: 10px;
  margin-top: 20px;
}
.wrap div span {
  width: 160px;
  height: 30px;
  border: 1px solid #d9d9d9;
  text-align: center;
  font-size: 14px;
  display: inline-block;
  background: #fff;
  line-height: 25px;
}
.wrap div dl input {
  display: block;
  margin-top: 20px;
  width: 100%;
  height: 32px;
  border: 1px solid #d9d9d9;
  font-size: 14px;
 
}
.wrap div dl .sele {
  display: block;

  margin-top: 20px;
}
.wrap div dl button:nth-child(1) {
  width: 120px;
  height: 30px;
  color: #fff;
  background: #295eff;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

}
.wrap div dl button:nth-child(2) {
  width: 60px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 10px;
  margin-top: 20px;
}
#active {
  border: 1px solid #0139fd;
  color: #0139fd;
}
</style>


