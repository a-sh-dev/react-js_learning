import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import SignUp from '../components/SignUp';
import Articles from '../components/Articles';
import Article from '../components/Article';
import Categories from '../components/Categories';
import Author from '../components/Author';
import Profile from '../components/Profile';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="about" element={<About />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="articles" element={<Articles />} />
        <Route path="categories" element={<Categories />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
