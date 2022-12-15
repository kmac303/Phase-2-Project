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
  
      const filteredVenues = venues.filter(venue => {
        return (venue.name.toLowerCase().includes(search.toLowerCase())) 
        || venue.description.toLowerCase().includes(search.toLowerCase())
        || venue.location.toLowerCase().includes(search.toLowerCase())
      })
    
    return (
        <div>
          <Search onSearch={setSearch}/>
            <ul className="cards">
                {venueCards}
            </ul>
        </div>
    )
}

export default VenueContainer;
