const state ={
    cartItems: [],
    totalCartAmount: 0
}
const getters ={
cart: (state) => state.cartItems,
totalCartAmount: (state) => state.totalCartAmount
}
const actions ={
addToCart(context,payload) {
    const cart =context.state.cartItems
                cart.push(payload)
                context.commit('UPDATE_CART',cart)

                var total = context.state.totalCartAmount
                total += payload.itemPrice
                context.commit ('UPDATE_TOTAL_CART_AMOUNT',total)
                                
},
removeFromCart(context, payload) {
    const cart =context.state.cartItems
    cart.pop(payload)
    context.commit('UPDATE_CART',cart)

    var total = context.state.totalCartAmount
    total -= payload.itemPrice
    context.commit ('UPDATE_TOTAL_CART_AMOUNT',total)
}
}
const mutations = {

    UPDATE_CART(state, payload) {
        state.cartItems = payload;
    },
    UPDATE_TOTAL_CART_AMOUNT(state,payload) {
        state.totalCartAmount = payload;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}