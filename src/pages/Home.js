import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: 'url(/house2.png)' }}>
        <div className="hero-content">
          <h1>Welcome to AlterFlock</h1>
          <p>Join the waitlist and start investing in real estate with us.</p>
          <Link to="/Interest" className="join-btn">
            Join the Flock!
          </Link>
        </div>
      </div>
      <Element name="about" className="about-section">
        <h2>About Us</h2>
        <p>Democratizing real estate investing for everyone.</p>
        {/* Additional content */}
      </Element>
      <Element name="opportunities" className="opportunities-section">
        <h2>Investment Opportunities</h2>
        <Slider {...sliderSettings}>{/* Slide items */}</Slider>
      </Element>
      <Element name="technology" className="technology-section">
        <h2>Technology and Data Analytics</h2>
        <p>At the core of AlterFlock is our cutting-edge technology...</p>
        {/* Additional content */}
      </Element>
    </div>
  );
}

export default Home;
