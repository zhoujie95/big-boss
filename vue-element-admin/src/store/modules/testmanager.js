import axios from 'axios'
import moment from "moment"
import { getToken} from '@/utils/auth'

import {testtype,testclass,testlist,addtest,updatetest,deletetest,getdetail} from "@/api/apitestmanager"

const state={
    testlistdata:[],//获取列表
    addflag:false,
    testType:[],
    testClass:[],
    number:"",
    title:"",
    start_time:"",
    end_time:"",
    exam_id:"",
    subject_id:"",
    exam_exam_id:"",
    questions:[],//编辑时的原有的题目
    question_ids:"[]",
    testdetail:[]//详情页面的题

}
const mutations = {
    //1.获取所有考试类型
    GET_TYPE:(state,examtype)=>{
        state.testType = examtype.data
    },
    //2.获取所有课程
    gettestClass:(state,data)=>{
        state.testClass = data.data
    },
    //3.获取试卷列表 筛选 全选 进行中 已完成
    gettestlist:(state,data)=>{
        let {result,dis} = data;
        if(dis){
            if(dis.hasOwnProperty("subject_id")){
                console.log(dis)
                let brr = [],{subject_id,exam_id} = dis; 
                state.testlistdata.map(item=>{
                if(item.subject_id === subject_id && item.exam_id === exam_id){
                        brr.push(item)
                    }
                }
            );
                state.testlistdata = brr;
            }else{
                let crr = [],drr=[];
                result.exam.map(item=>{
                    let time = item.end_time;
                    item.end_time = moment(item.end_time*1).format('YYYY-MM-DD HH:mm:ss');
                    item.start_time = moment(item.start_time*1).format('YYYY-MM-DD HH:mm:ss');
                    time*1 > new Date()*1 ? crr.push(item) : drr.push(item); 
                });
                dis.index === 1 ? state.testlistdata = crr : state.testlistdata = drr;
            }
        }else{
            result.exam.map(item=>{
                item.end_time = moment(item.end_time*1).format('YYYY-MM-DD HH:mm:ss');
                item.start_time = moment(item.start_time*1).format('YYYY-MM-DD HH:mm:ss');
                return 
            })
            state.testlistdata = result.exam;
        }
    },
    //4.创建试卷
    addtest:(state,data)=>{
        if(data.code === 1){//创建试题成功 保存数据试题 和试题id
            state.addflag === true;
            Object.assign(state,data.data);
            if(data.data.questions){
                state.questions = data.data.questions;
                state.exam_exam_id = data.data.exam_exam_id;
                let ids = data.data.questions.map(item=>{
                    return item.questions_id
                });
                state.question_ids= JSON.stringify(ids);
            }
        }else{//创建失败
            state.addflag === false;
        }
    },
    //5.更新试卷
    updatetest:(state,data)=>{
        if(data.code === 1){
            console.log(data)
        }
    },
    //5.1 删除试卷
    deletetest:(state,payload)=>{
        if(payload.data.code ===1){
            state.questions.splice(payload.index,1);
        }
    },
    //6.获取详情
    getdetail:(state,data)=>{
        if(data.code ===1){
            state.testdetail = data.data.questions;
        }
    }
}
const actions = {
    async gettestType({commit}){
        let result = await testtype();
        commit("GET_TYPE",result)
    },
 
    //2.获取所有课程
    async gettestClass({commit}){
        let result = await testclass();
        commit("gettestClass",result)
    },
    //3.获取试卷列表
    async gettestlist({commit},dis){
        let result = await testlist();
        commit("gettestlist",{result,dis});
    },
    //4.创建试卷
    async  addtest({commit},payload){
        let result = await addtest(payload);
        commit("addtest",result)
    },
     //5.更新试卷
     async  updatetest({commit}){
        let result = await updatetest(state.exam_exam_id,{question_ids:state.question_ids});
        commit("updatetest",result)
    },
    
    //5-1.删除试卷某题
    async  deletetest({commit},payload){
        let result = await deletetest(state.exam_exam_id);
        commit("deletetest",{data:result,index:payload})
    },
    //6.获取详情/exam/exam/w5tcy-g2dts
    async  getdetail({commit},payload){
        let result = await getdetail(payload);
        commit("getdetail",result)
    }
   
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}