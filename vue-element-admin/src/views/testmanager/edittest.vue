<template>
    <div class="edittest">
        <p class="createedit">创建试卷</p>
        <div class="createboard">
            <p class="addnewqs">添加新题</p>
            <div class="edittitle">
                <p>{{testname}}</p>
                <div class="editboard">
                    <div class="eachqs">
                        <div class="eachtop">
                            <p>题目</p>
                            <p>删除</p>
                        </div>
                        <div class="eachdescribe">
                            <p>{{questions}}</p>
                        </div>
                    </div>
                </div>
                <div class="editbtn" @click="updtatedtest">创建试卷</div>
            </div>
        </div>
    </div>
</template>
<script>

import {mapState} from "vuex";

export default {

    computed:{
        ...mapState("testmanager",{
            addflag:state=>state.addflag,
            questions:state=>state.questions,
            question_ids:state=>state.question_ids,
            testname:state=>state.testname
        })
    },
    methods:{
         updtatedtest(){
            this.$store.dispatch("testmanager/updatetest",question_ids);
            this.$router.push({path:"testlist"});
        }
    }
}
</script>
<style lang="scss">
    .edittest{
        width: 100%;
        margin-top:64px;
        height: 800px;
        background: #f0f2f5;
        box-sizing: border-box;
        padding:40px;
        overflow-y: auto;
        .createboard{
            width: 100%;
            height:500px;
            padding:3%;
            background:white;
            .addnewqs{
                width: 150px;
                height: 40px;
                border:1px solid #ccc;
                line-height: 40px;
                text-align: center;
            }
            .edittitle{
                width: 100%;
                display:flex;
                flex-direction:column;
                align-items: center;
                justify-content: center;
            }
        }
        .editboard{
            width: 100%;
            border:1px solid #ccc;
             .eachqs{
                 width: 100%;
                 padding:3%;
                 .eachtop{
                     width: 100%;
                     height:100px;
                     display:flex;
                }
                .eachdescribe{
                    width: 100%;
                    background:#ccc;
                }
             }
        }
        .createedit{
           font-size:24px;
          
        }
        .editbtn{
            width: 200px;
            height:40px;
            line-height: 40px;
            text-align:center;
            background:blue;
            color:white;
            margin-top:20px;
            border-radius: 5%;
        }
    }
</style>