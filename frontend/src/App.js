import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DisplayAllSpots from "./components/AllSpots";
import SingleSpot from "./components/SingleSpot";
import Bookings from "./components/Bookings/Bookings";
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAddSpotModal, setShowAddSpotModal] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  // Redirects users to the HTTPS website 
  // - because on mobile, users were unable to login to account from HTTP website:

  useEffect(() => {
    if (window.location.protocol === "http:" && window.location.host === "ayrbnb-james-lee.herokuapp.com") {
      window.location = "https://ayrbnb-james-lee.herokuapp.com"
    }
  }, []);
  
  return (
    <>
      <Navigation isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal}/>
      {isLoaded && (
        <Switch>
          <Route path='/spot/:spotId'>
            <SingleSpot />
          </Route>
          <Route exact path='/'>
            <DisplayAllSpots />
          </Route>
          <Route path='/user/:userId/trips'>
            <Bookings />
          </Route>
          <Route path='/user/:userId/trips/:bookingId'>

          </Route>
          <Route>
            Page Not Found!
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;