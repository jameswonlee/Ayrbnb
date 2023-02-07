import { csrfFetch } from "./csrf";


/* ---------------- Action Types ----------------- */

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const ADD_REVIEW = "reviews/ADD_REVIEW"
const REMOVE_REVIEW = 'review/REMOVE_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';


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

const updateReview = (updatedReview) => {
    return {
        type: UPDATE_REVIEW,
        review: updatedReview
    }
}


/* -------------- Thunk Action Creators -------------- */

export const getReviewsBySpotId = (spotId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`);

    if (response.ok) {
        const reviews = await response.json();
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

export const editReview = (reviewId, review, stars) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review, stars })
    })

    if (response.ok) {
        const updatedReview = await response.json();
        dispatch(updateReview(updatedReview));
        return updatedReview;
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

const initialState = { reviews: {}, reviewById: null };

const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_REVIEWS: {
            let newReviews = {};
            action.reviews.forEach(review => newReviews[review.id] = review)
            newState = { ...state, reviews: newReviews };
            return newState;
        }
        case REMOVE_REVIEW:
            // This delete causes bugs in STATE:
            // delete newState.reviews[action.reviewId];

            // Alternative remove method:
            const { [action.reviewId]: deletedReview, ...rest } = state.reviews;
            newState = {
                ...state,
                reviews: rest
            }

            // Alternative remove method2:
            // let newReviews = {};
            // const reviewIdKeys = Object.keys(newState.reviews);
            // const filteredReviewIdKeys = reviewIdKeys.filter((reviewId) => {
            //     return reviewId != action.reviewId
            // });
            // filteredReviewIdKeys.forEach(reviewIdKey => {
            //     newReviews[reviewIdKey] = newState.reviews[reviewIdKey]
            // })
            // newState = { ...state, reviews: newReviews}

            return newState;
        case ADD_REVIEW:
            newState = { ...state }
            newState = {
                ...state,
                reviews: {
                    ...state.reviews, [action.review.id]: {
                        ...action.review,
                        User: action.user
                    }
                }
            }
            return newState;

        case UPDATE_REVIEW:
            newState = {
                ...state,
                reviews: {
                    ...state.reviews, [action.review.id]: {
                        ...action.review,
                    }
                }
            }
            return newState;

        default:
            return state;
    }
}



export default reviewsReducer;