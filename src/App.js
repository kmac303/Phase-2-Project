import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Header from './Header';
import VenueContainer from './VenueContainer';
import About from './About';
import NewVenueForm from './NewVenueForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleSearch(newSearch) {
    setSearch(newSearch);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <NavBar />
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
        <Switch>
          <Route exact path="/">
            <VenueContainer search={search} onSearch={handleSearch}/>
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
