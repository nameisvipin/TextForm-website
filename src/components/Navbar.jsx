import React from "react";
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default function Navbar(prop) {
  let mode1;
  let mode2;
  let mode3;
  if(prop.mode==='light'){
    mode1 = 'light';
    mode2='Enable Dark Mode'
    mode3='dark'
  }else{
    mode1 = 'dark';
    mode2='Enable Light Mode'
    mode3='light'
  }
  return (
    <nav className={`navbar navbar-${mode1} navbar-expand-lg bg-${mode1}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/textform">
          {prop.Title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textform">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${mode3}`}>
            <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode2}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes={Title: PropTypes.string}
// Navbar.propTypes = {
//   Title: PropTypes.string
// };
// Navbar.defualtProps={
//   Title: 'set title here'
// };
