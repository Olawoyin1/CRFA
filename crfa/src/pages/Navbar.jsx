import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar container navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="../Images/crfa_logo.png"
              className="img-fluid logo-img"
              alt=""
            />
            <h2 className="fw-bold mt-2">CRFA</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/news">
                  NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/players">
                  PLAYERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
