import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// components
import PokeCard from "./components/PokeCard";
import Home from "./components/Home";
import PokeList from "./components/PokeList";

const App = () => {
  return (
    <div className='App'>
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <span className='space'></span>
          <Link to='/pokeList'>Poke List</Link>
        </nav>
        <Route path='/pokemon/:pokemonName' component={PokeCard} />
        <Route path='/pokeList/:pokemonName' component={PokeCard} />
        <Route exact path='/' component={Home} />
        <Route path='/pokeList' component={PokeList} />
      </Router>
    </div>
  );
};

export default App;
