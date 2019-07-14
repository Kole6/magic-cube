import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home.js'
import indexPage from './modules/indexPage.js'
import Mock from '@/config/mock_data/home_menu.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        menuObj: Mock,
        showIcon:true,
    },
    modules: {
        home,
        indexPage,
    },
    mutations: {
        updateMenuObj(state, menuObj) {
            state.menuObj = menuObj
        },
        UPDATE_ICON(state,param){
            state.showIcon = param
        }
    }

})