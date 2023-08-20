import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Review from './components/pages/Review';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Zodic from './components/pages/Zodic';
import Person from './components/pages/Persona';
import Options from './components/Options';
import Match from './components/Match';
import SignIn from './components/pages/signIn';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/zodic" element={<Zodic />} />
          <Route path="/Persona" element={<Person />} />
          <Route path="/Option" element={<Options />} />
          <Route path="/Match" element={<Match />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/" exact component={SignUp} />
          <Route path="/Persona" component={Person} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
