import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import LoginForm from '../LoginFormModal/LoginForm';
import AddSpotForm from './AddSpotForm';
import './AddSpotFormModal.css'


function AddSpotFormModal({ showAddSpotModal, setShowAddSpotModal }) {
    const sessionUser = useSelector(state => state.session.user)

    const clickHandler = () => {
        setShowAddSpotModal(true);
    }

    return (
        <>
            <div className="become-host-container">
                <button className="become-host-button" onClick={clickHandler}>
                    Ayrbnb your home
                </button>
                {showAddSpotModal && (
                    <Modal onClose={() => setShowAddSpotModal(false)}>
                        {sessionUser
                            ?
                            <AddSpotForm setShowAddSpotModal={setShowAddSpotModal} />
                            :
                            <LoginForm />
                        }
                    </Modal>
                )}
            </div>
        </>
    )
}





export default AddSpotFormModal;