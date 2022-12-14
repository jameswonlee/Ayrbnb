import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm({ setShowModal }) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {

    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(() => {
        setShowModal(false)
      })
      .catch(
        async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
      );
  };

  const demoUserLogin = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ credential: 'demo-user', password: 'password' }));
    setShowModal(false);
  }


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">
        Welcome to Ayrbnb
      </h2>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <div>

        <label className="user-login">
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            placeholder="Username or email"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit" className="login-form-buttons continue">Continue</button>
      </div>
      <div>
        <button onClick={demoUserLogin} className="login-form-buttons">Demo User</button>
      </div>
    </form>
  );
}

export default LoginForm;