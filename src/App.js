import "./App.css";
import Login from "./components/Login/Index";
import Main from "./components/Main/Index";
import Navbar from "./components/Navbar/Index";
import RegistrationForm from "./components/RegistrationForm/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
