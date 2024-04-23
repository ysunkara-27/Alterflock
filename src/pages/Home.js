import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaUserPlus, FaSearch, FaDollarSign, FaChartLine, FaRegMoneyBillAlt } from 'react-icons/fa';
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
          <p>Reimagining Property Investment Through Accessible Crowdfunding</p>
          <p>Join the waitlist and start investing with us</p>
          <Link to="/Interest" className="join-btn">
            Join the Flock!
          </Link>
        </div>
      </div>
      <Element name="how-it-works" className="how-it-works-section">
        <h1>How It Works</h1>
        <div className="steps-container">
          <div className="step">
            <FaUserPlus size={50} className="step-icon" />
            <h2>Sign Up</h2>
            <p>Create your account quickly and easily to join our community of investors.</p>
          </div>
          <div className="step">
            <FaSearch size={50} className="step-icon" />
            <h2>Browse Opportunities</h2>
            <p>Explore a curated list of properties with detailed insights.</p>
          </div>
          <div className="step">
            <FaDollarSign size={50} className="step-icon" />
            <h2>Invest</h2>
            <p>Choose how much you want to invest—from as little as $10.</p>
          </div>
          <div className="step">
            <FaChartLine size={50} className="step-icon" />
            <h2>Track Progress</h2>
            <p>Monitor your investment through our platform. Get real-time updates on property status.</p>
          </div>
          <div className="step">
            <FaRegMoneyBillAlt size={50} className="step-icon" />
            <h2>Receive Returns</h2>
            <p>Earn dividends or get your share of the profit when the property is sold.</p>
          </div>
        </div>
      </Element>
      <Element name="opportunities" className="opportunities-section">
        <h2>Potential Investment Opportunities</h2>
        <Slider {...sliderSettings}>{/* Slide items */}</Slider>
      </Element>
      <Element name="technology" className="technology-section">
        <h2>Technology and Data Analytics</h2>
        <p>At AlterFlock, we are developing our use of technology and data analytics. By collaborating with builders and property owners eager to connect with investors, we streamline the process of identifying and securing promising investment opportunities. Our approach ensures that every investment is straightforward and transparent, setting the stage for smarter real estate decisions. </p>
        <br></br>
        <p>Hi, I'm Yashaswi Sunkara, a first-year student at UVA interested in the intersections of Computer Science, Public Policy, and Finance. Driven by a desire to make real estate investing more accessible, I started working on AlterFlock. Our platform is dedicated to opening up property investment opportunities to everyone, no matter the size of their wallet. Join us in democratizing investment, one property at a time.</p>
      </Element>
    </div>
  );
}

export default Home;
