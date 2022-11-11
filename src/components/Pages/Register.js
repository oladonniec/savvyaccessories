import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import { auth, db } from "../../firebase";
import Validation from "../Authentications/Validation";

function Register() {
  const history = useHistory();
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [errors, setErrors] = useState({});

  const register = (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    //some  firebase code goes here
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        // it successfuly created a user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://i.postimg.cc/RVJ2RJfq/navbar-Icon.jpg"
        />
      </Link>

      <div className="register__container">
        <h3>Create Your Account</h3>
        <form>
          <h5>Full Name</h5>

          <input
            type="name"
            name="fullname"
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}

          <h5>Email</h5>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <h5>Confirm Email </h5>
          <input
            type="email"
            name="confirmEmail"
            value={values.confirmEmail}
            onChange={handleChange}
          />
          {errors.confirmEmail && (
            <p className="error">{errors.confirmEmail}</p>
          )}

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <h5>Confirm Password</h5>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button onClick={register} className="register__button">
            Create Account
          </button>
        </form>
        <p>
          By creatin and account, you agree to Savvy Accessories's Conditions of
          Use & Sale. Please see our Privacy Notice, Our Cookies Notice and our
          Interest-Based Ads
        </p>
      </div>
    </div>
  );
}

export default Register;
