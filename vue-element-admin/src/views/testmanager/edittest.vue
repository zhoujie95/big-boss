<template>
    <div class="edittest">
     
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>确认删除吗?</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false,confirmdel()">确 定</el-button>
        </span>
      </el-dialog>
        <p class="createedit">创建试卷</p>
        <div class="createboard">
            <p class="addnewqs">添加新题</p>
            <div class="edittitle">
                <p>{{title}}</p>
                <div class="editboard">
                    <div class="eachqs" v-for="(item,index) in questions" :key="index">
                        <div class="eachtop">
                            <p>{{index+1}}.&nbsp;&nbsp;&nbsp;{{item.title}}</p>
                            <el-button type="text" @click="dialogVisible = true,edit_del_btn(index)">删除</el-button>
                        </div>
                        <div class="eachdescribe">
                           <markdown-editor v-model="item.questions_stem" />
                           <span>答案</span>
                           <markdown-editor v-model="item.questions_answer" />
                            <!-- <p>{{item.questions_stem}}</p> -->
                            <!-- <p>答案:&nbsp;{{item.questions_answer}}</p> -->
                            <p><b>类型:&nbsp;&nbsp;</b>{{item.questions_type_text}}
                            <b>来源:&nbsp;&nbsp;</b>
                            {{item.subject_text}}</p>
                        </div>
                    </div>
                </div>
                <div class="editbtn" @click="updtatedtest">创建试卷</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import MarkdownEditor from "@/components/MarkdownEditor";
export default {
  data() {
    return {
      dialogVisible: false,
      index:""
     
    };
  },
  components:{
    MarkdownEditor
  },
  computed: {
    ...mapState("testmanager", {
      addflag: state => state.addflag,
      questions: state => state.questions,
      title: state => state.title
    })
  },
  methods: {
    updtatedtest() {
      this.$store.dispatch("testmanager/updatetest");
      this.$router.push({ path: "testlist" });
    },
    confirmdel() {
     let index = this.index;
      this.$store.dispatch("testmanager/deletetest",index);
    },
    edit_del_btn(index) {
      this.index = index;
    }
  }
};
</script>
<style lang="scss">
.edittest {
  width: 100%;
  margin-top: 64px;
  height: 800px;
  background: #f0f2f5;
  box-sizing: border-box;
  padding: 40px;
  overflow-y: auto;
  .createboard {
    width: 100%;
    // height: 500px;
    padding: 3%;
    background: white;
    .addnewqs {
      width: 150px;
      height: 40px;
      border: 1px solid #ccc;
      line-height: 40px;
      text-align: center;
    }
    .edittitle {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .editboard {
    width: 100%;
    border: 1px solid #ccc;
    .eachqs {
      width: 100%;
      padding: 3%;
      .eachtop {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        >p{
          line-height: 100px;
        }
      }
      .eachdescribe {
        width: 100%;
        background: #ccc;
      }
    }
  }
  .createedit {
    font-size: 24px;
  }
  .editbtn {
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: blue;
    color: white;
    margin-top: 20px;
    border-radius: 5%;
  }
}
</style>