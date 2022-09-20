import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';


function GetAllSpots() {
    const dispatch = useDispatch();
    const allSpots = useSelector(state => state.spots);

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])


    return (
        <div className="outer">
            {/* {allSpots.map(spot => (
                <div className="inner">
                    <SpotCard spot={spot} />
                </div>
            ))} */}
        </div>
    )

}



export default GetAllSpots;