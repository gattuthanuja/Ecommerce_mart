import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === localStorage.getItem('signup_email') && password === localStorage.getItem('signup_password')) {
      console.log('Sign in with:', email, password);
     
      navigate('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
    },
    signinContainer: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '20px',
      borderRadius: '5px',
      maxWidth: '400px',
      margin: 'auto',
      marginTop: '50px',
      animation: 'fadeIn 1s ease-in-out',
    },
    heading: {
      marginBottom: '20px',
      textAlign: 'center',
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
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
      animation: 'fadeIn 1s ease-in-out',
    },
  };
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.signinContainer}>
        <h2 style={styles.heading}>Sign In</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={styles.input}/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={styles.input}/>
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
