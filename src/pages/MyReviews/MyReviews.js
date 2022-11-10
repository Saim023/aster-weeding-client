import React, { useContext, useEffect, useState } from 'react';
import MyRev from '../../components/MyReview/MyRev';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`http://localhost:5000/my-review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [])

    const handleDeleteReview = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this review?')
        if (proceed) {
            fetch(`http://localhost:5000/my-reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully')
                        const remaining = myReview.filter(remain => remain._id !== id)
                        setMyReview(remaining)
                    }

                })
        }

    }

    return (
        <div>
            <Toaster></Toaster>
            <h1 className='text-center mt-4 mb-4'>My Reviews</h1>
            {
                !myReview || <h1 className='text-center text-warning'>No reviews were added</h1>
            }
            {
                myReview && myReview.map(my => <MyRev
                    key={my.reviewId}
                    my={my}
                    handleDeleteReview={handleDeleteReview}
                ></MyRev>)
            }
        </div>
    );
};

export default MyReviews;