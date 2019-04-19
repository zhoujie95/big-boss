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
    questions:[],
    question_ids:"[]"
}
const mutations = {
    //获取所有考试类型/exam/exam/Type get
    gettestType(state,data){
        // console.log(data,"考试类型");
        if(data.code === 1){
            state.testType = data.data
        }
    },
    //获取所有课程
    gettestClass(state,data){
        // console.log(data,"所有课程");
        if(data.code === 1){
            state.testClass = data.data
        }
    },
    //获取试卷列表
    gettestlist(state,data){
        if(data.code === 1){
            state.testlistdata = data.exam;
        }
    },
    //创建试卷
    addtest(state,data){
        if(data.code === 1){//创建试题成功 保存数据试题 和试题id
            state.addflag === true;
            if(data.data.questions){
                state.questions = data.data.questions;
                console.log(state.questions,"随机有题")
                let ids = data.data.questions.map(item=>{
                    return item.questions.id
                });
                state.question_ids= JSON.stringify(ids);
            }
            console.log(data,"添加成功");
        }else{//创建失败
            state.addflag === false;
        }
    },
    //5.更新试卷
    updatetest(state,data){
        console.log(data)
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
        Object.assign(this.state,payload);
        axios.post("/api/exam/exam",payload,{ headers:{authorization:getToken()}}).then(res=>{
            // console.log(res,"创建试卷是否成功的信息");
            
            context.commit("addtest",res.data);
        })
    },
     //5.更新试卷
     updatetest(context,payload){
         ///exam/exam/w5tcy-g2dts  question_ids
         axios.put('/api/exam/exam/w5tcy-g2dts',{question_ids:"[]"},{ headers:{authorization:getToken()}}).then((res) =>{
            context.commit("updatetest",res)
        })
            
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}