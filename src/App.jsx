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
    <div className="App">
      <nav>
        <h1 
          onClick={() => setCurrentPage('home')} 
          className={currentPage === 'home' ? 'active' : ''}
        >
          Home
        </h1>
        <h1 
          onClick={() => setCurrentPage('movies')} 
          className={currentPage === 'movies' ? 'active' : ''}
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
