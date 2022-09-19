import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpotsThunk } from '../../store/spots';



function GetAllSpots() {
    const dispatch = useDispatch();
    const allSpots = useSelector(state => state.spots);

    useEffect(() => {
        dispatch(getAllSpotsThunk())
    }, [dispatch])


    return (
        <div className="undefined">

        </div>
    )

}



export default GetAllSpots;