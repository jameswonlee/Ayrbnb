import './SpotCard.css';
import { NavLink } from 'react-router-dom';


function SpotCard({ spot }) {
    // console.log('spot', spot)
    return (
        <div className="spot-container">
            <NavLink to={`/spots/${spot.id}`}>
            <img src={spot.previewImage}></img>
            </NavLink>
        </div>
    )
}




export default SpotCard;