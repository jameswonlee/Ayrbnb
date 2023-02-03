import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editBooking, getBookingById } from '../../store/bookings';
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

    const [startDate, setStartDate] = useState(dayjs(booking?.startDate).format("YYYY-MM-DD"));
    const [endDate, setEndDate] = useState(dayjs(booking?.endDate).format("YYYY-MM-DD"));
    const [numGuests, setNumGuests] = useState(booking?.numGuests);
    const [validationErrors, setValidationErrors] = useState([]);

    const doEffect = async () => {
        const currBooking = await dispatch(getBookingById(bookingId));
        if (currBooking) {
            setStartDate(dayjs(currBooking.startDate).format("YYYY-MM-DD"));
            setEndDate(dayjs(currBooking.endDate).format("YYYY-MM-DD"));
            setNumGuests(currBooking.numGuests);
        }
    }

    useEffect(() => {
        doEffect();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [dispatch])

    const routeBackToBookingConfirmation = () => {
        history.goBack();
    }

    const submitNewBookingDetails = async (e) => {
        e.preventDefault();
        const errors = [];

        if (!startDate) errors.push("Select a check-in date");
        if (!endDate) errors.push("Select a checkout date");
        if (dayjs(startDate).isBefore(dayjs().subtract(1, 'd'))) errors.push("Please select a future start date");
        if (dayjs(startDate).isSame(dayjs(endDate))) errors.push("1 night minimum");
        if (dayjs(endDate).isBefore(dayjs(startDate))) errors.push("Please select valid start and end dates");

        setValidationErrors(errors);

        if (!errors.length) {
            const newBookingData = {
                startDate: dayjs(startDate).utc().format("YYYY-MM-DD HH:mm:ss"),
                endDate: dayjs(endDate).utc().format("YYYY-MM-DD HH:mm:ss"),
                numGuests: numGuests
            }
            try {
                const updatedBooking = await dispatch(editBooking(bookingId, newBookingData));
                if (updatedBooking) {
                    history.push(`/booking/${updatedBooking.id}`);
                }

            } catch (res) {
                const data = await res.json();
                const errors = [];

                if (data && data.message) {
                    if (data.errors['startDate'] && data.errors['endDate']) {
                        errors.push(data.errors['startDate']);
                        errors.push(data.errors['endDate']);
                    } else if (data.errors['startDate']) {
                        errors.push(data.errors['startDate']);
                    } else if (data.errors['endDate']) {
                        errors.push(data.errors['endDate']);
                    }
                }
                setValidationErrors(errors);
            }
        }
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
                        host, {booking?.Spot?.Owner?.firstName}, to confirm the alterations to your reservation.</div>
                    <div className="update-booking-spot-details-container">
                        <div className="update-booking-spot-details-left">
                            <img src={booking?.Spot?.previewImage} className="update-booking-spot-preview-image" />
                        </div>
                        <div className="update-booking-spot-details-right">
                            <div className="update-booking-spot-name">{booking?.Spot?.name.includes('|')
                                ?
                                <div>
                                    {booking?.Spot?.name.split('|')[0]}
                                </div>
                                :
                                <div>
                                    {booking?.Spot?.name}
                                </div>
                            }
                            </div>
                            <div className="update-booking-spot-details">Entire home · 5 beds · 5.5 baths</div>
                        </div>
                    </div>
                </div>

                <div className="update-booking-middle-middle">
                    <div className="update-booking-reservation-details-heading">Reservation details</div>
                    <div className="update-booking-validation-errors">
                        {validationErrors.length > 0 &&
                            validationErrors.map(error =>
                                <div key={error}>{error}</div>
                            )}
                    </div>
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
                                <span className="update-booking-check-out">Check out</span>
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
                            <select value={numGuests} onChange={(e) => setNumGuests(e.target.value)} className="update-booking-num-guests-select">
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
                        <button onClick={submitNewBookingDetails} className="update-booking-send-request-button">Send request</button>
                    </div>
                </div>
            </div>
            <div className="update-booking-right">
            </div>
        </div>
    )
}


export default UpdateBooking;