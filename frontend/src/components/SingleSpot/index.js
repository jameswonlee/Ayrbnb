import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModule from '../UpdateSpotModal/UpdateSpotFormModal';


function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.spotById);

    useEffect(() => {
        dispatch(getSpotById(spotId))
    }, []);


    return spot && (
        <div><section>
            <h2>{spot.name}</h2>
            {/* avgRating not working */}
            <p>★{spot.avgStarRating}</p>
            <p>{spot.description}</p>
            <p>{spot.city}, {spot.state}, {spot.country}</p>
            {spot.SpotImages.map(image => (
                <img src={image.url}/>
            ))}
            <p>${spot.price} night</p>
            <div><ReviewsForSpot spot={spot} /></div>
            <div><UpdateSpotFormModule spot={spot} /></div>
        </section>
            <div>
            </div></div>

    )
}



export default SingleSpot;