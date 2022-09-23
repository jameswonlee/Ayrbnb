import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";
import { useParams } from 'react-router-dom';


function ReviewsForSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const reviewsData = useSelector(state => state.reviews.reviews);
    // console.log('reviews', reviews);

    const reviews = Object.values(reviewsData);
    // console.log('review', review)

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);


    return (
        <div className="reviews-container">
            <div>{reviews.map(review => (
                <div className="reviews">
                    <div className="user-name">
                        {review.User.firstName}
                        <div key={review.id} className="review">
                            {review.review}
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}



export default ReviewsForSpot;