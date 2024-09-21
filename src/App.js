import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import LoginPage from './components/organisms/LoginPage';
import UserLoginPage from './components_user/organisms_user/UserLoginPage'
import '@fortawesome/fontawesome-free/css/all.css';

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
