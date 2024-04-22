import React from 'react';
import { db, auth } from './firebase'; // Adjust the path based on your project structure

function SomeComponent() {
  // Example function to add a document to Firestore
  const addDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: 'John Doe',
        age: 30,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Example function for user sign-in using Firebase Authentication
  const signInUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log('User signed in: ', userCredential.user);
    } catch (error) {
      console.error('Error signing in: ', error);
    }
  };

  return (
    <div>
      <button onClick={addDocument}>Add User</button>
      <button onClick={() => signInUser('user@example.com', 'password123')}>
        Sign In
      </button>
    </div>
  );
}

export default SomeComponent;
