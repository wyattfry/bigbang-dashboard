// pages/login.js
import React from 'react';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div className="login-container">
            <h1>Big Bang</h1>
            <input
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Log In</button>
            <style jsx>{`
                /* Add styling here or use a CSS module */
            `}</style>
        </div>
    );
}
