import React from 'react';
import { Link } from 'react-router-dom';


const Cover = () => {
    return (
        <div className="cover-page">
            <div className="FileTypes">
                <img src="_App.svg" style={{ "height": "30px", "width": "35px" }} />
                <p style={{ "color": "#FFF", height:"25px" }}>App</p>
            </div>
            <div className="Frame">
                <div className="statusIndicator">
                    <p style={{ marginTop:"13px" }}>Live</p>
                </div>
                <h1>NeoMessanger Chat Application</h1>
            </div>
            <div className="TeamInfo">
                <p className="headof">Collaborators</p>
                <p className="Nameof">Vishal</p>
            </div>
            <div className="FileFeatures">
                <img src="Subtract.svg" style={{ width: "20px", height:"35px" }} />
                <img src="Theme.svg" style={{ width: "20px", height: "35px" }} />
                <img src="something.svg" style={{ width: "20px", height: "35px" }} />
                <img src="Vector.svg" style={{ width: "20px", height: "35px" }} />
            </div>
            <div className="Urls">
                <Link to="/login" className="ButtonA">Login</Link>
                <Link to="/signup" className="ButtonA">SignUp</Link>
            </div>
        </div>
    );
}

export default Cover;