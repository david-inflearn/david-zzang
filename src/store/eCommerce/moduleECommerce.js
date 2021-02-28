/*=========================================================================================
  File Name: moduleecommerce.js
  Description: ecommerce Module
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


import state from './moduleECommerceState.js'
import mutations from './moduleECommerceMutations.js'
import actions from './moduleECommerceActions.js'
import getters from './moduleECommerceGetters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
