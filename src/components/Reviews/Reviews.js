import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Reviews = ({ review }) => {
    const { user } = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <Card className='m-auto mt-3' border="info" style={{ width: '90%' }}>
                <Card.Body>
                    <Card.Title>
                        <div > {
                            user?.photoURL
                                ?
                                <Image src={user?.photoURL} style={{ height: '30px' }} roundedCircle></Image>
                                :
                                user?.email
                        }
                        </div> {review.name}</Card.Title>

                    <Card.Text>
                        {review.review}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Reviews;