/*=========================================================================================
  File Name: moduleUserManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


import state from './moduleUserManagementState.js'
import mutations from './moduleUserManagementMutations.js'
import actions from './moduleUserManagementActions.js'
import getters from './moduleUserManagementGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

