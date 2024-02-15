import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Check the search query and redirect the user to the appropriate page
    switch (searchQuery.toLowerCase()) {
      case 'speakers':
        navigate('/speakers');
        break;
      case 'kitchen':
        navigate('/kitchen');
        break;
      case 'mobiles':
        navigate('/mobiles');
        break;
      case 'computers':
        navigate('/computers');
        break;
      case 'watch':
        navigate('/watch');
        break;
      case 'fridge':
        navigate('/fridge');
        break;
      case 'men':
        navigate('/men');
        break;
      case 'woman':
        navigate('/woman');
        break;
      case 'furniture':
        navigate('/furniture');
        break;
      case 'ac':
        navigate('/ac');
        break;
      case 'tv':
        navigate('/tv');
        break;
      case 'books':
        navigate('/books');
        break;
      // Add more cases for other search queries...
      default:
        // If no specific match, you can redirect to a general search page or display a message
        navigate('/not-found');
        break;
    }
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>Search</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '80%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  }
};

export default ProductSearch;
