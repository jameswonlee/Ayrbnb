import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUserBookings } from "../../store/bookings";
import './BookingConfirmation.css';

import Maps from "../Maps/Maps";




function BookingConfirmation() {
    const dispatch = useDispatch();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.bookings[bookingId]);
    console.log('booking', booking);


    useEffect(() => {
        dispatch(getUserBookings())
    }, [bookingId]);








    return (
        <div className="booking-confirmation-container">
            <div className="booking-confirmation-left">
                <div className="booking-confirmation-left-upper">
                    <img src={booking?.Spot.previewImage} className="booking-confirmation-spot-image"/>
                </div>
                <div className="booking-confirmation-left-middle">

                </div>
                <div className="booking-confirmation-left-lower">

                </div>

            </div>
            <div className="booking-confirmation-right">
                <Maps booking={booking} />
            </div>

        </div>
    )
}


export default BookingConfirmation;