import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';
import { Modal } from "../../context/Modal";
import './DeleteSpot.css'


function DeleteSpotButton() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const [shown, setShown] = useState(false);

    const showModal = () => {
        setShown(true);
    }

    const hideModal = () => {
        setShown(false);
    }

    const deleteClickHandler = (e) => {
        dispatch(deleteSpot(spotId));
        alert('Spot successfully deleted');
        history.push('/');
    }

    return (
        <div className="delete-button-content">
            <button className="delete-spot-button" onClick={showModal}>
                Delete Your Spot
            </button>
            {shown &&
                <Modal onClose={hideModal}>
                    <div className="delete-spot">
                        <div className="delete-spot-question">Are you sure you want to delete this spot?</div>
                        <p className="delete-warning-message">This action can't be undone.</p>
                        <div className='delete-buttons'>
                            <button className="confirm-delete-button" onClick={deleteClickHandler}>
                                Confirm Delete
                            </button>
                            <button className="cancel-delete-button" onClick={hideModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>}
        </div>
    )
}


export default DeleteSpotButton;