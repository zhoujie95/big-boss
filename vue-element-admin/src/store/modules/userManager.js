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
    list: [],
    viewlist: [],
    msg:""
}
const mutations = {
    identity(state, data) {
        if (data.code == 1) {
            state.shenfen = data.data
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
        }
    },
    user(state, data) {
        if (data.code == 1) {
            state.user = data.data
        }
    },
    identityapi(state, data) {
        if (data.code == 1) {
            state.list = data.data
        }
    },
    identityview(state, data) {
        if (data.code == 1) {
            state.viewlist = data.data
        }
    },
    adduser(state, data){
            state.msg = data.msg
    },
    addshenfen(state,data){
        state.msg = data.msg
    },
    addapi(state,data){
        state.msg = data.msg
    },
    addview(state,data){
        state.msg = data.msg
    },
    apishenfen(state,data){
        state.msg = data.msg
    },
    shenfenview(state,data){
        state.msg = data.msg
    },
    newuser(state,data){
        state.msg = data.msg
    }
}
const actions = {
    //身份权限
    identity(context) {
        axios.get('/api/user/identity', { headers: { authorization: state.token } }).then((res) => {
            context.commit('identity', res.data);

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
        })
    },
    //身份和视图权限关系
    identityview(context) {
        axios.get('/api/user/identity_view_authority_relation', { headers: { authorization: state.token } }).then((res) => {
            context.commit('identityview', res.data);
        })
    },
    //添加用户
    adduser(context,payload) {
        axios.post("/api/user", payload, { headers: { authorization: getToken() } }).then(res => {
          
            context.commit('adduser',res.data);
        })
    },
    //添加身份
    addshenfen(context, payload) {
        axios.post("/api/user/identity/edit", payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('addshenfen',res.data);
        })
    },
    //添加api
    addapi(context, payload) {
        // console.log(payload);
        axios.get("/api/user/authorityApi/edit"+payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('addapi',res.data);
            // console.log(res);
        })
    },
    //添加视图借口
    addview(context, payload) {
        console.log(payload);
        axios.get("/api/user/authorityView/edit"+payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('addview',res.data);
            // console.log(res);
        })
    },
    //设置api身份接口
    apishenfen(context, payload) {
        console.log(payload)
        axios.post("/api/user/setIdentityApi", payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('apishenfen',res.data);
            console.log(res);
        })
    },
    //给身份设置视图
    shenfenview(context, payload) {
        axios.post("/api/user/setIdentityView", payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('shenfenview',res.data);
        })
    },
    //更新用户
    newuser(context, payload) {
        console.log(payload);
        axios.put("/user/user", payload, { headers: { authorization: getToken() } }).then(res => {
            context.commit('newuser',res.data);
        })
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}