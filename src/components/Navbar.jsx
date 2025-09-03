import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav d-flex container">
        
          <img src="/image/MAKELOTS-logo-1.webp" alt="Logo" />
        

        <div className="ul">
          <ul className="d-flex">
            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/mission">Mission Statement</Link>
            </li>
            <li>
              <Link to="/learning">Learning Resources</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
