import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DisplayAllSpots from "./components/AllSpots";
import SingleSpot from "./components/SingleSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <main>
        {isLoaded && (
          <Switch>
            <Route path='/signup'>
              <SignupFormPage />
            </Route>
            <Route path='/spots/:spotId'>
              <SingleSpot />
            </Route>
            <Route path='/'>
              <DisplayAllSpots />
            </Route>
            <Route>
              Page Not Found!
            </Route>
          </Switch>
        )}
      </main>

    </>
  );
}

export default App;