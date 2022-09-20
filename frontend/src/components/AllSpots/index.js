import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotDetails from '../SpotDetails';


function DisplayAllSpots() {
    const dispatch = useDispatch();

    // const allSpots = useSelector(state => Object.keys(state.spots)
    //     .map(id => state.spots[id]));
    const spots = useSelector(state => console.log('state', state))
    const allSpots = useSelector(state => Object.values(state.spots));

    console.log('DisplayAllSpots --> allSpots', allSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])


    return (
        <div className="outer">
            <h1>Spots List</h1>
            {/* <div>
                {allSpots.map(spot => (
                    <div key={spot.id}>
                        {console.log('JSX spot -->', spot)}
                        <SpotDetails spot={spot}/>
                    </div>
                ))}
            </div> */}
        </div>
    )
}



export default DisplayAllSpots;