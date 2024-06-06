import React from 'react';
import './AboutUs.css';  // Ensure you have the correct path for your CSS

// You will need to replace 'avatarUrl' with the actual path to the images for each cofounder
const cofounders = [
  {
    name: "Yashaswi Sunkara",
    title: "CEO",
    image: 'path_to_Yashaswi_image.jpg',
    description: `Yashaswi Sunkara is a rising second-year student at the University of Virginia, aiming to major in Computer Science and Public Policy, with minors in Economics and Entrepreneurship. ReNest started as just an idea in his mind to develop a real-estate crowdfunding platform (AlterFlock), but pivoted when the team was developed at a UVA Social Entrepreneurship Bootcamp. He is deeply engaged in understanding how technology can influence government policy and economic strategies. Yash also likes to pursue various computer science passion projects outside of his academic pursuits, and he enjoys pickleball, running, and cherishes his downtime spent sleeping.`
  },
  {
    name: "Semony Shah",
    title: "CIO",
    image: 'path_to_Semony_image.jpg',
    description: `Semony Shah is a rising second-year student at the University of Virginia, pursuing degrees in Economics and Spanish with a minor in Social Entrepreneurship. She is deeply passionate about sustainable business practices that drive social change. As a co-founder of ReNest, Semony is dedicated to promoting affordable housing through impact investing, ensuring that property acquisition is more accessible for marginalized families. Outside of her entrepreneurial endeavors, Semony enjoys golfing, traveling, and reading classic novels. Her commitment to creating positive social impact through sustainable business solutions is matched by her enthusiasm for exploring new cultures and experiences.`
  },
  {
    name: "Neha Amarnath",
    title: "CFO",
    image: 'path_to_Neha_image.jpg',
    description: `Neha Amarnath is a rising second-year student at the University of Virginia, majoring in Statistics with a concentration in Finance and Business. She is excited about the mission of ReNest, particularly its social impact and innovative approach to affordable housing. In her free time, Neha loves visiting coffee shops, reading, and playing the flute. Passionate about making a difference, she aims to leverage her skills in finance and statistics to contribute to ReNest's mission and help create sustainable, inclusive communities.`
  },
  {
    name: "Nitya Varigala",
    title: "COO",
    image: 'path_to_Nitya_image.jpg',
    description: `Details about Nitya Varigala...` // Complete this based on actual information
  }
];

function AboutUs() {
  return (
    <div className="about-us">
      <div className="problem-statement">
        <h1>Our Mission</h1>
        <p>At ReNest, we are dedicated to solving the housing crisis by making property acquisition more accessible through innovative real estate crowdfunding. We aim to empower communities by creating affordable, sustainable housing options for marginalized families.</p>
      </div>
      <div className="cofounder-section">
        {cofounders.map((cofounder, index) => (
          <div key={index} className="cofounder">
            <img src={cofounder.image} alt={cofounder.name} className="cofounder-image"/>
            <h2>{cofounder.name}</h2>
            <h3>{cofounder.title}</h3>
            <p>{cofounder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
