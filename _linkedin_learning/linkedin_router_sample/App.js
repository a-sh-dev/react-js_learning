import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  Events,
  Contact,
  Oops404,
  Location,
  Services
} from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="location" element={<Location />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Oops404 />} />
      </Routes>
    </div>
  )
}

export default App;