import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="Rectangle2">
                <div className="Rectangle1">
                    <h4>Sign-in</h4>
                    <div className="loginContent">
                        <div className="InputContent">
                            <span className="TextCls">Email</span>
                            <input type="email" />
                        </div>
                        <div className="InputContent">
                            <span className="TextCls">PassWord</span>
                            <input type="password" />
                        </div>
                        <button type="button" className="Btn-Cls">Login</button>
                    </div>
                    <p>Don't have an account ? <Link to="/SignUp">Signup here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;