import { NavLink } from 'react-router-dom';
import './SpotCard.css';
import React from 'react';
// import { useDispatch } from 'react-redux';


function SpotCard({ spot }) {

    return (
        <NavLink to={`/spots/${spot.id}`} className="spot-card-outer-container">
            <div className="image-container">
                <img className="preview-image" src={spot.previewImage} />
            </div>
            <div className="preview-spot-details-outer">
                <div className="city-price">
                    <p><strong>{spot.city}, {spot.state}</strong></p>
                    <p>{spot.country}</p>
                    <p><strong>${spot.price} night</strong></p>
                </div>
                <div className="avg-rating">
                    <p>★{Number(spot.avgRating).toFixed(2)}</p>
                </div>
            </div>
        </NavLink>
    )
}


{/* <div className="outer-container">
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
</div> */}




export default SpotCard;