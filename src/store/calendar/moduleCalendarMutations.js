/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


export default {
  ADD_EVENT (state, event) {
    state.events.push(event)
  },
  SET_EVENTS (state, events) {
    state.events = events
  },
  SET_LABELS (state, labels) {
    state.eventLabels = labels
  },
  UPDATE_EVENT (state, event) {
    const eventIndex = state.events.findIndex((e) => e.id === event.id)
    Object.assign(state.events[eventIndex], event)
  },
  REMOVE_EVENT (state, eventId) {
    const eventIndex = state.events.findIndex((e) => e.id === eventId)
    state.events.splice(eventIndex, 1)
  }
}
