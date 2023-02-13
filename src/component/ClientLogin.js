import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import "../App.css";
import "./ClientLogin.css";
const ClientLogin = () => {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <form action="">
            <div>
              <h2>Sign In As Client</h2>
              <div className="Cover">
                <div className="column">
                  <div className="input_field">
                    <div className="icon_container">
                      <BsFillPersonFill />
                    </div>
                    <input type="text" placeholder="UserName" id="UsertName" />
                  </div>
                  <div className="input_field">
                    <div className="icon_container">
                      <RiLockPasswordFill />
                    </div>
                    <input type="text" placeholder="Password" id="Password" />
                  </div>
                </div>
              </div>
            </div>
            <div className="button_container">
              <button type="submit">SignIn</button>
            </div>
    
              <div className="ForgotPassword_container">
                <a href="https://www.google.com/">Forgot Password</a>
              </div>

              <div className="RememberMe_container">
                <div className="icon_container2">
                  <TiTick />
                </div>

                <a href="https://www.google.com/">Remember Me</a>
              </div>
            
            </form>
        </div>
      </div>
    </>

  )
}

export default ClientLogin
