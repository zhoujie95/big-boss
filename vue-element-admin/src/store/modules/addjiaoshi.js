import {deljiaoshi,getjiaoshis,addjiaoshi} from '@/api/banji.js'

const state ={
    jiaodata:[]
}

const mutations = {
    upjiaodata(state,data){
        state.jiaodata = data
    }
}

const actions = {
    //获取全部教室信息
     async getjiaoshi({commit}){
        let res = await getjiaoshis()
        commit('upjiaodata',res.data)
    },
    //添加教室
    async addjiaoshi({commit},patydata){
      
        let res = await addjiaoshi({room_text:patydata})
    },
    //删除教室
    async deljiaoshi({commit},res){
        let str = await deljiaoshi(res)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}