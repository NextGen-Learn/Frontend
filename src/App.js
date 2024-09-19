import React from 'react';
import './App.css';
import { Route, Switch } from 'wouter';
import LoginPage from './components/organisms/LoginPage';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/cabinet/tutor/login" component={LoginPage} />
      </Switch>
    </div>
  );
};

export default App;
