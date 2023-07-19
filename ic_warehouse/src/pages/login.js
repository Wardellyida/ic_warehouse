//创建一个网页的登录页面，包含用户名和密码的输入框，以及登录按钮
import React from 'react';
import './login.css';

function Login() {
  return (
    <div className='login-container'>
      <h1>Warehouse Management</h1>
      <form>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
