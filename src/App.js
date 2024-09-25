import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import '@fortawesome/fontawesome-free/css/all.css';
import { UserLoginPage } from './components_user/pages_user/UserLoginPage';
import UserProfile from './components_user_profile/pages/Profile';
import { RegisteUser } from './components_user/pages_user/RegisteUser';
import MainPage from './components_main_page/pages/MainPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/cabinet/tutor/login" element={<LoginPage />} />
          <Route path="/cabinet/user/login" element={<UserLoginPage />} />
          <Route path="/cabinet/user" element={<UserProfile />} />
          <Route path="/cabinet/user/register" element={<RegisteUser />} />
          <Route path="/cabinet/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
