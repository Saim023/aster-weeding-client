import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const details = useLoaderData();
    return (
        <Container>
            <Row>
                <Col lg='5'>
                    <h1 className='text-center mt-4 mb-4'>Service Details</h1>
                    <Card className='box-shadow'>
                        <PhotoProvider>
                            <PhotoView src={details.image}>
                                <Card.Img variant="top" src={details.image} style={{ objectFit: 'cover' }} />
                            </PhotoView>
                        </PhotoProvider>
                        <Card.Body>
                            <Card.Title>{details.title}</Card.Title>
                            <Card.Text>
                                {details.description}
                            </Card.Text>
                            <p className='text-danger'>Total Cost: ${details.fees}</p>
                            <p className='text-success'>Ratings: {details.rating}</p>
                        </Card.Body>
                        <button>
                            <Link to='/all-services'>Go Back</Link>
                        </button>
                    </Card>
                </Col>
                <Col lg='7'>
                    <h1>right side</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;