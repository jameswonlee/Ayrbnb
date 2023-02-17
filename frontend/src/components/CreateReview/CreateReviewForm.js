import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createReviewForSpot } from '../../store/reviews';
import downCaret from '../../icons/down-caret.ico';
import './CreateReviewForm.css';


function CreateReviewForm({ spot, setShowCreateReviewModal, userReview, setUserReview, userStars, setUserStars }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [validationErrors, setValidationErrors] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = [];

        if (!userReview.length) errors.push("Review is required");
        if (userReview.length > 500) errors.push("Review can not exceed 500 characters");

        setValidationErrors(errors);

        if (!errors.length) {
            try {
                await dispatch(createReviewForSpot(userReview, userStars, spot.id, sessionUser));
                setShowCreateReviewModal(false);
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
                <div className="create-review-star-select-container">
                    <img src={downCaret} className="create-review-select-star-down-caret"/>
                    <select value={userStars}
                        onChange={e => {
                            setValidationErrors([])
                            setUserStars(e.target.value)
                        }}
                        className="create-review-star-select">
                        <option value="5">★ ★ ★ ★ ★</option>
                        <option value="4">★ ★ ★ ★</option>
                        <option value="3">★ ★ ★</option>
                        <option value="2">★ ★</option>
                        <option value="1">★</option>
                    </select>
                </div>
                <textarea
                    type="text"
                    onChange={e => {
                        setValidationErrors([])
                        setUserReview(e.target.value)
                    }}
                    value={userReview}
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