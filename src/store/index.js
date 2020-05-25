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
        }
    },
    getters: {
        token: state => {
            return state.token;
        }
    }
})