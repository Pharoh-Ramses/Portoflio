import React, {useState} from "react";
import './index.scss'
import { Link } from 'react-router-dom'
import { createNewRoutine } from "../API";


const MyRoutines = (props) => {

    const {routines, setRoutines} = props;

    const [routineTitle, setRoutineTitle] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');
    const [routineDescription, setRoutineDescription] = useState('');

    let newRoutine = {
        name: routineTitle,
        goal: routineGoal
    }
    

    return(
    <div id="form">
        <h1>Create A New Routine</h1>
        <form id='routineForm' className="routines">
            <label htmlFor="createRoutineTitle">Name: </label>
            <input
                type="text"
                id="createRoutineTitle"
                name="createRoutineTitle"
                onChange={(event) => { setRoutineTitle(event.target.value) }}
                required
            />
            <br />
            <label htmlFor="newRoutineGoal">Goal: </label>
            <input
                type="text"
                id="newRoutineGoal"
                name="newRoutineGoal"
                onChange={(event) => { setRoutineDescription(event.target.value) }}
            />
            
            <Link to="/routines">
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const routineToAdd = await createNewRoutine(newRoutine);
                    setRoutines([...routines, routineToAdd]);                    
                    document.getElementById('createRoutineTitle').value = '';
                    document.getElementById('newRoutineGoal').value = '';
                } 
                
                }>Submit</button>
                </Link>
        </form>

        </div>


    )
};

export default MyRoutines