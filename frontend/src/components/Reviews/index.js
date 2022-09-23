import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";
import { useParams } from 'react-router-dom';


function ReviewsForSpot() {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const reviews = useSelector(state => state.reviews.reviews);
    console.log('reviews', reviews);

    useEffect(() => {
        dispatch(getReviewsBySpotId(spotId))
    }, []);

    return (
        <div></div>
    )
}



export default ReviewsForSpot;