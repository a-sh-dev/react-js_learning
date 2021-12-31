import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './common/Layout';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import LightTheme from '../styles/themes/light';
import DarkTheme from '../styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((current) =>
            current.id === 'light' ? DarkTheme : LightTheme,
          );
        },
      }}
    >
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
