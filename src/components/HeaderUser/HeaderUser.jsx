import React from 'react';

import { logoutUser } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';

const HeaderUser = () => {

    const username = useSelector(state=> state.auth.user.email)
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>Welcome: {username}</p>
      <button onClick={logOut}>Log out</button>{' '}
    </div>
  );
};

export default HeaderUser;
