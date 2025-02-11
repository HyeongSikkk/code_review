import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/login.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', username, password);
    // TODO: 백엔드 API와 연동하여 로그인 처리
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <h2>Login</h2>
        <div className="p-field">
          <label htmlFor="username">Username</label>
          <InputText 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="p-inputtext-lg" 
            placeholder="Enter your username"
          />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <Password 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            toggleMask 
            feedback={false} 
            className="p-inputtext-lg"
          />
        </div>
        <Button label="Login" icon="pi pi-sign-in" className="p-button-lg p-button-primary" onClick={handleLogin} />
        <p className="register-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;