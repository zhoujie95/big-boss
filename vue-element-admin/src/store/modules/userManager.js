import axios from 'axios';
// import {shenfen} from '@/api/userManager.js';
import { getToken} from '@/utils/auth';

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    shenfen: [],
    view:[],
    apis:[],
    user:[]
}
const mutations = {
    identity(state,data){
        if(data.code==1){
        state.shenfen= data.data
        }
    },
    views(state,data){
        if(data.code==1){
            state.view= data.data
         }
    },
    api(state,data){
        if(data.code==1){
            state.apis= data.data
            
         }
    },
    user(state,data){
        if(data.code==1){
            state.user= data.data
            // console.log(state.user);
         }
    }
}
const actions = {
    //身份权限
    identity(context) {
        axios.get('/api/user/identity',{ headers:{authorization:state.token } }).then((res)=>{
            context.commit('identity',res.data);
            // console.log(res.data.data);
        }) 
      },
      //视图权限
      views(context) {
        axios.get('/api/user/view_authority',{ headers:{authorization:state.token } }).then((res)=>{
            context.commit('views',res.data); 
        }) 
      },
      //api权限
      api(context) {
        axios.get('/api/user/api_authority',{ headers:{authorization:state.token } }).then((res)=>{
            context.commit('api',res.data);
        }) 
      },
      //用户展示
      user(context) {
        axios.get('/api/user/user',{ headers:{authorization:state.token } }).then((res)=>{
            context.commit('user',res.data);
        }) 
      },
     

}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}