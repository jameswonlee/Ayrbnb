import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../store/spots';
import { useParams } from 'react-router-dom';
import ReviewsForSpot from '../Reviews';
import UpdateSpotFormModal from '../UpdateSpotModal/UpdateSpotFormModal';
import DeleteSpotButton from '../DeleteSpotButton/DeleteSpotButton';
import { getReviewsBySpotId } from '../../store/reviews';
import CreateBooking from '../Bookings/CreateBooking';
import CreateReviewModal from '../CreateReview/CreateReviewModal';
import MapContainer from '../Maps/MapContainer';
import superhostBadge from '../../images/superhost-badge.png';
import selfCheckInIcon from '../../icons/self-check-in.ico';
import superhostIcon from '../../icons/superhost.ico';
import aircoverIcon from '../../icons/aircover.ico';
import freeCancellationIcon from '../../icons/free-cancellation.ico';
import skylineIcon from '../../icons/city-skyline-views.ico';
import kitchenIcon from '../../icons/kitchen.ico';
import poolIcon from '../../icons/pool.ico';
import tvIcon from '../../icons/tv.ico';
import bluetoothIcon from '../../icons/bluetooth-sound-system.ico';
import wifiIcon from '../../icons/wifi.ico';
import deskIcon from '../../icons/dedicated-workspace.ico';
import carIcon from '../../icons/free-parking.ico';
import hotTubIcon from '../../icons/hot-tub.ico';
import washerIcon from '../../icons/washer.ico';
import './SingleSpot.css';

function SingleSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots.spots[spotId]);
    const reviews = useSelector(state => state.reviews.reviews);
    const reviewCount = Object.keys(reviews).length;
    const userHasReview = Object.values(reviews).find(review => review.userId === sessionUser?.id);

    const [notFound, setNotFound] = useState(false);
    const [userReview, setUserReview] = useState();
    const [userStars, setUserStars] = useState();

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
        console.log('userHasReview', userHasReview)
        setUserReview(userHasReview?.review || "");
        setUserStars(userHasReview?.stars || 5);

    }, [spotId, userHasReview?.review, userHasReview?.stars]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])


    const scrollToReviews = () => {
        window.scrollTo({
            top: 1280,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('nav-bar-no-sticky');

        return () => nav.classList.toggle('nav-bar-no-sticky');
    }, []);

    // useEffect(() => {
    //     const nav = document.querySelector('nav');
    //     nav.classList.toggle('single-spot-max-width');

    //     return () => nav.classList.toggle('single-spot-max-width');
    // }, []);


    return (
        <>
            {spot && (
                <div className="outer-container">
                    <div className="spot-name">
                        <div>{spot.name}</div>
                    </div>
                    <div className="stars-reviews-location">
                        {spot.avgStarRating
                            ?
                            <p className="spot-avg-rating">★ {spot.avgStarRating} · <span onClick={scrollToReviews}
                                className="review-count">{reviewCount} reviews</span>&nbsp; · &nbsp;<img
                                    src={superhostBadge} className="superhost-badge"></img>
                                <span className="superhost">&nbsp; Superhost&nbsp;</span>·&nbsp;&nbsp;<span
                                    className="city">{spot.city},</span>
                                <span className="state">
                                    {spot.state == "CA"
                                        ?
                                        <span> California, </span>
                                        :
                                        <span>{spot.state}, </span>
                                    }
                                </span>
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
                    <div className="spot-details-and-booking-container">
                        <div className="under-image-details-left">
                            <div className="under-image-details">
                                {sessionUser && spot.ownerId === sessionUser.id
                                    ?
                                    <div className="spot-owner">
                                        <h2 className="spot-owner-text">You are the owner of this spot</h2>
                                        <div className="owner-options">
                                            <div><UpdateSpotFormModal spot={spot} /></div>
                                            <div><DeleteSpotButton /></div>
                                        </div>
                                    </div>
                                    :
                                    <div className="spot-owner">
                                        <div className="spot-owner-text">Entire home hosted by {spot.Owner?.firstName}</div>
                                        <div className="spot-bed-bath-count">10 guests · 5 bedrooms · 5 beds · 5.5 baths</div>
                                    </div>
                                }
                            </div>
                            <div className="spot-features-container">
                                <div className="self-check-in-container">
                                    <div className="self-check-in-icon-container">
                                        <img src={selfCheckInIcon} alt="" className="self-check-in-icon" />
                                    </div>
                                    <div className="self-check-in-text">
                                        <div className="self-check-in-header">
                                            Self check-in
                                        </div>
                                        <div className="self-check-in-description">
                                            Check yourself in with the lockbox.
                                        </div>
                                    </div>
                                </div>
                                <div className="superhost-container">
                                    <div className="superhost-icon-container">
                                        <img src={superhostIcon} alt="" className="superhost-icon" />
                                    </div>
                                    <div className="superhost-text">
                                        <div className="superhost-header">
                                            {spot.Owner?.firstName} is a Superhost
                                        </div>
                                        <div className="superhost-description">
                                            Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
                                        </div>
                                    </div>
                                </div>
                                <div className="free-cancellation-container">
                                    <div className="superfree-cancellation-container">
                                        <img src={freeCancellationIcon} alt="" className="free-cancellation-icon" />
                                    </div>
                                    <div className="free-cancellation-text">
                                        <div className="free-cancellation-header">
                                            Free cancellation for 48 hours
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aircover-container">
                                <div className="aircover-icon">
                                    <img src={aircoverIcon} alt="" className="aircover-icon" />
                                </div>
                                <div className="aircover-description">
                                    Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues
                                    like trouble checking in.
                                </div>
                            </div>
                            <div className="description">
                                <p>{spot.description}</p>
                            </div>
                            <div className="spot-amenities-container">
                                <div className="spot-amenities-header">
                                    What this place offers
                                </div>
                                <div className="spot-amenities">
                                    <div className="spot-amenities-left">
                                        <div className="amenity-container">
                                            <div><img src={skylineIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">City skyline views</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={kitchenIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Kitchen</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={poolIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Pool</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={tvIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">TV</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={bluetoothIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Bluetooth sound system</div>
                                        </div>
                                    </div>
                                    <div className="spot-amenities-right">
                                        <div className="amenity-container">
                                            <div><img src={wifiIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Wifi</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={deskIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Dedicated workspace</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={carIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Free parking on premises</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={hotTubIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Hot tub</div>
                                        </div>
                                        <div className="amenity-container">
                                            <div><img src={washerIcon} className="amenity-icon" /></div>
                                            <div className="amenity-text">Washer</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="under-image-details-right">
                            <CreateBooking spot={spot} />
                        </div>
                    </div>
                    <div className="rating-container">
                        {spot.avgStarRating
                            ?
                            <div className="avgRating-reviewCount">
                                ★ {Number(spot.avgStarRating).toFixed(1)} · {reviewCount} reviews
                            </div>
                            :
                            <div className="avgRating-reviewCount">
                                No reviews (yet)
                            </div>
                        }
                    </div>
                    <div className="review-outer-container">
                        {sessionUser && spot.Owner?.id !== sessionUser.id && !userHasReview &&
                            <div>
                                <CreateReviewModal
                                    spot={spot}
                                    userReview={userReview}
                                    setUserReview={setUserReview}
                                    userStars={userStars}
                                    setUserStars={setUserStars} />
                            </div>
                        }
                        <ReviewsForSpot
                            reviews={reviews}
                            userReview={userReview}
                            setUserReview={setUserReview}
                            userStars={userStars}
                            setUserStars={setUserStars} />
                    </div>
                    <div className="maps-outer-container">
                        <div>
                            <div className="maps-heading-text">
                                Where you'll be
                            </div>
                            <div className="maps-city-state">
                                {spot.city}, {spot.state}, United States
                            </div>
                        </div>
                        <div className="maps-container">
                            <MapContainer spot={spot} reviews={reviews} />
                        </div>
                    </div>
                </div>
            )}
            {notFound && <h1>PAGE NOT FOUND</h1>}
        </>
    )
}



export default SingleSpot;