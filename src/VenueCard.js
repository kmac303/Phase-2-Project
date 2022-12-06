import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function VenueCard({venue, onDeleteVenue}) {
    const {image, description, name, location, id} = venue;

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