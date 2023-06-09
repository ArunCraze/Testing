import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import background from './images/proimage.jpg';

export const Login = (props) => {
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <><div>
        </div><div className="auth-form-container">
        <h1 classname="heading">RAY USED CARS</h1>
        <p className="text">"What we drive says a lot about</p>
        <p className="text" >who we are"</p>
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="abc@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={()=>navigate('/')}>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </>
    )
    
}