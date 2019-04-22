import { asyncRoutes, constantRoutes } from '@/router'
import { access } from 'fs';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission(view_ids, route) {
  if (route.meta && route.meta.view_id) {
    return view_ids.some(item => item === route.meta.view_id)
  } else {
    return true
  }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, view_ids) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(view_ids, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, view_ids)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
<<<<<<< HEAD
  //roles就是全部对应的数据
  generateRoutes({ commit }, roles) {
    //获取全部view_ids
    let view_ids = roles.map(item=>item.view_id)
    //通过递归，得到用户可以访问的路由
    let accessedRoutes = filterAsyncRoutes(asyncRoutes, view_ids);
    //console.log(accessedRoutes)
=======
  //生成侧边路由
  generateRoutes({ commit },viewAuthority) {
    // 获取用户所拥有的view_ids
    let view_ids = viewAuthority.map(item=>item.view_id);

    //在所有的路由里过滤一遍，获取能访问的路由
    let accessedRoutes = filterAsyncRoutes(asyncRoutes,view_ids);
    //console.log('access.....',accessedRoutes)
    
    //更新路由
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
    commit('SET_ROUTES',accessedRoutes)
    return accessedRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
