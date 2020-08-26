import React from 'react'
import "./MovieCard.css"
import Rate from "../Rate"
import {Card,Button} from "react-bootstrap"

export default function Cardd ({movie:{name, image,description,releaseDate,rate}}) {
 
return(
 
  <div style={{display:'flex'}}>
    
  <Card className="cards"style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Rate rate={rate}/>
    <Card.Text>
{description}
<br/>
{releaseDate}
    </Card.Text>
 
  </Card.Body>
</Card>
</div>
)

}