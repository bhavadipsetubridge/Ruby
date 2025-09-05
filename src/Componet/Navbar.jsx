import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow sticky-top">
        <div className="container justify-content-between">
          <a className="navbar-brand" href="/">
            <img src="./Image/logo.png" alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link " href="#">
                  SERVICES
                </a> */}
                <Link className="nav-link" to="/#services">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROTFOLIO
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/portfolio">
                      PROTFOLIO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/portfolio-single">
                      PROTFOLIO-SINGAL
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BLOGS
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      BLOGS ARCHIVE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      BLOGS-SINGAL
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#team">
                  TEAMS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      ERROR 404
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      MAIL SUCCSESS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
