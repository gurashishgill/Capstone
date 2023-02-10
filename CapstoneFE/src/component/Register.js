import React from "react";
import "./Register.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa";

const Register = () => {
  return (
    <>
      <form action="">
        <div>
          <h2>Sign Up As Advisor</h2>
          <div className="Cover">
            <div className="column">
              <div className="input_field">
                <div className="icon_container">
                <BsFillPersonFill />
                </div>

                <input type="text" placeholder="FirstName" id="FirstName" />
              </div>
              <div className="input_field">
                <div className="icon_container">
                <AiFillPhone />

                </div>
                <input type="text" placeholder="Phone" id="Phone" />
              </div>
              <div className="input_field">
                <div className="icon_container">

                <RiBuilding4Fill />
                </div>
                <input type="text" placeholder="Company" id="Comapny" />
              </div>
              <div className="input_field">
                <div className="icon_container">
                <FaTelegramPlane />

                </div>
                <input type="text" placeholder="State" id="State" />
              </div>
            </div>

            <div className="column">
              <div className="input_field">
                <div className="icon_container" >

                <BsFillPersonFill />
                </div>
                <input type="text" placeholder="LastName" id="LastName" />
              </div>
              <div className="input_field">
                <div className="icon_container">

                <AiTwotoneMail />
                </div>
                <input type="text" placeholder="Email" id="Email" />
              </div>
              <div className="input_field">
                <div className="icon_container">

                <HiLocationMarker />
                </div>
                <input type="text" placeholder="City" id="City" />
              </div>
              <div className="input_field">
                <div className="icon_container">
                <FaAddressBook />

                </div>
                <input type="text" placeholder="Address" id="Address" />
              </div>
            </div>
          </div>
        </div>
        <div className="button_container">
          <button type="submit">SignUp</button>
        </div>
      </form>
    </>
  );
};

export default Register;
