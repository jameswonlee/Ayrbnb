import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotDetails from '../SpotDetails';


function DisplayAllSpots() {
    const dispatch = useDispatch();
    const allSpots = useSelector(state => Object.keys(state.spots)
        .map(id => state.spots[id]));
    // console.log('allSpots', allSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])


    return (
        <div className="outer">
            {allSpots.map(spot => (
                <div className="inner">
                    <SpotDetails spot={spot} />
                </div>
            ))}
        </div>
    )

}



export default DisplayAllSpots;