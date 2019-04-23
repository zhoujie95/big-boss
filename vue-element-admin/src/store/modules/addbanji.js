import {getbanji,getjiaoshis,getkechengs,addbanji,delbanjis,upbanji} from '@/api/banji.js'

const state = {
    bandata:[],
    jiaodata:[],
    kedata:[],
    
}
const mutations = {
    upbandata(state,bandata){
        state.bandata = bandata
    },
    upjiaodata(state,jiaodata){
        state.jiaodata = jiaodata
    },
    upkecheng(state,kedata){
        state.kedata = kedata
    }
}
const actions={
    //获取班级
    async getbandata({commit}){
        let res = await getbanji()
        commit('upbandata',res.data)
    },
    //获取教室
    async getjiaoshi({commit}){
        let jsdata = await getjiaoshis()
        commit('upjiaodata',jsdata.data)
    },
    //获取全部课程
    async getkecheng({commit}){
        let kcdata = await getkechengs()
        commit('upkecheng',kcdata.data)
    },
    //添加班级
    async addbanji({commit},payload){
        let addbj = await addbanji(payload)
        //console.log(addbj)
    },
    //删除班级
    async delbanji({commit},payload){
        let delbj = await delbanjis(payload)
        console.log(delbj)
    },
    //编辑班级
    async upbanji({commit},payload){
        let upbj = await upbanji(payload)
        console.log(upbj)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}