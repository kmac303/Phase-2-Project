import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//this component is for each individual venue
function VenueCard({venue, onDeleteVenue}) {
    //destructuring the venue object
    const {image, description, name, location, id} = venue;
//handles deleting a venue
    function handleDelete() {
        fetch(`http://localhost:3000/venues/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            onDeleteVenue(id);
        })        
    }
    return (
        <ul className="card">
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Subtitle><b>{location}</b></Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
            <br/>
            <p></p>
        </ul>
    )
}

export default VenueCard;