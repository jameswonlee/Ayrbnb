import { useState } from 'react';
import { Modal } from "../../context/Modal";
import UpdateSpotForm from './UpdateSpotForm';


function UpdateSpotFormModule() {
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <>
            <button onClick={clickHandler}>Edit Your Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateSpotForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    )

}



export default UpdateSpotFormModule;