import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";

function AboutSection() {
  return (
    <section className="container">
      {/* Video + text points */}
      <div className="a-video">
        <div className="video ds-flex dis-flex">
          {/* ✅ Video from public/videos/videom4.mp4 */}
          <video
            src="/video/videom4.mp4"
            controls
            width="30%"
            autoPlay
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>

          <div className="mp4">
            <div className="ds-flex">
              <i className="bi bi-arrow-right-short"></i>
              <p>We work with you from start to finish of your website.</p>
            </div>
            <div className="ds-flex">
              <i className="bi bi-arrow-right-short"></i>
              <p>We are dedicated to making low-cost websites for those in need.</p>
            </div>
            <div className="ds-flex">
              <i className="bi bi-arrow-right-short"></i>
              <p>We will keep your website up to date and protected.</p>
            </div>
            <div className="ds-flex">
              <i className="bi bi-arrow-right-short"></i>
              <p>
                We guarantee you will love your new website. We are dedicated to
                making your launch a success!
              </p>
            </div>
            <div className="design">
              <p>See our Design Options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background image */}
      <div className="bg-img">
        {/* ✅ image from public/image/office.png */}
        <img src="/image/office.png" alt="Office" />
      </div>

      {/* About Us content */}
      <div className="level-2 d-flex dis-flex">
        <div className="left-2">
          <h4>We're a community of tech-savvy dreamers and doers.</h4>
          <h1>ABOUT US</h1>
          <p className="line-separator"></p>
          <p>
            Make Lots Foundation is more than just a web development company
            that is founded to give small business owners a chance to have a
            professionally designed website without breaking the bank.
          </p>
          <p>
            We're a community of tech-savvy dreamers and doers, united in our
            passion for helping small business owners succeed. Our team of
            experienced developers is dedicated to providing top-notch services
            and creating websites that meet the unique needs of our clients.
          </p>
          <p>
            We believe that every small business deserves a website that
            reflects the quality of its products and services, and that's why
            we're committed to delivering high-quality websites that are both
            functional and aesthetically pleasing.
          </p>
          <p>
            Our commitment to education and empowerment sets us apart and makes
            us more than just a provider of web development services, it makes
            us a partner in the success of small businesses everywhere.
          </p>
          <p>
            Are you ready to take your business to the next level? Let’s join hands!
          </p>
          <a
            href="https://demo.phlox.pro/free-business/services/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>READ MORE</button>
          </a>
        </div>
        <div className="right-2">
          {/* ✅ image from public/image/girl-photo.webp */}
          <img src="/image/girl-photo.webp" alt="Girl" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
