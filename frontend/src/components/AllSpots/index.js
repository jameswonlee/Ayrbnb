import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotDetails from '../SpotDetails';


function DisplayAllSpots() {
    const dispatch = useDispatch();
    const allSpots = useSelector(state => Object.keys(state.spots)
        .map(id => state.spots[id]));
        // const allSpots = useSelector(state => console.log('state', state));
    // console.log('allSpots', allSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])


    return (
        <div>
        </div>

    //     <div className="outer">
    //         <h1>Spots List</h1>
    //         <ol>
    //             {allSpots.map(spot => (
    //                 <li key={spot.id}>
    //                     <SpotDetails spot={spot} />
    //                 </li>
    //             ))}
    //         </ol>
    //     </div>
    )
}



export default DisplayAllSpots;