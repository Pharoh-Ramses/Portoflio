import React, {useState, useEffect} from "react";
import { getAllRoutines } from "../API";


const Routines = () => {
    const [routines, setRoutines] = useState([])
    useEffect(()=> {
        const getRoutines = async () => {
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`)
            const data = await response.json()
            console.log(data)
            setRoutines(data)
        }
        getRoutines()
    },[])
    
    return(
    <div>
        {routines.map(routines=>
            <div key={routines.id}>
                <h2>{routines.name}</h2>
                <h1>{routines.goal}</h1>
                <p>{routines.creatorName}</p>

            </div>)}
    </div>
    )
}


export default Routines