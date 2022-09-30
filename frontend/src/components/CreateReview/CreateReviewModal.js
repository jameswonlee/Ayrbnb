import { Modal } from "../../context/Modal";
import { useState } from 'react';
import CreateReviewForm from "./CreateReviewForm";


function CreateReviewModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <div>
            <button onClick={clickHandler}>Write a review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateReviewForm setShowModal={setShowModal} spot={spot}/>
                </Modal>
            )}
        </div>
    )
}



export default CreateReviewModal;