import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './pages/login';
import Scan from './pages/scan';
import CodeInput from './pages/codeInput';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/scan" element={<Scan />} />  
          <Route path="/input" element={<CodeInput />} /> 
        </Routes>
    </Router>
  );
}

export default App;