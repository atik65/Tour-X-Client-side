import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirebaseContext from "./contexts/FirebaseContext";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <FirebaseContext>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </FirebaseContext>
    </>
  );
}

export default App;
