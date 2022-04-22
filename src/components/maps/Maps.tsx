import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
    width: '100%',
    height: '500px'
};

const center = {
    lat: 23.7861979,
    lng: 90.4026151
};

const Maps = () => {
    return (
        <>
            <div>
                <LoadScript
                    googleMapsApiKey="AIzaSyDJQ4yWraj-fLhxanSAF2ol0lq96yQiCRo"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </>
    );
};

export default Maps;