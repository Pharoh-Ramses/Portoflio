import React, { useState } from "react";
import { loginAsUser } from "../API";
import { Link } from 'react-router-dom';
import './index.scss';

    const LogIn = (props) => {
        const {setToken, userObject} = props
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
    

        const submit = async(event)  =>  {
            const userObject = {
                username: username,
                password: password
            }
                event.preventDefault()
                if (typeof userObject != 'undefined') {
               var token = await loginAsUser(userObject)
                    if(token){ 
                    setToken(token)
                    localStorage.setItem("access_token", token);
                    }
                    setUsername("")
                    setPassword("")
                    alert(`Logged in successfully!`)
                    return(
                        <Link to = '/'></Link>
                    )
                }
            }
        
    
        
    
    
        return (
            <form id="textinput">
                <h1>Login to Account</h1>
                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    minLength="8"
                    value={username}
                    onChange={(event) => { setUsername(event.target.value) }}
                    required
                >
                </input>
                <br />
    
                <label htmlFor="pwd">Password: </label>
                <input
                    type="password"
                    id="pwd"
                    name="pwd"
                    minLength="8"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    required
                ></input>
                <br />
            <button
                onClick={submit}>Login</button>
            <br />
    
          <Link to="/register">
            <a>
                Don&apos;t have an account? Register here.
            </a>
        </Link>
        
        </form>
      );
    }



export default LogIn