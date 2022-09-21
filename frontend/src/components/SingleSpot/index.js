import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';


function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.spots[spotId]);

    useEffect(() => {
        dispatch(getSpotById(spotId))
    }, [])


    return (
        <section>
            <h2>{spot.name}</h2>
            <p>{spot.description}</p>
            <p>{spot.price}</p>
        </section>

    )
}



export default SingleSpot;