import React from 'react'
import './Login.css'

const Login = () => {
    return(
        <div className="modal">
            <div className="login">
                <h1>Login</h1>
                <p>Email</p>
                <input type="text"/>
                <p>Password</p>
                <input type="password"/>
                <button>Login</button>
                <p>
                    Don't have an account ? Klik <span>Here</span>
                </p>
            </div>
        </div>
    )
}

export default Login