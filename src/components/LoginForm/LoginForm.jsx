import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };

  if (isLoggedIn) return <Navigate to="/contacts" />;
  return (
    <main>
      <h1>Login Into Your Account</h1>
      <form onSubmit={submitForm}>
        <label>
          <p>Email</p>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
};

export default LoginForm;
