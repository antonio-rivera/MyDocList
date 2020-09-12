import React from 'react';
import Home from './components/Home'
import AddProvider from './components/AddProvider'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/App.css'

function App() {
  return (
        <>
        <Router>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/addProvider' exact component={AddProvider}></Route>
        </Switch>
        </Router>
        </>
  );
}

export default App;
