import Vue from 'vue'
import Router from 'vue-router'
import Users from '../components/Users'
import Test from '../components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Users,
      name: 'ha ha'
    },
    {
      path: '/test',
      component: Test,
      name: 'lol zeg'
    }
  ]
})
