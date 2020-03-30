import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Parent1 from '@/components/Parent1'
import Parent2 from '@/components/Parent2'
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Parent1',
      name: 'Parent1',
      component: Parent1
    },
    {
      path: '/Parent2',
      name: 'Parent2',
      component: Parent2,
      children: [
        {
          path: 'Child1',
          name: 'Child1',
          component: Child1
        },
        {
          path: 'Child2',
          name: 'Child2',
          component: Child2
        }
      ]
    }
  ]
})
