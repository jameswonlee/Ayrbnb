import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal';
import SignupFormPage from "../SignupFormPage";
import './Navigation.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const girlNames = ["Jane", "Susan", "Jessica"];

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

  const routeToUserBookings = () => {
    history.push(`/user/${sessionUser.id}/trips`);
  }

  let sessionLinks;
  if (!sessionUser) {
    sessionLinks = (
      <div className="login-container dropdown-menu">
        <div className="login">
          <button className="login-button" onClick={(e) => {
            e.stopPropagation();
            setShowModal(true)
            closeMenu()
          }}>Log in</button>
        </div>
        <div>
          <button className="sign-up login login-button" onClick={(e) => {
            e.stopPropagation();
            setShowSignUpModal(true)
            closeMenu()
          }}>
            Sign up
          </button>
        </div>
      </div>
    );
  } else {
    sessionLinks = (
      <div className="dropdown-menu">
        <div className="dropdown-menu-upper">
          <div className="dropdown-menu-options">Profile: {user.firstName}</div>
          <div className="dropdown-menu-options">Account: {user.email}</div>
          <div>Username: {user.username}</div>
        </div>
        <div className="dropdown-menu-border-bottom"></div>
        <div className="dropdown-menu-middle">
          <div onClick={routeToUserBookings} className="dropdown-menu-options clickable-option">Trips</div>
          <div className="dropdown-menu-options clickable-option">Airbnb your home</div>
          <div className="logout-button" onClick={logout}>Log Out</div>
        </div>
        {/* <div className="dropdown-menu-lower">
          <div></div>
          <div></div>
        </div> */}
      </div>
    )
  }


  return (
    <div className="profile-menu">
      <button className="user-menu" onClick={openMenu}>
        <i id="hamburger-menu" className=" fas fa-sharp fa-solid fa-bars "></i>
        {sessionUser
          ?
          <img
            width={28}
            height={28}
            src={`https://randomuser.me/api/portraits/${girlNames.includes(sessionUser.firstName)
              ? "women" : "men"}/${40}.jpg`}
            className="user-image">
          </img>
          :
          <i id="user-icon" className="fas fa-user-circle user_icon fa-2x"></i>
        }

      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)}>
          <SignupFormPage setShowSignUpModal={setShowSignUpModal} />
        </Modal>
      )}
      {showMenu && sessionLinks}
    </div>
  );
}



export default ProfileButton;