import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import login from '@/views/login'
import shop from '@/views/shop'
import shopInfo from '@/views/shopInfo'
import user from '@/views/user'
import orderList from '@/views/orderList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/shop/:shopId',
      name: 'shopInfo',
      component: shopInfo,
      beforeEnter: (to, from, next) => {
        // alert(to.params.shopId)
        console.log(from.path)
        next()
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
  ]
})
