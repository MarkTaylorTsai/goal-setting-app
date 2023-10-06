import React, { useReducer } from 'react'

const initialState = {
    halfYearly: [],
    quarterly: [],
    monthly: [],
    weekly: [],
    daily: []
  }
  
const goalReducer = (state, action) => {
    switch(action.type){
      case 'ADD_GOAL':
        const {type: addType, ...newGoal} = action.payload
        return{
          ...state,
          [addType] : [...state[addType], action.payload]
        }
      case'DELETE_GOAL':
        const {type: deleteType, id: goalId} = action.payload
        return{
          ...state,
          [deleteType] : state[deleteType].filter((goal) => goal.id !== goalId)
        }
      default:
         console.warn('Unknown action' + action.type)
        return state
    }
  }

export { initialState, goalReducer};