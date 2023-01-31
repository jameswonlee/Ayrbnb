import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { updateExistingSpot } from '../../store/spots';
import './UpdateSpotForm.css';


function UpdateSpotForm({ setShowModal }) {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots.spots[spotId])

    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [country, setCountry] = useState(spot.country);
    const [lat, setLat] = useState(spot.lat);
    const [lng, setLng] = useState(spot.lng);
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [price, setPrice] = useState(spot.price);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const errors = [];

        if (!address.length) errors.push("Address is required");
        if (!city.length) errors.push("City is required");
        if (!state.length) errors.push("State is required");
        if (!country.length) errors.push("Country is required");
        if (!lat || lat < -90 || lat > 90) errors.push("Latitude must be between -90.0 and 90.0");
        if (!lng || lng < -180 || lng > 180) errors.push("Longitude must be between -180.0 and 180.0");
        if (!name.length) errors.push("Name is required");
        if (!description.length) errors.push("Description is required");
        if (!price) errors.push("Price is required");

        setValidationErrors(errors);

        if (!errors.length) {
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
                setShowModal(false)
            }
        }
    }


    return (
        <div className="update-spot-form-container">
            <form onSubmit={submitHandler} className="edit-form">
            <div className="update-spot-title">Update Spot Details</div>
            <div className="update-spot-errors">
                {validationErrors.length > 0 &&
                    validationErrors.map(error =>
                        <div className="update-spot-errors-text" key={error}>{error}</div>
                    )}
            </div>
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setAddress(e.target.value)
                    }}
                    value={address}
                    placeholder="Address" />
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setCity(e.target.value)
                    }}
                    value={city}
                    placeholder="City" />
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setState(e.target.value)
                    }}
                    value={state}
                    placeholder="State" />
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setCountry(e.target.value)
                    }}
                    value={country}
                    placeholder="Country" />
                <input
                    type="number"
                    onChange={e => {
                        setValidationErrors([]);
                        setLat(e.target.value)
                    }}
                    value={lat}
                    step="0.00001"
                    placeholder="Latitude"
                />
                <input
                    type="number"
                    onChange={e => {
                        setValidationErrors([]);
                        setLng(e.target.value)
                    }}
                    value={lng}
                    placeholder="Longitude"
                />
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setName(e.target.value)
                    }}
                    value={name}
                    placeholder="Spot Name" />
                <input
                    type="text"
                    onChange={e => {
                        setValidationErrors([]);
                        setDescription(e.target.value)
                    }}
                    value={description}
                    placeholder="Description" />
                <input
                    type="number"
                    onChange={e => {
                        setValidationErrors([]);
                        setPrice(e.target.value)
                    }}
                    value={price}
                    step="0.01"
                    placeholder="Price"
                />
                <button
                    disabled={!!validationErrors.length}
                    className="update-submit-button">
                    Submit
                </button>
            </form>
        </div>
    )
}



export default UpdateSpotForm;