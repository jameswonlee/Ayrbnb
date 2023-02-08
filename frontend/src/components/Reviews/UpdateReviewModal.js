import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import { editReview } from "../../store/reviews";


function UpdateReviewModal({ review, userReview, setUserReview, userStars, setUserStars }) {
    const dispatch = useDispatch();

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitHandler = async (e) => {

        e.preventDefault();
        const errors = [];

        if (!userReview.length) errors.push("Review is required");
        if (userReview.length > 500) errors.push("Review can not exceed 500 characters");

        setValidationErrors(errors);

        if (!errors.length) {
            try {
                await dispatch(editReview(review.id, userReview, userStars));
                setShowUpdateModal(false);
            } catch(e) {
                const response = await e.json();
            }
        }
    }


    return (
        <div className="create-review-container">
            <button onClick={() => setShowUpdateModal(true)} className="review-buttons">Edit review</button>
            {showUpdateModal && (
                <Modal onClose={() => setShowUpdateModal(false)}>
                    <div className="review-form">
                        <form onSubmit={submitHandler}>
                            <div className="write-review-title">Edit your review</div>
                            <div className="create-review-errors">
                                {validationErrors.length > 0 &&
                                    validationErrors.map(error =>
                                        <div className="create-review-errors-text" key={error}>{error}</div>
                                    )}
                            </div>
                            <select value={userStars}
                                onChange={e => {
                                    setValidationErrors([])
                                    setUserStars(e.target.value)
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
                </Modal>
            )}
        </div>
    )
}


export default UpdateReviewModal;