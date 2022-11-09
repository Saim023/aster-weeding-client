import React from 'react';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
    return (
        <div>
            <Card className='m-auto mt-5 mb-4' border="info" style={{ width: '70%' }}>
                <Card.Body>
                    <Card.Title><span className='text-danger'>Question:</span> What are the difference between SQL and NoSQL?</Card.Title>
                    <Card.Text>
                        <span className='text-success'> Answer:</span> SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <br />
                        There are five practical differences between SQL and NoSQL: <br />
                        1. Language <br />
                        2. Scalability <br />
                        3. Structure <br />
                        4. Properties <br />
                        5. Support and communities <br />

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-auto mt-5 mb-4' border="info" style={{ width: '70%' }}>
                <Card.Body>
                    <Card.Title><span className='text-danger'>Question:</span>What is JWT, and how does it work?</Card.Title>
                    <Card.Text>
                        <span className='text-success'> Answer:</span> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-auto mt-5 mb-4' border="info" style={{ width: '70%' }}>
                <Card.Body>
                    <Card.Title><span className='text-danger'>Question:</span> What is the difference between javascript and Node JS?</Card.Title>
                    <Card.Text>
                        <span className='text-success'> Answer:</span> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-auto mt-5 mb-4' border="info" style={{ width: '70%' }}>
                <Card.Body>
                    <Card.Title><span className='text-danger'>Question:</span> How does Node JS handle multiple requests at the same time?</Card.Title>
                    <Card.Text>
                        <span className='text-success'> Answer:</span>  Node JS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;