import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModule from '../UpdateSpotModal/UpdateSpotFormModal';


function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.spots[spotId]);

    useEffect(() => {
        dispatch(getSpotById(spotId))
    }, []);


    return (
        <section>
            <h2>{spot.name}</h2>
            <p>{spot.description}</p>
            <p>${spot.price} night</p>
            <p>{spot.city}, {spot.state}, {spot.country}</p>
            <div><ReviewsForSpot spot={spot}/></div>
            <div><UpdateSpotFormModule spot={spot}/></div>
        </section>
    )
}



export default SingleSpot;