import React from 'react';
import { NavLink } from 'react-router-dom';
import './SpotCard.css';
import dayjs from 'dayjs';


function SpotCard({ spot }) {

    const priceWithCommas = (dollars) => {
        return dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <NavLink to={`/spot/${spot.id}`} className="spot-card-outer-container">
            <div className="image-container">
                <img className="preview-image" src={spot.previewImage} />
            </div>
            <div className="preview-spot-details-outer">
                <div className="city-price">
                    <div className="city-state">{spot.city},
                        {spot.state == "CA"
                            ?
                            <span> California</span>
                            :
                            <span>{spot.state}</span>
                        }
                    </div>
                    <div className="spot-country">{spot.country}</div>
                    <div className="spot-available-dates">{dayjs().add(14, 'd').format("MMM D")}-{dayjs().add(19, 'd').format("MMM D")}</div>
                    <div className="spot=price-container">
                        <div className="price">${priceWithCommas(spot.price)}<span> night</span></div>
                    </div>
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