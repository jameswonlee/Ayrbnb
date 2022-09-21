import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = "reviews/ADD_REVIEW"
const REMOVE_REVIEW = 'review/REMOVE_REVIEW';
// const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';


/* --------------- Action Creators --------------- */

const loadReviews = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews: reviews
    }
}

const addReview = (review) => {
    return {
        type: ADD_REVIEW,
        review: review
    }
}


const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        // Change key????
        reviewId: reviewId
    }
}

// const updateReview = (updatedReview) => {
//     return {
//         type: UPDATE_REVIEW,
//         review: updatedReview
//     }
// }


/* -------------- Thunk Action Creators -------------- */

export const getReviewsBySpotId = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
        // console.log('reviews', reviews)
        dispatch(loadReviews(reviews.Reviews));
        return reviews;
    }
}

export const createReviewForSpot = (review, stars, spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/${spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, stars })
    })

    if (response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview))
        return newReview;
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const message = await response.json();
        dispatch(removeReview(reviewId));
        return message;
    }
}



/* ------------------- Reducer --------------------- */

// need to create initial state:
const initialState = { reviews: {}, reviewById: null };

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS:
            console.log('reviews', action.reviews)
            newState = { ...state, reviews: action.reviews }
        default:
            return state;
    }
}



export default reviewsReducer;