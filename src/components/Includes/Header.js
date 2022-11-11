import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header navbar navbar-expand-lg position-sticky">
      <div className="container-fluid d-flex">
        <div className="d-flex col-sm-3 header__firstSection">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="" role="button">
              <i class="fa fa-bars toggle__Icon" aria-hidden="true"></i>
            </span>
          </button>
          <Link to="/" className="navbar-brand d-flex">
            <img
              className=" img-responsive header__logo "
              src="https://i.postimg.cc/RVJ2RJfq/navbar-Icon.jpg"
              alt="HeaderLogo"
            />
            <h4 className="nav-text pt-3 text-light">
              Savvy <br /> Accessories
            </h4>
          </Link>
        </div>

        <div
          className=" ml-3 collapse navbar-collapse navbarSupportedContent col-sm-5 header__secondSection p-2"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto nav__ul">
            <li className="nav-item header__navitem">
              <a className="nav-link btn btn-light border m-2">Deals</a>
            </li>
            <li className="nav-item header__navitem">
              <a className="nav-link btn btn-light border m-2">Categories</a>
            </li>
            <li className="nav-item header__navitem">
              <a className="nav-link btn btn-light border m-2">Products</a>
            </li>
            <li className="nav-item header__navitem">
              <a className="nav-link btn btn-light border m-2">Contact</a>
            </li>
          </ul>
        </div>
        <div className="d-flex col-sm-3 header__thirdSection">
          <Link className="btn btn-danger headerLink" to={!user && "/login"}>
            <div
              onClick={handleAuthentication}
              className="header__options greetingSigninButton d-flex flex-column"
            >
              <span className="d-flex text-decoration-none">
                Hello {user ? user.email : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link
            to="/checkout"
            className="justify-content-sm-center d-inline-block "
          >
            <div className="header__optionBasket d-flex p-3 m-3">
              <ShoppingBasket />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
