import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Dashboard() {
  useEffect(() => {
    AOS.init({
      duration: 2000,  // Global duration of animations in milliseconds
      once: true       // Only animate elements once when they scroll into view
    });
  }, []);

  const settings = {
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Element name="hero" className="hero-section" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>        
        <h1>Welcome to AlterFlock</h1>
        <p>We're revolutionizing the way everyday people invest in real estate, making it more accessible, transparent, and impactful. With a minimum investment as low as $10, you can be part of something big. Dive into a world where your investments directly contribute to the development of thriving communities and substantial economic growth. Discover more about how you can make a real impact with AlterFlock. Join us, and let's redefine real estate investing together.</p>
      </Element>
      <Element name="about" className="about-section" data-aos="fade-up">
        <h2>About Us</h2>
        <p>At AlterFlock, we're driven by a simple, powerful mission: to democratize real estate investing. Founded by a UVA student with a dream of making real estate investment accessible, our platform is designed to make real estate investment accessible to everyone, not just the affluent. Our vision is to build a transparent platform that fosters community growth and financial empowerment. Through AlterFlock, we are committed to providing our investors with the tools they need to succeed, backed by the trust and integrity of our expert team. Join us on this journey to transform the real estate landscape.</p>
      </Element>
      <Element name="opportunities" className="opportunities-section" data-aos="fade-up">
        <h2>Investment Opportunities</h2>
        <Slider {...settings}>
          {/* Each of these divs represent one slide */}
          <div><img src="/path-to-your-image-1.jpg" alt="Opportunity 1" /></div>
          <div><img src="/path-to-your-image-2.jpg" alt="Opportunity 2" /></div>
          <div><img src="/path-to-your-image-3.jpg" alt="Opportunity 3" /></div>
          {/* More slides as needed */}
        </Slider>
      </Element>
      <Element name="technology" className="technology-section" data-aos="fade-up">
        <h2>Technology and Data Analytics</h2>
        <p>At the core of AlterFlock is our cutting-edge technology and robust data analytics, which are integral to the way we select and manage investment opportunities.</p>
      </Element>
    </div>
  );
}

export default Dashboard;
