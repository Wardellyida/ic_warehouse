//创建一个网页的登录页面，包含用户名和密码的输入框，以及登录按钮
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

function Login() {
  //这是一个前端测试用的登录页面，不需要使用
  // const navigate = useNavigate();
  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   navigate('/scan');
  // };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault(); // 防止表单默认提交

      try {
          const response = await axios.post('/api/login', { username, password });
          if (response.data.success) {
              localStorage.setItem('token', response.data.token);
              navigate("/scan"); // 跳转到主页
          } else {
              setErrorMessage(response.data.message || '登录失败');
          }
      } catch (error) {
          setErrorMessage('登录时出现错误，请稍后再试');
      }
  };

  return (
    <div className='login-container'>
        <h1>Warehouse Management</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="username" 
                name="username" 
                placeholder="Username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                required 
            />
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required 
            />
            <input type="submit" value="Login" />
        </form>
    </div>
  );
}

export default Login;
