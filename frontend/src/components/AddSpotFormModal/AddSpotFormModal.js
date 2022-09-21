import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Modal } from "../../context/Modal";
import AddSpotForm from './AddSpotForm';


function AddSpotFormModal() {
    // const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <>
            <button onClick={clickHandler}>Become a Host</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddSpotForm />
                </Modal>
            )}
        </>
    )
}





export default AddSpotFormModal;