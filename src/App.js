import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import '@fortawesome/fontawesome-free/css/all.css';
import { UserLoginPage } from './components_user/pages_user/UserLoginPage';
import UserProfile from './components_user_profile/pages/Profile';

const App = () => {
  return (
    <Router> {/* Wrap your routes in a Router */}
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/cabinet/tutor/login" element={<LoginPage />} />
          <Route path="/cabinet/user/login" element={<UserLoginPage />} />
          <Route path="/cabinet/user" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
