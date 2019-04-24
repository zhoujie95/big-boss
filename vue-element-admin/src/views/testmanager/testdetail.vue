<template>
    <div class="testdetail">
        <p class="detailtop">试卷详情</p>
        <div class="detailcontent">
            <div class="eachdetail" v-for="(item,index) in testdetail" :key="index">
                <p>{{index+1}}.&nbsp;&nbsp;&nbsp;{{item.title}}</p>
                <markdown-editor v-model="item.questions_stem" />
                <span>答案</span>
                <markdown-editor v-model="item.questions_answer" />
                <!-- <p>{{item.questions_stem}}</p>
                <p>答案:&nbsp;{{item.questions_answer}}</p> -->
                <p><b>类型:&nbsp;&nbsp;</b>{{item.questions_type_text}}
                <b>来源:&nbsp;&nbsp;</b>
                {{item.subject_text}}</p>
            </div>
        </div>
    </div>
</template>
<script>

import {mapState} from "vuex";
import MarkdownEditor from "@/components/MarkdownEditor";
export default {
    computed:{
         ...mapState("testmanager",{
            testdetail:state=>state.testdetail
        })
    },
    components:{
         MarkdownEditor
    }
}
</script>
<style  lang="scss">

    .testdetail{
        width: 100%;
        margin-top:64px;
        background:#f0f2f5;
        padding:20px;
        box-sizing: border-box;
        .detailtop{
            width: 100%;
            height:100px;
            line-height: 100px;
            font-size:24px;
        }
        .detailcontent{
            width: 100%;
            border-radius:10px;
            background:white;
            padding:20px;
            .eachdetail{
                width: 100%;
                box-sizing: border-box;
                border:1px solid #ccc;
                margin-bottom: 30px;
                padding:30px;
                p{
                    width: 100%;
                    padding:20px;
                }
            }
        }
    }
</style>