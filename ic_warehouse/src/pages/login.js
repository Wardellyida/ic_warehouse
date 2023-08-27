//创建一个网页的登录页面，包含用户名和密码的输入框，以及登录按钮
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/scan');
  };

  return (
    <div className='login-container'>
      <h1>Warehouse Management</h1>
      <form onSubmit={handleLogin}>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
