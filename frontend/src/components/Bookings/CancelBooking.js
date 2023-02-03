import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import backArrow from '../../icons/cancel-booking-back-arrow.ico';
import { getBookingById } from '../../store/bookings';
import './CancelBooking.css';
import dayjs from 'dayjs';



function CancelBooking() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.bookings[bookingId]);


    useEffect(() => {
        dispatch(getBookingById(bookingId));
    }, [dispatch])

    const calculateNights = () => {
        return Number(Date.parse(booking?.endDate) - Date.parse(booking?.startDate)) / 86400000
    }

    const priceWithCommas = (dollars) => {
        return dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const routeBackToBookingConfirmation = () => {
        history.goBack();
    }


    return (
        <div className="cancel-booking-outer-container">
            <div className="cancel-booking-left">
                <div className="cancel-booking-left-upper">
                    <div className="cancel-booking-heading">Why do you need to cancel?</div>
                    <div className="cancel-booking-cancellation-reason-container">
                        <div className="cancel-booking-select-reason-text">Please select a reason</div>
                        <select className="cancel-booking-cancellation-reason-select">
                            <option>I no longer need accommodations</option>
                            <option>I made the reservation by accident</option>
                            <option>My host needs to cancel</option>
                            <option>I'm uncomfortable with the host</option>
                            <option>My travel dates changed</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="cancel-booking-left-lower">
                    <div className="cancel-booking-left-lower-border">
                        <div className="cancel-booking-lower-border"></div>
                        <div className="cancel-booking-lower-border"></div>
                        <div className="cancel-booking-lower-border"></div>
                    </div>
                    <div className="cancel-booking-lower-options">
                        <div onClick={routeBackToBookingConfirmation} className="cancel-booking-back">
                            <span className="cancel-booking-back-text"><img src={backArrow} className="cancel-booking-back-arrow" />Back</span></div>
                        <div></div>
                        <div className="cancel-booking-cancel-button-container">
                            <button className="cancel-booking-cancel-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cancel-booking-right">
                <div>
                    <div className="cancel-booking-booking-details-container">
                        <div className="cancel-booking-booking-details-upper">
                            <div className="cancel-booking-booking-details-upper-left">
                                <div><img src={booking?.Spot.previewImage} className="cancel-booking-spot-image" /></div>
                            </div>
                            <div className="cancel-booking-booking-details-upper-right">
                                <div className="cancel-booking-entire-house-text">Entire house</div>
                                <div className="cancel-booking-spot-name">
                                    {booking?.Spot?.name.includes('|')
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
                                <div className="cancel-booking-hosted-by">
                                    <span>Hosted by <span className="cancel-booking-spot-owner-first-name">{booking?.Spot.Owner.firstName}</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="cancel-booking-booking-details-mid-upper">
                            <div className="cancel-booking-booking-dates-container">
                                <div className="cancel-booking-booking-dates-text">
                                    Dates
                                </div>
                                <div className="cancel-booking-booking-dates">
                                    {dayjs(booking?.startDate).format("ddd, MMM D")} - {dayjs(booking?.endDate).format("ddd, MMM D")}
                                </div>
                            </div>
                            <div className="cancel-booking-booking-num-guests-container">
                                <div className="cancel-booking-booking-num-guests-text">
                                    Guests
                                </div>
                                <div className="cancel-booking-booking-num-guests">
                                    {booking?.numGuests === 1
                                        ?
                                        <span>{booking?.numGuests} adult</span>
                                        :
                                        <span>{booking?.numGuests} adults</span>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="cancel-booking-details-middle">
                            <div className="cancel-booking-original-total-container">
                                <div>Original total</div>
                                <div>
                                    ${priceWithCommas((booking?.Spot.price) * calculateNights() + 500 + 489)}
                                </div>
                            </div>
                            <div className="cancel-booking-paid-to-date-container">
                                <div>Paid to date</div>
                                <div>$0</div>
                            </div>
                            <div className="cancel-booking-total-refund-container">
                                <div>Total refund</div>
                                <div>$0</div>
                            </div>
                        </div>
                        <div className="cancel-booking-details-lower">
                            <div className="cancel-booking-cancellation-policy-heading">Cancellation policy</div>
                            <div className="cancel-booking-cancellation-policy-text">Full refund: Get back 100% of what you paid.</div>
                            <div className="cancel-booking-show-details-text">Show details</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CancelBooking;