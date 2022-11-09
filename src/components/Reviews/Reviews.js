import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Reviews = ({ review }) => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <Card className='m-auto mt-3' border="info" style={{ width: '90%' }}>
                <Card.Header><Card.Title>{review.name}</Card.Title></Card.Header>
                <Card.Body>

                    <Card.Text>
                        {review.review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviews;