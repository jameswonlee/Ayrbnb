import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";




function ReviewsForSpot() {
    const dispatch = useDispatch();
    const reviews = useSelector(state => console.log(state));
    // console.log('reviews', reviews);

    useEffect(() => {
        dispatch(getReviewsBySpotId())
    })

    return (
        <div>TEST!!!</div>
    )
}



export default ReviewsForSpot;