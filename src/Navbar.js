import React from "react";
import icon from "./images/Google.png";
import "./index.css";
import Home from "./Home";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
     <img src={icon} alt="googlesheeticon" />
      <h1>keep</h1>
      <nav>
     <Link to="/" className="links">Home</Link>
     <Link to="/posts" className="links">Posts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
