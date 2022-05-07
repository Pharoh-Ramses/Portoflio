import React, { useState } from "react";
import { registerUser } from "../API";
import { Link } from 'react-router-dom';
import './index.scss';


const RegisterForm = (props) => {

    const [username, setUsername] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const { token, setToken, userObject } = props

    const submit = async(event)  =>  {
        const userObject = {
            username: username,
            password: passwordTwo
        }
        let passwordMatch = (passwordOne === passwordTwo);
            event.preventDefault()
            if (passwordMatch) {
                var token = await registerUser(userObject)
                if(token){ 
                setToken(token)
                localStorage.setItem("access_token", token);
                }
            }
    setUsername("")
    setPasswordOne("")
    setPasswordTwo("")
    
        
    }

    


    return (
        <form className="registerformcontainer">
            <h1>Create an Account</h1>
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
                value={passwordOne}
                onChange={(event) => { setPasswordOne(event.target.value) }}
                required
            ></input>
            <br />

            <label htmlFor="pwdConf">Confirm Password: </label>
            <input
                type="password"
                id="pwdConf"
                name="pwdConf"
                minLength="8"
                value={passwordTwo}

                onChange={(event) => { setPasswordTwo(event.target.value) }}
                required></input>
            <br />
            <button
                onClick={submit}>Register</button>
            <br />
            <Link to="/">
                <a>Already have an account? Please log in</a>
            </Link>

        </form>
    )
}


export default RegisterForm;