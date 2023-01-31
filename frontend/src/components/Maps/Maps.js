import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const Maps = ({ apiKey, spot, booking }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  let center;
  if (spot) {
    center = {
      lat: Number(spot.lat),
      lng: Number(spot.lng)
    }
  }
  if (booking) {
    center = {
      lat: Number(booking.Spot.lat),
      lng: Number(booking.Spot.lng)
    }
  }
  
  const svgMarker = {
    fillColor: "red",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
  }
  
  const containerStyle = {
    width: '1100px',
    height: '460px',
  };

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          className="google-maps"
        >
          <Marker
            icon={svgMarker}
            position={center}
          />
        </GoogleMap>
      )}
    </>
  );
};



export default React.memo(Maps);