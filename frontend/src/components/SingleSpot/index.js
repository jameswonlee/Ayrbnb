import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModal from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';
import { getReviewsBySpotId } from '../../store/reviews';


function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.spots[spotId]);
    const reviews = useSelector(state => state.reviews.reviews);
    const reviewCount = Object.keys(reviews).length;
    const [notFound, setNotFound] = useState(false);

    const doEffect = async () => {
        try {
            const spot = await dispatch(getSpotById(spotId));
            if (spot) {
                await dispatch(getReviewsBySpotId(spotId));
            }
        } catch (e) {
            setNotFound(true);
        }
    }

    useEffect(() => {
        doEffect();
    }, []);

    return (
        <>
            {spot && (
                <div className="outer-container">
                    <div className="spot-name">
                        <h2>{spot.name}</h2>
                    </div>
                    <div className="stars-reviews-location">
                        <p>★{spot.avgStarRating}</p>
                        <p>{reviewCount} reviews</p>
                        <p>{spot.city}, {spot.state}, {spot.country}</p>
                    </div>
                    <div>
                        {spot.SpotImages?.map(image => (
                            <img key={image.id} src={image.url} />
                        ))}
                    </div>
                    <div>
                        <h2>Entire home hosted by {spot.Owner?.firstName}</h2>
                    </div>
                    <div className="description">
                        <p>{spot.description}</p>
                    </div>
                    <div className="price">
                        <p>${spot.price} night</p>
                    </div>
                    <div className="reviews-outer">
                        <div className="avgRating-reviewcount">
                            ★{spot.avgStarRating} • {reviewCount} reviews
                        </div>
                        <div>
                            <ReviewsForSpot spot={spot} />
                        </div>
                    </div>
                    {sessionUser && spot.ownerId === sessionUser.id &&
                        <div className="owner-options">
                            <div><UpdateSpotFormModal spot={spot} /></div>
                            <div><DeleteSpotButton /></div>
                        </div>
                    }
                    <div>
                    </div>
                </div>
            )}
            {notFound && <h1>PAGE NOT FOUND</h1>}
        </>
    )
}



export default SingleSpot;