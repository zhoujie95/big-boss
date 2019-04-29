import axios from 'axios';
import { identity, view_authority, api_authority, user, identity_api, identity_view, adduse, addshenfen, addapi, addview, apishenfen, shenfenview, newuser } from '@/api/apiuser';
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
    msg: ''
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
    adduser(state, data) {
        state.msg = data.msg
    },
    addshenfen(state, data) {
        state.msg = data.msg
    },
    addapi(state, data) {
        state.msg = data.msg
    },
    addview(state, data) {
        state.msg = data.msg
    },
    apishenfen(state, data) {
        state.msg = data.msg
    },
    shenfenview(state, data) {
        state.msg = data.msg
    },
    newuser(state, data) {
        state.msg = data.msg
    }
}
const actions = {
    //身份权限
    async identity({ commit }) {
        let result = await identity();
        commit('identity', result);
    },
    //视图权限
    async views({ commit }) {
        let result = await view_authority()
        commit('views', result);

    },
    //api权限
    async api({ commit }) {
        let result = await api_authority()
        commit('api', result);
    },
    // 用户展示
    async user({ commit }) {
        let result = await user()
        commit('user', result);

    },
    //身份和api权限关系
    async identityapi({ commit }) {
        let result = await identity_api()
        commit('identityapi', result);

    },
    //身份和视图权限关系
    async identityview({ commit }) {
        let result = await identity_view()
        commit('identityview', result);
    },




    // //添加用户
    async adduser({ commit }, payload) {
        let result = await adduser(payload);
        commit('adduser', result);
    },
    //添加身份
    async addshenfen({ commit }, payload) {
        let result = await addshenfen(payload);
        commit('addshenfen', result);

    },
    //添加api
    async addapi({ commit }, payload) {
        let result = await addapi(payload);
        commit('addapi', result);
    },
    //添加视图借口
    async addview({ commit }, payload) {
        let result = await addview(payload);
        commit('addview', result);
    },
    //设置api身份接口
    async apishenfen({ commit }, payload) {
        let result = await apishenfen(payload);
        commit('apishenfen', result);
    },
    //给身份设置视图
    async shenfenview({ commit }, payload) {
        let result = await shenfenview(payload);
        commit('shenfenview', result);

    },
    //更新用户
    async newuser({ commit }, payload) {
        let result = await newuser(payload);
        commit('newuser', result);
    },

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}