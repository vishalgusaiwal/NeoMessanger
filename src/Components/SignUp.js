import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const SignUp = () => {
    const [EmailTxt, setEmailTxt] = useState(true);
    const [PasswordTxt, setPasswordTxt] = useState(true);
    const [FullName, setFullName] = useState(true);
    function handleFocus(event) {
        if (event.target.type === "text") setFullName(false);
        else if (event.target.type === "email") setEmailTxt(false);
        else setPasswordTxt(false);
    }
    function handleBlur(event) {
        if (event.target.type === "text" && event.target.value === '') setFullName(true);
        else if (event.target.type === "email" && event.target.value === '') setEmailTxt(true);
        else if (event.target.value === '') setPasswordTxt(true);
    }
    return (
        <div className="loginContainer">
            <div className="Rectangle2">
                <div className="Rectangle1">
                    <h4>Create Account</h4>
                    <div className="BtnDiv">
                        <button type="button" className="ExtraBtn">SignUp with Google</button>
                        <button type="button" className="ExtraBtn">SignUp with Facebook</button>
                    </div>
                    <h3 className="Option">- Or -</h3>
                    <div className="loginContent">
                        <div className="InputContent">
                            {FullName && <span className="TextCls">Full Name</span>}
                            <input type="text" onFocus={(e) => { handleFocus(e) }} onBlur={(e) => { handleBlur(e); }} />
                        </div>
                        <div className="InputContent">
                            {EmailTxt && <span className="TextCls">Email</span>}
                            <input type="email" onFocus={(e) => { handleFocus(e); }} onBlur={(e) => { handleBlur(e); }} />
                        </div>
                        <div className="InputContent">
                            {PasswordTxt && <span className="TextCls">PassWord</span>}
                            <input type="password" onFocus={(e) => { handleFocus(e); }} onBlur={(e) => { handleBlur(e); }} />
                        </div>
                        <button type="button" className="Btn-Cls">Login</button>
                    </div>
                    <p>Already have an account ? <Link to="/login">Login</Link></p>
                </div>
                <div className="leftClass">
                    <p>Welcome to NeoMessanger. Log in to connect, chat, and share moments with friends. Your go-to place for seamless communication! </p>
                    <h4>#StayConnected</h4>
                    <div className="logoName"><span>N</span></div>
                </div>
            </div>
        </div>
    );
}


export default SignUp;