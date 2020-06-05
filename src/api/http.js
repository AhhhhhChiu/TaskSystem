import axios from 'axios';
import QS from 'qs';
import Vue from "../main";

class HttpRequest {
    constructor() {
        this.baseURL = process.env.NODE_ENV === 'production'? '/sshLab_war_exploded': ''
        this.instance = axios.create();
        this.interceptor();
    }

    // 单例模式
    static getInstance() {
        if (!this.httpRequest) {
            this.httpRequest = new HttpRequest();
        }
        return this.httpRequest;
    }

    // 拦截器
    interceptor() {
        // 请求拦截器
        this.instance.interceptors.request.use(config => {
            // do something
            if (config.url !== HttpRequest.LOGIN && config.url !== HttpRequest.REGISTER) {
                config.headers['auth'] = Vue.$store.getters.token;
            }
            return config;
        }, error => {
            // do something
            return Promise.reject(error);
        })

        // 响应拦截器
        this.instance.interceptors.response.use(response => {
            // do something
            // console.log(response.code)
            return response;
        }, error => {
            // do something
            return Promise.reject(error);
        })
    }

    // 通用的GET
    get(url, data) {
        url += "?"
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const element = data[key];
                url += (key + "=" + element + "&")
            }
        }
        return this.instance({
            url: url.slice(0, url.length - 1),
            method: 'get',
            baseURL: this.baseURL,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        })

    }

    // 通用的POST
    post(url, data) {
        return this.instance({
            url: url,
            method: 'post',
            data: QS.stringify(data),
            baseURL: this.baseURL,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
            }
        })

    }
}

HttpRequest.LOGIN = "/user/login";
HttpRequest.REGISTER = "/user/save";

export default HttpRequest;