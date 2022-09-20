import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_ALL = 'spots/LOAD_ALL';
const LOAD_ONE = 'spots/LOAD_ONE';
const ADD_ONE = 'spots/ADD_ONE';
const REMOVE_ONE = 'spots/REMOVE_ONE';

/* --------------- Action Creators --------------- */

const loadAll = (spots) => {
    return {
        type: LOAD_ALL,
        spots: spots
    }
}

const loadOne = (spot) => {
    return {
        type: LOAD_ONE,
        spot: spot
    }
}

const addOne = (spot) => {
    return {
        type: ADD_ONE,
        spot: spot
    }
}

const removeOne = (spotId) => {
    return {
        type: REMOVE_ONE,
        spot: spotId
    }
}



/* -------------- Thunk Action Creators -------------- */

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const spots = await response.json();
        dispatch(loadAll(spots));
        return spots;
    }
}


export const getUserSpots = () => async (dispatch) => {
    const response = await csrfFetch('api/spots/current');

    if (response.ok) {
        const spots = await response.json();
        // console.log('spots', spots)
        dispatch(loadAll(spots));
        return spots;
    }
}

export const getSpotById = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);

    if (response.ok) {
        const spot = await response.json();
        console.log('spot', spot)
        dispatch(loadOne(spot));
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
        dispatch(addOne(newSpot));
        return newSpot;
    }
}

export const updateSpot = (spotId, newSpotData) => async (dispatch) => {
    const { address, city, state, country, 
        lat, lng, name, description, price } = newSpotData;

    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify()
    })
}

export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeOne(spotId));
    }
}



/* ------------------- Reducer --------------------- */

// need to create initial state:
const initialState = { allSpots: null, currSpot: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL:
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