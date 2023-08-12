import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const submitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log(
      form.elements.userName.value,
      form.elements.userEmail.value,
      form.elements.userPassword.value
    );
    dispatch(
      registerUser({
        name: form.elements.userName.value,
        email: form.elements.userEmail.value,
        password: form.elements.userPassword.value,
      })
    );
    form.reset();
  };
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
