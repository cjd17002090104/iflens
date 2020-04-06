import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: "",
        isLogin: 0,

    },
    mutations: {
        //存入uvex
        setUser(state, url) {
            if (localStorage.user) {
                state.user = JSON.parse(localStorage.user)
                state.isLogin = 1
            } else {
                return layer.msg('数据错误', { icon: 3 })
            }

        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLogin = 0
        }
    },
    getters: {
        userData(state) {
            if (localStorage.getItem("user")) {
                state.user = JSON.parse(localStorage.getItem("user"));
                state.isLogin = 1
            }
            return state;
        }
    }
})