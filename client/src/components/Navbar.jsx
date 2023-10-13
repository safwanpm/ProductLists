import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-0 py-3"
        id="nav-nav"
      >
        <div className="container-xl">
          {/* Logo */}
          <h1 className="navbar-brand text-warning" href="#">
            <span className="text-danger">E</span>lectronis
          </h1>

          {/* Navbar toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <div className="navbar-nav mx-lg-auto">
              <Link to= {'/'}
                className="nav-item nav-link active"
                
                aria-current="page"
              >
                Home
              </Link>
              <Link to={'/add-categories'}
                className="nav-item nav-link active"
                aria-current="page"
              >
                Category
              </Link>
              <a
                className="nav-item nav-link active"
                href="/add-sub_category"
                aria-current="page"
              >
                Sub Category
              </a>
              <a
                className="nav-item nav-link active"
                href="/add-product"
                aria-current="page"
              >
                Product
              </a>
              

              
            </div>
            {/* Right navigation */}
            {/* <div className="navbar-nav ms-lg-4">
                <a className="nav-item nav-link"  >
                  Sign in
                </a>
              </div> */}
            {/* Action */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
