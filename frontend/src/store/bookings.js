import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_ONE_BOOKING = 'bookings/LOAD_ONE_BOOKING';
const LOAD_USER_BOOKINGS = 'bookings/LOAD_USER_BOOKINGS';
const LOAD_SPOT_BOOKINGS = 'bookings/LOAD_SPOT_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
const REMOVE_BOOKING = 'bookings/REMOVE_BOOKING';
const RESET_BOOKINGS = 'bookings/RESET_BOOKINGS';

/* --------------- Action Creators --------------- */

const loadOneBooking = (booking) => {
    return {
        type: LOAD_ONE_BOOKING,
        booking: booking
    }
}

const loadUserBookings = (bookings) => {
    return {
        type: LOAD_USER_BOOKINGS,
        bookings: bookings
    }
}

const loadSpotBookings = (bookings) => {
    return {
        type: LOAD_SPOT_BOOKINGS,
        bookings: bookings
    }
}

const addBooking = (booking) => {
    return {
        type: ADD_BOOKING,
        booking: booking
    }
}

const updateBooking = (updatedBooking) => {
    return {
        type: UPDATE_BOOKING,
        booking: updatedBooking
    }
}

const removeBooking = (bookingId) => {
    return {
        type: REMOVE_BOOKING,
        bookingId: bookingId
    }
}

export const resetBookings = () => {
    return {
        type: RESET_BOOKINGS
    }
}

/* -------------- Thunk Action Creators -------------- */


export const getBookingById = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`);

    if (response.ok) {
        const booking = await response.json();
        dispatch(loadOneBooking(booking));
        return booking;
    }
}

export const getUserBookings = () => async (dispatch) => {
    const response = await csrfFetch('/api/bookings/current');

    if (response.ok) {
        const bookings = await response.json();
        dispatch(loadUserBookings(bookings));
        return bookings;
    }
}

export const getSpotBookings = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`);

    if (response.ok) {
        const bookings = await response.json();
        dispatch(loadSpotBookings(bookings));
        return bookings;
    }
}

export const createBooking = (spotId, bookingData) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    })

    if (response.ok) {
        const newBooking = await response.json();
        dispatch(addBooking(newBooking));
        return newBooking;
    }
}

export const editBooking = (bookingId, bookingData) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    })

    if (response.ok) {
        const updatedBookingData = await response.json();
        dispatch(updateBooking(updatedBookingData));
        console.log('updatedBookingData', updatedBookingData)
        return updatedBookingData;
    }
}

export const deleteBooking = (bookingId) => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const message = await response.json();
        dispatch(removeBooking(bookingId));
        return message;
    }
}

/* ------------------- Reducer --------------------- */

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    let newState = {};

    switch (action.type) {
        case LOAD_ONE_BOOKING:
            newState[action.booking.id] = action.booking;
            return newState;

        case LOAD_USER_BOOKINGS:
            newState = { ...state };
            action.bookings.Bookings.forEach(booking => {
                newState[booking.id] = booking;
            })
            return newState;

        case LOAD_SPOT_BOOKINGS:
            newState = { ...state };
            action.bookings.Bookings.forEach(booking => {
                newState[booking.id] = booking;
            })
            return newState;

        case ADD_BOOKING:
            newState = { ...state };
            newState[action.booking.id] = action.booking;
            return newState;

        case UPDATE_BOOKING:
            newState = { ...state };
            newState[action.booking.id] = action.booking;
            return newState;

        case REMOVE_BOOKING:
            newState = { ...state };
            delete newState[action.bookingId];
            return newState;

        case RESET_BOOKINGS:
            newState = {}
            return newState;

        default:
            return state;
    }
}


export default bookingsReducer;