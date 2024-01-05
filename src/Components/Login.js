import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [EmailTxt, setEmailTxt] = useState(true);
    const [PasswordTxt, setPasswordTxt] = useState(true);
    function handleFocus(event) {
        if (event.target.type === "email") setEmailTxt(false);
        else setPasswordTxt(false);
    }
    function handleBlur(event) {
        if (event.target.type === 'email' && event.target.value === '') setEmailTxt(true);
        else if (event.target.value === '') setPasswordTxt(true);
    }
    return (
        <div className="loginContainer">
            <div className="Rectangle2">
                <div className="Rectangle1">
                    <h4>Sign-in</h4>
                    <div className="loginContent">
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
                    <p>Don't have an account ? <Link to="/SignUp">Signup here</Link></p>
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

export default Login;