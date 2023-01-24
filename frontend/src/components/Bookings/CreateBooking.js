import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsBySpotId } from '../../store/reviews';
import './CreateBooking.css';
import dayjs from 'dayjs';
import spotsReducer from '../../store/spots';





function CreateBooking({ spot }) {
    const dispatch = useDispatch();
    const reviewsData = useSelector(state => state.reviews.reviews);
    const reviewCount = Object.keys(reviewsData).length;

    const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().add(1, 'day').format("YYYY-MM-DD"));

    const scrollToReviews = () => {
        window.scrollTo({
            top: 1320,
            behavior: 'smooth'
        });
    }


    useEffect(() => {
        dispatch(getReviewsBySpotId(spot.id))
    }, [dispatch]);

    const calculateNights = () => {
        return Number(Date.parse(endDate) - Date.parse(startDate)) / 86400000
    }




    return (
        <div className="create-booking-outer-container">
            <div className="create-booking-top">
                <div className="create-booking-spot-price-container">
                    <span className="create-booking-spot-price">${spot.price}<span className="create-booking-spot-price-night"> night</span></span>
                </div>
                <div className="create-booking-spot-rating-container">
                    <span className="create-booking-average-rating">★ {spot.avgStarRating} ·&nbsp;
                        <span onClick={scrollToReviews} className="create-booking-review-count">{reviewCount} reviews</span>
                    </span>
                </div>
            </div>

            <div className="create-booking-middle">
                <div className="create-booking-start-end-guests-container">
                    <div className="create-booking-start-end-dates">
                        <div className="create-booking-start-date">
                            <span className="create-booking-check-in">CHECK-IN</span>
                            <input
                                type="date"
                                onChange={e => setStartDate(e.target.value)}
                                value={startDate}
                                placeholder="Start date"
                                className="create-booking-start-date-input"
                            />
                        </div>
                        <div className="create-booking-end-date">
                            <span className="create-booking-check-out">CHECKOUT</span>
                            <input
                                type="date"
                                onChange={e => setEndDate(e.target.value)}
                                value={endDate}
                                placeholder="End date"
                                className="create-booking-end-date-input"
                            />
                        </div>
                    </div>
                    <div className="create-booking-guests">
                        <div className="create-booking-guests-text">
                            GUESTS
                        </div>
                        <div className="create-booking-guests-select-container">
                            <select className="create-booking-guests-select">
                                <option>1 guest</option>
                                <option>2 guests</option>
                                <option>3 guests</option>
                                <option>4 guests</option>
                                <option>5 guests</option>
                                <option>6 guests</option>
                                <option>7 guests</option>
                                <option>8 guests</option>
                                <option>9 guests</option>
                                <option>10 guests</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="create-booking-button-container">
                    <button className="create-booking-button">
                        Reserve
                    </button>
                </div>
            </div>
            <div className="create-booking-bottom">
                <div className="create-booking-nightly-rate-container">
                    <div className="create-booking-nightly-rate-text">
                        <span className="create-booking-nightly-rate">${spot.price} x </span>
                        {calculateNights() === 1
                            ?
                            <span>{calculateNights()} night</span>
                            :
                            <span>{calculateNights()} nights</span>
                        }
                    </div>
                    <div className="create-booking-nightly-rate-total">
                        <span>${spot.price * calculateNights()}</span>
                    </div>
                </div>
                <div className="create-booking-cleaning-fee-container">
                    <div className="create-booking-cleaning-fee-text">
                        Cleaning fee
                    </div>
                    <div>
                        $500
                    </div>
                </div>
                <div className="create-booking-service-fee-container">
                    <div className="create-booking-service-fee-text">
                        Service fee
                    </div>
                    <div>
                        $510.78
                    </div>
                </div>
                <div className="create-booking-taxes-container">
                    <div className="create-booking-taxes-text">
                        Taxes
                    </div>
                    <div>
                        $509.62
                    </div>
                </div>
                <div className="create-booking-total-container">
                    <div>
                        Total after taxes
                    </div>
                    <div>
                        ${(spot.price * calculateNights() + 500 + 510.78 + 509.62).toFixed(2)} 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateBooking;