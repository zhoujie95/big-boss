import axios from 'axios'
import { getToken} from '@/utils/auth'
const state={
    testlistdata:[],
    addflag:false,
    testType:[],
    testClass:[]
}
const mutations = {
    //获取所有考试类型/exam/exam/Type get
    gettestType(state,data){
        console.log(data,"考试类型");
        if(data.code === 1){
            state.testType = data.data
        }
        
    },
    //获取所有课程
    gettestClass(state,data){
        console.log(data,"所有课程");
        if(data.code === 1){
            state.testClass = data.data
        }
    },
    //获取试卷列表
    gettestlist(state,data){
        if(data.code === 1){
            state.testlistdata = data.exam;
            console.log(data,"获取试卷列表");
        }
    },
    //编辑并创建试卷
    addtest(state,data){
        if(data.code === 1){//创建编辑成功 跳转到试卷列表
            state.addflag === true;
            console.log(data,"添加成功");
        }else{//创建失败
            state.addflag === false;
        }
    }
}
const actions = {
    //获取所有考试类型/exam/exam/Type get
    gettestType(context){
        axios.get("/api/exam/examType",{
            headers:{authorization:getToken()}
        }).then(res=>{
            context.commit("gettestType",res.data)
        })
    },
    //获取所有课程
    gettestClass(context){
       axios.get("/api/exam/subject",{
            headers:{authorization:getToken()}
       }).then(res=>{
           context.commit("gettestClass",res.data)
       })

    },
    //获取试卷列表
    gettestlist(context,payload){
        axios.get("/api/exam/exam",{
            headers:{authorization:getToken()}
        }).then(res=>{
            context.commit("gettestlist",res.data);
        });
    },
    //创建试卷
    addtest(context,payload){
        console.log(payload)
        axios.post("/api/exam/exam",{
            subject_id:payload.value1,
            exam_id:payload.value2,
            title:payload.testname,
            number:payload.num8,
            start_time:payload.starttime*1,
            end_time:payload.endtime*1
        },{ headers:{authorization:getToken()}}).then(res=>{
            // console.log(res);
            context.commit("addtest",res.data);
        })
        
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}