import './Login.css';
import Image from 'next/image';
import Link from 'next/link';

import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';
export default function Page() {
    return (
        <div className='container'>
            <div className="text">Login</div>
            <div className="underline"></div>
                <div className='signup-box'>
                        <div className='header'>
                        </div>
                <div className="inputs">
                    <div className="input">
                        <Image src={email_icon} alt=""/>
                        <input type="email" placeholder='Email / Phone Number'/>
                    </div>
                    <div className="input">
                        <Image src={password_icon} alt=""/>
                        <input type="password" placeholder='Password'/>
                    </div>
                        <Link href="/dashboard"><button className="login-button">Login</button></Link>
                        <div className="underline-black"></div>
                        <Link href="/"><button className="signup-button">Sign Up Now!</button></Link>
                </div>
                <Link href="/dashboard" className="continue-link">
                    <span>
                        Continue without an Account
                    </span>
                </Link>
        </div>
    </div>
    )
}