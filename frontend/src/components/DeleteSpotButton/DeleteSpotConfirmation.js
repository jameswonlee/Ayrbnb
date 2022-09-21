import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteSpot } from '../../store/spots';


function DeleteSpotConfirmation({ spotId }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const clickHandler = (e) => {
        e.preventDefult();
        dispatch(deleteSpot(spotId));
        alert('Spot successfully deleted');
        history.push('/');
    }

    return (
        <div onClick={clickHandler}>
            Confirm Delete
        </div>
    )
}



export default DeleteSpotConfirmation;