import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateExistingSpot } from '../../store/spots';


function UpdateSpotForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.spots[spotId])

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        setValidationErrors([]);

        const errors = [];

        if (name.length >= 50) errors.push("Name must be less than 50 characters");
        if (lat < -90 || lat > 90) errors.push("Latitude must be between -90.0 and 90.0");
        if (lng < -180 || lng > 180) errors.push("Longitude must be between -180.0 and 180.0");

        setValidationErrors(errors);

        if (validationErrors.length === 0) {
            const newSpotData = {
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
            const updatedSpot = await dispatch(updateExistingSpot(spot.id, newSpotData));
            if (updatedSpot) {
                alert("Spot successfully updated!");
                setShowModal(false)
                history.replace(`/spots/${updatedSpot.id}`);
            }
        }
    }


    return (
        <div className="form-container">
            <h1>Edit Spot Details</h1>
            <form onSubmit={submitHandler} className="edit-form">
                {validationErrors.length > 0 &&
                    validationErrors.map((error) =>
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
                    placeholder="Spot Name" />
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
                    placeholder="Price"
                />
                <button
                    disabled={!!validationErrors.length}
                    className="submit-button"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}



export default UpdateSpotForm;