import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registerUser } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      registerUser({
        name: form.elements.userName.value,
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) return <Navigate to="/contacts" />;
  return (
    <main>
      <h1>Register Your Account</h1>
      <form onSubmit={submitForm}>
        <label>
          <p>Username</p>
          <input name="userName" type="text" required />
        </label>
        <label>
          <p>Email</p>
          <input name="userEmail" type="email" required />
        </label>
        <label>
          <p>Password</p>
          <input name="userPassword" type="password" required minLength={7} />
        </label>
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default RegisterForm;
