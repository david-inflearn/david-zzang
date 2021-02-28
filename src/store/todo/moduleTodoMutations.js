/*=========================================================================================
  File Name: moduleTodoMutations.js
  Description: Todo Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Education Template
  Author: David
  Author URL: https://www.notion.so/I-m-Different-I-m-David-babd4579585441d684888acd0a5ca8f8
==========================================================================================*/


export default {
  SET_TODO_SEARCH_QUERY (state, query) {
    state.todoSearchQuery = query
  },
  UPDATE_TODO_FILTER (state, filter) {
    state.todoFilter = filter
  },

  // API
  SET_TASKS (state, tasks) {
    state.tasks = tasks
  },
  SET_TAGS (state, tags) {
    state.taskTags = tags
  },
  ADD_TASK (state, task) {
    state.tasks.unshift(task)
  },
  UPDATE_TASK (state, task) {
    const taskIndex = state.tasks.findIndex((t) => t.id === task.id)
    Object.assign(state.tasks[taskIndex], task)
  }
}
