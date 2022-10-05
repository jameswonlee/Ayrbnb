import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import { NavLink } from "react-router-dom";
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (!sessionUser) {
    sessionLinks = (
      <div className="login-container">
        <div className="login">
          <button onClick={(e) => {
            e.stopPropagation();
            setShowModal(true)
            closeMenu()
          }}>Log In</button>
        </div>
        <div className="login"><NavLink to="/signup">Sign Up</NavLink></div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="dropdown-menu">
        <div>Hello, {user.firstName}</div>
        <div>Account: {user.email}</div>
        <div>
          <button onClick={logout}>Log Out</button>
        </div>
      </div>
    )
  }


  return (
    <div className="profile-menu">
      <button className="user-menu" onClick={openMenu}>
        <i id="hamburger-menu" className=" fas fa-sharp fa-solid fa-bars "></i>
        <i id="user-icon" className="fas fa-user-circle user_icon fa-2x"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </Modal>
      )}
      {showMenu && sessionLinks}
    </div>
  );
}

export default ProfileButton;