import { NavLink } from 'react-router-dom';
import './SpotCard.css';
import React from 'react';
// import { useDispatch } from 'react-redux';


function SpotCard({ spot }) {
    // const dispatch = useDispatch();

    return (
        <div className="outer-container">
            <div className="image-container">
                <NavLink to={`/spots/${spot.id}`}>
                    <img className="preview-image" src={spot.previewImage} />
                </NavLink>
            </div>
            <div className="preview-spot-details-outer">
                <div className="city-price">
                    <p>{spot.city}, {spot.state}</p>
                    <p>{spot.country}</p>
                    <p>${spot.price} night</p>
                </div>
                <div className="avg-rating">
                    <p>★{Number(spot.avgRating).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}




export default SpotCard;