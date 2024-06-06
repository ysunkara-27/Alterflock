import React from 'react';
import './AboutUs.css';  // Ensure you have the correct path for your CSS

// You will need to replace 'avatarUrl' with the actual path to the images for each cofounder
const cofounders = [
  {
    name: "Yashaswi Sunkara",
    title: "Chief Executive Officer",
    image: 'path_to_Yashaswi_image.jpg',
    url: "https://www.linkedin.com/in/ysunkara27/",
    description: `Yashaswi Sunkara is a rising second-year student at the University of Virginia, aiming to major in Computer Science and Public Policy, with minors in Economics and Entrepreneurship. ReNest started as just an idea in his mind to develop a real-estate crowdfunding platform (AlterFlock), but pivoted when the team was developed at a UVA Social Entrepreneurship Bootcamp. He is deeply engaged in understanding how technology can influence government policy and economic strategies. Yash also likes to pursue various computer science passion projects outside of his academic pursuits, and he enjoys pickleball, filming YouTube videos, and cherishes his downtime spent sleeping.`
  },
  {
    name: "Semony Shah",
    title: "Chief Investment Officer",
    image: 'Semony Headshot.jpeg',
    url: "https://www.linkedin.com/in/semonyvshah/",
    description: `Semony Shah is a rising second-year student at the University of Virginia, pursuing degrees in Economics and Spanish with a minor in Social Entrepreneurship. She is deeply passionate about sustainable business practices that drive social change. As a co-founder of ReNest, Semony is dedicated to promoting affordable housing through impact investing, ensuring that property acquisition is more accessible for marginalized families. Outside of her entrepreneurial endeavors, Semony enjoys golfing, traveling, and reading classic novels. Her commitment to creating positive social impact through sustainable business solutions is matched by her enthusiasm for exploring new cultures and experiences.`
  },
  {
    name: "Neha Amarnath",
    title: "Chief Financial Officer",
    image: 'Neha Headshot.jpg',
    url: "https://www.linkedin.com/in/ysunkara27/",
    description: `Neha Amarnath is a rising second-year student at the University of Virginia, majoring in Statistics with a concentration in Finance and Business. She is excited about the mission of ReNest, particularly its social impact and innovative approach to affordable housing. In her free time, Neha loves visiting coffee shops, reading, and playing the flute. Passionate about making a difference, she aims to leverage her skills in finance and statistics to contribute to ReNest's mission and help create sustainable, inclusive communities.`
  },
  {
    name: "Nitya Varigala",
    title: "Chf Operations Officer",
    image: 'Nitya Headshot.jpg',
    url: "https://www.linkedin.com/in/ysunkara27/",
    description: `Nitya Varigala is a rising second-year student at the University of Virginia, pursuing degrees in Foreign Affairs and Public Policy/Commerce. She is incredibly passionate about the housing crisis in the United States, specifically regarding housing segregation and the lack of housing affordability. As such, Nitya is excited to be a co-founder of ReNest and design an equitable business practice that focuses on creating long-term, accessible, and affordable housing for marginalized communities. Outside of ReNest, you can find Nitya café-hopping with her friends, reading a mystery novel, or experimenting with new recipes. Nitya hopes to optimize her organizational skills to promote strategic efficiency in her role as COO in pursuit of sustainable community development.` // Complete this based on actual information
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
            <img src={cofounder.image} alt={cofounder.name} className="cofounder-image" />
            <h2><a href={cofounder.url} target="_blank" rel="noopener noreferrer">{cofounder.name}</a></h2>
            <h3>{cofounder.title}</h3>
            <p>{cofounder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
