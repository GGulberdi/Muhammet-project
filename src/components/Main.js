import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import surat from '../photos/muammet_surat.JPG'



function Main() {
    return (
        <div>
            <h1>Here is my projects</h1>
            <Card style={{ width: '18rem' }}>
  <Card.Img  className='card-img' variant="top" src={surat} />
  <Card.Body>
    <Card.Title>Red Car</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Main
