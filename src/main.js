// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import api from './api/api'
import http from './api/http'
import plugins from '@/components/registerConfig'
import '@/assets/css/cssConfig.js'
import '@/assets/js/star-rating.min.js'
import VueCropper from 'vue-cropper'
import axios from 'axios'
import layer from 'layui-layer'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})


Vue.use(layer)
Vue.use(VueCropper)
Vue.prototype.$axios = axios
Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.prototype.$url = 'http://iflens.com'

Vue.use(plugins);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
