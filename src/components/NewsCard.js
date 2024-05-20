import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default class NewsCard extends Component {
  render() {
    let {
      mode,
      title,
      description,
      imageUrl,
      newsUrl,
      author,
      publishDate,
      source,
    } = this.props;
    return (
      <div className="my-3">
        <div
          className={`card bg-transparent border-${
            mode === "dark" ? "light" : "dark"
          }`}
        >
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "95%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="not found"
            height={"300px"}
          />
          <div className="card-body" style={{ height: "250px" }}>
            <h5
              className={`card-title text-${
                mode === "dark" ? "white" : "dark"
              }`}
            >
              {" "}
              {title}
            </h5>
            <p
              className={`card-text text-${
                mode === "dark" ? "white" : "muted"
              }`}
            >
              {description.slice(0, 100)}
            </p>
            <div
              className={`justify-content-end text-${
                mode === "dark" ? "white" : "dark"
              }`}
            >
              By {author ? author : "unknown"}
              &nbsp; on {new Date(publishDate).toGMTString()}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-start bg-transparent border-0">
            <a href={newsUrl} target="__blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
