import { Modal } from "../../context/Modal";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteReview } from "../../store/reviews";
import './Reviews.css';


function DeleteReviewModal({ review }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const [shown, setShown] = useState(false);

    const showModal = () => {
        setShown(true);
    }

    const hideModal = () => {
        setShown(false);
    }

    const deleteClickHandler = async () => {
        await dispatch(deleteReview(review.id));
        setShown(false);
        alert('Review successfully deleted');
        // history.push(`/spots/${spotId}`)
    }

    return (
        <div className="delete-review-outer">
            <button className="delete-review-button" onClick={showModal}>
                Delete your review
            </button>
            {shown && (
                <Modal onClose={hideModal}>
                    <div className="confirm-delete-review">
                        <h2 className="confirm-delete-question">
                            Are you sure you want to delete your review?
                        </h2>
                        <div className="review-delete-buttons">
                            <button className="review-delete-button" onClick={deleteClickHandler}>
                                Confirm Delete
                            </button>
                            <button className="review-delete-cancel" onClick={hideModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}



export default DeleteReviewModal;