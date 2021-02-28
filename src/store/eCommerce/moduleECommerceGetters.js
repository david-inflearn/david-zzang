/*=========================================================================================
  File Name: moduleEcommerceGetters.js
  Description: Ecommerce Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


export default {
  isInCart: state => itemId => {
    return state.cartItems.some((item) => item.objectID === itemId)
  },
  isInWishList: state => itemId => {
    return state.wishList.some((item) => item.objectID === itemId)
  },
  getCartItem: state => itemId => {
    const result = state.cartItems.filter((item) => item.objectID === itemId)
    return result.length ? result.pop() : []
  }
}
