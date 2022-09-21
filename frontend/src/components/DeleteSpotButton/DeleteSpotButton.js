import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteSpotConfirmation from './DeleteSpotConfirmation';



function DeleteSpotButton() {
    const spot = useSelector(state => state.spots.spotById);
    const [] = useState(false);

    const toggle = () => {

    }

    return (
        <div className="delete-button-wrapper">
            <div className="delete-button" onClick={toggle}>
                Delete Spot
            </div>
            <div className="dropdown">Are you sure you want to delete this spot?
                This action can't be undone.
                <div className="delete-button">
                    <DeleteSpotConfirmation spotId={spot.id}/>
                </div>
            </div>

        </div>
    )
}


export default DeleteSpotButton;