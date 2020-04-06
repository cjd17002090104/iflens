import axios from 'axios';
import layer from 'layui-layer'
import qs from 'qs'

import router from '../router';
let localhosts = '/api';   //请求的后台域名
//请求之前(可以设置token)
axios.interceptors.request.use(config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (localStorage.JWT_TOKEN) {
        config.headers.token = localStorage.JWT_TOKEN;
    }
    return config;
}, error => {
    layer.msg(error, { icon: 5 })
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {//数据拿到之后
    return response.data
}, error => {
    layer.msg('Http请求失败，请联系管理员', { icon: 5 });
    return Promise.reject(error.response);
});


function successfun(res) {//处理后台返回的非200错误
    if (res.status === 200) {
        layer.msg(res.message, { icon: 1 });
        return res
    } else {
        layer.msg(res.message, { icon: 3 });
        return res;
    }
}


function errorfun(res) {
    if (res.status != 200) {
        layer.msg(res.data.message, { icon: 3 });
        return res;
    }
}


export default {
    post(url, data) {//post请求
        return axios({
            method: 'post',
            baseURL: localhosts,
            url,
            data: qs.stringify(data),
            withCredentials: true,
            timeout: 5000,//响应时间
        }).then(res => {

            return successfun(res)
        }, err => {
            return errorfun(err);
        })
    },


    get(url, params) {//get请求
        return axios({
            method: 'get',
            baseURL: localhosts,
            url,
            params,
            withCredentials: true,
            timeout: 5000,
        }).then(res => {
            return successfun(res)
        }, err => {
            return errorfun(err)
        })
    }

}