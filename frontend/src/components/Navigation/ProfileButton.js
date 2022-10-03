import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="profile-menu">
      <button className="user-menu" onClick={openMenu}>
        <i id="hamburger-menu" className=" fas fa-sharp fa-solid fa-bars "></i>
        <i id="user-icon" className="fas fa-user-circle user_icon fa-2x"></i>
      </button>
      {showMenu && (
        <div className="dropdown-menu">
          <div>Hello, {user.firstName}</div>
          <div>Account: {user.email}</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;