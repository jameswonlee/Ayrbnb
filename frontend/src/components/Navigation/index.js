import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import AddSpotFormModal from '../AddSpotFormModal/AddSpotFormModal';
import './Navigation.css';
import logo from '../images/airbnb-logo.png';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className="login-container">
        <div className="login"><LoginFormModal /></div>
        <div className="login"><NavLink to="/signup">Sign Up</NavLink></div>
      </div>
    );
  }

  return (
    <ul>
      <li className="nav-bar">
        <NavLink exact to="/">Home</NavLink>
        <div className="menu">
          {sessionUser &&
            <div className="become-a-host">
              <AddSpotFormModal />
            </div>
          }
          {isLoaded &&
            <ProfileButton user={sessionUser}/>}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;