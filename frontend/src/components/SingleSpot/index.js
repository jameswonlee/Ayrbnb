import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModule from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';


function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.spotById);
    // console.log('spot', spot)

    useEffect(() => {
        dispatch(getSpotById(spotId))
    }, []);


    return spot && (
        <div>
            <section>
                <h2>{spot.name}</h2>
                <p>★{spot.avgStarRating}</p>
                <p>{spot.description}</p>
                <p>{spot.city}, {spot.state}, {spot.country}</p>
                {spot.SpotImages.map(image => (
                    <img key={image.id} src={image.url} />
                ))}
                <p>${spot.price} night</p>
                <div><ReviewsForSpot spot={spot} /></div>

                {sessionUser && spot.ownerId === sessionUser.id &&
                    <div className="owner-options">
                        <div><UpdateSpotFormModule spot={spot} /></div>
                        <div><DeleteSpotButton /></div>
                    </div>
                }

            </section>
            <div>

            </div>
        </div>

    )
}



export default SingleSpot;