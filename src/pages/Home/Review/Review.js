import React, { useEffect, useState } from 'react';
import '../Review/Review.css'
const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://shrouded-basin-86219.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-5 p-3 reviewDiv'>
            <h2>Customers Review</h2>
            <div className='reviewComment'>
                {
                    reviews.map(review => <div
                        key={review._id}
                    >
                        <p>{review.comment}</p>
                        <h6><i>Commented By-{review.name}</i></h6>
                        <h6><i>{review.email}</i></h6>
                        <h6><i><b>Rating Point: </b>{review.rating}</i></h6>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;