import { useHistory } from 'react-router-dom';
import favicon from '../../icons/favicon.png';
import exitIcon from '../../icons/exit.png';
import './UpdateBooking.css';



function UpdateBooking() {
    const history = useHistory();

    const routeBackToBookingConfirmation = () => {
        history.goBack();
    }





    return (
        <div className="update-booking-outer-container">
            <div className="update-booking-left">
                <div className="update-booking-left-upper">
                    <div><img src={favicon} className="update-booking-favicon"/></div>
                    <div className="update-booking-change-reservation-text">Change reservation</div>
                </div>
                <div onClick={routeBackToBookingConfirmation} className="update-booking-left-lower">
                    <div><img src={exitIcon} className="update-booking-exit-icon"/></div>
                    <div className="updatre-booking-exit-text">Exit</div>
                </div>
            </div>

            <div className="update-booking-middle">

            </div>

            <div className="update-booking-right">

            </div>

        </div>
    )
}


export default UpdateBooking;