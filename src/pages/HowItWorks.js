import React from 'react';
import './HowItWorks.css'; // Make sure to create and link this CSS file

const steps = [
  {
    title: "Step 1",
    description: "This is where you start.",
    image: "/images/step1.gif" // Place your animated GIF or image here
  },
  {
    title: "Step 2",
    description: "This is the next step.",
    image: "/images/step2.gif"
  },
  {
    title: "Step 3",
    description: "Finally, achieve your goal.",
    image: "/images/step3.gif"
  }
];

function HowItWorks() {
  return (
    <div className="how-it-works">
      <h1 className="section-title">How It Works</h1>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <img src={step.image} alt={step.title} className="step-image" />
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
