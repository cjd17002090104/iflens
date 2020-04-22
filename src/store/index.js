import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: "",
        isLogin: localStorage.user ? 1 : 0,
        products: null,
        //品牌筛选
        currentBrand: null,
        //类型筛选
        currentProduct: null,
        searchProducts: null,

    },
    mutations: {
        //存入uvex
        setUser(state) {
            if (localStorage.user) {
                state.user = JSON.parse(localStorage.user)
                state.isLogin = 1
            } else {
                return layer.msg('数据错误', { icon: 3 })
            }

        },
        setProducts(state, products) {
            state.products = products
        },
        logout(state) {
            localStorage.removeItem('user');
            localStorage.removeItem('JWT_token');
            state.isLogin = 0;

        },
        setSearchProducts(state, products) {
            state.searchProducts = products;
        },
        tokenExpried() {
            this.commit("logout")
            router.push({ name: "login" });
        }

    },
    getters: {
        userData(state) {
            if (localStorage.getItem("user")) {
                state.user = JSON.parse(localStorage.getItem("user"));
                state.isLogin = 1
            }
            return state;
        },
        products(state) {
            return state.products
        },
        selectProducts(state) {
            let brandProducts = state.products.map(product => {
                if ((state.currentBrand == null ? true : state.currentBrand == product.productable.brand) && (state.currentProduct == null ? true : state.currentProduct == product.productable_type)) {
                    return product
                }
            })

            return brandProducts.filter(product => product != undefined);
        },
        searchProducts(state) {

            return state.searchProducts;
        }

    }
})