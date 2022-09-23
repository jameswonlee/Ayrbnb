import { NavLink } from 'react-router-dom';
import './SpotCard.css';
import React from 'react';
// import { useDispatch } from 'react-redux';


function SpotCard({ spot }) {
    // const dispatch = useDispatch();

    return (
        <NavLink to={`/spots/${spot.id}`}>
            <div className="outer-container">
                <div className="image-container">
                    <img className="preview-image" src={spot.previewImage} />
                </div>
                <div className="preview-spot-details-outer">
                    <div className="city-price">
                        <p>{spot.city}, {spot.state}</p>
                        <p>${spot.price} night</p>
                    </div>
                    <div className="avg-rating">
                        <p>★{spot.avgRating}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}




export default SpotCard;