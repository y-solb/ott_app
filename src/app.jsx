import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './routes/about';
import Home from './routes/home';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
