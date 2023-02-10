import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Alogin = () => {
  return (
    <>
      <form action="">
        <div>
          <h2>Sign In As Advisor</h2>
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
                  <RiLockPasswordFill/>
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
          <button type="submit">Forgot Password</button>
        </div>

        <div className="RememberMe_container">
          <div className="icon_container">
            <TiTick />
          </div>

          <button type="submit">Remember Me</button>
        </div>
      </form>
    </>
  );
};

export default Alogin;
