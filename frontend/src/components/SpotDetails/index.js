import React from 'react';
import './SpotDetails.css';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSpotById } from '../../store/spots';


function SpotDetails({ spot }) {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getSpotById(spot.id))
    }

    return (
        <div className="single-spot-details" onClick={handleClick}>
            <NavLink to={`/spots/${spot.id}`}>
                <div className='preview-image'>
                    {spot.previewImage &&
                        <div>
                            <img
                                className='preview-image'
                                src={spot.previewImage}>
                            </img>
                        </div>
                    }
                </div>
            </NavLink>
        </div>
    )
}




export default SpotDetails;