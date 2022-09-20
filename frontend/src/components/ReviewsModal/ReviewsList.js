import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsBySpotId } from "../../store/reviews";




function ReviewsList() {
    const dispatch = useDispatch();
    const reviews = useSelector(state => state.reviews);

    useEffect(() => {
        dispatch(getReviewsBySpotId())
    })

    return (
        <div></div>
    )
}



export default ReviewsList;