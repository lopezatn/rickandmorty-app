import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Index";
import Main from "./components/Main/Index";
import Navbar from "./components/Navbar/Index";
import RegistrationForm from "./components/RegistrationForm/Index";
import Profile from "./components/Profile/Index";
import Config from "./components/Config/Index";
import ProtectedRoute from "./components/ProtectedRoute/Index";
import CharSelection from "./components/CharSelection/Index";

function App() {
  const user = useSelector((state) => state.user);

  const isLogged = user ? true : false;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register">
          <RegistrationForm />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/main">
          <Main />
        </Route>
        <ProtectedRoute
          exact
          path="/character-selection"
          component={CharSelection}
          isAuthenticated={isLogged}
        />
        <ProtectedRoute
          exact
          path="/profile"
          component={Profile}
          isAuthenticated={isLogged}
        />
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/config">
          <Config />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
