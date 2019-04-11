import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ReactDom from "react-dom";
import Test from "./test";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
         <Link to="/">Home</Link> 
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link " href="#">
              <Link to="/create-trip">Create trip</Link>
            </a>
            {/* <a class="nav-item nav-link" href="#">
              <Link to="/test">My trip</Link>
            </a> */}
            <a class="nav-item nav-link" href="#">
              <Link to="/tripList">Trips</Link>
            </a>
            <a class="nav-item nav-link" href="#">
              <Link to="/aboutUs">About Us</Link>
            </a>
            <a class="nav-item nav-link" href="#">
             <Link to="/login"> Login</Link>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
