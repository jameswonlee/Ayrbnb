import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_ALL_SPOTS = 'spots/LOAD_ALL_SPOTS';
const LOAD_SPOT = 'spots/LOAD_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
const ADD_IMG = 'spots/ADD_IMG';
const UPDATE_SPOT = 'spots/UPDATE_SPOT';
const REMOVE_SPOT = 'spots/REMOVE_SPOT';

/* --------------- Action Creators --------------- */

const loadAllSpots = (spots) => {
    return {
        type: LOAD_ALL_SPOTS,
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

const addImg = (spotImage, spotId) => {
    return {
        type: ADD_IMG,
        spotImage: spotImage,
        spotId: spotId
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
        spotId: spotId
    }
}



/* -------------- Thunk Action Creators -------------- */

export const getAllSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');

    if (response.ok) {
        const spots = await response.json();
        // console.log('getAllSpots ---> spots.Spots', spots.Spots)
        dispatch(loadAllSpots(spots.Spots));
        return spots;
    }
}


export const getSpotById = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`);

    if (response.ok) {
        const spot = await response.json();
        // console.log('getSpotById --> spot', spot)
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


export const addImageToSpot = (spotId, url, preview) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, preview })
    })

    if (response.ok) {
        const newImage = await response.json();
        dispatch(addImg(newImage, spotId))
    }
}


export const updateExistingSpot = (spotId, newSpotData) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSpotData)
    })

    if (response.ok) {
        const updatedSpotData = await response.json();
        dispatch(updateSpot(updatedSpotData))
        return updatedSpotData;
    }
}


export const deleteSpot = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const message = await response.json();
        dispatch(removeSpot(spotId));
        return message;
    }
}

/* ------------------- Reducer --------------------- */

const initialState = { spots: {}, spotById: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_SPOTS:
            let newSpots = {};
            action.spots.forEach(spot => newSpots[spot.id] = spot);
            newState = { ...state, spots: newSpots };
            return newState;
        case UPDATE_SPOT:
            newState = {
                ...state,
                spots: {
                    ...state.spots,
                    [action.spot.id]: {
                        ...state.spots[action.spot.id],
                        ...action.spot
                    }
                }
            };
            return newState;
        case ADD_SPOT:
        case LOAD_SPOT:
            newState = { ...state, spots: { ...state.spots, [action.spot.id]: action.spot } };
            return newState;
        case ADD_IMG:
            const existingSpot = state.spots[action.spotId];
            const spot = { ...existingSpot, SpotImages: [] }
            spot.SpotImages.push(action.spotImage)
            newState = { ...state, spots: { ...state.spots, [action.spotId]: spot } }
            return newState;
        case REMOVE_SPOT:
            newState = { ...state, spots: { ...state.spots } };
            delete newState.spots[action.spotId];
            return newState;
        default:
            return state;
    }
}



export default spotsReducer;