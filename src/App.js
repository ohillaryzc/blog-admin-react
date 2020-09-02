import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './view/login'
import Manage from './view/manage'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/manage" component={Manage}/>
    </Switch>
  );
}

export default App;
