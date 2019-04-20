import axios from 'axios'
import { getToken} from '@/utils/auth'
const state={
    testlistdata:[],
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
    //1.获取所有考试类型/exam/exam/Type get
    gettestType(state,data){
        // console.log(data,"考试类型");
        if(data.code === 1){
            state.testType = data.data
        }
    },
    //2.获取所有课程
    gettestClass(state,data){
        // console.log(data,"所有课程");
        if(data.code === 1){
            state.testClass = data.data
        }
    },
    //3.获取试卷列表
    gettestlist(state,data){
        if(data.code === 1){
            state.testlistdata = data.exam;
        }
    },
    //4.创建试卷
    addtest(state,data){
        if(data.code === 1){//创建试题成功 保存数据试题 和试题id
            state.addflag === true;
            Object.assign(state,data.data);
            if(data.data.questions){
                state.questions = data.data.questions;
                state.exam_exam_id = data.data.exam_exam_id;
                // console.log(state.questions,"随机有题")
                let ids = data.data.questions.map(item=>{
                    return item.questions_id
                });
                state.question_ids= JSON.stringify(ids);
            }
            // console.log(data,"添加成功");
        }else{//创建失败
            state.addflag === false;
        }
    },
    //5.更新试卷
    updatetest(state,data){
        if(data.code === 1){
            console.log(data)
        }
    },
    //5.1 删除试卷
    deletetest(state,payload){
        if(payload.data.code ===1){
            state.questions.splice(payload.index,1);
            // console.log("删除成功")
        }
    },
    //6.获取详情
    getdetail(state,data){
        if(data.code ===1){
            state.testdetail = data.data.questions;
        }
    }
}
const actions = {
    //1.获取所有考试类型/exam/exam/Type get
    gettestType(context){
        axios.get("/api/exam/examType",{
            headers:{authorization:getToken()}
        }).then(res=>{
            context.commit("gettestType",res.data)
        })
    },
    //2.获取所有课程
    gettestClass(context){
       axios.get("/api/exam/subject",{
            headers:{authorization:getToken()}
       }).then(res=>{
           context.commit("gettestClass",res.data)
       })

    },
    //3.获取试卷列表
    gettestlist(context,payload){
        axios.get("/api/exam/exam",{
            headers:{authorization:getToken()}
        }).then(res=>{
            context.commit("gettestlist",res.data);
        });
    },
    //4.创建试卷
    addtest(context,payload){
        // Object.assign(this.state,payload);
        axios.post("/api/exam/exam",payload,{ headers:{authorization:getToken()}}).then(res=>{
            context.commit("addtest",res.data);
        })
    },
     //5.更新试卷
     updatetest(context,payload){
         ///exam/exam/w5tcy-g2dts  question_ids
         axios.put(`/api/exam/exam/${state.exam_exam_id}`,{question_ids:state. question_ids},{ headers:{authorization:getToken()}}).then((res) =>{
            context.commit("updatetest",res)
        })   
    },
    //5-1.删除试卷某题
    deletetest(context,payload){
        axios.delete(`/api/exam/exam/${state.exam_exam_id}`,{ headers:{authorization:getToken()}}).then(res=>{
            context.commit("deletetest",{data:res.data,index:payload})
        });
    },
    //6.获取详情/exam/exam/w5tcy-g2dts
    getdetail(context,payload){
        axios.get(`/api/exam/exam/${payload}`,{ headers:{authorization:getToken()}}).then(res=>{
            // console.log(res,"详情");
            context.commit("getdetail",res.data)
        });
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}