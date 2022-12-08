import React, {useState} from "react";
import Search from "./Search";
import VenueCard from "./VenueCard";

function VenueContainer({venues, setVenues}) {
  const [search, setSearch] = useState("");

  // function handleSearch(newSearch) {
  //   setSearch(newSearch);
  // }

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