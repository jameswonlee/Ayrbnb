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
    
    const girlNames = ["Jane", "Susan", "Jessica"];

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);


    return (
        <div className="reviews">{reviews.map((review, index) => (
            <div key={review.id} className="review-card">
                <div className="review-content">
                    <div className="review-padding">
                        <div className="user-name">
                            <img
                                width={40}
                                height={40}
                                src={`https://randomuser.me/api/portraits/${girlNames.includes(review.User.firstName) ? "women" : "men"}/${index + 1}.jpg`}
                                className="user-image">
                            </img>
                            <span className="review-user-name">{review.User.firstName}</span>
                        </div>
                        <div className="review">
                            {review.review}
                        </div>
                            {sessionUser?.id === review.User.id &&
                                <div className="delete-review-modal">
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