import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";
import { useParams } from 'react-router-dom';
import DeleteReviewModal from "./DeleteReviewModal";


function ReviewsForSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    // console.log('sessionUser', sessionUser)
    const reviewsData = useSelector(state => state.reviews.reviews, (left, right) => {

        if (JSON.stringify(left) != JSON.stringify(right)) {
            console.log("States are different", { left, right })
            return false
        } else {
            console.log("States are the same", { left, right })

            return true;
        }
    });
    const reviews = Object.values(reviewsData);

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);


    return (
        <div className="reviews-outer-container">
            {console.log({ reviewsData })}
            <div className="reviews">{Object.values(reviewsData).map(review => (
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