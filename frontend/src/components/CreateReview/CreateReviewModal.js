import { Modal } from "../../context/Modal";
import { useState } from 'react';
import CreateReviewForm from "./CreateReviewForm";
import './CreateReviewModal.css';


function CreateReviewModal({ spot, userReview, setUserReview, userStars, setUserStars }) {
    const [showCreateReviewModal, setShowCreateReviewModal] = useState(false);

    const clickHandler = () => {
        setShowCreateReviewModal(true);
    }

    return (
        <div className="create-review-container">
            <button onClick={clickHandler} className="create-review-button">Write a review</button>
            {showCreateReviewModal && (
                <Modal onClose={() => setShowCreateReviewModal(false)}>
                    <CreateReviewForm
                        setShowCreateReviewModal={setShowCreateReviewModal}
                        spot={spot}
                        userReview={userReview}
                        setUserReview={setUserReview}
                        userStars={userStars}
                        setUserStars={setUserStars} />
                </Modal>
            )}
        </div>
    )
}



export default CreateReviewModal;