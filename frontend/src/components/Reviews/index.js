import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import DeleteReviewModal from "./DeleteReviewModal";
import './Reviews.css';


function ReviewsForSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const reviewsData = useSelector(state => state.reviews.reviews);

    const reviews = Object.values(reviewsData);

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);


    return (
        <div className="reviews">{reviews.map(review => (
            <div key={review.id} className="review-card">
                <div className="review-content">
                    <div className="user-name">
                        {review.User.firstName}
                    </div>
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
    )
}



export default ReviewsForSpot;