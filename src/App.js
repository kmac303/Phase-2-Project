import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Header from './Header';
import VenueContainer from './VenueContainer';
import About from './About';
import NewVenueForm from './NewVenueForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [venues, setVenues] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/venues")
        .then((r) => r.json())
        .then((venues) => setVenues(venues));
    }, []);



  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <NavBar />
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
        <Switch>
          <Route exact path="/">
            <VenueContainer venues={venues} setVenues={setVenues}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/new">
            <NewVenueForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
