// LoginForm.jsx
import React, { useState } from 'react';
import '../Styles/LoginForm.css'; // Stil dosyasını import edin

function LoginForm({ onLogin }) {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const handleSubmit = (event) => {
          event.preventDefault();
          onLogin(username, password);
     };

     return (
          <div className="login-form">
               <form onSubmit={handleSubmit}>
                    <input
                         type="text"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
                         placeholder="Kullanıcı Adı"
                    />
                    <input
                         type="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                         placeholder="Şifre"
                    />
                    <button type="submit">Giriş Yap</button>
               </form>
          </div>
     );
}

export default LoginForm;
