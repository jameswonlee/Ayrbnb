import React from 'react';
import './SpotCard.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotById } from '../../store/spots';


function SpotCard({ spot }) {
    const dispatch = useDispatch();
    // console.log('image', spot.previewImage)
    

    return (
        <NavLink to={`/spots/${spot.id}`}>
            <div>
                <img className="preview-image" src={spot.previewImage} />
            </div>
            <div>
                <div>{spot.city}, {spot.state}</div>
                <div>{spot.avgRating}</div>
                <div>${spot.price}/night</div>
            </div>
        </NavLink>
    )
}




export default SpotCard;