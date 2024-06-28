import Vuex from'vuex'

import products from './modules/products'
import cart from './modules/cart';
export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        products,
        cart

    }
})