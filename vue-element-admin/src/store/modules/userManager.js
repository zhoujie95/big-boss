import axios from 'axios';
// import {shenfen} from '@/api/userManager.js';
import { getToken } from '@/utils/auth';

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    shenfen: [],
    view: [],
    apis: [],
    user: [],
    list:[],
    viewlist:[]
}
const mutations = {
    identity(state, data) {
        if (data.code == 1) {
            state.shenfen = data.data
            // console.log(state.shenfen);
        }
    },
    views(state, data) {
        if (data.code == 1) {
            state.view = data.data
            // console.log(state.view);
        }
    },
    api(state, data) {
        if (data.code == 1) {
            state.apis = data.data
            // console.log(state.apis);
        }
    },
    user(state, data) {
        if (data.code == 1) {
            state.user = data.data
            // console.log(state.user);
        }
    },
    identityapi(state, data) {
        if (data.code == 1) {
            state.list = data.data
            // console.log(state.list);
        }
    },
    identityview(state, data) {
        if (data.code == 1) {
            state.viewlist = data.data
        }
    },

}
const actions = {
    //身份权限
    identity(context) {
        axios.get('/api/user/identity', { headers: { authorization: state.token } }).then((res) => {
            context.commit('identity', res.data);
            // console.log(res.data.data);
        })
    },
    //视图权限
    views(context) {
        axios.get('/api/user/view_authority', { headers: { authorization: state.token } }).then((res) => {
            context.commit('views', res.data);
        })
    },
    //api权限
    api(context) {
        axios.get('/api/user/api_authority', { headers: { authorization: state.token } }).then((res) => {
            context.commit('api', res.data);
        })
    },
    //用户展示
    user(context) {
        axios.get('/api/user/user', { headers: { authorization: state.token } }).then((res) => {
            context.commit('user', res.data);
        })
    },
    //身份和api权限关系
    identityapi(context) {
        axios.get('/api/user/identity_api_authority_relation', { headers: { authorization: state.token } }).then((res) => {
            context.commit('identityapi', res.data);
            // console.log(res)
        })
    },
    //身份和视图权限关系
    identityview(context) {
        axios.get('/api/user/identity_view_authority_relation', { headers: { authorization: state.token } }).then((res) => {
            context.commit('identityview', res.data);
            // console.log(res)
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}