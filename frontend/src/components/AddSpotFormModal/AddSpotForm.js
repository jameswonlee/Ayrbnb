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
    const [validationErrors, setValidationErrors] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        setValidationErrors([]);
        const errors = [];

        if (name.length >= 50) errors.push("Name must be less than 50 characters");
        if (lat < -90 || lat > 90) errors.push("Latitude must be between -90.0 and 90.0");
        if (lng < -180 || lng > 180) errors.push("Longitude must be between -180.0 and 180.0");

        // if (!)

        setValidationErrors(errors);

        if (validationErrors.length === 0) {
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
                alert('Spot successfully created!')
                history.push(`/spots/${spot.id}`);
            }
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler} className="create-spot-form">
                <h1>Create a Spot</h1>
                {validationErrors.length > 0 &&
                    validationErrors.map(error =>
                        <li key={error}>{error}</li>
                    )}
                <input
                    type="text"
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                    placeholder="Address" />
                <input
                    type="text"
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    placeholder="City" />
                <input
                    type="text"
                    onChange={e => setState(e.target.value)}
                    value={state}
                    placeholder="State" />
                <input
                    type="text"
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
                    type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    placeholder="Name" />
                <input
                    type="text"
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
                    type="text"
                    onChange={e => setUrl(e.target.value)}
                    value={url}
                    placeholder="Image Url" />
                <button
                    disabled={!!validationErrors.length}
                    className="create-spot-button">
                    Start Hosting
                </button>
            </form>
        </div>
    )
}

export default AddSpotForm;