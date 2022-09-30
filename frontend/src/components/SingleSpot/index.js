import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModal from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';
import { getReviewsBySpotId } from '../../store/reviews';
import CreateReviewModal from '../CreateReview/CreateReviewModal';


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
                        <p>★{spot.avgStarRating} · {reviewCount} reviews · Superhost
                            · {spot.city}, {spot.state}, {spot.country}</p>
                    </div>
                    <div className="images">
                        {spot.SpotImages?.map(image => (
                            <img key={image.id} src={image.url} />
                        ))}
                    </div>
                    <div className="under-image-details">
                        <h2>Entire home hosted by {spot.Owner?.firstName}</h2>
                        <p>8 guests · 5 bedrooms · 5 beds · 5.5 baths</p>
                    </div>
                    <div className="description">
                        <p>{spot.description}</p>
                    </div>
                    <div className="price">
                        <p>${spot.price} night</p>
                    </div>
                    <div className="review-outer-container">
                        <div className="avgRating-reviewcount">
                            ★{Number(spot.avgStarRating).toFixed(2)} • {reviewCount} reviews
                        </div>
                        {sessionUser && spot.Owner?.id !== sessionUser.id &&
                            <div>
                                <CreateReviewModal spot={spot} />
                            </div>
                        }
                        <div className="reviews">
                            <ReviewsForSpot reviews={reviews} spot={spot} />
                        </div>
                    </div>
                    {sessionUser && spot.ownerId === sessionUser.id &&
                        <div className="owner-options">
                            <div><UpdateSpotFormModal spot={spot} /></div>
                            <div><DeleteSpotButton /></div>
                        </div>
                    }
                </div>
            )}
            {notFound && <h1>PAGE NOT FOUND</h1>}
        </>
    )
}



export default SingleSpot;