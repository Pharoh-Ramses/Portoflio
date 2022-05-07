import logo from './logo.svg';
import './App.scss';
import React, {useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LogIn from './components/LogIn';
import Home from './components/Home';
import RegisterForm from './components/Register';
import {testAuthentication} from './components/API';

function App() {

  const [token, setToken] = useState(localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');

  async function isValidJWT() {
    const token = localStorage.getItem("access_token");
    if (!token) setIsLoggedIn(false);
    else {
      const isValid = await testAuthentication(token);
      setLoggedInUsername(isValid.data.user.username);
      setIsLoggedIn(isValid);
    }
  }


  let userObject = {
    user: {
      username: username,
      password: password
    }
  }

  useEffect(() => {
    isValidJWT();
  }, []);

  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="Login" element = {<LogIn setToken={setToken} userObject={userObject} setUsername={setUsername} setPassword={setPassword} />} />
        <Route path='Register' element = {<RegisterForm token={token} setToken={setToken} userObject={userObject}/>}/>
      </Route>
    </Routes>
   </>
  );
}

export default App;
