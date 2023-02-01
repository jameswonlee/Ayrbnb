import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getUserBookings } from '../../store/bookings';
import favicon from '../../icons/favicon.png';
import exitIcon from '../../icons/exit.png';
import './UpdateBooking.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);



function UpdateBooking() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.bookings[bookingId]);
    console.log('booking', booking);

    const [startDate, setStartDate] = useState(dayjs(booking.startDate).format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs(booking.endDate).format("YYYY-MM-DD"));
    const [numGuests, setNumGuests] = useState(booking.numGuests);
    const [validationErrors, setValidationErrors] = useState([]);


    useEffect(() => {
        dispatch(getUserBookings())
    }, [])

    const routeBackToBookingConfirmation = () => {
        history.goBack();
    }





    return (
        <div className="update-booking-outer-container">
            <div className="update-booking-left">
                <div className="update-booking-left-upper">
                    <div><img src={favicon} className="update-booking-favicon" /></div>
                    <div className="update-booking-change-reservation-text">Change reservation</div>
                </div>
                <div onClick={routeBackToBookingConfirmation} className="update-booking-left-lower">
                    <div><img src={exitIcon} className="update-booking-exit-icon" /></div>
                    <div className="updatre-booking-exit-text">Exit</div>
                </div>
            </div>

            <div className="update-booking-middle">
                <div className="update-booking-middle-upper">
                    <div className="update-booking-heading">What do you want to change?</div>
                    <div className="update-booking-change-description">After making your desired changes, you can send a request to your
                        host, {booking?.Spot.Owner.firstName}, to confirm the alterations to your reservation.</div>
                    <div className="update-booking-spot-details-container">
                        <div className="update-booking-spot-details-left">
                            <img src={booking?.Spot.previewImage} className="update-booking-spot-preview-image" />
                        </div>
                        <div className="update-booking-spot-details-right">
                            <div className="update-booking-spot-name">{booking?.Spot.name.includes('|')
                                ?
                                <div>
                                    {booking?.Spot.name.split('|')[0]}
                                </div>
                                :
                                <div>
                                    {booking?.Spot.name}
                                </div>
                            }
                            </div>
                            <div className="update-booking-spot-details">Entire home · 5 beds · 5.5 baths</div>
                        </div>
                    </div>
                </div>

                <div className="update-booking-middle-middle">
                    <div className="update-booking-reservation-details-heading">Reservation details</div>
                    <div className="update-booking-dates-text">Dates</div>
                    <div className="update-booking-start-end-guests-container">
                        <div className="update-booking-start-end-dates">
                            <div className="update-booking-start-date">
                                <span className="update-booking-check-in">Check in</span>
                                <input
                                    type="date"
                                    onChange={e => {
                                        setValidationErrors("")
                                        setStartDate(e.target.value)
                                    }}
                                    value={startDate}
                                    min={dayjs().format("YYYY-MM-DD")}
                                    max={dayjs().add(6, 'months').format("YYYY-MM-DD")}
                                    className="update-booking-start-date-input"
                                />
                            </div>
                            <div className="update-booking-end-date">
                                <span className="update-booking-check-out">Checkout</span>
                                <input
                                    type="date"
                                    onChange={e => {
                                        setValidationErrors("")
                                        setEndDate(e.target.value)
                                    }}
                                    value={endDate}
                                    min={dayjs().format("YYYY-MM-DD")}
                                    className="update-booking-end-date-input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="update-booking-num-guests">
                        <div className="update-booking-guests-heading">
                            Guests
                        </div>
                        <div className="update-booking-num-guests-container">
                            <select value={numGuests} onChange={(e) => setNumGuests(e.target.value)}className="update-booking-num-guests-select">
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
                <div className="update-booking-middle-lower">
                    <div className="update-booking-cancellation-policy-heading">Cancellation policy</div>
                    <div className="update-booking-cancellation-policy-text">Free cancellation before 3:00 PM on {dayjs(booking?.startDate).subtract(1, 'day').format("MMM D")}. Cancel
                        before check-in at 3:00 on {dayjs(booking?.startDate).format("MMM D")} for a partial refund.</div>
                </div>
                <div className="update-booking-send-request-container">
                    <div className="update-booking-button-container">
                        <button className="update-booking-send-request-button">Send request</button>
                    </div>
                </div>
            </div>
            <div className="update-booking-right">
            </div>
        </div>
    )
}


export default UpdateBooking;