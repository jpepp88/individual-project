import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </h1>
        <h1>
          <NavLink to="/movies" className={({ isActive }) => isActive ? 'active' : ''}>
            Movies
          </NavLink>
        </h1>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
