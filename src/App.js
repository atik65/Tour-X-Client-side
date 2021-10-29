import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirebaseContext from "./contexts/FirebaseContext";
import Login from "./pages/login/Login";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AllTours from "./pages/allTours/AllTours";

function App() {
  return (
    <>
      <FirebaseContext>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/alltours" component={AllTours} />
          </Switch>
        </Router>
      </FirebaseContext>
    </>
  );
}

export default App;
