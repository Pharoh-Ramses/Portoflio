import React from "react";
import { loginAsUser } from "../API";
import { Link } from 'react-router-dom';
import './index.scss';

const LogIn = (props) => {
    const { setToken, userObject, setUsername, setPassword } = props;

    return(
        <form id="textinput">
            <h1>Log In:</h1>
        
        <label htmlFor="logInUsername">Username:</label>
        <input
        type="text"
        id="logInUsername"
        name="logInUsername"
        minLength="8"
        onChange={(event) => { setUsername(event.target.value) }}
        required
        >
        </input>
        <br />

        <label htmlFor="logInPwd">Password: </label>
        <input
        type="password"
        id="logInPwd"
        name="logInPwd"
        minLength="8"
        onChange={(event) => {setPassword(event.target.value) }}
        required
        >
        </input>
        <br />
        <button onClick={(event) => {
            event.preventDefault();
            setToken(loginAsUser(userObject));
            document.getElementById('logInUsername').value = '';
            document.getElementById('logInPwd').value = '';
        }}>
            Log In
        </button>
        <br />
        <Link to="/register">
            <a>
                Don&apos;t have an account? Register here.
            </a>
        </Link>
        </form>
    )

}

export default LogIn