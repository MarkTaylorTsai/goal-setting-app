import '../App.css';
import React, { createContext } from 'react';
import AppRouter from './AppRouter';
import GoalList from './GoalList';
import GoalItem from './GoalItem';

export const MyContext = createContext(null);

function App() {

  const sharedData = "共享的數據"

  return (
    <div>
      <MyContext.Provider value="sharedData">

        <GoalList/>
        <GoalItem/>

      </MyContext.Provider>
      <div className="App">
        <AppRouter/>
      </div>
    </div>
  );
}

export default App;
