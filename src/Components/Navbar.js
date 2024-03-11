import React from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{width:"100%"}}>
        <div class="container-fluid">
          <div class="navbar-brand" to="#">
            ReviewApp
          </div>
        </div>

        <NavLink
          class="navbar-brand"
          style={{ position: "absolute", left: "150px" }}
          exact
          to="/ReviewWebsite"
        >               
          Home
        </NavLink>

        <NavLink
          class="navbar-brand"
          style={{ position: "absolute", left: "250px" }}
          to="/Reviews"
        >       
          Reviews
        </NavLink>
      </nav>
      
    </>
  );
}

export default Navbar;