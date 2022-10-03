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
    <div>
      <div className="dropdown-menu">
        <button className="user-menu" onClick={openMenu}>
          <i id="hamburger-menu" className=" fas fa-sharp fa-solid fa-bars "></i>
          <i id="user-icon" className="fas fa-user-circle user_icon fa-2x"></i>
        </button>
      </div>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>Hello, {user.firstName}</li>
          <li>Account: {user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;