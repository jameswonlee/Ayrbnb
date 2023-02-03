import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const Maps = ({ apiKey, spot, booking }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  let center;
  let containerStyle;
  let zoom;

  if (spot) {
    center = {
      lat: Number(spot?.lat),
      lng: Number(spot?.lng)
    };

    containerStyle = {
      width: '1100px',
      height: '460px',
    };

    zoom = 15
  }

  if (booking) {
    center = {
      lat: Number(booking.Spot?.lat),
      lng: Number(booking.Spot?.lng)
    };

    containerStyle = {
      width: '895px',
      // height: '82.5vh',
      // height: '654px'
      height: '100%'

    };

    zoom = 17
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
          zoom={zoom}
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