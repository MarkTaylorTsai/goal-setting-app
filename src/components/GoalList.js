import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './App'

function GoalList(){
    console.log(MyContext)
    const sharedData = useContext(MyContext)
    
    return(
        <div>
            <Link to={`/goal}`}>查看詳細情形</Link>
        </div>
    )
}

export default GoalList;
