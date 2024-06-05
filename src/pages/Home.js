import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaUserPlus, FaSearch, FaDollarSign, FaChartLine, FaRegMoneyBillAlt } from 'react-icons/fa';
import './Home.css';


function Home() {
  const [housingStats, setHousingStats] = useState([]);
  // Assuming you've already defined your `properties` array here

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // Function to fetch housing statistics
    async function fetchHousingStats() {
      try {
        const response = await axios.get('/api/housing-stats');
        setHousingStats(response.data); // Assuming the API returns an array of stats
      } catch (error) {
        console.error('Error fetching housing stats:', error);
        // Optionally, set default or cached stats on error
      }
    }

    fetchHousingStats(); // Call the function to fetch stats
  }, []);
  
  const properties = [
    {
      imageUrl: "/houseslider.jpg",
      title: "Modern Apartment",
      description: "A stunning modern apartment in the heart of the city. Ideal for small families."
    },
    {
      imageUrl: "/houseslider2.jpg",
      title: "Luxury Villa",
      description: "Experience the opulence of our luxury villas. Perfect for those who enjoy the finer things in life."
    },
    {
      imageUrl: "/townhomeslider.jpg",
      title: "Townhome",
      description: "A cozy cottage in the countryside, perfect for weekend getaways."
    }
    // Add more properties as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };

  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: 'url(/house2.png)' }}>
        <div className="hero-content">
          <h1>Welcome to ReNest</h1>
          <p>    </p>
          <p>Join the waitlist and start investing with us</p>
          <Link to="/Interest" className="join-btn">
            Join the Nest!
          </Link>
        </div>
      </div>
      <Element name="how-it-works" className="how-it-works-section">
        <h1>How It Works</h1>
        <div className="steps-container">
          <div className="step">
            <FaUserPlus size={50} className="step-icon" />
            <h3>Sign Up</h3>
            <p>Create your account quickly and easily to join our community of investors.</p>
          </div>
          <div className="step">
            <FaSearch size={50} className="step-icon" />
            <h3>Browse Opportunities</h3>
            <p>Explore a curated list of properties with detailed insights.</p>
          </div>
          <div className="step">
            <FaDollarSign size={50} className="step-icon" />
            <h3>Invest</h3>
            <p>Choose how much you want to invest—from as little as $25.</p>
          </div>
          <div className="step">
            <FaChartLine size={50} className="step-icon" />
            <h3>Track Progress</h3>
            <p>Monitor your investment through our platform. Get real-time updates on property status.</p>
          </div>
          <div className="step">
            <FaRegMoneyBillAlt size={50} className="step-icon" />
            <h3>Receive Returns</h3>
            <p>Earn dividends or get your share of the profit when the property is sold.</p>
          </div>
        </div>
      </Element>
      <Element name="opportunities" className="opportunities-section">
        <h1>Potential Investment Opportunities</h1>
        <Slider {...sliderSettings}>
          {properties.map((property, index) => (
            <div key={index} className="property-slide">
              <img src={property.imageUrl} alt={property.title} className="property-image"/>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
            </div>
          ))}
        </Slider>
      </Element>
      <Element name="stats" className="stats-section" data-aos="fade-up">
        <h1>Housing Market Statistics</h1>
        <div className="stats-container">
          {/* Assume housingStats is an array of objects like { title: 'Fed Interest Rates', trend: 'UP', description: '...'} */}
          {housingStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h2>{stat.title}</h2>
              <p>{stat.trend}</p>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </Element>
      <Element name="technology" className="technology-section">
        <h1>Technology and Data Analytics</h1>
        <p>At AlterFlock, we are developing our use of technology and data analytics. By collaborating with builders and property owners eager to connect with investors, we streamline the process of identifying and securing promising investment opportunities. Our approach ensures that every investment is straightforward and transparent, setting the stage for smarter real estate decisions. </p>
        <br></br>
        <p></p>
      </Element>
    </div>
  );
}

export default Home;
