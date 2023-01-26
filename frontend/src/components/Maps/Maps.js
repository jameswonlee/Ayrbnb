import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '1100px',
  height: '460px',
};

const Maps = ({ apiKey, spot }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const center = {
    lat: Number(spot.lat),
    lng: Number(spot.lng)
  }

  const svgMarker = {
    fillColor: "red",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
  }


  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
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