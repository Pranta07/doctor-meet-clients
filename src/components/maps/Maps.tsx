import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
    width: '100vw',
    height: '500px'
};

const center = {
    lat: 23.7861979,
    lng: 90.4026151
};

const Maps = () => {
    return (
        <>
            <div className="text-center mb-5">
                <h4>Also Fell Free To Visit Our Head Office.</h4>
                <h6>Mothijhil Dhaka,Bangladesh.</h6>
            </div>
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