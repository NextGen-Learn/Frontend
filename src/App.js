import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import LoginPage from './components/pages/LoginPage';
import '@fortawesome/fontawesome-free/css/all.css';
import { UserLoginPage } from './components_user/pages_user/UserLoginPage';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/cabinet/tutor/login" component={LoginPage} />
        <Route path="/cabinet/user/login" component={UserLoginPage} />
      </Switch>
    </div>
  );
};

export default App;
