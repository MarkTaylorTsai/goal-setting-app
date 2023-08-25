import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoalList from './GoalList';
import GoalDetails from './GoalDetails';
import GoalChart from './GoalChart';

function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<GoalList />}/>
                <Route path="/goal/:id" element={<GoalDetails />}/>
                <Route path="/chart" element={<GoalChart />}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;