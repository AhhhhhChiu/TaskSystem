import Vue from 'vue';
import Vuex from 'vuex';
import state from "./state";
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
        setId(state, id) {
            state.id = id;
            localStorage.setItem("id", id);
        },
        remeberme(state, LoginForm) {
            state.LoginForm = LoginForm;
            localStorage.setItem("LoginForm", LoginForm);
        },
        clearToken(state) {
            state.token = "";
            localStorage.setItem("token", "")
        },
        setRoleId(state, roleId) {
            state.roleId = roleId;
            localStorage.setItem("roleId", roleId);
        }

    },
    getters: {
        token: state => state.token,
        LoginForm: state => state.LoginForm,
        id: state => state.id,
        roleId: state => state.roleId
    }
})