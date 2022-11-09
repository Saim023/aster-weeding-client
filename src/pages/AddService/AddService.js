import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const fees = form.fees.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const description = form.description.value;
        console.log(title, fees, photoURL, rating, description)

        const wedding = {
            title: title,
            fees: fees,
            description: description,
            image: photoURL,
            rating: rating,
        }

        fetch('http://localhost:5000/add-services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wedding)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Successfully !')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <h1 className='text-center mt-4 mb-4'>You Can Add Services Here!!</h1>
            <form onSubmit={handleAddService}>
                <InputGroup className="mb-3 w-50 m-auto">
                    <InputGroup.Text>Add a title</InputGroup.Text>
                    <Form.Control type='text' name='title' aria-label="Title" required />
                </InputGroup>
                <InputGroup className="mb-3 w-50 m-auto">
                    <InputGroup.Text>Service Fee</InputGroup.Text>
                    <Form.Control type='number' name='fees' aria-label="Title" required />
                </InputGroup>
                <InputGroup className="mb-3 w-50 m-auto">
                    <InputGroup.Text>Photo URL</InputGroup.Text>
                    <Form.Control type='text' name='photoURL' aria-label="Title" required />
                </InputGroup>
                <InputGroup className="mb-3 w-50 m-auto">
                    <InputGroup.Text>Ratings</InputGroup.Text>
                    <Form.Control type='number' name='rating' aria-label="Title" required />
                </InputGroup>
                <Form.Control className="mb-3 w-50 m-auto" name='description' style={{ height: '150px' }} as="textarea" aria-label="Descriptions" placeholder='Description' required />
                <InputGroup>
                    <Button className='m-auto mt-4' variant="outline-info" type="submit">
                        Add Service
                    </Button>
                </InputGroup>
                <Toaster></Toaster>
            </form>
        </div>
    );
};

export default AddService;