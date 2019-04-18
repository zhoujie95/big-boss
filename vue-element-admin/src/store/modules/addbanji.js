import {getbanji} from '@/api/banji.js'

const state = {
    bandata:[]
}
const mutations = {
    upbandata(state,bandata){
        state.bandata = bandata
    }
}
const actions={
    async getbandata({commit}){
        let res = await getbanji()
        commit('upbandata',res.data)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}