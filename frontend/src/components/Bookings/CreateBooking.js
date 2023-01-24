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

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    useEffect(() => {
        dispatch(getReviewsBySpotId(spot.id))
    }, [dispatch]);



    return (
        <div className="create-booking-outer-container">
            <div className="create-booking-top">
                <div>
                    <span>${spot.price}<span> night</span></span>
                </div>
                <div>
                    <span>★ {spot.avgStarRating} · <span>{reviewCount} reviews</span></span>
                </div>
            </div>

            <div className="create-booking-middle">
                <div className="create-booking-start-end-dates-container">
                    <div className="create-booking-start-date">
                        <span>CHECK-IN</span>
                        <input
                            type="date"
                            onChange={e => setStartDate(e.target.value)}
                            value={startDate}
                            placeholder="Start date"
                            className="create-booking-start-date-input"
                        />
                    </div>
                    <div className="create-booking-end-date">
                        <span>CHECKOUT</span>
                        <input
                            type="date"
                            onChange={e => setEndDate(e.target.value)}
                            value={endDate}
                            placeholder="End date"
                            className="create-booking-end-date-input"
                        />
                    </div>

                </div>

            </div>

            <div className="create-booking-bottom">

            </div>

        </div>
    )
}


export default CreateBooking;