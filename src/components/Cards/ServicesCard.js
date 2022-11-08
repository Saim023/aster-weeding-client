import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ServiceCard.css';
import { Link } from 'react-router-dom';

const ServicesCard = ({ srv }) => {
    console.log(srv)
    return (
        <div>
            <Card className='box-shadow'>
                <Card.Img variant="top" src={srv.image} />
                <Card.Body>
                    <Card.Title>{srv.title}</Card.Title>
                    <Card.Text>
                        {srv.description.slice(0, 250)}
                    </Card.Text>
                    <p className='text-danger'>Total Cost: ${srv.fees}</p>
                    <p className='text-success'>Ratings: {srv.rating}</p>
                </Card.Body>
                <Button variant="outline-secondary">
                    <Link className='text-decoration-none' to='/all-services'>See All</Link>
                </Button>
            </Card>
        </div>
    );
};

export default ServicesCard;