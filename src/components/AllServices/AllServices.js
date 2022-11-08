import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllServices = ({ all }) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={all.image} />
                <Card.Body>
                    <Card.Title>{all.title}</Card.Title>
                    <Card.Text>
                        {all.description.slice(0, 250)}
                    </Card.Text>
                    <p className='text-danger'>Total Cost: ${all.fees}</p>
                    <p className='text-success'>Ratings: {all.rating}</p>
                </Card.Body>
                <Button variant="outline-secondary">
                    <Link className='text-decoration-none'>See Details</Link>
                </Button>
            </Card>
        </div>
    );
};

export default AllServices;