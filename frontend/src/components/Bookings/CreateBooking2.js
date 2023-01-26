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

    const [startDate, setStartDate] = useState(dayjs().add(1, 'day').format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs().add(2, 'day').format("YYYY-MM-DD"));
    const [guests, setGuests] = useState(2);
    const [validationErrors, setValidationErrors] = useState([]);

    const scrollToReviews = () => {
        window.scrollTo({
            top: 1280,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        dispatch(getReviewsBySpotId(spot.id))
    }, [dispatch]);

    const calculateNights = () => {
        return Number(Date.parse(endDate) - Date.parse(startDate)) / 86400000
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = [];

        if (!startDate) errors.push("Select a check-in date");
        if (!endDate) errors.push("Select a checkout date");
        if (dayjs(startDate).isBefore(dayjs())) errors.push("Please select a future start date");
        if (dayjs(startDate).isSame(dayjs(endDate))) errors.push("1 night minimum");
        if (dayjs(endDate).isBefore(dayjs(startDate))) errors.push("Please select valid start and end dates");

        setValidationErrors(errors);

        // if (!errors.length) {
        //     const newReservationDetails = {
        //         reservation_time: dayjs(`${date} ${time}`).utc().format("YYYY-MM-DD HH:mm:ss"),
        //         party_size: partySize
        //     }

        // const updatedReservation = await dispatch(changeReservation(newReservationDetails, reservationId));
        // if (updatedReservation) {
        //     history.push(`/reservations/${reservationId}`)
        // }
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
            <div className="create-booking-errors-container">
                {validationErrors.length > 0 &&
                    validationErrors.map(error =>
                        <div key={error}>{error}</div>
                    )}
            </div>
            <div className="create-booking-middle">
                <div className="create-booking-start-end-guests-container">
                    <div className="create-booking-start-end-dates">
                        <div className="create-booking-start-date">
                            <span className="create-booking-check-in">CHECK-IN</span>
                            <input
                                type="date"
                                onChange={e => {
                                    setValidationErrors("")
                                    setStartDate(e.target.value)
                                }}
                                value={startDate}
                                placeholder="Start date"
                                className="create-booking-start-date-input"
                            />
                        </div>
                        <div className="create-booking-end-date">
                            <span className="create-booking-check-out">CHECKOUT</span>
                            <input
                                type="date"
                                onChange={e => {
                                    setValidationErrors("")
                                    setEndDate(e.target.value)
                                }}
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
                            <select value={guests} onChange={e => setGuests(e.target.value)} className="create-booking-guests-select">
                                <option value="1">1 guest</option>
                                <option value="2">2 guests</option>
                                <option value="3">3 guests</option>
                                <option value="4">4 guests</option>
                                <option value="5">5 guests</option>
                                <option value="6">6 guests</option>
                                <option value="7">7 guests</option>
                                <option value="8">8 guests</option>
                                <option value="9">9 guests</option>
                                <option value="10">10 guests</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="create-booking-button-container">
                    <button onClick={submitHandler} className="create-booking-button">
                        Reserve
                    </button>
                </div>
                <div className="create-booking-wont-be-charged-yet">
                    You won't be charged yet
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
                    <div className="create-booking-cleaning-fee">
                        $500
                    </div>
                </div>
                <div className="create-booking-service-fee-container">
                    <div className="create-booking-service-fee-text">
                        Service fee
                    </div>
                    <div className="create-booking-service-fee">
                        $489
                    </div>
                </div>
                <div className="create-booking-total-container">
                    <div>
                        Total before taxes
                    </div>
                    <div>
                        ${(spot.price * calculateNights() + 500 + 489)}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CreateBooking;