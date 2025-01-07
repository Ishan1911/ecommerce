import React from 'react'
import './css/loginsignup.css'

const loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing you agree to the terms and policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default loginsignup
