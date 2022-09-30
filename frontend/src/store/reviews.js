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

const addReview = (review, sessionUser) => {
    return {
        type: ADD_REVIEW,
        review: review,
        user: sessionUser
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
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
        console.log('getReviewBySpotId ----- >reviews', reviews)
        dispatch(loadReviews(reviews.Reviews));
        return reviews;
    }
}

export const createReviewForSpot = (review, stars, spotId, sessionUser) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, stars })
    })

    if (response.ok) {
        const newReview = await response.json();
        dispatch(addReview(newReview, sessionUser))
        return newReview;
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const message = await response.json();
        // console.log('message', message)
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
            let newReviews = {};
            action.reviews.forEach(review => newReviews[review.id] = review)
            // console.log('reviews', action.reviews)
            newState = { ...state, reviews: newReviews };
            // console.log('newState', newState)
            return newState;
        case REMOVE_REVIEW:
            newState = { ...state };
            // console.log('state', state)
            delete newState.reviews[action.reviewId];
            // console.log('newState2', newState)
            // console.log('newState', newState)
            return newState;
        case ADD_REVIEW:
            newState = { ...state }
            // console.log('newState3', newState)
            newState = {
                ...state,
                reviews: {
                    ...state.reviews, [action.review.id]: {
                        ...action.review,
                        User: action.user
                    }
                }
            }
            // console.log('newState4', newState)
            // console.log('ADD REVIEW - newState', newState)
            return newState;
        default:
            return state;
    }
}



export default reviewsReducer;