import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form  className="registerForm">
            <label >Full Name</label>
                <input type="text" placeholder='Your Name' className='registerInput' />
                <label >Username</label>
                <input type="text" placeholder='Enter your Username' className='registerInput' />
              
                <label >Email</label>
                <input type="text" placeholder='Enter your Email' className='registerInput' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' className='registerInput'/>
                <button className='registerButton'>Register</button>
                <button className="registerLoginButton">
                <Link to="/login " className="link">
                Login
              </Link>
                </button>
            </form>
        </div>
    )
}

export default Register
