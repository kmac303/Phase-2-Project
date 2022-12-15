import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import Header from './Header';
import VenueContainer from './VenueContainer';
import About from './About';
import NewVenueForm from './NewVenueForm';


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }



  return (
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
  );
}

export default App;
