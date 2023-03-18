import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="logo">
              {/* <Link to={/}>Home</Link> */}
              Navbar
            </div>
          </div>
        </div>
      </div>

      <nav></nav>
    </header>
  );
};

export default Navbar;
