import React from "react";

function Header() {
  return (
    <section>
      <div className="container">
        <div className="section-1">
          <img src="/image/home.png" alt="home" />
          <a href="/donate">
            <button>DONATE NOW</button>
          </a>
        </div>
    

        <div className="d-flex dis-flex level-1">
          <div className="left-1">
            <img src="/image/bottom-image-small.jpg" alt="mission" />
          </div>
          <div className="right-1">
            <p>
              <span className="highlight">Our mission</span> is to empower
              fledgling business owners by providing them with professional,
              high-quality websites at an affordable cost. We strive to level
              the playing field and give small business owners the tools they
              need to succeed in today’s digital age and unleash their full
              potential.
            </p>

            <p>
              Our clients are at the heart of everything we do. We’re dedicated
              to providing personalized, attentive service to each and every one
              of our clients, and believe that
              <span className="highlight">
                {" "}
                building strong relationships is the key to our success.
              </span>{" "}
              Moreover, we believe in building websites that are sustainable and
              scalable, ensuring that our clients are able to achieve their
              long-term goals.
            </p>
          </div>
        </div>

        <p className="para">
          In addition to our services, we also extend a helping hand to
          businesses in need. Over time, we’ve graciously donated numerous
          websites to business owners just like you. If you require financial
          assistance for your new business website, please don’t hesitate to get
          in touch.{" "}
          <span className="highlight">
            We’re wholeheartedly dedicated to your success!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Header;
