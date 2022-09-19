import { csrfFetch } from "./csrf";


//Action Types
const GET_ALL_SPOTS = 'spots/READ';



// Action Creators
const getAllSpots = (allSpots) => {
    return {
        type: GET_ALL_SPOTS,
        allSpots
    }
}


// Thunk Action Creators
export const getAllSpotsThunk = () => async dispatch => {
    const response = await fetch('/api/spots');

    if (response.ok) {
        const allSpots = await response.json();
        dispatch(getAllSpots(allSpots));
        return allSpots;
    }
}



// Reducer
// need to create initial state:
const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
        case GET_ALL_SPOTS:
            action.allSpots.forEach(spot => {
                newState[spot.id] = spot;
            })
        default:
            return state;
    }
}

