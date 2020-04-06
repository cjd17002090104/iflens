import headTop from './headTop.vue';
import pageNav from './pageNav.vue';
import searchTop from './searchTop.vue'

//全局注册的组件 
function plugins(Vue) {
    Vue.component("headTop", headTop)
    Vue.component("pageNav", pageNav)
    Vue.component("searchTop", searchTop)
}


export default plugins