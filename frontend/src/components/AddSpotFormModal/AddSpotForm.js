import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addImageToSpot, createSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';


function AddSpotForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [url, setUrl] = useState("");

    const submitHandler = async (e) => {
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
        
        const spot = await dispatch(createSpot(newSpotDetails));
        
        if (spot) {
            await dispatch(addImageToSpot(spot.id, url, true));
            history.push(`/spots/${spot.id}`);
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                onChange={e => setAddress(e.target.value)}
                value={address}
                placeholder="Address" />
            <input
                onChange={e => setCity(e.target.value)}
                value={city}
                placeholder="City" />
            <input
                onChange={e => setState(e.target.value)}
                value={state}
                placeholder="State" />
            <input
                onChange={e => setCountry(e.target.value)}
                value={country}
                placeholder="Country" />
            <input
                type="number"
                onChange={e => setLat(e.target.value)}
                value={lat}
                step="0.00001"
                placeholder="Latitude"
            />
            <input
                type="number"
                onChange={e => setLng(e.target.value)}
                value={lng}
                placeholder="Longitude"
            />
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="Name" />
            <input
                onChange={e => setDescription(e.target.value)}
                value={description}
                placeholder="Description" />
            <input
                type="number"
                onChange={e => setPrice(e.target.value)}
                value={price}
                step="0.01"
                placeholder="Price" />
            <input
                onChange={e => setUrl(e.target.value)}
                value={url}
                placeholder="Url" />
            <button>Start Hosting</button>
        </form>
    )
}

export default AddSpotForm;