import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import AddSpotFormModal from '../AddSpotFormModal/AddSpotFormModal';
import logo from '../../images/ayrbnb-logo.png';
import './Navigation.css';

function Navigation({ isLoaded, showAddSpotModal, setShowAddSpotModal }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <nav className="nav">
      <div className="nav-bar">
        <div className="nav-link-container">
          <NavLink exact to="/" className="nav-link">
            <img src={logo} className="logo">
            </img>
          </NavLink>
        </div>
        <div className="menu">
          <div className="become-a-host">
            <AddSpotFormModal showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
          </div>
          {isLoaded &&
            <ProfileButton user={sessionUser} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;