import React, { useState } from 'react';
import { auth } from '../firebase'; // Ensure this import path correctly points to where your Firebase config and auth export are set up
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Register.css'; // Add this line to your Register.js file

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // To display any error messages

    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent the default form submit behavior
        try {
            // Firebase function to create a user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered: ", userCredential.user);
            // Redirect or additional logic after successful registration
            // For example, you could navigate to the home page or show a success message
        } catch (error) {
            console.error("Error in registration: ", error);
            setError(error.message); // Update the state with the error message
        }
    };

    return (
        <div className="register-container">            
        <h1>Register (COMING SOON) </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is an error */}
            <form onSubmit={handleRegister}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
