import { useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Index";
import Main from "./components/Main/Index";
import Navbar from "./components/Navbar/Index";
import RegistrationForm from "./components/RegistrationForm/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Index";

function App() {
  const user = useSelector((state) => state.user);

  //I'll use this later for the protected routes :)
  const isLogged = user ? true : false;

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
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
