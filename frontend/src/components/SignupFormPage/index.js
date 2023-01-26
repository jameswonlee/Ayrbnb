import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage({ setShowSignUpModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, username, password }))
      .then(() => {
        setShowSignUpModal(false);
      })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2 className="welcome-header">Welcome to Ayrbnb</h2>
      <div className="sign-up-errors">
        {errors.map((error, idx) => <div key={idx} className="sign-up-errors-text">{error}</div>)}
      </div>
      <label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setErrors([])
            setEmail(e.target.value)
          }}
          placeholder="Email address"
        />
      </label>
      <label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setErrors([])
            setUsername(e.target.value)
          }}
          placeholder="Username"
        />
      </label>
      <label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setErrors([])
            setFirstName(e.target.value)
          }}
          placeholder="First name"
        />
      </label>
      <label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setErrors([])
            setLastName(e.target.value)
          }}
          placeholder="Last name"
        />
      </label>
      <label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setErrors([])
            setPassword(e.target.value)
          }}
          placeholder="Password"
        />
      </label>
      <label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setErrors([])
            setConfirmPassword(e.target.value)
          }}
          placeholder="Confirm password"
        />
      </label>
      <button type="submit" className="signup-submit-button">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;