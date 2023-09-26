import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import GoalForm from './GoalForm';
import { PageContext } from '../Contexts/PageContext'
import styles from '../layout/HomePage.module.css'
import { getDB } from '../axios.js';

function HomePage(){
    const {goals, onDeleteGoal} = useContext(PageContext)
    console.log('goals: ', goals)
    const {halfYearly, quarterly, monthly, weekly, daily} = goals
    const [showItem, setShowItem ] = useState({})
    const toggleSubItem = (goalId) => {
        setShowItem({
            ...showItem,
            [goalId] : !showItem[goalId]
        })
    }
    const deleteGoal = (selectedGoal) => {
        console.log("onDeleteGoal received", selectedGoal)
        onDeleteGoal(selectedGoal)
    }

    return(
        <div className={styles['centered-content']}>
            <div> 
                <h1>目標中心</h1>
                <br/>
                <GoalForm />
                <h3>半年目標</h3>
                    <ul>
                        {halfYearly.map((goal) => (
                            <li key={goal.id}>
                                {goal.title}
                                <button onClick={() => toggleSubItem(goal.id)
                                    }>
                                    {showItem[goal.id] ? '隱藏行動計畫' : '顯示行動計畫'}
                                </button>
                                <button onClick={() => deleteGoal(goal)
                                }>移除目標</button>
                                {showItem[goal.id] && (
                                    <ul>
                                        <li>
                                            {goal.actionPlan}
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                <h3>每季目標</h3>
                    <ul>
                        {quarterly.map((goal) => (
                            <li key={goal.id}>
                                {goal.title}
                                <button onClick={() => toggleSubItem(goal.id)}>
                                    {showItem[goal.id] ? '隱藏行動計畫' : '顯示行動計畫'}
                                </button>
                                {showItem[goal.id] && (
                                    <ul>
                                        <li>
                                            {goal.actionPlan}
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                <h3>每月目標</h3>
                    <ul>
                        {monthly.map((goal) => (
                            <li key={goal.id}>
                                {goal.title}
                                <br/>
                                <button onClick={() => toggleSubItem(goal.id)}>
                                    {showItem[goal.id] ? '隱藏行動計畫' : '顯示行動計畫'}
                                </button>
                                {showItem[goal.id] && (
                                    <ul>
                                        <li>
                                            {goal.actionPlan}
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                <h3>每周目標</h3>
                    <ul>
                        {weekly.map((goal) => (
                            <li key={goal.id}>
                                {goal.title}
                                <button onClick={() => toggleSubItem(goal.id)}>
                                    {showItem[goal.id] ? '隱藏行動計畫' : '顯示行動計畫'}
                                </button>
                                {showItem[goal.id] && (
                                    <ul>
                                        <li>
                                            {goal.actionPlan}
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                <h3>每日目標</h3>
                <ul>
                    {daily.map((goal) => (
                        <li key={goal.id}>
                            {goal.title}
                            <button onClick={() => toggleSubItem(goal.id)}>
                                {showItem[goal.id] ? '隱藏行動計畫' : '顯示行動計畫'}
                            </button>
                            {showItem[goal.id] && (
                                <ul>
                                    <li>
                                        {goal.actionPlan}
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomePage;
