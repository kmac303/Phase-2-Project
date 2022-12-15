import React, { useState } from "react";


function NewVenueForm() {
    const [name, setName] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [image, setImage] = useState(<img src=""/>); 
    const [location, setLocation] = useState(""); 
    
    return (
        null
      )
}

export default NewVenueForm;
