import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./Login.css";
import Validation from "../Authentications/Validation";

function Login() {
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const gotoregister = (e) => {
    e.preventDefault();

    history.push("/register");
  };

  const signIn = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    //some fancy firebase stuff happens
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => "");
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://i.postimg.cc/RVJ2RJfq/navbar-Icon.jpg"
          className="login__logo"
          alt="Login Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Savvy Accessories's Conditions of Use &
          Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads
        </p>

        <button onClick={gotoregister} className="login__registerButton">
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
