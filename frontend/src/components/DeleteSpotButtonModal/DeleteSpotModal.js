import { useState } from 'react';
import { Modal } from "../../context/Modal";
import DeleteSpotButtonForm from './DeleteSpotButtonForm';


function DeleteSpotModal() {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <>
            <button onClick={clickHandler}>Delete your listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteSpotButtonForm />
                </Modal>
            )}
        </>
    )
}
