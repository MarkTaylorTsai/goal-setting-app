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
        const originalReturnData = {
          ...state,
          [addType] : [...state[addType], newGoal]
        }
        console.log('------------------')
        console.log(originalReturnData)
        console.log(action.payload)
        console.log('少type的原因是因為const {type: addType, ...newGoal} = action.payload這行已經把type抓出來了,因此...newGoal的內容不會包含type,會包含type之外的所有東西,所以要另外把type加進去也就是用{type:addType,...newGoal}取代newGoal來return')
        console.log('------------------')
        return{
          ...state,
          [addType] : [...state[addType], {type:addType,...newGoal}]
        }
      case 'DELETE_GOAL':
        const {type: deleteType, id: goalId} = action.payload
        const goals = state[deleteType]
        const updatedGoal = goals.filter((goal) => goal.id !== goalId)
        return{
          ...state,
          [deleteType] : updatedGoal
        }
      default:
         console.warn('Unknown action' + action.type)
        return state
    }
  }

export { initialState, goalReducer};