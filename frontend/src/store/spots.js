import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_SPOTS = 'spots/LOAD_SPOTS';
const LOAD_SPOT = 'spots/LOAD_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
const UPDATE_SPOT = 'spots/UPDATE_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';

/* --------------- Action Creators --------------- */

const loadSpots = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots: spots
    }
}

const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        spot: spot
    }
}

const addSpot = (spot) => {
    return {
        type: ADD_SPOT,
        spot: spot
    }
}

const updateSpot = (updatedSpot) => {
    return {
        type: UPDATE_SPOT,
        spot: updatedSpot
    }
}

const removeSpot = (spotId) => {
    return {
        type: REMOVE_SPOT,
        spot: spotId
    }
}



/* -------------- Thunk Action Creators -------------- */

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadSpots(spots));
        return spots;
    }
}


export const getUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('api/spots/current');

    if (response.ok) {
        const spots = await response.json();
        // console.log('spots', spots)
        dispatch(loadSpot(spots));
        return spots;
    }
}

export const getSpotById = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);

    if (response.ok) {
        const spot = await response.json();
        console.log('spot', spot)
        dispatch(loadSpot(spot));
        return spot;
    }
}

export const createSpot = (newSpotDetails) => async (dispatch) => {
    const response = await csrfFetch('/api/spots', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(newSpotDetails)
    });

    if (response.ok) {
        const newSpot = await response.json();
        dispatch(addSpot(newSpot));
        return newSpot;
    }
}

export const updateExistingSpot = (spotId, newSpotData) => async (dispatch) => {
    const { address, city, state, country, 
        lat, lng, name, description, price } = newSpotData;

    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify()
    })

    if (response.ok) {
        const updatedSpot = await response.json();
        dispatch(updateSpot(updatedSpot))
    }
}

export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeSpot(spotId));
    }
}



/* ------------------- Reducer --------------------- */

// need to create initial state:
const initialState = { allSpots: null, currSpot: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS:
            let newSpots = {};
            action.spots.Spots.forEach(spot => newSpots[spot.id] = spot);
            newState = {...state, spots: {...newSpots}};
            console.log('newState', newState)
            return newState;
        default:
            return state;
    }
}



export default spotsReducer;