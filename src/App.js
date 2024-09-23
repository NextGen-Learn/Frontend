import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import LoginPage from './components/pages/LoginPage';
import '@fortawesome/fontawesome-free/css/all.css';
import { UserLoginPage } from './components_user/pages_user/UserLoginPage';
import UserProfile from './components_user_profile/pages/Profile';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/cabinet/tutor/login" component={LoginPage} />
        <Route path="/cabinet/user/login" component={UserLoginPage} />
        <Route path="/cabinet/user" component={UserProfile} />
      </Switch>
    </div>
  );
};

export default App;
