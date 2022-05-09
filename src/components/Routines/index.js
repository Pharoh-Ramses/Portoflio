import React, {useState, useEffect} from "react";
import { getAllRoutines } from "../API";
import './index.scss';


const Routines = () => {
    const [routines, setRoutines] = useState([]);
    useEffect(()=> {
        const getRoutines = async () => {
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`);
            const data = await response.json()
            console.log(data)
            setRoutines(data)
        }
        getRoutines()
    }, []);
    
    return(
    <div id="text">
        {routines.map(routines=>
            <div key={routines.id}>
                <h2>Routine Name: {routines.name}</h2>
                <h3>Routine Goal: {routines.goal}</h3>
                <p>{routines.activities.name}</p>
                <p>{routines.activities.description}</p>
                <p>{routines.activities.count}</p>
                <p>{routines.activities.duration}</p>
                <p>Routine Creator: {routines.creatorName}</p>
            </div>
            )}
    </div>
    );
};


export default Routines