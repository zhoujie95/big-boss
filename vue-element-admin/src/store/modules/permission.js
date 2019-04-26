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
  //roles就是全部对应的数据
  generateRoutes({ commit }, roles) {
    //获取全部view_ids
    let view_ids = roles.map(item=>item.view_id)
    //通过递归，得到用户可以访问的路由
    let accessedRoutes = filterAsyncRoutes(asyncRoutes, view_ids);
    //console.log(accessedRoutes)
    accessedRoutes=accessedRoutes.filter(item=>item.children&&item.children.length)
    //console.log(accessedRoutes)
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
