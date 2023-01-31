import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Modal } from '../../context/Modal';
import { resetBookings } from "../../store/bookings";
import * as sessionActions from '../../store/session';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupFormPage from "../SignupFormPage";
import './Navigation.css';

function ProfileButton({ user, setShowAddSpotModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
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

  const logout = async (e) => {
    e.preventDefault();
    dispatch(resetBookings());

    await dispatch(sessionActions.logout());
    history.push('/')
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
            setShowSignInModal(true)
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
          <div className="shift-down-1">
            <span className="shift-right shift-down">Profile: {user.firstName}</span>
          </div>
          <div>
            <span className="shift-right shift-down">Account: {user.email}</span>
          </div>
          <div className="username-div">
            <span className="shift-right shift-down">Username: {user.username}</span>
          </div>
        </div>
        <div className="dropdown-menu-border-bottom"></div>
        <div className="dropdown-menu-lower">
          <div onClick={routeToUserBookings} className="dropdown-menu-options shift-down-2">
            <span className="shift-right shift-down">Trips</span>
          </div>
          <div className="dropdown-menu-options">
            <span onClick={() => setShowAddSpotModal(true)}className="shift-right shift-down">Airbnb your home</span>
          </div>
          <div className="dropdown-menu-options logout-button shift-up-1" onClick={logout}>
            <span className="shift-right shift-down">Log Out</span>
          </div>
        </div>
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
      {showSignInModal && (
        <Modal onClose={() => setShowSignInModal(false)}>
          <LoginForm setShowSignInModal={setShowSignInModal} />
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