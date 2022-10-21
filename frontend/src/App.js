import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DisplayAllSpots from "./components/AllSpots";
import SingleSpot from "./components/SingleSpot";
import './index.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    if (window.location.protocol === "http:" && window.location.host === "airbnb-james-lee.herokuapp.com") {
      window.location = "https://airbnb-james-lee.herokuapp.com"
    }
  }, [])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <div className="center">
        <main> */}
      {isLoaded && (
        <Switch>
          <Route path='/spots/:spotId'>
            <SingleSpot />
          </Route>
          <Route exact path='/'>
            <DisplayAllSpots />
          </Route>
          <Route>
            Page Not Found!
          </Route>
        </Switch>
      )}
      {/* </main>
      </div> */}
      <footer className="footer">
        <div className="footer-about">
          An Airbnb 'clone' by James Lee
        </div>
        <div className="footer-links">
          <a id="github" className="links-github" href="https://github.com/jameswonlee">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a id="linkedin" className="links-linkedin" href="https://www.linkedin.com/in/jameswonlee/">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;