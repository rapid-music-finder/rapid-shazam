import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        songList: []
    },
    mutations: {
        setSongList(vuexContext, payload) {
            vuexContext.songList = payload;
        }
    },
    actions: {},
    getters: {
        songList(state) {
            return state.songList;
        }
    }
});

export default store;