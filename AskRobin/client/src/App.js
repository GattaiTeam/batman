import React from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Iframe from './components/Iframe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Questionnaire} />
          <Route exact path='/frame' component={Iframe} />
        </Switch>
      </BrowserRouter>
    </div>
)
}

export default App;
