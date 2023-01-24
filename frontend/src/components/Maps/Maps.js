import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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

  // console.log('heellooooooo')
  console.log('center', center)
  console.log('isLoaded', isLoaded)

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          position={center}
        />
      )}
    </>
  );
};



export default React.memo(Maps);