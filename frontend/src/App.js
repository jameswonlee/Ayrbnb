import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DisplayAllSpots from "./components/AllSpots";
import SingleSpot from "./components/SingleSpot";
import Bookings from "./components/Bookings/Bookings";
import Footer from './components/Footer/Footer';
import BookingConfirmation from "./components/Bookings/BookingConfirmation";
import UpdateBooking from "./components/Bookings/UpdateBooking";
import CancelBooking from "./components/Bookings/CancelBooking";
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
    if (window.location.protocol === "http:" && window.location.host === "ayrbnb.herokuapp.com") {
      window.location = "https://ayrbnb.herokuapp.com"
    }
  }, []);

  return (
    <>
      {/* <Navigation
        isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} /> */}
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <DisplayAllSpots />
          </Route>
          <Route exact path='/spot/:spotId'>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <SingleSpot />
          </Route>
          <Route exact path='/user/:userId/trips'>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <Bookings />
          </Route>
          <Route exact path='/booking/:bookingId'>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <BookingConfirmation />
          </Route>
          <Route exact path='/booking/:bookingId/change'>
            <UpdateBooking />
          </Route>
          <Route exact path='/booking/:bookingId/cancel'>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <CancelBooking />
          </Route>
          <Route>
            <Navigation
              isLoaded={isLoaded} showAddSpotModal={showAddSpotModal} setShowAddSpotModal={setShowAddSpotModal} />
            <h1>Page Not Found!</h1>
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;