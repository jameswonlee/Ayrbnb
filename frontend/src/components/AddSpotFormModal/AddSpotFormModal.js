import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import AddSpotForm from './AddSpotForm';


function AddSpotFormModal() {
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <>
            <button onClick={clickHandler}>Become a Host</button>
            {showModal && sessionUser && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddSpotForm />
                </Modal>
            )}
        </>
    )
}





export default AddSpotFormModal;