import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './pages/login';

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              {/* 当其他路由都不匹配时，我们可以选择重定向到首页，或者显示一个404页面 */}
              <Route path="/" element={<Login />} />
          </Routes>
      </Router>
    );
  }

export default App;