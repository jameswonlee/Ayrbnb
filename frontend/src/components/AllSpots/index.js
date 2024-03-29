import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import './AllSpots.css'


function DisplayAllSpots() {
    const dispatch = useDispatch();

    const allSpots = useSelector(state => Object.values(state.spots.spots));

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])

    return (
        <div className="center">
            {/* <main> */}
                <div className="content-wrapper">
                    <div className="all-spots">
                        <div className='spot-cards'>
                            {allSpots.map(spot => (
                                <SpotCard key={spot.id} spot={spot} />
                            ))}
                        </div>
                    </div>
                </div>
            {/* </main > */}
        </div >
    )
}



export default DisplayAllSpots;