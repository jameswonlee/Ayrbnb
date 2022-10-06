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

  // let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = (
  //     <ProfileButton user={sessionUser} />
  //   );
  // } else {
  //   sessionLinks = (
  //     <div className="login-container">
  //       <div className="login"><LoginFormModal /></div>
  //       <div className="login"><NavLink to="/signup">Sign Up</NavLink></div>
  //     </div>
  //   );
  // }

  return (
    <div className="nav">
      <li className="nav-bar">
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
      </li>
      <hr className="hr"/>
    </div>
  );
}

export default Navigation;