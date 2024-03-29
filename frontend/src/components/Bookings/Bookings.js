import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUserBookings } from '../../store/bookings';
import handWaveIcon from '../../icons/hand-wave.ico';
import familyPhoto from '../../images/family-image.png';
import './Bookings.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

var isSameOrBefore = require('dayjs/plugin/isSameOrBefore');
dayjs.extend(isSameOrBefore);

var isSameOrAfter = require('dayjs/plugin/isSameOrAfter');
dayjs.extend(isSameOrAfter);


function Bookings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const userBookings = useSelector(state => Object.values(state.bookings));

    const upcomingBookings = userBookings
        .filter(booking => dayjs().subtract(1, 'd').utc().isBefore(dayjs(booking.startDate).utc()))
        .sort((bookingA, bookingB) => {
            return dayjs(bookingA.startDate).valueOf() - dayjs(bookingB.startDate).valueOf()
        })

    const pastBookings = userBookings
        .filter(booking => dayjs(booking.startDate).utc().isBefore(dayjs().subtract(1, 'd').utc()))
        .sort((bookingA, bookingB) => {
            return dayjs(bookingB.startDate).valueOf() - dayjs(bookingA.startDate).valueOf()
        })


    useEffect(() => {
        dispatch(getUserBookings());

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }, [dispatch]);

    if (!userBookings) return null
    if (!sessionUser) return null;

    const routeToBookingConfirmation = (bookingId) => {
        history.push(`/booking/${bookingId}`);
    }

    const routeToAllSpots = () => {
        history.push(`/`);
    }


    return (
        <div className="bookings-outer-container">
            <div className="bookings-trips-header">
                Trips
            </div>
            {upcomingBookings.length > 0 &&
                <div className="bookings-reservations-container">
                    <div className="bookings-reservations-header">
                        Upcoming reservations
                    </div>
                    <div className="bookings-reservation-container">
                        {upcomingBookings.map(booking => (
                            <div onClick={() => routeToBookingConfirmation(booking.id)} className="bookings-reservation bookings-upcoming-reservation" key={booking.id}>
                                <div className="bookings-reservation-left">
                                    <div className="bookings-reservation-left-top">
                                        <div className="bookings-reservation-spot-name">
                                            {booking.Spot?.name.includes('|')
                                                ?
                                                <div>
                                                    {booking.Spot?.name.split('|')[0]}
                                                </div>
                                                :
                                                <div>
                                                    {booking.Spot?.name}
                                                </div>
                                            }
                                        </div>
                                        <div className="bookings-reservation-owner">
                                            Entire home hosted by {booking.Spot.Owner.firstName}
                                        </div>
                                    </div>
                                    <div className="bookings-reservation-left-border-bottom">
                                    </div>
                                    <div className="bookings-reservation-left-bottom">
                                        <div className="bookings-reservation-left-bottom-left">
                                            <div>{dayjs(booking.startDate).format("MMM")} {dayjs(booking.startDate).format("DD")} -</div>
                                            <div>{dayjs(booking.endDate).format("MMM")} {dayjs(booking.endDate).format("DD")}</div>
                                            <div className="bookings-reservation-year">{dayjs(booking.startDate).format("YYYY")}</div>
                                        </div>
                                        <div className="bookings-reservation-left-border-right">
                                        </div>
                                        <div className="bookings-reservation-left-bottom-right">
                                            <div className="bookings-reservation-city-state">{booking.Spot.city},
                                                {booking.Spot.state == "CA"
                                                    ?
                                                    <span> California</span>
                                                    :
                                                    <span>{booking.Spot.state}</span>
                                                }</div>
                                            <div className="bookings-reservation-country">{booking.Spot.country}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bookings-reservations-right">
                                    <img src={booking.Spot.previewImage} className="bookings-reservation-preview-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {pastBookings.length > 0 &&
                <div className="bookings-reservations-container">
                    <div className="bookings-reservations-header">
                        Past reservations
                    </div>
                    <div className="bookings-reservation-container">
                        {pastBookings.map(booking => (
                            <div className="bookings-reservation" key={booking.id}>
                                <div className="bookings-reservation-left">
                                    <div className="bookings-reservation-left-top">
                                        <div className="bookings-reservation-spot-name">
                                            {booking.Spot?.name.includes('|')
                                                ?
                                                <div>
                                                    {booking.Spot.name.split('|')[0]}
                                                </div>
                                                :
                                                <div>
                                                    {booking.Spot.name}
                                                </div>
                                            }
                                        </div>

                                        <div className="bookings-reservation-owner">
                                            Entire home hosted by {booking.Spot.Owner.firstName}
                                        </div>
                                    </div>
                                    <div className="bookings-reservation-left-border-bottom">
                                    </div>
                                    <div className="bookings-reservation-left-bottom">
                                        <div className="bookings-reservation-left-bottom-left">
                                            <div>{dayjs(booking.startDate).format("MMM")} {dayjs(booking.startDate).format("DD")} -</div>
                                            <div>{dayjs(booking.endDate).format("MMM")} {dayjs(booking.endDate).format("DD")}</div>
                                            <div className="bookings-reservation-year">{dayjs(booking.startDate).format("YYYY")}</div>
                                        </div>
                                        <div className="bookings-reservation-left-border-right">
                                        </div>
                                        <div className="bookings-reservation-left-bottom-right">
                                            <div className="bookings-reservation-city-state">{booking.Spot.city},
                                                {booking.Spot.state == "CA"
                                                    ?
                                                    <span> California</span>
                                                    :
                                                    <span>{booking.Spot.state}</span>
                                                }</div>
                                            <div className="bookings-reservation-country">{booking.Spot.country}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bookings-reservations-right">
                                    <img src={booking.Spot.previewImage} className="bookings-reservation-preview-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }

            {!upcomingBookings.length && !pastBookings.length &&
                <div className="bookings-no-trips-container">
                    <div className="bookings-no-trips">
                        <div className="bookings-no-trips-left">
                            <div className="bookings-no-trips-upper">
                                <img src={handWaveIcon} className="bookings-no-trips-hand-wave-icon" />
                            </div>
                            <div className="bookings-no-trips-middle">
                                <div className="bookings-no-trips-text">No trips booked...yet!</div>
                                <div className="bookings-no-trips-text2">Time to dust off your bags and start planning your next adventure</div>
                            </div>
                            <div className="bookings-no-trips-lower">
                                <div onClick={routeToAllSpots} className="bookings-no-trips-start-searching-button">Start searching</div>
                            </div>
                        </div>
                        <div className="bookings-no-trips-right">
                            <img src={familyPhoto} className="bookings-no-trips-family-photo" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default Bookings;