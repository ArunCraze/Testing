import React, { } from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
//import background from './images/LAT.jpg'
export const Home = (props) => {
    const navigate = useNavigate();

    return (
        <div className="home">  
                
            <button className="SignUp" type="submit" onClick={() => navigate('/login')}>LOGOUT</button>
        </div>
    );
}

export default Home;
