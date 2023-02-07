import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReviewForSpot } from '../../store/reviews';
import './CreateReviewForm.css';
import backArrow from '../../icons/back-arrow.png';


function CreateReviewForm({ spot, setShowModal }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState("");
    const [stars, setStars] = useState(5);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = [];

        if (!review.length) errors.push("Review is required");
        if (review.length > 500) errors.push("Review can not exceed 500 characters")
        if (!stars || stars < 0 || stars > 5) errors.push("Star rating must be between 1 and 5");

        setValidationErrors(errors);

        if (!errors.length) {
            try {
                await dispatch(createReviewForSpot(review, stars, spot.id, sessionUser));
                setShowModal(false);
            } catch (e) {
                const response = await e.json();
                const otherErrors = errors.slice();
                otherErrors.push(response.message);
                setValidationErrors(otherErrors);
            }
        }
    }


    return (
        <div className="review-form">
            <form onSubmit={submitHandler}>
                <div className="write-review-title">Write your review</div>
                <div className="create-review-errors">
                    {validationErrors.length > 0 &&
                        validationErrors.map(error =>
                            <div className="create-review-errors-text" key={error}>{error}</div>
                        )}
                </div>
                <select value={stars}
                    onChange={e => {
                        setValidationErrors([])
                        setStars(e.target.value)
                    }}
                    className="create-review-select">
                    <option value="5">★ ★ ★ ★ ★</option>
                    <option value="4">★ ★ ★ ★</option>
                    <option value="3">★ ★ ★</option>
                    <option value="2">★ ★</option>
                    <option value="1">★</option>
                </select>
                <textarea
                    type="text"
                    onChange={e => {
                        setValidationErrors([])
                        setReview(e.target.value)
                    }}
                    value={review}
                    placeholder="Your review here..."
                    className="create-review-text-area"
                />
                <button
                    disabled={!!validationErrors.length}
                    className="submit-review-button">
                    Submit Review
                </button>
            </form>
        </div>
    )
}



export default CreateReviewForm; 