import React, { useEffect, useState } from "react";
import "./loginform.css"
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'vimukthi' && password === 'admin2023') {
            setError('');
            navigate('/database');
        }
        else {
            setError('Invalid username or password');
            alert("Login Failed");
        }
    };


    return (
        <center>
            <div className="cover">
                <h1>Admin Login</h1>
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button className="login-btn" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </center>
    )
};

export default Loginform;