import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Includes/Header";
import Home from "./components/Pages/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Footer from "./components/Includes/Footer";

const promise = loadStripe(
  "pk_test_51JilxLDjEG3jzy2Q8a1e2eOMoy9p8C0yHd0HnszGFgQ9Q4GsOzYYC5Gtmkp1TuPpIcO8GtN4saQDa5cGIaZvEx2m002uKhRsDO"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in or was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the use is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
