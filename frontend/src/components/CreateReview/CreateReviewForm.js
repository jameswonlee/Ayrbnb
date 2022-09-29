import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createReviewForSpot } from '../../store/reviews';
import './CreateReviewForm.css';


function CreateReviewForm({ spot, setShowModal }) {
    const dispatch = useDispatch();

    const [review, setReview] = useState("");
    const [stars, setStars] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(createReviewForSpot(review, stars, spot.id));
        alert("Review successfully created!");
        setShowModal(false);
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <h2>Write your review</h2>
                <input 
                type="text"
                onChange={e => setReview(e.target.value)}
                value={review}
                placeholder="Your.... Review.... Here...."
                />
                <input 
                type="number"
                onChange={e => setStars(e.target.value)}
                value={stars}
                min="1"
                max="5"
                placeholder="Star Rating"/>
                <button
                className="submit-button">
                    Submit Review
                </button>
            </form>
        </div>
    )
}



export default CreateReviewForm; 