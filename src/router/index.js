import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Recommend from '@/components/home/Recommend'
import FreeCls from '@/components/home/FreeCls'
import Money from '@/components/home/Money'
import Case from '@/components/home/Case'
import Note from '@/components/note/Note'
import MyCls from '@/components/mycls/MyCls'
import Account from '@/components/account/Account'

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
      component: Home,
      children: [
        {
          path: 'Recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: 'FreeCls',
          name: 'FreeCls',
          component: FreeCls
        },
        {
          path: 'Money',
          name: 'Money',
          component: Money
        },
        {
          path: 'Case',
          name: 'Case',
          component: Case
        }
      ]
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/Note',
      name: 'Note',
      component: Note
    },
    {
      path: '/MyCls',
      name: 'MyCls',
      component: MyCls
    }
  ]
})
