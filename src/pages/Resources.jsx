import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Resources = () => {
  return (
    <div className="resource-page">
      <div className="resource-p">
        <h1>404</h1>
        <div className="ds-flex">
          <img
            src="https://www.makelots.com/wp-content/themes/phlox/css/images/svg/404.svg"
            alt="404"
          />
          <div>
            <h2>Oops! Page Not Found</h2>
            <p>
              It seems we can’t find what you’re looking for. Perhaps searching
              can help.
            </p>
          </div>
        </div>

        <div className="search-box">
          <input type="text" placeholder="search............" />
          <i className="bi bi-search"></i>
        </div>

        <p>
          ← <Link to="/"> Bring me back home </Link>
        </p>
      </div>
    </div>
  );
};

export default Resources;
