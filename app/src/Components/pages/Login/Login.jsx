import './Login.css';
import { useNavigate, Link } from "react-router-dom";

import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className="text">Login</div>
            <div className="underline"></div>
                <div className='signup-box'>
                        <div className='header'>
                        </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='Email / Phone Number'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt=""/>
                        <input type="password" placeholder='Password'/>
                    </div>
                        <button className="login-button" onClick={() => navigate("/Home")}>Login</button>
                        <div className="underline-black"></div>
                       <button className="signup-button" onClick={() => navigate("/Signup")}>Sign Up Now!</button>
                </div>
                <Link to="/Home" class="continue-link">
                    <span>
                        Continue without an Account
                    </span>
                </Link>
        </div>
    </div>
    )
}

export default Login