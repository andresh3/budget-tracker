import './Signup.css';

import email_icon from '../../Assets/email.png'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className="text">Sign Up</div>
            <div className="underline"></div>
                <div className='signup-box'>
                        <div className='header'>
                        </div>
                <div className="inputs">
                    <div className="input">
                        <img src={email_icon} alt=""/>
                        <input type="email" placeholder='Email / Phone Number'/>
                    </div>
                        <button className="continue-button">Continue</button>
                        <div className="underline-black"></div>
                        <button className="back-button" onClick={() => navigate("/Login")}>Back to Login</button>
                </div>
        </div>
    </div>
    )
}

export default Signup