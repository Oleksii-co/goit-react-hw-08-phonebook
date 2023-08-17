import HeaderUser from 'components/HeaderUser/HeaderUser';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink> <HeaderUser />
        </>
      ) : (
        <>
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </nav>
  );
};

export default HeaderNav;
