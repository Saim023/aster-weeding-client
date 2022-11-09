import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import toast, { Toaster } from 'react-hot-toast';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Reviews from '../../components/Reviews/Reviews';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const details = useLoaderData();
    const [userReview, setUserReview] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        fetch(`http://localhost:5000/review?reviewId=${details._id}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [])


    const handleReview = (event) => {
        if (!user?.email) {
            return alert('Please login first')
        }
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;

        const reviews = {
            reviewId: details._id,
            name: name,
            email: email,
            review: review,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully !')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

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
                    <form onSubmit={handleReview} className='mt-5 w-75 m-auto'>
                        <input type="text" name='name' placeholder='Name' required />
                        <br />
                        <br />
                        <input type="email" name='email' placeholder='Email' required />
                        <br />
                        <br />
                        <textarea name="review" id="" cols="80" rows="10" placeholder='Review' required></textarea>
                        <br />
                        <br />
                        <button type='submit'>Add your review</button>
                        <br />
                        <br />
                        {!user?.email && <><p>Please login to add a review</p> <Link to='/login'>Login</Link></>}

                        <Toaster />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetails;