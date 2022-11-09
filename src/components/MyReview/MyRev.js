import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyRev = ({ my, handleDeleteReview }) => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Card className='m-auto' border="info" style={{ width: '70%' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{my.name}</Card.Title>
                    <Card.Text>
                        {my.review}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='d-flex justify-content-center mt-3 mb-3'>
                <Button variant="outline-info" className='mx-3'>Edit Review</Button>
                <Button onClick={() => handleDeleteReview(my._id)} variant="outline-info">Delete Review</Button>
            </div>
        </div>
    );
};

export default MyRev;