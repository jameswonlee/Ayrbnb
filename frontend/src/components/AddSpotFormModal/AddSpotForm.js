import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addImageToSpot, createSpot } from '../../store/spots';
import { useHistory } from 'react-router-dom';
import './AddSpotForm.css';


function AddSpotForm({ setShowModal }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

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

    const validImageTypes = ['jpg', 'jpeg', 'png', 'heic'];
    const imageUrl = url.split('.');
    const imageFileType = imageUrl[imageUrl.length - 1];

    const submitHandler = async (e) => {
        e.preventDefault();
        setValidationErrors([]);
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
        if (!(validImageTypes.includes(imageFileType))) errors.push("Image must be .jpg, .jpeg, .png, or .heic")

        setValidationErrors(errors);

        if (!errors.length) {
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
                setShowModal(false);
                alert('Spot successfully created!');
                history.push(`/spot/${spot.id}`);
            }
        }
    }

    return (
        <form onSubmit={submitHandler} className="create-spot-form">
            <h2 className="become-host-title">Ayrbnb your home</h2>
            <div className="create-spot-errors">
                {validationErrors.length > 0 &&
                    validationErrors.map(error =>
                        <div className="create-spot-errors-text" key={error}>{error}</div>
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
                placeholder="Spot name" />
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
                placeholder="Price per night" />
            <input
                type="text"
                onChange={e => {
                    setValidationErrors([]);
                    setUrl(e.target.value)
                }}
                value={url}
                placeholder="Image Url" />
            <button
                disabled={!!validationErrors.length}
                className="create-spot-button">
                Start Hosting
            </button>
        </form>
    )
}

export default AddSpotForm;