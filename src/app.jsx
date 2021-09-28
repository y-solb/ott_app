import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './routes/about';
import Home from './routes/home';
import Detail from './routes/detail';
import './app.css';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
