import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import DeleteReviewModal from "./DeleteReviewModal";


function ReviewsForSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const reduxState = useSelector(state => state)
    // console.log('reduxState', reduxState)
    const sessionUser = useSelector(state => state.session.user);
    const reviewsData = useSelector(state => state.reviews.reviews);
    // console.log('reviewsData', reviewsData)

    const reviews = Object.values(reviewsData);

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);


    return (
        <div className="reviews-outer-container">
            <div className="reviews">{reviews.map(review => (
                <div key={review.id} className="reviews">
                    <div className="user-name">
                        {review.User.firstName}
                        <div className="review">
                            {review.review}
                            {sessionUser?.id === review.User.id &&
                                <div className="delete-modal">
                                    <DeleteReviewModal review={review} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}



export default ReviewsForSpot;