import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "./MapDirection.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoicHJhbnRhMDciLCJhIjoiY2t1eWoxYmVlNzJwZDMxbno2YnRnbDJlciJ9.3VqwO0pl0edXtxrUbeMYBw";

const MapDirection = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [91.8045554, 22.3357173],
            zoom: 13,
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken,
            }),
            "top-left"
        );
        /* const marker = new mapboxgl.Marker({ color: "black" })
            .setLngLat([91.8045554, 22.3357173])
            .addTo(map); */
    }, []);
    return (
        <div className="">
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;
