import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_ALL = 'reviews/LOAD_ALL';
const ADD_ONE = 'reviews/ADD'


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





/* ------------------- Reducer --------------------- */

// need to create initial state:




export default spotsReducer;