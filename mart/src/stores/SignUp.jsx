import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('signup_email', email);
    localStorage.setItem('signup_password', password);

    console.log('Sign up with:', email, password, name, mobile);
    // Here you would typically send the signup data to your backend for processing
    // After successful signup, you can navigate the user to another page, e.g., the dashboard
    navigate('/signin'); // Navigate to the dashboard page after successful signup
  };

  useEffect(() => {
    // Check if the user is already registered
    const isUserRegistered = checkUserRegistration(); // You need to implement this function

    // If the user is already registered, redirect them to another page
    if (isUserRegistered) {
      navigate('/signin'); // Redirect to the dashboard page
    }
  }, [navigate]);

  // Function to check if the user is already registered
  const checkUserRegistration = () => {
    // Implement your logic to check if the user is registered
    // For demonstration purposes, assume the user is not registered initially
    return false;
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.signupContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        <div style={styles.borderLine}></div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color for the entire page
    minHeight: '100vh',
  },
  signupContainer: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
    animation: 'fadeIn 1s ease-in-out', // Apply animation to fade in the container
  },
  heading: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  borderLine: {
    width: '100%',
    height: '2px',
    backgroundColor: '#fff',
    marginBottom: '20px',
    animation: 'growWidth 1s ease-in-out', // Apply animation to grow the width of the border
  },
  form: {
    marginTop: '20px',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out', // Apply transition for smooth color change
    animation: 'fadeIn 1s ease-in-out', // Apply animation to fade in the button
  },
};

export default SignUp;
