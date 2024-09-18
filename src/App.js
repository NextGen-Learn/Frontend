import React from 'react';

import './App.css';

import { Route, Switch } from 'wouter';

import LoginPage from './components/organisms/LoginPage';


const App = () => {

  return (

    <div className="App">

      <Switch>

        <Route path="/cabinet/tutor/login" component={LoginPage} />

        {/* Вы можете добавить другие маршруты здесь */}

      </Switch>

    </div>

  );

};


export default App;
