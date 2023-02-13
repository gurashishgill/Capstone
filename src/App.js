import "./App.css";
import Home from "./component/Home";
import AdvisorRegister from "./component/AdvisorRegister";
import Advisorlogin from "./component/Advisorlogin";
import ClientLogin from "./component/ClientLogin";
import Dashboard from "./component/Dashboard";


import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/AdvisorRegister" component={AdvisorRegister} />
        <Route exact path="/Advisorlogin" component={Advisorlogin} />
        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
