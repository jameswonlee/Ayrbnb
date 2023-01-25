import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_USER_BOOKINGS = 'bookings/LOAD_USER_BOOKINGS';
const LOAD_SPOT_BOOKINGS = 'bookings/LOAD_SPOT_BOOKINGS';
const ADD_BOOKING = 'bookings/ADD_BOOKING';
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
const REMOVE_BOOKING = 'bookings/REMOVE_BOOKING';

/* --------------- Action Creators --------------- */

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

const removeBooking = (booking) => {
    return {
        type: REMOVE_BOOKING,
        booking: booking
    }
}

/* -------------- Thunk Action Creators -------------- */

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

const initialState = { bookings}