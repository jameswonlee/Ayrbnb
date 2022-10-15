import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import AddSpotFormModal from '../AddSpotFormModal/AddSpotFormModal';
import './Navigation.css';
import logo from '../../images/airbnb-logo.png';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <div className="nav">
      <div className="nav-bar">
        <NavLink exact to="/" className="nav-link">
          <img src={logo} className="logo">
          </img>
        </NavLink>
        <div className="menu">
          {/* {sessionUser &&
            <div className="become-a-host">
              <AddSpotFormModal />
            </div>
          } */}
          <div className="become-a-host">
            <AddSpotFormModal />
          </div>
          {isLoaded &&
            <ProfileButton user={sessionUser} />}
        </div>
      </div>
      {/* <hr className="hr"/> */}
    </div>
  );
}

export default Navigation;