import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1100px',
  height: '460px',
};

const center = {
  lat: 34.07598,
  lng: -118.39019,
};

const Maps = ({ apiKey, spot }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  // const center = {
  //   lat: spot.lat,
  //   lng: spot.lng
  // }

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      )}
    </>
  );
};

export default React.memo(Maps);