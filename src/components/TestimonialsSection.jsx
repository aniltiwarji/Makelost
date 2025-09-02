import React from "react";

function TestimonialsSection() {
  return (
    <section>
      <div className="container" style={{ background: "white" }}>
        <div className="id">
          <p>TESTIMONIALS</p>
          <h1>Our Happy Clients!</h1>
          <p style={{ border: "2px solid rgb(255, 255, 255)", margin: "auto", width: "70px", boxShadow: "0 0 20px blue" }}></p>
        </div>
        <div className="box d-flex">
          <div className="box-1">
            <p>The Friendly and knowledgeable staff was very helpful in getting our project off the ground. We honestly couldn't have done it without them.</p>
            <div className="ds-flex file">
              <img src="image/member1.webp" alt="" />
              <p>Jason M. <br /> Clarity Furniture</p>
            </div>
            <i className="bi bi-quote" style={{ display: "inline-block", transform: "rotate(180deg)" }}></i>
          </div>

          <div className="box-1">
            <p>Demand for our massage services has more than doubled since our website went live. We never dreamed we could achieve this kind of engagement.</p>
            <div className="ds-flex file">
              <img src="image/member3.webp" alt="" />
              <p>Tracy S. <br /> Pink Flower Massage</p>
            </div>
            <i className="bi bi-quote" style={{ display: "inline-block", transform: "rotate(180deg)" }}></i>
          </div>

          <div className="box-1">
            <p>I have been putting off getting a website for years. I really like the services offered. The whole process was painless and I wholeheartedly recommend their service.</p>
            <div className="ds-flex file">
              <img src="image/member2.webp" alt="" />
              <p>Mark T. <br /> Big Sals Pizzaria</p>
            </div>
            <i className="bi bi-quote" style={{ display: "inline-block", transform: "rotate(180deg)" }}></i>
          </div>
        </div>

        <div className="ds-flex resource">
          <div>
            <h1>LEARNING RESOURCES</h1>
            <p style={{ border: "1px solid rgb(24, 23, 23)", width: "60px", marginTop: "15px" }}></p>
          </div>
          <a href="/resources">
            <button>SEE ALL RESOURCES</button>
          </a>
        </div>

        <div className="blog-card d-flex">
          <div className="blog-meta-1">
            <div className="blog">
              <h2>July 2, 2025 <span style={{ paddingLeft: "20px" }}> by MakeLots</span></h2>
              <h3>Twitter Strategies for Small Business: Grow Your Brand One Tweet at a Time</h3>
            </div>
          </div>

          <div className="blog-meta-2">
            <div className="blog blog-b">
              <h2>July 1, 2025 <span style={{ paddingLeft: "20px" }}> by MakeLots</span></h2>
              <h3>Boost Engagement on Instagram Stories: Proven Strategies for Businesses and Creators</h3>
            </div>
          </div>

          <div className="blog-meta-3">
            <div className="blog">
              <h2>June 30, 2025 <span style={{ paddingLeft: "20px" }}>by MakeLots</span></h2>
              <h3>Small Business TikTok Content Ideas: What to Post to Grow Your Brand</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
