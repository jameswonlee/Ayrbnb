import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots } from '../../store/spots';
import SpotCard from '../SpotCard';
import AddSpotFormModal from '../AddSpotFormModal/AddSpotFormModal';
import './AllSpots.css'


function DisplayAllSpots() {
    const dispatch = useDispatch();

    const allSpots = useSelector(state => Object.values(state.spots.spots));
    const sessionUser = useSelector(state => state.session.user);
    console.log('DisplayAllSpots --> allSpots', allSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])

    return (
        <div className="content-wrapper">
            <h1>Spots List</h1>
            <div className="all-spots">
                {sessionUser && <AddSpotFormModal />}
                <div className='spot-cards'>
                    {allSpots.map(spot => (
                        <SpotCard key={spot.id} spot={spot} />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default DisplayAllSpots;