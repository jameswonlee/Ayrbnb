import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './ManageGuestsModal.css';



function ManageGuestsModal({ booking, showManageGuestsModal, setShowManageGuestsModal }) {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const girlNames = ["Jane", "Susan", "Jessica"];

    useEffect(() => {
        if (!showManageGuestsModal) return;
    
        document.addEventListener('click', closeManageGuestsModal);
    
        return () => document.removeEventListener("click", closeManageGuestsModal);
      }, [showManageGuestsModal]);

    const closeManageGuestsModal = () => {
        setShowManageGuestsModal(false);
    }

    const routeToModifyBooking = () => {
        history.push(`/booking/${booking.id}/change`)
    }

    return (
        <div className="manage-guests-modal-container">
            <div className="manage-guests-modal-upper">
                <div onClick={closeManageGuestsModal} className="manage-guests-modal-x">X</div>
            </div>
            <div className="manage-guests-modal-middle">
                <div className="manage-guests-modal-num-guests">{booking?.numGuests === 1
                    ?
                    <div>{booking?.numGuests} guest</div>
                    :
                    <div>{booking?.numGuests} guests</div>
                }</div>
                <div className="manage-guests-modal-guest-contact-text">
                    Provide your guests' contact information to share the reservation details
                </div>
                <div className="manage-guests-modal-change-num-guests">
                    <span>Need to change number of guests?&nbsp;
                        <span onClick={routeToModifyBooking} className="manage-guests-modal-change-reservation">
                        Change reservation</span></span>
                </div>
            </div>
            <div className="manage-guests-modal-lower">
                <div className="manage-guests-modal-lower-left">
                    <img
                        width={38}
                        height={38}
                        src={`https://randomuser.me/api/portraits/${girlNames.includes(sessionUser.firstName)
                            ? "women" : "men"}/${40}.jpg`}
                        className="manage-guests-modal-profile-image">
                    </img>
                </div>
                <div className="manage-guests-modal-lower-right">
                    <div className="manage-guests-modal-user-name">{sessionUser.firstName}</div>
                    <div className="manage-guests-modal-you">You</div>
                </div>
            </div>
            <div className="manage-guests-modal-done-button-container">
                <button onClick={closeManageGuestsModal} className="manage-guests-modal-done-button">Done</button>
            </div>

        </div>
    )
}



export default ManageGuestsModal;