import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{width:"100%"}}>
        <div class="container-fluid">
          <div class="navbar-brand" to="#">
            Navbar
          </div>
        </div>

        <Link
          class="navbar-brand"
          style={{ position: "absolute", left: "100px" }}
          exact
          to="/"
        >
          Home
        </Link>

        <Link
          class="navbar-brand"
          style={{ position: "absolute", left: "180px" }}
          to="/Reviews"
        >
          Reviews
        </Link>
      </nav>
    </>
  );
}

export default Navbar;