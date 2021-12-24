import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form  className="loginForm">
                <label >Email</label>
                <input type="text" placeholder='Enter your Email' className='loginInput' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' className='loginInput'/>
                <button className='loginButton'>Login</button>
                <button className="loginRegButton">
                <Link to="/register " className="link">
                Register
              </Link>
                </button>
            </form>
        </div>
    )
}

export default Login
