import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';


function DisplayAllSpots() {
    const dispatch = useDispatch();

    // const allSpots = useSelector(state => Object.keys(state.spots)
    //     .map(id => state.spots[id]));

    const allSpots = useSelector(state => Object.values(state.spots.spots));
    // const spots = useSelector(state => console.log('state', state))

    console.log('DisplayAllSpots --> allSpots', allSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])


    return (
        <div className="outer">
            <h1>Spots List</h1>
            <div className='spot-card'>
                {allSpots.map(spot => (
                    <SpotCard key={spot.id} spot={spot} />
                ))}
            </div>
        </div>
    )
}



export default DisplayAllSpots;