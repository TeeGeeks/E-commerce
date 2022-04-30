import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes["footer-col"]}>
            <h4>company</h4>
            <ul>
              <li>
                <Link className={classes.link} to="/about-us">
                  about us
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/our-services">
                  our services
                </Link>
              </li>
              <li>
                <Link to="/private-policy" className={classes.link}>
                  private policy
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-col"]}>
            <h4>online shopping</h4>
            <ul>
              <li>
                <Link className={classes.link} to="/fruits">
                  fruits
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/vegetables">
                  vegetables
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/corn">
                  corn
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-col"]}>
            <h4>get help</h4>
            <ul>
              <li>
                <Link className={classes.link} to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/shipping">
                  shipping
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/orders">
                  orders
                </Link>
              </li>
              <li>
                <Link className={classes.link} to="/payment-option">
                  payment options
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes["footer-col"]}>
            <h4>follow us</h4>
            <div>
              <Link className={classes.social_link} to="/">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
