import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FirebaseContext from "./contexts/FirebaseContext";
import Login from "./pages/login/Login";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AllTours from "./pages/allTours/AllTours";
import MyBookings from "./pages/myBookings/MyBookings";
import ManageBookings from "./pages/manageBookings/ManageBookings";
import Error from "./pages/error/Error";

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

            <PrivateRoute path="/mybookings">
              <MyBookings />
            </PrivateRoute>

            <PrivateRoute path="/managebookings">
              <ManageBookings />
            </PrivateRoute>

            <Route path="/alltours" component={AllTours} />

            <Route component={Error} />
          </Switch>
        </Router>
      </FirebaseContext>
    </>
  );
}

export default App;
