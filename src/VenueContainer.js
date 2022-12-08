import React, {useState, useEffect} from "react";
import Search from "./Search";
import VenueCard from "./VenueCard";

function VenueContainer({venues, setVenues}) {
  const [search, setSearch] = useState("");
  // const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/venues")
      .then((r) => r.json())
      .then((venues) => setVenues(venues));
  }, []);

      function handleDeleteVenue(id) {
        const updatedVenueArray = venues.filter(venue => venue.id !== id);
        setVenues(updatedVenueArray);
      }

      const filteredVenues = venues.filter(venue => {
        return (venue.name.toLowerCase().includes(search.toLowerCase())) 
        || venue.description.toLowerCase().includes(search.toLowerCase())
        || venue.location.toLowerCase().includes(search.toLowerCase())
      })

      const venueCards = filteredVenues.map(venueObj => {
        return <VenueCard key={venueObj.id} venue={venueObj} onDeleteVenue={handleDeleteVenue}/>
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