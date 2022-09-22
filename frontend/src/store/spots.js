import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_ALL_SPOTS = 'spots/LOAD_ALL_SPOTS';
const LOAD_SPOT = 'spots/LOAD_SPOT';
const ADD_SPOT = 'spots/ADD_SPOT';
// const ADD_IMG = 'spots/ADD_IMG';
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

// const addImg = (spotImage) => {
//     return {
//         type: ADD_IMG,
//         spotImage: spotImage
//     }
// }

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
        // console.log('getAllSpots ---> spots.Spots', spots.Spots)
        dispatch(loadAllSpots(spots.Spots));
        return spots;
    }
}


// export const getUserSpots = () => async (dispatch) => {
//     const response = await csrfFetch('api/spots/current');

//     if (response.ok) {
//         const spots = await response.json();
//         // console.log('getUserSpots--> spots', spots)
//         dispatch(loadSpot(spots));
//         return spots;
//     }
// }

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

export const updateExistingSpot = (spotId, newSpotData) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSpotData)
    })

    console.log(response.ok)

    if (response.ok) {
        const updatedSpotData = await response.json();
        console.log('updatedSpotData', updatedSpotData)
        dispatch(updateSpot(updatedSpotData))
        return updatedSpotData;
    }
}

// export const addImageToSpot = (spotId, url, preview) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}/images`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(url, preview)
//     })

//     if (response.ok) {
//         const newImage = await response.json();
//         dispatch()
//     }
// }

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

// need to create initial state:
// const initialState = { allSpots: null, currSpot: null };
const initialState = { spots: {}, spotById: null };

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_SPOTS:
            let newSpots = {};
            // console.log('action.spots --->', action.spots)
            action.spots.forEach(spot => newSpots[spot.id] = spot);
            // console.log('newSpots -->', newSpots)
            newState = { ...state, spots: newSpots };
            // console.log('newState', newState)
            return newState;
        case ADD_SPOT:
        // ADD_SPOT will also do same behavior as LOAD_SPOT
        case UPDATE_SPOT:
        case LOAD_SPOT:
            newState = { ...state, spotById: action.spot };
            return newState;
        default:
            return state;
    }
}



export default spotsReducer;