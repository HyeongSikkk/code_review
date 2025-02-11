import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link, useNavigate } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/login.css';
import LoginApi from "../api/LoginApi.tsx";


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  const handleLogin = async () => {
    console.log("Logging in with:", email, password);

    const result = await LoginApi({ email, password });
    navigate("/review", { state: { userId: result.data.user_id } });
};

  return (
    <div className="login-container">
      <Card className="login-card">
        <h1>Login</h1>
        <div className="p-field">
          <label htmlFor="email">email</label>
          <InputText 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="p-inputtext-lg" 
            placeholder="Enter your email"
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