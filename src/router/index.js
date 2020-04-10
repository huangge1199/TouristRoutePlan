import Vue from 'vue'
import Router from 'vue-router'
import home from './home/index'

Vue.use(Router)

var routes = [{
  path: '/',
  name: 'index',
  redirect: '/home'
}]

home.forEach(item => {
  item.sub.forEach(sub => {
    routes.push({
      path: `/${sub.componentName}`,
      name: sub.name,
      component: () => import(`@/components/${sub.componentName}/index`)
    })
  })
})

export default new Router({
  routes: routes,
  mode: 'history',
  base: '/tourist-route-plan'
})
