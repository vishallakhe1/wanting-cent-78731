import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContextProvider"


export default function Login() {

  const { setIsAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(`https://reqres.in/api/login`, {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),

      });

      const data = await response.json();

      console.log(data);

      
     if (data.token) {
         setIsAuth(true);
         navigate('/');
       }

    } 
    catch (error) {
      console.log(error);
    }

  };

  return (
    <div>
      <form className="auth_form" onSubmit={handleSubmit}>

        <input
          style={{ padding: '5px', margin: '10px', width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          style={{ padding: '5px', margin: '10px', width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <input className="submit" type="submit" value="Login" />

      </form>
    </div>
  );
}



