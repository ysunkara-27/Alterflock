// src/pages/Interest.js
import React from 'react';
import './Interest.css'; // Make sure to create and link to your Interest.css file

const Interest = () => {
  return (
    <div className="interest-container">
      <h1 className="interest-title">Join the Flock</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSchBjuaAfoLYxWIonW26r8qfEF6QlvpwEf6F2A24dPDe8Umlw/viewform?embedded=true"
        className="google-form"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Interest Form"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Interest;
