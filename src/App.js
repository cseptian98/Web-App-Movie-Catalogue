import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Index';
import Discover from './pages/Discover';
import Library from './pages/Library';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/discover' component={Discover} />
        <Route path='/library' component={Library} />
      </Switch>
    </Router>
  );
}

export default App;
