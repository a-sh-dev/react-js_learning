import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/App';
import GlobalStyle from 'styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
