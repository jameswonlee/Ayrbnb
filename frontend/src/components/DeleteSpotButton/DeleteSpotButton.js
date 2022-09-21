import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';
import { Modal } from "../../context/Modal";
import './DeleteSpot.css'



function DeleteSpotButton() {
    const dispatch = useDispatch();
    const history = useHistory();
    const spot = useSelector(state => state.spots.spotById);
    const [shown, setShown] = useState(false);

    const showModal = () => {
        setShown(true);
    }

    const hideModal = () => {
        setShown(false);
    }

    const deleteClickHandler = (e) => {
        dispatch(deleteSpot(spot.id));
        alert('Spot successfully deleted');
        history.push('/');
    }

    return (
        <div className="delete-button-wrapper">
            <button className="delete-button" onClick={showModal}>
                Delete Spot
            </button>
            {shown &&
                <Modal onClose={hideModal}>
                    <div className="dropdown">Are you sure you want to delete this spot?
                        This action can't be undone.
                        <div className='delete-buttons'>
                            <button onClick={deleteClickHandler}>
                                Confirm Delete
                            </button>
                            <button onClick={hideModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>}
        </div>
    )
}


export default DeleteSpotButton;