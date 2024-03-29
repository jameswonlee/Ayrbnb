import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getBookingById, getUserBookings } from "../../store/bookings";
import { Modal } from "../../context/Modal";
import MapContainer from "../Maps/MapContainer";
import backArrowIcon from '../../icons/back-arrow.png';
import airCover from '../../icons/aircover.ico';
import manageGuestsIcon from '../../icons/manage-guests.ico';
import changeReservationIcon from '../../icons/change-reservation.ico';
import cancelReservationIcon from '../../icons/cancel-reservation.ico';
import pdfIcon from '../../icons/pdf.ico';
import printIcon from '../../icons/print-details.ico';
import receiptsIcon from '../../icons/get-receipts.ico';
import rightArrowIcon from '../../icons/right-arrow.ico';
import './BookingConfirmation.css';
import dayjs from 'dayjs';
import ManageGuestsModal from "./ManageGuestsModal";



function BookingConfirmation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { bookingId } = useParams();
    const booking = useSelector(state => state.bookings[bookingId]);
    const sessionUser = useSelector(state => state.session.user);
    const girlNames = ["Jane", "Susan", "Jessica"];

    const [showManageGuestsModal, setShowManageGuestsModal] = useState(false);


    useEffect(() => {
        dispatch(getBookingById(bookingId));

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [bookingId]);

    useEffect(() => {
        const nav = document.querySelector('nav');
        nav.classList.toggle('nav-bar-no-sticky');

        return () => nav.classList.toggle('nav-bar-no-sticky');
    }, []);

    if (!sessionUser) {
        return null;
    }

    const routeToBookings = () => {
        history.push(`/user/${sessionUser.id}/trips`);
    }

    const openManageGuestsModal = () => {
        setShowManageGuestsModal(true);
    }

    const routeToUpdateBooking = () => {
        history.push(`/booking/${bookingId}/change`);
    }

    const routeToCancelBooking = () => {
        history.push(`/booking/${bookingId}/cancel`);
    }

    
    return (
        <div className="booking-confirmation-container">
            <div className="booking-confirmation-left-container">
                <div className="booking-confirmation-left">
                    <div className="booking-confirmation-left-upper">
                        <img src={booking?.Spot?.previewImage} className="booking-confirmation-spot-image" />
                        <div className="booking-confirmation-back-arrow-container">
                            <img src={backArrowIcon} onClick={routeToBookings} className="booking-confirmation-back-arrow" />
                        </div>
                    </div>
                    <div className="booking-confirmation-left-middle">
                        <div className="booking-confirmation-check-in-date">
                            <div className="booking-confirmation-checkin-checkout-text">Check-in</div>
                            <div className="booking-confirmation-checkin-checkout-date">{dayjs(booking?.startDate).format("ddd, MMM D")}</div>
                            <div className="booking-confirmation-checkin-checkout-time">3:00 PM</div>
                        </div>
                        <div className="booking-confirmation-dates-border"></div>
                        <div className="booking-confirmation-check-out-date">
                            <div className="booking-confirmation-checkin-checkout-text">Checkout</div>
                            <div className="booking-confirmation-checkin-checkout-date">{dayjs(booking?.endDate).format("ddd, MMM D")}</div>
                            <div className="booking-confirmation-checkin-checkout-time">11:00 AM</div>
                        </div>
                    </div>
                </div>
                <div className="booking-confirmation-left-lower">
                    <div className="booking-confirmation-reservation-details-container">
                        <div className="booking-confirmation-reservation-details-user-profile">
                            <div className="booking-confirmation-reservation-details-user-profile-left">
                                <div className="booking-confirmation-reservation-details-text">Reservation details</div>
                                <div className="booking-confirmation-whos-coming-text">Who's coming</div>
                                <div className="booking-confirmation-num-guests-text">
                                    {booking?.numGuests === 1
                                        ?
                                        <div>{booking?.numGuests} guest</div>
                                        :
                                        <div>{booking?.numGuests} guests</div>
                                    }
                                </div>
                            </div>
                            <div className="booking-confirmation-reservation-details-user-profile-right">
                                <img
                                    width={38}
                                    height={38}
                                    src={`https://randomuser.me/api/portraits/${girlNames.includes(sessionUser.firstName)
                                        ? "women" : "men"}/${40}.jpg`}
                                    className="booking-confirmation-user-profile-image">
                                </img>
                            </div>
                        </div>
                        <div className="booking-confirmation-confirmation-code-text">Confirmation code</div>
                        <div className="booking-confirmation-confirmation-code">HMXSRYNTFH</div>
                        <div className="booking-confirmation-aicover-guarantee">
                            <div className="booking-confirmation-guarantee-text">
                                <span>Your booking is protected by <span><img src={airCover} className="booking-confirmation-air-cover-icon" />
                                </span></span>
                            </div>
                            <div className="booking-confirmation-learn-more-text">
                                Learn more
                            </div>
                        </div>
                        <div className="booking-confirmation-cancellation-policy">Cancellation policy</div>
                        <div className="booking-confirmation-cancellation-policy-dates">Free cancellation before 3:00 PM on {dayjs(booking?.startDate).subtract(1, 'day').format("MMM D")}.
                            Cancel before check-in at 3:00 PM on {dayjs(booking?.startDate).format("MMM D")} for a partial refund.</div>
                        <div className="booking-confirmation-cancellation-policy-read-more">Read more</div>
                        <div onClick={openManageGuestsModal} className="booking-confirmation-manage-booking-options">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={manageGuestsIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Manage guests</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                        {showManageGuestsModal && (
                            <Modal>
                                <ManageGuestsModal booking={booking}
                                    showManageGuestsModal={showManageGuestsModal}
                                    setShowManageGuestsModal={setShowManageGuestsModal} />
                            </Modal>
                        )}
                        <div onClick={routeToUpdateBooking} className="booking-confirmation-manage-booking-options">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={changeReservationIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Change reservation</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                        <div onClick={routeToCancelBooking}className="booking-confirmation-manage-booking-options">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={cancelReservationIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Cancel reservation</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                        <div className="booking-confirmation-manage-booking-options booking-confirmation-not-allowed">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={pdfIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Get a PDF for visa purposes</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                        <div className="booking-confirmation-manage-booking-options booking-confirmation-not-allowed">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={printIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Print details</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                        <div className="booking-confirmation-manage-booking-options booking-confirmation-not-allowed">
                            <div className="booking-confirmation-manage-booking-options-left">
                                <div><img src={receiptsIcon} className="booking-confirmation-manage-booking-icons" /></div>
                                <div className="booking-confirmation-manage-booking-option">Get receipts and manage payments</div>
                            </div>
                            <div><img src={rightArrowIcon} className="booking-confirmation-manage-booking-right-arrow-icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-confirmation-right">
                <MapContainer booking={booking} />
            </div>
        </div>
    )
}


export default BookingConfirmation;