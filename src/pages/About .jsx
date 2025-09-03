// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="nate">
        <a href="/">HOME</a> <span> &gt; About - Us</span>
        <h2>About - Us</h2>
      </div>

        <div className="about ds-flex">
          <div className="left-a">
            <a href="/">ABOUT THE COMPANY</a>
            <h1>MAKE LOTS</h1>
            <p>
              Make Lots Foundation is more than just a web development company
              that is founded to give small business owners a chance to have a
              professionally designed website without breaking the bank.
            </p>
            <p>
              We’re a community of tech-savvy dreamers and doers, united in our
              passion for helping small business owners succeed. Our team of
              experienced developers is dedicated to providing top-notch
              services and creating websites that meet the unique needs of our
              clients.
            </p>
            <p>
              We believe that every small business deserves a website that
              reflects the quality of its products and services, and that’s why
              we’re committed to delivering high-quality websites that are both
              functional and aesthetically pleasing.
            </p>
            <p>
              Our commitment to education and empowerment sets us apart and
              makes us more than just a provider of web development services, it
              makes us a partner in the success of small businesses everywhere.
            </p>
            <p>
              Are you ready to take your business to the next level? Let’s join
              hands!
            </p>
          </div>

          <div className="right-a">
            <img src="/image/about.jpg" alt="About" />
          </div>
        </div>
      
    </div>
  );
};

export default About;
