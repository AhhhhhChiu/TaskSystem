import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem("token", token);
        },
        remeberme(state, LoginForm) {
            state.LoginForm = LoginForm
            localStorage.setItem("LoginForm", LoginForm);
        }
    },
    getters: {
        token: state => state.token,
        LoginForm: state => state.LoginForm
    }
})