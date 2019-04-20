import {getxueshengone,getxueshengtwo,delxuesheng} from '@/api/banji.js'

const state ={
    studentdata:[]
}

const mutations = {
    SET_XSDATA:(state,plandy)=>{
        state.studentdata = plandy
    },
    UP_XSDATA:(state,paylond)=>{
        state.studentdata = paylond
    }
}

const actions = {
    //获取全部数据
    async getstudent({commit}){
        let res = await getxueshengone()
        let resw = await getxueshengtwo()
        //console.log(res,resw)
        commit('SET_XSDATA',[...res.data,...resw.data])
    },
    //删除学生
    async delstudent({commit},parmse){
        let ind = await delxuesheng(parmse)
        console.log(ind)
    },
    //搜索学生
    soustudent({commit},paylond){
        //console.log(paylond)
        commit('UP_XSDATA',paylond)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}