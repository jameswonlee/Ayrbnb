import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSpot } from '../../store/spots';



function AddSpotForm() {
    const dispatch = useDispatch();

    const [address, setAddress] = useState("");
    const [price, setPrice] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();

        const newSpotDetails = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price,
        }

        dispatch(createSpot(newSpotDetails))
    }



    
    return (
        <form onSubmit={submitHandler}>
            <input 
            onChange={e => setAddress(e.target.value)}
            value={address}/>
            <input 
            type="number"
            onChange={e  => setPrice(e.target.value)}
            value={price}
            step="0.01"
            />
            <input 
            type="number"
            onChange={e => setLat(e.target.value)}
            value={lat}
            step="0.00001"
            />
        
        </form>
    )
}

export default AddSpotForm;