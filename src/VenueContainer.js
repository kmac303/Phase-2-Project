import React, {useState, useEffect} from "react";
import Search from "./Search";
import VenueCard from "./VenueCard";

function VenueContainer({venues, setVenues}) {
  const [search, setSearch] = useState("");
//fetching data from our db.json 
  useEffect(() => {
    fetch("http://localhost:3000/venues")
      .then((r) => r.json())
      .then((venues) => setVenues(venues)); //call setVenues function passing in the array to update state
  }, []); 
    
    return (
      null
     )
}

export default VenueContainer;
