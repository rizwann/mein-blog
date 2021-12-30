
import axios from 'axios'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

const Login = () => {

    const userRef = useRef()
    const passRef = useRef()
    const {dispatch, isFetching, user} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
       dispatch({type: 'LOGIN_START'});
       try {
            const res = await axios.post('/auth/login',{
                username: userRef.current.value,
                password: passRef.current.value
            })
            dispatch({type: 'LOGIN_SUCCESS', payload: res.data})
       } catch (error) {
           dispatch({type: 'LOGIN_FAIL'})
       }
    }
    console.log(user)
    console.log(isFetching)
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form  className="loginForm" onSubmit={handleSubmit}>
                <label >Username</label>
                <input type="text" placeholder='Enter your Username' ref={userRef} className='loginInput' />
                <label >Password</label>
                <input type="password" placeholder='Enter your Password' ref={passRef} className='loginInput'/>
                <button className='loginButton' type='submit' disabled={isFetching}>Login</button>
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
