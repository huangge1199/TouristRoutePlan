import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

var routes = [{
  path: '/',
  name: 'index',
  redirect: '/home'
}]

export default new Router({
  routes: routes,
  mode: 'history',
  base: '/tourist-route-plan'
})
