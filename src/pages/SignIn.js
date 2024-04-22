// src/components/SignIn.js
import React, { useState } from 'react';
import { auth } from '../firebase';  // If firebase.js is directly under src/
import './SignIn.css'; // This line should already be in your SignIn.js file

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("User signed in successfully!");
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <div className="signIn-container">        
    <h1>Sign In (COMING SOON)</h1>
      <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <br />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default SignIn;
