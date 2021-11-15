import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';
import Home from '../pages/Home';
import Nav from '../components/Navbar';
import Cv from '../pages/Cv';
import Footer from '../components/Footer';

export default function Routes() {
  return (
    <Router>
      <Nav />
      <ReactRoutes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cv' element={<Cv />} />
      </ReactRoutes>
      <Footer />
    </Router>
  );
}
