// src/pages/Mission.jsx
import React from "react";

const Mission = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="nate">
        <a href="/">HOME</a> <span> &gt; Mission Statement</span>
        <h2>Mission Statement</h2>
      </div>

      {/* Mission Section */}
      <div className="mission">
        <div className="miss">
          <img src="/image/bottom-image-small.jpg" alt="Mission" />
          <p>
            To empower fledgling business owners by providing them with
            professional, high-quality websites at an affordable cost. We strive
            to level the playing field and give small business owners the tools
            they need to succeed in today’s digital age and unleash their full
            potential.
            <br />
            <br />
            Our clients are at the heart of everything we do. We’re dedicated to
            providing personalized, attentive service to each and every one of
            our clients, and believe that building strong relationships is the
            key to our success. Moreover, we believe in building websites that
            are sustainable and scalable, ensuring that our clients are able to
            achieve their long-term goals.
          </p>
        </div>

        <h4>
          In addition to our services, we also extend a helping hand to
          businesses in need. Over time, we’ve graciously donated numerous
          websites to business owners just like you. If you require financial
          assistance for your new business website, please don’t hesitate to get
          in touch. We’re wholeheartedly dedicated to your success!
        </h4>
      </div>
    </>
  );
};

export default Mission;
