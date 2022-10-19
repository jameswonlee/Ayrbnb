import { Modal } from "../../context/Modal";
import { useState } from 'react';
import CreateReviewForm from "./CreateReviewForm";
import './CreateReviewModal.css';


function CreateReviewModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <div className="create-review-container">
            <button onClick={clickHandler} className="create-review-button">Write a review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateReviewForm setShowModal={setShowModal} spot={spot}/>
                </Modal>
            )}
        </div>
    )
}



export default CreateReviewModal;