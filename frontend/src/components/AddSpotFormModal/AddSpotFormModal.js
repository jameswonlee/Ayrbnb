import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from "../../context/Modal";
import LoginForm from '../LoginFormModal/LoginForm';
import AddSpotForm from './AddSpotForm';
import './AddSpotFormModal.css'


function AddSpotFormModal() {
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false);

    const clickHandler = () => {
        setShowModal(true);
    }

    return (
        <>
            <div className="become-host-container">
                <button className="become-host-button" onClick={clickHandler}>
                    Become a Host
                </button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        {sessionUser
                            ?
                            <AddSpotForm setShowModal={setShowModal} />
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