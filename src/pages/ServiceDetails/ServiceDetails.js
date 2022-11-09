import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../../components/Reviews/Reviews';

const ServiceDetails = () => {
    const details = useLoaderData();
    const [userReview, setUserReview] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])

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
                    <h1 className='text-center mt-4 mb-4'>Reviews</h1>
                    {
                        userReview && userReview.map(review => <Reviews
                            key={review._id}
                            review={review}
                        ></Reviews>)
                    }
                    <form className='mt-5 w-75 m-auto'>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                                name='email'
                            />
                            <label htmlFor="floatingInputCustom">Email Address</label>
                        </Form.Floating>
                        <FloatingLabel controlId="floatingTextarea2" label="Review">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a review here"
                                name='review'
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button type='submit' className=' mt-3' variant="outline-info">Add a review</Button>
                    </form>

                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;