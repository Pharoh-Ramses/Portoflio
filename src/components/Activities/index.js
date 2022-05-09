import React, {useState, useEffect} from "react";
import { createNewActivities, getAllActivities } from "../API";
import './index.scss';
import { Link } from "react-router-dom";


const Activities = (props) => {
    const {isLoggedIn} = props
    const [activities, setActivities] = useState([]);
    

    const [activityTitle, setActivityTitle] = useState('');
    const [activityDescription, setActivityDescription] = useState('');

    let newActivity = {
        name: activityTitle,
        description: activityDescription
    }

    useEffect(()=> {
        const getActivities = async () => {
            const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities`);
            const data = await response.json()
            console.log(data)
            setActivities(data)
        }
        getActivities()
    }, []);
    
    return(
    <div id="text">
        {activities.map(activities=>
            <div key={activities.id}>
                <h2>Activity Name: {activities.name}</h2>
                <h3>Activity Description: {activities.description}</h3>
            </div>
            )}
            <br />
            <div>
                {!isLoggedIn ? <form>
                    <h1 id="form">Create A New Activity</h1>
        <form id='routineForm' className="routines">
            <label htmlFor="createActivityName">Name: </label>
            <input
                type="text"
                id="createActivityName"
                name="createActivityName"
                onChange={(event) => { setActivityTitle(event.target.value) }}
                required
            />
            <br />
            <label htmlFor="newActivityDescription">Description: </label>
            <input
                type="text"
                id="newActivityDescription"
                name="newActivityDescription"
                onChange={(event) => { setActivityDescription(event.target.value) }}
            />
            
            <Link to="/activities">
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const activitiesToAdd = await createNewActivities(newActivity);
                    setActivities([...activities, activitiesToAdd]);                    
                    document.getElementById('createActivityName').value = '';
                    document.getElementById('newActivityDescription').value = '';
                } 
                
                }>Submit</button>
                </Link>
        </form>
                </form>
                : null}
            </div>
    </div>
    
    );
};


export default Activities