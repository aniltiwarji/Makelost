// src/pages/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  return (
    <>
     <div className="container">
      <div className="nate">
        <a href="/">HOME</a> <span> &gt; Portfolio</span>
        <h2>Portfolio</h2>
      </div>

      {/* Portfolio Images */}
      <div className="portfolio-width">
        <div className="portfolio">
          {Array.from({ length: 15 }).map((_, index) => (
            <img
              key={index}
              src={`image/po-${index + 1}.webp`}
              alt={`Portfolio ${index + 1}`}
            />
          ))}
        </div>

        {/* Request Quote Section */}
        <div className="portfolio-request">
          <div className="folio d-flex">
            <div>
              <p>Have a Project in your mind??</p>
              <h1>Request Quote</h1>
            </div>
            <div>
              <a
                href="https://www.makelots.com/request-quote/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  Request Quote <i className="bi bi-file-earmark-break"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Portfolio;
