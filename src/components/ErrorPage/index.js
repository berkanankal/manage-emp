import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404 mb-5">
          <h1>404</h1>
        </div>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to="/">Go To Homepage</Link>
      </div>
    </div>
  );
};

export default index;