import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer ds-flex">
          {/* Section 1 */}
          <div className="sec-1">
            <img src="image/MAKELOTS-logo-1.webp" alt="Makelots Logo" />
            <p>
              Empowering Small Businesses to Make Lots of Customers, Clients,
              Leads, Connections and more!
            </p>
          </div>

          {/* Section 2 */}
          <div className="sec-2">
            <h4>USEFUL LINKS</h4>
            <p style={{ borderBottom: "2px solid #00AEEF", width: "15%" }}></p>
            <ul>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/resources">Learning Resources</Link></li>
              <li>
                <a href="https://www.makelots.com/request-quote/" target="_blank" rel="noopener noreferrer">
                  Request A Quote
                </a>
              </li>
              <li><Link to="/portfolio">Our Portfolio</Link></li>
              <li>
                <a href="https://www.makelots.com/website-development-agreement/" target="_blank" rel="noopener noreferrer">
                  Website Development Agreement
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="sec-3">
            <h4>COMPANY</h4>
            <p style={{ borderBottom: "2px solid #00AEEF", width: "15%" }}></p>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>
                <a href="https://www.makelots.com/faqs/" target="_blank" rel="noopener noreferrer">
                  FAQ's
                </a>
              </li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/mission">Mission Statement</Link></li>
              <li>
                <a href="https://www.makelots.com/vision-statement/" target="_blank" rel="noopener noreferrer">
                  Vision Statement
                </a>
              </li>
              <li>
                <a href="https://www.makelots.com/core-values/" target="_blank" rel="noopener noreferrer">
                  Core Values
                </a>
              </li>
              <li>
                <a href="https://www.makelots.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.makelots.com/terms-and-conditions/" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="sec-4">
            <h4>SOCIAL</h4>
            <p style={{ borderBottom: "2px solid #00AEEF", width: "15%" }}></p>
            <div className="icon">
              <a href="https://developers.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://developers.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://developers.google.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-google"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="end">
        <p>© 2023 Makelots All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
