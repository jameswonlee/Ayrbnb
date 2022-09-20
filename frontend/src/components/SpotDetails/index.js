import './SpotDetails.css';
import { NavLink } from 'react-router-dom';


function SpotDetails({ spot }) {
    // console.log('spot', spot)
    return (
        <div className="spot-details">
            <NavLink to={`/spots/${spot.id}`}>
            <img src={spot.previewImage}></img>
            </NavLink>
        </div>
    )
}




export default SpotDetails;