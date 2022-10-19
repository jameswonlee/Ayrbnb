import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModal from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';
import { getReviewsBySpotId } from '../../store/reviews';
import CreateReviewModal from '../CreateReview/CreateReviewModal';
import './SingleSpot.css';


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
                        {spot.SpotImages?.map((image, index) => {
                            if (image.preview === true) return (
                                <img className="main-image" src={image.url} key={image.id} />
                            );
                        })}
                        <div className="small-images">
                            {spot.SpotImages?.map((image, index) => {
                                if (image.preview !== true) return (
                                    (<img key={image.id}
                                        className={`image spot-image`} src={image.url} style={{ paddingBottom: index > 1 ? 0 : "10px" }} />)
                                )
                            })}
                        </div>
                    </div>
                    <div className="under-image-details">
                        {sessionUser && spot.ownerId === sessionUser.id ?
                            <div className="spot-owner">
                                <h2>You are the owner of this spot</h2>
                                <div className="owner-options">
                                    <div><UpdateSpotFormModal spot={spot} /></div>
                                    <div><DeleteSpotButton /></div>
                                </div>

                            </div>
                            :
                            <h2>Entire home hosted by {spot.Owner?.firstName}</h2>
                        }
                    </div>
                    <div className="description">
                        <p>{spot.description}</p>
                    </div>
                    <div className="price-star-rating-container">
                        <div className="avgRating-reviewCount">
                            ★{Number(spot.avgStarRating).toFixed(2)} • {reviewCount} reviews
                        </div>
                        <p className="spot-price"><strong>${spot.price}</strong><span> night</span></p>
                    </div>
                    <div className="review-outer-container">
                        {sessionUser && spot.Owner?.id !== sessionUser.id &&
                            <div>
                                <CreateReviewModal spot={spot} />
                            </div>
                        }
                        <ReviewsForSpot reviews={reviews} spot={spot} />
                    </div>
                </div>
            )}
            {notFound && <h1>PAGE NOT FOUND</h1>}
        </>
    )
}



export default SingleSpot;