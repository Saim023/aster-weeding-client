import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllServices = ({ all }) => {
    return (
        <div>
            <Card>
                <PhotoProvider>
                    <PhotoView src={all.image}>
                        <Card.Img variant="top" src={all.image} style={{ objectFit: 'cover' }} />
                    </PhotoView>
                </PhotoProvider>
                <Card.Body>
                    <Card.Title>{all.title}</Card.Title>
                    <Card.Text>
                        {all.description.slice(0, 200)}
                    </Card.Text>
                    <p className='text-danger'>Total Cost: ${all.fees}</p>
                    <p className='text-success'>Ratings: {all.rating}</p>
                </Card.Body>
                <Button variant="outline-secondary">
                    <Link to={`/service-details/${all._id}`} className='text-decoration-none'>View Details</Link>
                </Button>
            </Card>
        </div>
    );
};

export default AllServices;