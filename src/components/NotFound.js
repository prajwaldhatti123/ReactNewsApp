import React, { Component } from "react";
import { Link } from "react-router-dom";
import errorLogo from "../assets/error.jpg";

export default class NotFoundPage extends Component {
  render() {
    const { mode } = this.props;
    console.log(mode);
    return (
      <div
        className={`container bg-${mode === "dark" ? "transparent" : "black"}`}
      >
        <div
          className={`min-vh-100 d-flex justify-content-center align-items-center bg-${
            mode === "dark" ? "transparent" : "black"
          }`}
        >
          <div className="text-center">
            <img
              src={errorLogo}
              alt="404 Not Found"
              className="img-fluid mb-4"
              style={{
                maxWidth: "100%",
                backgroundColor: "transparent",
              }}
            />
            <div className={`text-${mode === "dark" ? "dark" : "white"}`}>
              <h1 className="display-4 mb-4 ">404 - Page Not Found</h1>
              <p className="lead mb-5">
                Sorry, the page you are looking for could not be found.
              </p>
            </div>
            <Link to="/" className="btn btn-primary btn-lg">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
