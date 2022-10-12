import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import UpdateSpotForm from './UpdateSpotForm';


function UpdateSpotFormModule({ spot }) {
    // const spot = useSelector(state => state.spots.spots[spot.id]);
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