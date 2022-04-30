import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import HeaderCartButton from "../UI/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig/Firebase";
import { AuthContext } from "../../store/auth-context";

function Header(props) {
  const [click, setClick] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      navigate("/sign-in");
      // window.location.pathname = "/sign-in";
    });
  };

  // const signUserOut = () => {
  //   signOut(auth).then(() => {
  //     localStorage.clear();
  //     navigate("/sign-in");
  //     // window.location.pathname = "/sign-in";
  //   });
  // };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          TeeGeeks
          <i className="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "active" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          {currentUser && (
            <li className="nav-item">
              <NavLink
                to="/add-products"
                className={(navData) =>
                  navData.isActive ? "active" : "nav-links"
                }
                onClick={closeMobileMenu}
              >
                Add Products
              </NavLink>
              {/* <i onClick={toggleMobileMenu} className="fas fa-caret-down" /> */}
              {/* {dropdown && <Dropdown />} */}
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/services"
              className={(navData) =>
                navData.isActive ? "active" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className={(navData) =>
                navData.isActive ? "active" : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>

          <div className="nav-item-button">
            {!currentUser ? (
              <NavLink
                style={{ textDecoration: "none" }}
                to="/sign-in"
                className="login-icon"
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                style={{ textDecoration: "none" }}
                to="/sign-in"
                onClick={signUserOut}
                className="login-icon"
              >
                Logout
              </NavLink>
            )}

            <HeaderCartButton onClick={props.onShow} />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Header;
