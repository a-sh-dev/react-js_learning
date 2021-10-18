import React from 'react'
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearcBar from '../SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearcBar />
      <BusinessList />
    </div>
  );
}

export default App;
