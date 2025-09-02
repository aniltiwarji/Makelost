import React, { useState } from "react";

function PortfolioSlider() {
  const images = Array.from({ length: 15 }, (_, i) => `/image/po-${i + 1}.webp`);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 3 : prevIndex - 1
    );
  };

  return (
    <section style={{ background: "white" }}>
      <div className="container">
        <div className="portfolio-1">
          <h1>Our Portfolio</h1>
          <p
            style={{
              border: "2px solid #fff",
              width: "70px",
              boxShadow: "0 0 20px blue",
              margin: "auto",
            }}
          ></p>
          <p>Our web design portfolio showcases a diverse range of innovative and visually striking websites tailored to meet the unique needs of our clients. Each project demonstrates our commitment to creating user-friendly, responsive, and aesthetically pleasing designs that leave a lasting impression.</p>
            <p>From sleek e-commerce platforms to captivating corporate websites, our portfolio reflects our expertise in blending cutting-edge technology with creative flair. Explore our showcase to witness how we transform ideas into immersive online experiences that drive engagement and leave a lasting impact.</p>
        </div>

        {/* Slider */}
        <div className="slider">
          
          <div className="slider-images">
            {images.slice(currentIndex, currentIndex + 3).map((img, idx) => (
              <img key={idx} src={img} alt={`Portfolio-1 ${idx}`} />
            ))}
          </div>

          <button className="back" onClick={handlePrev}>
            ⬅
          </button>

          <button className="forward" onClick={handleNext}>
            ➡
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSlider;
