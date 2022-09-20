import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';


function GetAllSpots() {
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
                    <SpotCard spot={spot} />
                </div>
            ))}
        </div>
    )

}



export default GetAllSpots;