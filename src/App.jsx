import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'movies':
        return <MoviesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#000', minHeight: '100vh', padding: '0' }}>
      <nav style={{ backgroundColor: '#333', padding: '12px 10px 20px 15px', textAlign: 'left', margin: '0' }}>
        <h1 
          onClick={() => setCurrentPage('home')} 
          style={{ 
            marginRight: '20px', 
            display: 'inline', 
            cursor: 'pointer', 
            color: '#fff', 
            borderBottom: currentPage === 'home' ? '4px solid #fff' : 'none' 
          }}
        >
          Home
        </h1>
        <h1 
          onClick={() => setCurrentPage('movies')} 
          style={{ 
            display: 'inline', 
            cursor: 'pointer', 
            color: '#fff', 
            borderBottom: currentPage === 'movies' ? '4px solid #fff' : 'none' 
          }}
        >
          Movies
        </h1>
      </nav>
      <div style={{ marginTop: '20px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
