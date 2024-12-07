import './App.css';
import { LoginPage } from './pages/LoginPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import CreateChallan from './pages/CreateChallan';

// Example Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with your actual authentication logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
              <Dashboard />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            // <ProtectedRoute>
              <CreateChallan />
            // </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
