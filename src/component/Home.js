import React from "react";
import "./Home.css";
import "../App.css"


const Home = () => {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <form action="">
            <h2>WELCOME</h2>
            <nav className="main_nav">
              {/*1 logo part*/}
              <div className="logo">
                <h2>
                  <span>M</span>ain
                </h2>
              </div>
              <div className="Menu_link">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">AdvisorRegister</a>
                  </li>
                  <li>
                    <a href="#">Advisorlogin</a>
                  </li>
                  <li>
                    <a href="#">ClientLogin</a>
                  </li>
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                </ul>
              </div>
            </nav>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
