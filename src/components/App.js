import '../App.css';
import React, { useReducer } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { PageContextProvider } from '../Contexts/PageContext'
import HomePage from './HomePage'
import WeeklyPlans from './WeeklyPlans';
import GoalChart from './GoalChart'
import { initialState, goalReducer } from '../hooks/useReducer';
import { getDB } from '../axios.js';

function App(){
  getDB({params:{query:`select * from goal`}}).then((res)=>{
    console.log(res.data)

})
  const [goals, dispatch] = useReducer(goalReducer, initialState)
  const handleAddGoal = (newGoal) => {
  dispatch({type: 'ADD_GOAL', payload: newGoal})
}
  const handleDeleteItem = (selectedGoal) => {
  dispatch({type:'DELETE_GOAL', payload: selectedGoal})
}

  return (
    <div>
      <PageContextProvider goals={goals} onAddGoal={handleAddGoal} onDeleteGoal={handleDeleteItem}>
        <div>
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route path='/chart' element={<GoalChart />}/>
                <Route path='/plan' element={<WeeklyPlans />}/>
            </Routes>
          </div>
      </PageContextProvider>
    </div>
  );
}

export default App;