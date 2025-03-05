import './Signup.css';
import Image from 'next/image';
import email_icon from '../Assets/email.png';
import Link from 'next/link';


export default function Signup() {
    return (
        <div className='container'>
            <div className="text">Sign Up</div>
            <div className="underline"></div>
                <div className='signup-box'>
                        <div className='header'>
                        </div>
                <div className="inputs">
                    <div className="input">
                    <Image src={email_icon} alt="" />
                        <input type="email" placeholder='Email / Phone Number'/>
                    </div>
                    <Link href="/dashboard"><button className="continue-button">Continue</button></Link>
                        <div className="underline-black"></div>
                        <Link href="/login"><button className="back-button">Back to Login</button></Link>
                </div>
        </div>
    </div>
    )
}

