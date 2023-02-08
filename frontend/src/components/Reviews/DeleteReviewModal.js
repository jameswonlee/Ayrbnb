import { Modal } from "../../context/Modal";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteReview, getReviewsBySpotId } from "../../store/reviews";
import './Reviews.css';


function DeleteReviewModal({ review, setUserReview, setUserStars }) {
    const dispatch = useDispatch();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const showModal = () => {
        setShowDeleteModal(true);
    }

    const hideModal = () => {
        setShowDeleteModal(false);
    }

    const deleteClickHandler = async () => {
        await dispatch(deleteReview(review.id));
        setUserReview("");
        setUserStars("");
        setShowDeleteModal(false);
    }

    return (
        <div className="delete-review-outer">
            <button className="review-buttons" onClick={showModal}>
                Delete review
            </button>
            {showDeleteModal && (
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