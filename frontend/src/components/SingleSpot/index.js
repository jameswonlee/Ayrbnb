import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModal from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';
import { getReviewsBySpotId } from '../../store/reviews';
import CreateReviewModal from '../CreateReview/CreateReviewModal';
import superhostBadge from '../../images/superhost-badge.png';
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
    }, [spotId, reviewCount]);

    return (
        <>
            {spot && (
                <div className="outer-container">
                    <div className="spot-name">
                        <h2>{spot.name}</h2>
                    </div>
                    <div className="stars-reviews-location">
                        {spot.avgStarRating
                            ?
                            <p>★ {spot.avgStarRating} · <span
                                className="review-count">{reviewCount} reviews</span> &nbsp; · &nbsp;<img
                                    src={superhostBadge} className="superhost-badge"></img>
                                <span className="superhost">&nbsp; Superhost&nbsp;</span> · &nbsp;&nbsp;<span
                                    className="city">{spot.city},</span>
                                <span className="state"> {spot.state}, </span>
                                <span className="country">{spot.country}</span>
                            </p>
                            :
                            <p>
                                <span
                                    className="city">{spot.city},</span>
                                <span className="state"> {spot.state}, </span>
                                <span className="country">{spot.country}</span>
                            </p>
                        }
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
                                        className={`image spot-image`}
                                        src={image.url}
                                        style={{ paddingBottom: index > 1 ? 0 : "10px" }} />)
                                )
                            })}
                        </div>
                    </div>
                    <div className="under-image-details">
                        {sessionUser && spot.ownerId === sessionUser.id
                            ?
                            <div className="spot-owner">
                                <h2>You are the owner of this spot</h2>
                                <div className="owner-options">
                                    <div><UpdateSpotFormModal spot={spot} /></div>
                                    <div><DeleteSpotButton /></div>
                                </div>
                            </div>
                            :
                            <div className="spot-owner">
                                <h2>Entire home hosted by {spot.Owner?.firstName}</h2>
                            </div>
                        }
                        <div className="spot-price-container">
                            <h2 className="spot-price">${spot.price}<span> night</span></h2>
                        </div>
                    </div>
                    <div className="description">
                        <p>{spot.description}</p>
                    </div>
                    <div className="rating-container">
                        {/* <h2 className="avgRating-reviewCount">
                            ★ {Number(spot.avgStarRating).toFixed(2)} • {reviewCount} reviews
                        </h2> */}
                        {spot.avgStarRating
                            ?
                            <h2 className="avgRating-reviewCount">
                                ★ {Number(spot.avgStarRating).toFixed(2)} • {reviewCount} reviews
                            </h2>
                            :
                            <h2 className="avgRating-reviewCount">
                                No reviews (yet)
                            </h2>
                        }
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