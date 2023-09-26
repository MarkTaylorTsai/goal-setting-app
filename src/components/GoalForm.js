import React, { useState, useContext } from "react";
import { PageContext } from '../Contexts/PageContext'
import { getDB } from "../axios.js";
function GoalForm(){
    const {onAddGoal} = useContext(PageContext)
    const [title, setTitle] = useState('')
    const [actionPlan, setActionPlan] = useState('')
    const [type, setType] = useState('halfYearly')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newGoal = {
            id:Date.now(),
            title,
            actionPlan,
            type,
        }
        
        onAddGoal(newGoal)
        const query = `insert into goal (name) values('${newGoal.title}')`
        getDB({params:{query,test:'123456'}}).then((res)=>{
            console.log(res.data)
            console.log(123)
        })
        setTitle('')
        setActionPlan('')
        setType('halfYearly')
    } 

    

    return(
        <form onSubmit={handleSubmit}>
            <input 
            value={title}
            placeholder='輸入新目標'
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            />
            <br/>
            <textarea 
                value={actionPlan}
                placeholder='輸入行動計畫'
                onChange={(e) => setActionPlan(e.target.value)}
            />
            <br/>
            <select 
            value={type}
            onChange={(e) => setType(e.target.value)}>
                <option value='halfYearly'>半年目標</option>
                <option value='quarterly'>每季目標</option>
                <option value='monthly'>每月目標</option>
                <option value='weekly'>每周目標</option>
                <option value='daily'>每日目標</option>
            </select>
            <br/>
            <button type='submit'>添加目標</button>
        </form>
    )

}

export default GoalForm;