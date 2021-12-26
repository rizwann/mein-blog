import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'   

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            
            const response = await axios.post('auth/register',{
                username,
                password,
                email
            })
            response.data && window.location.replace('/login') 
        } catch (error) {
            
            setError(true)
        }
    }

    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form  className="registerForm" onSubmit={handleSubmit}>
            
                <label >Username</label>
                <input type="text" placeholder='Enter your Username' className='registerInput' onChange={(e)=>setUsername(e.target.value)} size="12" required/>
              
                <label >Email</label>
                <input type="email" placeholder='Enter your Email' className='registerInput' onChange={(e)=>setEmail(e.target.value)} required />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' className='registerInput' onChange={(e)=>setPassword(e.target.value)} required/>
                <button className='registerButton'>Register</button>
                </form>
                <button className="registerLoginButton">
                <Link to="/login " className="link">
                Login
              </Link>
                </button>

                {error &&  <span style={{color:"#FF6347", marginTop:"10px"}}>Something went wrong 🥺 !! Try again 🙂 </span>}

               
          
        </div>
    )
}

export default Register
