<template>
    <div class="edittest">
        <div class="delmask" v-if="flag">
            <div class="deldialog">
                <p>确认提示</p>
                <p>是否删除该题目?</p>
                <p>
                <p>  
                    <span @click="flag===false" class="delcancel">取消</span>
                    <span @click="confirmdel" class="confirmbtn">确认</span>
                </p>
            </div>
        </div>
        <p class="createedit">创建试卷</p>
        <div class="createboard">
            <p class="addnewqs">添加新题</p>
            <div class="edittitle">
                <p>{{title}}</p>
                <div class="editboard">
                    <div class="eachqs" v-for="(item,index) in questions" :key="index">
                        <div class="eachtop">
                            <p>{{index+1}}.&nbsp;&nbsp;&nbsp;{{item.title}}</p>
                            <p class="edit-delete" @click="edit_del_btn(index)">删除</p>
                        </div>
                        <div class="eachdescribe">
                            <p>{{item.questions_stem}}</p>
                            <p>答案:&nbsp;{{item.questions_answer}}</p>
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
export default {
  data() {
    return {
      flag: false
    };
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
    confirmdel(index) {
      this.$store.dispatch("testmanager/deletetest", index);
      this.flag = false;
    },
    edit_del_btn() {
      this.flag = true;
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
  .delmask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    padding-top: 100px;
    justify-content: center;
    .deldialog {
      width: 400px;
      height: 200px;
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

          .delcancel{
              width: 70px;
              height:40px;
              line-height: 40px;
              text-align: center;
              border:1px solid #ccc;
              margin-right:20px;
              border-radius:5px;
          }
          .confirmbtn{
               width: 70px;
               height:40px;
               line-height: 40px;
              text-align: center;
               border:1px solid #ccc;
               background:blue;
               color:white;
              border-radius:5px;
               
        }
      }
    }
  }
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
        .edit-delete {
          color: blue;
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