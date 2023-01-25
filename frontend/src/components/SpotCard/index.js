import { NavLink } from 'react-router-dom';
import './SpotCard.css';
import React from 'react';


function SpotCard({ spot }) {

    return (
        <NavLink to={`/spots/${spot.id}`} className="spot-card-outer-container">
            <div className="image-container">
                <img className="preview-image" src={spot.previewImage} />
            </div>
            <div className="preview-spot-details-outer">
                <div className="city-price">
                    <p className="city-state">{spot.city},
                        {spot.state == "CA"
                            ?
                            <span> California</span>
                            :
                            <span>{spot.state}</span>
                        }
                    </p>
                    <p className="spot-country text-gray">{spot.country}</p>
                    <p className="price">${spot.price}<span> night</span></p>
                </div>
                <div className="avg-rating">
                    {spot.avgRating
                        ?
                        <p>★ {Number(spot.avgRating).toFixed(2)}</p>
                        :
                        <p>★ New</p>
                    }
                </div>
            </div>
        </NavLink>
    )
}





export default SpotCard;