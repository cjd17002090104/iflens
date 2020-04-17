import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
import shop from '@/views/shop'
import productInfo from '@/views/shopInfo'
import user from '@/views/user'
import orderList from '@/views/orderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        login: false
      },
      component: index
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        login: false
      },
      component: login
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        login: false
      },
      component: shop
    },
    {
      path: '/shop/:productId',
      name: 'productInfo',
      meta: {
        login: true
      },
      component: productInfo,

    },
    {
      path: '/user',
      name: 'user',
      meta: {
        login: true
      },
      component: user
    },

  ]
})
