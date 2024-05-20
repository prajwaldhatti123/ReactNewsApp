import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default class Navbar extends Component {
  state = {
    lightMode: true,
  };

  // mode toggle function
  toggle = (changeMode) => {
    if (this.state.lightMode) {
      this.setState({
        lightMode: false,
      });
      changeMode("dark");
    } else {
      this.setState({
        lightMode: true,
      });
      changeMode("light");
    }
  };
  render() {
    const { mode, changeMode } = this.props;
    return (
      <div className="  d-flex  justify-content-center">
        <div className="container mt-4  mx-0  ">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  to="/"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="/health"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/science"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Science
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className={`nav-link px-2 text-${
                    this.state.lightMode ? "black" : "white"
                  }`}
                >
                  Technology
                </Link>
              </li>
            </ul>

            <form
              className="col-16 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className={`form-control form-control-transparent text-bg-transparent text-${
                  this.state.lightMode ? "dark" : "light"
                }
                `}
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <div className="darkMode px-2 mb-2">
              <button
                className="btn btn-transparent "
                onClick={(e) => {
                  e.target.blur();
                  this.toggle(changeMode);
                }}
              >
                <i className="theme-icon" style={{ fontSize: "2rem" }}>
                  {mode === "light" ? (
                    <MdOutlineDarkMode />
                  ) : (
                    <MdLightMode style={{ color: "white" }} i />
                  )}
                </i>
              </button>
            </div>

            <div className="text-end">
              <button
                type="button"
                className={`btn ${
                  this.state.lightMode
                    ? "btn-outline-dark"
                    : "btn-outline-light"
                } me-2`}
              >
                Login
              </button>
              <button
                type="button"
                className={`btn ${
                  this.state.lightMode ? "btn-warning" : "btn-primary"
                }`}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
