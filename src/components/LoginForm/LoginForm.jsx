import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
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
